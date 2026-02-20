'use client';

import React from 'react';
import { RunningStat } from '@/lib/types';
import { PolylineMap } from './PolylineMap';

interface PerformanceDashboardProps {
    recentRuns: RunningStat[];
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ recentRuns }) => {
    if (!recentRuns || recentRuns.length === 0) return null;

    const lastRun = recentRuns[0];

    // Calculate some aggregates
    const totalMeters = recentRuns.reduce((sum, run) => sum + run.distance_meters, 0);
    const totalMiles = (totalMeters * 0.000621371).toFixed(1);

    // Format distance
    const lastRunMiles = (lastRun.distance_meters * 0.000621371).toFixed(2);

    // Format pace (min/mi)
    const paceSecondsPerMile = lastRun.moving_time / (lastRun.distance_meters * 0.000621371);
    const paceMinutes = Math.floor(paceSecondsPerMile / 60);
    const paceSeconds = Math.round(paceSecondsPerMile % 60).toString().padStart(2, '0');
    const pace = `${paceMinutes}:${paceSeconds}/mi`;

    // Format date
    const dateObj = new Date(lastRun.start_date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // Generate a mock Heatmap array (for demonstration purposes, a real one would group by date)
    // We'll just generate 3 months of blocks for a github style contribution graph
    const today = new Date();
    const daysInLast3Months = 90;
    const activityMap = new Map(recentRuns.map(run => {
        const d = new Date(run.start_date);
        return [`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`, run.distance_meters];
    }));

    const heatmapBlocks = Array.from({ length: daysInLast3Months }).map((_, i) => {
        const d = new Date(today);
        d.setDate(d.getDate() - (daysInLast3Months - 1 - i));
        const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        const distance = activityMap.get(key);

        let intensityClass = 'bg-gray-100'; // base class (no activity)
        if (distance) {
            const miles = distance * 0.000621371;
            if (miles > 10) intensityClass = 'bg-accent';
            else if (miles > 5) intensityClass = 'bg-accent/80';
            else if (miles > 2) intensityClass = 'bg-accent/60';
            else intensityClass = 'bg-accent/40';
        }

        return (
            <div
                key={i}
                className={`w-3 h-3 md:w-4 md:h-4 ${intensityClass} hover:ring-2 hover:ring-offset-1 hover:ring-primary transition-all cursor-crosshair`}
                title={distance ? `${(distance * 0.000621371).toFixed(1)} miles on ${d.toLocaleDateString()}` : '0 miles'}
            />
        );
    });

    return (
        <div className="bg-white border-4 md:border-8 border-primary shadow-antigravity p-6 md:p-12 font-sans text-primary">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 border-b-4 border-gray-100 pb-8 gap-6">
                <div>
                    <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-accent mb-2">TELEMETRY_DATALINK</h3>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
                        DATA <br className="hidden md:block" /> PIPELINE.
                    </h2>
                </div>
                <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">AGGREGATE_MILEAGE</div>
                    <div className="text-4xl md:text-6xl font-black tabular-nums">{totalMiles}</div>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-accent mt-1">MILES FOR SCHOLARSHIPS</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Heatmap & Context */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                    <div className="mb-12">
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-4 border-l-4 border-accent pl-2">CONTRIBUTION_MAP (LAST 90 DAYS)</div>
                        <div className="flex flex-wrap gap-1 md:gap-2 max-w-[90%] md:max-w-none">
                            {heatmapBlocks}
                        </div>
                        <div className="mt-4 flex items-center justify-end gap-2 text-[8px] font-mono uppercase text-gray-400">
                            Less <div className="w-2 h-2 bg-gray-100"></div><div className="w-2 h-2 bg-accent/40"></div><div className="w-2 h-2 bg-accent/60"></div><div className="w-2 h-2 bg-accent"></div> More
                        </div>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-primary p-6">
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">ARCHITECTURE_FLEX</div>
                        <p className="font-serif text-sm md:text-base leading-relaxed text-gray-700">
                            Live stats synced from the Strava API via Cloudflare Worker webhook ingestion,
                            persisted to a Supabase Postgres cluster, and served fresh on the Edge via Next.js.
                        </p>
                    </div>
                </div>

                {/* Right Column: Last Run Card */}
                <div className="lg:col-span-5 bg-background border-4 border-primary overflow-hidden group">
                    <div className="relative h-48 md:h-64 bg-gray-100 p-4 shrink-0 overflow-hidden">
                        <div className="absolute top-4 left-4 z-10 text-[9px] font-mono font-black uppercase tracking-widest text-primary/50 bg-white/80 px-2 py-1">LATEST_ROUTING</div>
                        {lastRun.poly_line ? (
                            <PolylineMap polylineData={lastRun.poly_line} strokeColor="#C8102E" strokeWidth={3} className="opacity-80 group-hover:opacity-100 transition-opacity duration-1000 scale-[0.8]" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs font-mono text-gray-400">NO VISUAL DATA</div>
                        )}
                    </div>
                    <div className="p-6 md:p-8 border-t-4 border-primary">
                        <div className="text-[10px] font-mono text-gray-500 mb-2">{formattedDate}</div>
                        <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tight mb-8 truncate" title={lastRun.activity_name}>{lastRun.activity_name}</h4>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="border-l-2 border-accent pl-3">
                                <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">DISTANCE</div>
                                <div className="text-xl md:text-2xl font-bold font-mono tracking-tighter">{lastRunMiles} <span className="text-xs text-gray-400 tracking-normal font-sans">mi</span></div>
                            </div>
                            <div className="border-l-2 border-accent pl-3">
                                <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">PACE</div>
                                <div className="text-xl md:text-2xl font-bold font-mono tracking-tighter">{pace}</div>
                            </div>
                            <div className="border-l-2 border-accent pl-3 mt-4">
                                <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">TIME</div>
                                <div className="text-xl md:text-2xl font-bold font-mono tracking-tighter">
                                    {Math.floor(lastRun.moving_time / 60)}<span className="text-xs text-gray-400 tracking-normal font-sans">m</span> {lastRun.moving_time % 60}<span className="text-xs text-gray-400 tracking-normal font-sans">s</span>
                                </div>
                            </div>
                            <div className="border-l-2 border-accent pl-3 mt-4">
                                <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">AVG HR</div>
                                <div className="text-xl md:text-2xl font-bold font-mono tracking-tighter">
                                    {lastRun.average_heartrate || '--'} <span className="text-xs text-gray-400 tracking-normal font-sans">bpm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
