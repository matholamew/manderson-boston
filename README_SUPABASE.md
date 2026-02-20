# Local Supabase Setup

Since we are using real data from the database, you'll need the local Supabase instance running. I have initialized the Supabase configuration and moved the database schemas into the correct spot.

1. **Start Docker**
   Make sure Docker Desktop (or OrbStack/Colima) is open and running on your Mac.

2. **Start Supabase**
   Run the following command from the root of the repository:
   ```bash
   npx supabase start
   ```
   This will download the Postgres image and start everything. It will also automatically apply the tables in `supabase/migrations/` (which now contains your schema and seed data).

3. **Link Environment Variables**
   Once `supabase start` finishes, it will print some URLs and Keys. 
   Copy the **API URL** and **anon key** into your `web/.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=http://...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```

4. **View your Data**
   You can go to the Studio URL it prints (usually `http://127.0.0.1:54323`) to see the database GUI and verify your `running_stats` table.

5. **Test the Site**
   Run `npm run dev` in the `web/` directory and check `localhost:3000` again!
