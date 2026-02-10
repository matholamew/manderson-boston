export interface StravaTokenResponse {
    token_type: string;
    expires_at: number;
    expires_in: number;
    refresh_token: string;
    access_token: string;
    athlete: {
        id: number;
    };
}

export async function exchangeToken(clientId: string, clientSecret: string, code: string): Promise<StravaTokenResponse> {
    const response = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            grant_type: 'authorization_code',
        }),
    });

    if (!response.ok) {
        throw new Error(`Strava token exchange failed: ${response.statusText}`);
    }

    return response.json();
}

export async function refreshToken(clientId: string, clientSecret: string, refreshToken: string): Promise<StravaTokenResponse> {
    const response = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
        }),
    });

    if (!response.ok) {
        throw new Error(`Strava token refresh failed: ${response.statusText}`);
    }

    return response.json();
}

export async function getActivity(accessToken: string, activityId: number): Promise<any> {
    const response = await fetch(`https://www.strava.com/api/v3/activities/${activityId}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch activity ${activityId}: ${response.statusText}`);
    }

    return response.json();
}
