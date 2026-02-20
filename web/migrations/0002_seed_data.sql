-- Seed Data for Projects
INSERT INTO projects (title, description, tech_stack, live_url, github_url, is_weird)
VALUES
(
    'InAPinch.run',
    'A "weird" creativity showcase demonstrating end-to-end product delivery. Generates random running routes based on constraints.',
    ARRAY['Next.js', 'Google Maps SDK', 'Supabase', 'Vercel'],
    'https://inapinch.run',
    'https://github.com/manderson/inapinch',
    true
),
(
    'High-Availability DB Cluster',
    'Designed and implemented a multi-region PostgreSQL cluster on AWS with automated failover and < 500ms latency replication.',
    ARRAY['PostgreSQL', 'AWS', 'Terraform', 'Ansible'],
    '#',
    '#',
    false
),
(
    'Query Performance Tuning',
    'Optimized critical reporting queries for a FinTech client, reducing average execution time from 15s to 200ms using advanced indexing strategies.',
    ARRAY['SQL', 'Database Tuning', 'Performance Analysis'],
    '#',
    '#',
    false
),
(
    'Infrastructure as Code',
    'Migrated manual server provisioning to a fully automated Terraform & Ansible pipeline, reducing deployment errors by 100%.',
    ARRAY['Terraform', 'Ansible', 'CI/CD', 'DevOps'],
    '#',
    '#',
    false
);

-- Seed Data for Running Stats (Sample Data for Development)
INSERT INTO running_stats (strava_id, activity_name, distance_meters, moving_time, average_heartrate, start_date, poly_line)
VALUES
(
    1234567890,
    'Morning Charles River Loop',
    8046.72, -- 5 miles
    2400,    -- 40 mins (8:00 pace)
    155,
    NOW() - INTERVAL '1 day',
    'i~raG|nzpLi@q@[e@O_@Ea@Ac@Ca@Ie@Ka@Me@Og@Qe@Se@Ue@We@Ye@[e@]e@_@e@a@e@c@e@e@e@g@e@i@e@k@e@m@e@o@e@q@e@s@e@u@e@w@e@y@e@{@e@}A??'
),
(
    1234567891,
    'Tempo Run',
    10000.00,
    2700,
    168,
    NOW() - INTERVAL '3 days',
    'i~raG|nzpLi@q@[e@O_@Ea@Ac@Ca@Ie@Ka@Me@Og@Qe@Se@Ue@We@Ye@[e@]e@_@e@a@e@c@e@e@e@g@e@i@e@k@e@m@e@o@e@q@e@s@e@u@e@w@e@y@e@{@e@}A??'
);
