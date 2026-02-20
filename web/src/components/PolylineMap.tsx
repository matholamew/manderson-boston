'use client';

import React, { useMemo } from 'react';
import { decodePolyline } from '@/lib/polyline';

interface PolylineMapProps {
    polylineData: string;
    strokeColor?: string;
    strokeWidth?: number;
    className?: string;
}

export const PolylineMap: React.FC<PolylineMapProps> = ({
    polylineData,
    strokeColor = "currentColor",
    strokeWidth = 2,
    className = ""
}) => {
    const { pathData, viewBox } = useMemo(() => {
        if (!polylineData) {
            return { pathData: "", viewBox: "0 0 100 100" };
        }

        let coords;
        try {
            coords = decodePolyline(polylineData);
        } catch (e) {
            console.error("Failed to decode polyline", e);
            return { pathData: "", viewBox: "0 0 100 100" };
        }

        if (!coords || coords.length === 0) {
            return { pathData: "", viewBox: "0 0 100 100" };
        }

        // Coordinates are [lat, lng]. We need [x, y] for SVG.
        // Longitude is X (left to right), Latitude is Y (bottom to top, so we invert it for SVG which is top to bottom)

        // Find bounds to scale it
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

        const svgCoords = coords.map(([lat, lng]) => {
            const x = lng;
            const y = -lat; // Invert latitude for SVG Y-axis

            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;

            return [x, y];
        });

        // Add some padding to bounds
        const padding = Math.max(maxX - minX, maxY - minY) * 0.1 || 0.01;
        minX -= padding;
        maxX += padding;
        minY -= padding;
        maxY += padding;

        const width = maxX - minX;
        const height = maxY - minY;

        // Create SVG path string
        const d = svgCoords.map(([x, y], i) => {
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');

        return {
            pathData: d,
            viewBox: `${minX} ${minY} ${width} ${height}`
        };
    }, [polylineData]);

    if (!pathData) return <div className={`bg-gray-100 flex items-center justify-center ${className}`}>Map Data Unavailable</div>;

    return (
        <svg
            viewBox={viewBox}
            className={`w-full h-full overflow-visible ${className}`}
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d={pathData}
                fill="none"
                stroke={strokeColor}
                strokeWidth={(viewBox.split(' ')[2] as unknown as number) * (strokeWidth / 100)}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-md"
            />
        </svg>
    );
};
