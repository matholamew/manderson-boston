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
