import { createClient } from '@supabase/supabase-js';
import { exchangeToken } from './lib/strava';
import { processEvent } from './lib/ingestion';

export interface Env {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    STRAVA_VERIFY_TOKEN: string;
    STRAVA_CLIENT_ID: string;
    STRAVA_CLIENT_SECRET: string;
    ASSETS_BUCKET: R2Bucket;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);

        // OAuth Callback: Exchange code for tokens
        if (request.method === 'GET' && url.pathname === '/auth/exchange') {
            const code = url.searchParams.get('code');
            const error = url.searchParams.get('error');

            if (error) {
                return new Response(`OAuth Error: ${error}`, { status: 400 });
            }

            if (!code) {
                return new Response('Missing authorization code', { status: 400 });
            }

            try {
                const tokenData = await exchangeToken(env.STRAVA_CLIENT_ID, env.STRAVA_CLIENT_SECRET, code);

                // Initialize Supabase
                const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

                // Store tokens
                const { error: dbError } = await supabase
                    .from('strava_tokens')
                    .upsert({
                        athlete_id: tokenData.athlete.id,
                        refresh_token: tokenData.refresh_token,
                        access_token: tokenData.access_token,
                        expires_at: tokenData.expires_at,
                        updated_at: new Date().toISOString()
                    }, { onConflict: 'athlete_id' });

                if (dbError) {
                    console.error('Supabase error:', dbError);
                    return new Response('Database error saving tokens', { status: 500 });
                }

                return new Response('Strava Connected Successfully!', { status: 200 });

            } catch (e) {
                console.error('OAuth exchange error:', e);
                return new Response(`Error exchanging token: ${e instanceof Error ? e.message : 'Unknown error'}`, { status: 500 });
            }
        }

        // Strava Webhook Verification (GET request)
        if (request.method === 'GET' && url.searchParams.has('hub.mode')) {
            const mode = url.searchParams.get('hub.mode');
            const token = url.searchParams.get('hub.verify_token');
            const challenge = url.searchParams.get('hub.challenge');

            if (mode === 'subscribe' && token === env.STRAVA_VERIFY_TOKEN) {
                console.log('WEBHOOK_VERIFIED');
                return new Response(JSON.stringify({ "hub.challenge": challenge }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            } else {
                return new Response('Forbidden', { status: 403 });
            }
        }

        // Strava Event Handling (POST request)
        if (request.method === 'POST') {
            try {
                const payload = await request.json();
                console.log('Received webhook event:', payload);

                // Process event asynchronously
                ctx.waitUntil(processEvent(env, payload));

                return new Response('EVENT_RECEIVED', { status: 200 });
            } catch (e) {
                console.error('Error processing webhook:', e);
                return new Response('Bad Request', { status: 400 });
            }
        }

        // Asset Proxy (GET request)
        if (request.method === 'GET' && url.pathname.startsWith('/assets/')) {
            const key = url.pathname.slice(8); // Remove '/assets/'
            const object = await env.ASSETS_BUCKET.get(key);

            if (!object) {
                return new Response('Not Found', { status: 404 });
            }

            const headers = new Headers();
            object.writeHttpMetadata(headers);
            headers.set('etag', object.httpEtag);

            return new Response(object.body, { headers });
        }

        return new Response('Method Not Allowed', { status: 405 });
    },
};
