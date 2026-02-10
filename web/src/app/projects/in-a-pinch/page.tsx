import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function InAPinchPage() {
    const { data: project } = await supabase
        .from('projects')
        .select('*')
        .eq('title', 'InAPinch.run')
        .single();

    if (!project) {
        // If not found in DB, we could either 404 or show a static fallback
        // For this demonstration, we'll allow it to fail if the seed hasn't run
        return notFound();
    }

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <Link
                    href="/"
                    className="text-sm font-semibold leading-7 text-primary hover:text-primary/80 transition-colors mb-8 inline-block"
                >
                    ← Back to home
                </Link>
                <p className="text-base font-semibold leading-7 text-primary font-sans uppercase tracking-wider">Showcase Project</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans">{project.title}</h1>
                <p className="mt-6 text-xl leading-8 font-serif italic text-gray-600">
                    "A weird creativity showcase demonstrating end-to-end product delivery."
                </p>

                <div className="mt-10 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-sans">The Challenge</h2>
                    <p className="mt-6 font-serif">
                        The goal of InAPinch.run was to build a tool that solves the "paradox of choice" for runners.
                        Instead of spending 20 minutes deciding where to run, the app generates a random route
                        based on your desired distance and difficulty, directly in your browser.
                    </p>

                    <figure className="mt-10 border-l-4 border-primary pl-9 font-serif text-gray-900 italic">
                        <blockquote className="text-lg">
                            <p>
                                “Constraints are the best friend of creativity. By removing the decision-making process, we allow the runner to focus on the experience.”
                            </p>
                        </blockquote>
                    </figure>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-sans">Technical Implementation</h2>
                    <p className="mt-6 font-serif">
                        Built with a high-performance stack to ensure near-instantaneous route generation:
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600 font-serif">
                        <li className="flex gap-x-3">
                            <span className="mt-1 h-5 w-5 flex-none text-primary">✓</span>
                            <span>
                                <strong className="font-semibold text-gray-900 font-sans">Next.js 16 + Turbopack:</strong> For lightning-fast development and optimized client-side hydration.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span className="mt-1 h-5 w-5 flex-none text-primary">✓</span>
                            <span>
                                <strong className="font-semibold text-gray-900 font-sans">Google Maps SDK:</strong> Integrated with a custom algorithm to generate valid, safe loop routes.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span className="mt-1 h-5 w-5 flex-none text-primary">✓</span>
                            <span>
                                <strong className="font-semibold text-gray-900 font-sans">Supabase Storage:</strong> To persist user-generated routes and profile heatmaps.
                            </span>
                        </li>
                    </ul>

                    <div className="mt-16">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-sans">Visual Impact</h2>
                        <div className="mt-8 relative aspect-video rounded-xl bg-gray-50 overflow-hidden border border-gray-200 shadow-inner flex items-center justify-center">
                            <p className="text-gray-400 font-serif italic">Screenshot Placeholder: Map Route Visualization</p>
                        </div>
                    </div>

                    <p className="mt-10 font-serif">
                        This project serves as a "living resume" item, showcasing not just the ability to code,
                        but the ability to conceive, design, and deploy a complete consumer-grade product.
                    </p>
                </div>

                <div className="mt-16 flex gap-6">
                    <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-sans transition-colors"
                    >
                        Launch Project
                    </a>
                    <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sans transition-colors"
                    >
                        View Source
                    </a>
                </div>
            </div>
        </div>
    );
}
