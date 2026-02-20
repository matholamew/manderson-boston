# Supabase Setup Instructions

1. **Start Docker**: Ensure Docker Desktop (or your preferred Docker runtime) is running. Supabase requires Docker to run its local database and services.
2. **Initialize/Start Supabase**:
   From the `/web` directory (where the `supabase` folder is located), run:
   ```bash
   npx supabase start
   ```
   This will download the necessary Docker images and start your local Postgres instance along with the Studio UI.
3. **Apply Migrations and Seed Data**:
   Once running, Supabase should automatically apply the schemas located in `supabase/migrations/` (if it is set up to do so, though these are currently in `web/migrations/`).
   Since your current migrations are in `web/migrations`, you should run them against the local DB URL provided by `supabase start`. First get the connection string and apply them (e.g., using `psql`).

   Alternatively, if you want to use Supabase CLI properly, move the `web/migrations` folder to `supabase/migrations`:
   ```bash
   mkdir -p supabase/migrations
   mv web/migrations/* supabase/migrations/
   npx supabase db reset
   ```
4. **Environment Variables**:
   After `supabase start` succeeds, it will print your local `API URL` and `anon key`. Copy these into your `web/.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
   ```
5. **View Local Studio**:
   You can view your database and data visually by navigating to `http://127.0.0.1:54323` (the default Supabase Studio URL) in your browser.
