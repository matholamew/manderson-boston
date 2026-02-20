# Serverless Data Pipeline Setup

To make your Strava integration completely autonomous (so you don't have to keep your computer or Docker running), we'll deploy the `/ingestor` to Cloudflare and connect it to a free live Supabase project.

## Step 1: Create a Remote Supabase Database
1. Go to [supabase.com](https://supabase.com) and create a free project.
2. Once created, go to the **SQL Editor** in your Supabase dashboard and paste in the schema from:
   `web/migrations/0001_initial_schema.sql` (You can skip the `projects` table if you want, just run the `running_stats` and `strava_tokens` tables).
3. Copy your project's **URL** and **anon key** from the Project Settings -> API.
4. Update the `.env.local` in your root `web` project so your frontend reads from this live database instead of local.

## Step 2: Deploy the Cloudflare Worker
The code to catch Strava's webhooks is already written in `ingestor/src/index.ts`. We just need to put it on the edge.

1. Navigate to the ingestor directory:
   ```bash
   cd ingestor
   ```
2. Install the dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Deploy the worker to your Cloudflare account using Wrangler:
   ```bash
   npx wrangler deploy
   ```
   *(This will ask you to log into your Cloudflare account if it's your first time).*

## Step 3: Configure Worker Environment Variables
Once the worker is deployed (Wrangler will give you a *.workers.dev URL), it needs exactly 5 secrets to function. You can add these in the Cloudflare Dashboard under your worker's **Settings > Variables**, or via the CLI:

```bash
npx wrangler secret put SUPABASE_URL          # Your remote Supabase URL
npx wrangler secret put SUPABASE_ANON_KEY     # Your remote Supabase Anon Key
npx wrangler secret put STRAVA_CLIENT_ID      # From your Strava API settings
npx wrangler secret put STRAVA_CLIENT_SECRET  # From your Strava API settings
npx wrangler secret put STRAVA_VERIFY_TOKEN   # A random string you make up (e.g. "manderson-strava-webhook")
```

## Step 4: Register the Webhook with Strava
Finally, you must tell Strava to send events to your new Cloudflare Worker URL.
Since Strava's webhook registration must be done via API (they have no UI for it), you can run this command from your terminal:

```bash
curl -X POST https://www.strava.com/api/v3/push_subscriptions \
      -F client_id=[YOUR_STRAVA_CLIENT_ID] \
      -F client_secret=[YOUR_STRAVA_CLIENT_SECRET] \
      -F callback_url=[YOUR_WORKER_URL] \
      -F verify_token=[YOUR_STRAVA_VERIFY_TOKEN]
```
*(Replace the bracketed items with your actual values).*

From then on, every time you finish a run on Strava, they will instantly ping your Cloudflare Worker, which will write the data to Supabase, and your Next.js frontend will serve it globally!
