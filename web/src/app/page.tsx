import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
import Link from "next/link";

export default async function Home() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="relative isolate min-h-screen selection:bg-accent selection:text-white">
      {/* Dynamic Background Spotlight */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-slate-50 to-white"></div>

      {/* 1. The Identity Hero (Ivy Base) */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Boston, MA // Clinical Systems Architect
            </div>

            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-primary font-sans leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              ARCHITECTING <br />
              <span className="text-foreground italic font-serif font-light tracking-normal lowercase">stability</span> <br />
              <span className="text-accent underline decoration-4 underline-offset-8">FORCEFULLY.</span>
            </h1>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-gray-600 font-serif leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                Senior Systems Architect & DBA. I provide high-integrity clinical interventions for mission-critical data infrastructure.
                Silicon Valley performance meets Ivy League precision.
              </p>

              <div className="flex flex-col gap-6 items-start md:items-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
                {/* Precision Metrics Widget */}
                <div className="p-4 bg-white/40 backdrop-blur-xl border border-white/60 shadow-antigravity rounded-2xl flex items-center gap-6 group hover:scale-[1.02] transition-transform">
                  <div className="text-right">
                    <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Uptime Record</div>
                    <div className="text-3xl font-black text-primary font-sans tabular-nums">99.999%</div>
                  </div>
                  <div className="h-12 w-[1px] bg-gray-100" />
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Latency reduction</div>
                    <div className="text-3xl font-black text-accent font-sans tabular-nums">-45%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
              <a
                href="#evidence"
                className="group relative inline-flex items-center justify-center rounded-full bg-primary px-12 py-5 text-sm font-black text-white shadow-antigravity hover:bg-primary/90 transition-all active:scale-95"
              >
                THE EVIDENCE
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="text-sm font-black text-primary hover:text-accent transition-colors tracking-widest uppercase">
                DIRECT QUERY
              </a>
            </div>
          </div>
        </div>

        {/* Geometric Background Movement */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-[0.03] pointer-events-none">
          <svg width="800" height="800" viewBox="0 0 100 100" className="animate-[spin_60s_linear_infinite]">
            <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.05" />
            <path d="M0 50 L100 50 M50 0 L50 100" stroke="currentColor" strokeWidth="0.05" />
          </svg>
        </div>
      </section>

      {/* 2. The Evidence Grid (Dark Bento - The "Edgy" Side) */}
      <section id="evidence" className="relative py-32 bg-background-dark text-white overflow-hidden grain-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4 font-sans">02 // EVIDENCE</h2>
              <h3 className="text-5xl md:text-7xl font-extrabold text-white font-sans tracking-tighter">CLINICAL <br />OPTIMIZATIONS.</h3>
            </div>
            <p className="mt-8 md:mt-0 text-gray-400 font-serif text-lg max-w-sm italic">
              Results aren't requested; they're engineered. Every optimization is a surgical procedure on latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">
            {/* Mega Card: The "Aggressive" Case Study */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-12 transition-all hover:-translate-y-4 hover:bg-white/[0.06] hover:border-white/20 shadow-antigravity">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">PRIMARY CASE STUDY</span>
                  </div>
                  <h4 className="text-4xl md:text-5xl font-black text-white font-sans leading-none tracking-tighter">ZERO-LATENCY <br />MULTI-REGION SYNC.</h4>
                  <p className="text-xl text-gray-300 font-serif leading-relaxed max-w-xl">
                    Overhauled a global SQL cluster for a Tier-1 fintech.
                    Implemented sub-second replication across 3 continents while maintaining strict ACID compliance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['PSQL', 'Kubernetes', 'GCP', 'Direct Connect'].map(t => (
                    <span key={t} className="text-[10px] font-black bg-white/10 px-4 py-2 rounded-full uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
              {/* Edge Movement Graphic */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent skew-x-12 translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>

            {/* InAPinch.run (Edgy Link) */}
            <div className="md:col-span-4 md:row-span-1 group bg-accent rounded-[2.5rem] p-10 text-white shadow-2xl transition-all hover:scale-[1.02] hover:-rotate-1 overflow-hidden relative border border-white/10">
              <div className="relative z-10">
                <h4 className="text-2xl font-black font-sans mb-4 tracking-tighter uppercase italic">Emergency <br />Ingestion.</h4>
                <p className="text-sm text-white/80 font-serif leading-relaxed line-clamp-3">
                  "InAPinch.run" — Geolocation tool for physiological emergencies. High-performance utility for a visceral problem.
                </p>
                <Link href="/projects/in-a-pinch" className="mt-8 flex items-center gap-2 group/btn font-black text-xs uppercase tracking-[0.2em]">
                  VIEW STUDY <span className="transition-transform group-hover/btn:translate-x-2">→</span>
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Performance Audit (Precision) */}
            <div className="md:col-span-4 md:row-span-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 shadow-antigravity transition-all hover:-translate-y-2 hover:bg-white/[0.06]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-black text-white font-sans mb-4 uppercase tracking-tighter italic">QUERY SURGERY</h4>
              <p className="text-sm text-gray-400 font-serif leading-relaxed">
                Reduced query overhead for a fintech leader during 10x traffic spikes. Scalability through precision.
              </p>
            </div>

            {/* Dynamic Project */}
            {(projects as Project[])?.slice(0, 1).map(project => (
              <div key={project.id} className="md:col-span-4 md:row-span-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 shadow-antigravity transition-all hover:-translate-y-2 group">
                <h4 className="text-xl font-black text-white font-sans mb-4 uppercase tracking-tighter truncate italic">{project.title}</h4>
                <p className="text-sm text-gray-400 font-serif line-clamp-3 mb-6">{project.description}</p>
                <a href={project.live_url} className="text-[10px] font-black uppercase tracking-widest text-accent group-hover:underline">RAW_DATA →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Tech Stack (Monochromatic Precision) */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <h2 className="text-2xl font-black text-primary font-sans tracking-tight italic">THE SCHEMA: <span className="font-serif font-light text-gray-300 not-italic lowercase">stack_dump()</span></h2>
            <div className="flex flex-wrap justify-center gap-16">
              {['PostgreSQL', 'Google Cloud', 'Terraform', 'Next.js', 'Cloudflare', 'Redis'].map(tech => (
                <span key={tech} className="text-xs font-black uppercase tracking-[0.5em] font-sans text-gray-300 hover:text-accent transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Direct Query (Clinical Contact) */}
      <section id="contact" className="py-32 bg-background grain-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-6 font-sans">04 // CONTACT</h2>
              <h3 className="text-6xl md:text-8xl font-black text-primary font-sans leading-[0.8] mb-12 tracking-tighter">
                INITIATE <br /> <span className="italic font-serif font-light text-gray-300 lowercase tracking-normal">intervention</span>.
              </h3>
              <p className="text-xl text-gray-600 font-serif leading-relaxed max-w-md">
                Currently accepting high-stakes consulting engagements for data migrations and system architecture audits.
              </p>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 text-sm font-black text-primary font-sans tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  manderson-boston@sys.io
                </div>
                <div className="flex items-center gap-4 text-sm font-black text-primary font-sans tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  @manderson_arch
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-antigravity animate-in fade-in slide-in-from-right-8 duration-1000">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">USER_NAME</label>
                  <input type="text" className="w-full border-b-2 border-gray-100 py-3 px-1 text-primary focus:border-accent outline-none transition-colors font-sans font-bold text-lg" placeholder="Identify yourself..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">ENVELOPE_ID</label>
                  <input type="email" className="w-full border-b-2 border-gray-100 py-3 px-1 text-primary focus:border-accent outline-none transition-colors font-sans font-bold text-lg" placeholder="email@domain.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">PAYLOAD</label>
                  <textarea rows={4} className="w-full border-b-2 border-gray-100 py-3 px-1 text-primary focus:border-accent outline-none transition-colors font-sans font-bold text-lg resize-none" placeholder="Describe the breach/project..." />
                </div>
                <button className="w-full bg-primary hover:bg-accent text-white font-black py-6 rounded-2xl shadow-xl transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-sm group">
                  EXECUTE_SEND
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}