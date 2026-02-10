export interface Project {
    id: string;
    title: string;
    description: string;
    tech_stack: string[];
    live_url: string;
    github_url: string;
    is_weird: boolean;
    created_at: string;
}

export interface RunningStat {
    id: string;
    strava_id: number;
    activity_name: string;
    distance_meters: number;
    moving_time: number;
    start_date: string;
    poly_line: string;
    updated_at: string;
}
