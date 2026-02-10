import { createClient } from '@supabase/supabase-js';

export interface Env {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    STRAVA_VERIFY_TOKEN: string;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);

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

                // TODO: Process event and write to Supabase

                return new Response('EVENT_RECEIVED', { status: 200 });
            } catch (e) {
                console.error('Error processing webhook:', e);
                return new Response('Bad Request', { status: 400 });
            }
        }

        return new Response('Method Not Allowed', { status: 405 });
    },
};
