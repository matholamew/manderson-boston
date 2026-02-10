-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table for Running Stats (Syncing from Strava)
CREATE TABLE IF NOT EXISTS running_stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    strava_id BIGINT UNIQUE,
    activity_name TEXT,
    distance_meters FLOAT,
    moving_time INTEGER,
    start_date TIMESTAMP WITH TIME ZONE,
    poly_line TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for Project Showcase
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    description TEXT,
    tech_stack TEXT[],
    live_url TEXT,
    github_url TEXT,
    is_weird BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies (Optional but recommended - currently public read for demonstration)
ALTER TABLE running_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public read access" ON running_stats FOR SELECT USING (true);
CREATE POLICY "Public read access" ON projects FOR SELECT USING (true);
