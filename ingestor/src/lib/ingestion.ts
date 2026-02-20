import { createClient } from '@supabase/supabase-js';
import { getActivity, refreshToken } from './strava';
import { Env } from '../index';

export async function processEvent(env: Env, event: any) {
    if (event.object_type !== 'activity' || event.aspect_type !== 'create') {
        console.log(`Ignoring event type: ${event.object_type} / ${event.aspect_type}`);
        return;
    }

    const athleteId = event.owner_id;
    const activityId = event.object_id;

    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

    // 1. Get tokens for athlete
    const { data: tokenData, error: tokenError } = await supabase
        .from('strava_tokens')
        .select('*')
        .eq('athlete_id', athleteId)
        .single();

    if (tokenError || !tokenData) {
        console.error(`No tokens found for athlete ${athleteId}`);
        return;
    }

    let accessToken = tokenData.access_token;

    // 2. Check expiry and refresh if needed
    // Buffer of 5 minutes
    if (Date.now() / 1000 > tokenData.expires_at - 300) {
        console.log('Token expired, refreshing...');
        try {
            const newTokens = await refreshToken(env.STRAVA_CLIENT_ID, env.STRAVA_CLIENT_SECRET, tokenData.refresh_token);

            // Update DB
            await supabase.from('strava_tokens').update({
                access_token: newTokens.access_token,
                refresh_token: newTokens.refresh_token,
                expires_at: newTokens.expires_at,
                updated_at: new Date().toISOString()
            }).eq('athlete_id', athleteId);

            accessToken = newTokens.access_token;
        } catch (e) {
            console.error('Failed to refresh token:', e);
            return;
        }
    }

    // 3. Fetch Activity Details
    try {
        const activity = await getActivity(accessToken, activityId);

        // 4. Write to Supabase properties
        const { error: insertError } = await supabase.from('running_stats').upsert({
            strava_id: activity.id,
            activity_name: activity.name,
            distance_meters: activity.distance,
            moving_time: activity.moving_time,
            average_heartrate: activity.average_heartrate ? Math.round(activity.average_heartrate) : null,
            start_date: activity.start_date,
            poly_line: activity.map?.summary_polyline,
            updated_at: new Date().toISOString()
        }, { onConflict: 'strava_id' });

        if (insertError) {
            console.error('Failed to insert activity:', insertError);
        } else {
            console.log(`Successfully ingested activity ${activityId}: ${activity.name}`);
        }

    } catch (e) {
        console.error('Error fetching/writing activity:', e);
    }
}
