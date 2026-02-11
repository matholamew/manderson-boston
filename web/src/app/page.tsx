import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
import Link from "next/link";

export default async function Home() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="relative isolate min-h-screen selection:bg-accent selection:text-white bg-background overflow-x-hidden">
      {/* Background Grid & Spotlight */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/30 via-slate-50 to-white"></div>
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#00355E 1px, transparent 1px), linear-gradient(90deg, #00355E 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      {/* 1. The Identity Hero (Extreme Brutalist) */}
      <section className="relative pt-40 pb-32 md:pt-64 md:pb-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Sidebar Text */}
            <div className="absolute -left-12 top-0 hidden xl:block">
              <span className="text-vertical text-[10px] font-black uppercase tracking-[1em] text-primary/20 select-none">
                BOSTON // SYSTEM_ARCHITECT // 02.2026
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12 animate-in fade-in slide-in-from-left-4 duration-700">
                <span className="h-px w-12 bg-accent"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">PRIMARY_NODE: MANDERSON</span>
              </div>

              <h1 className="text-[12vw] md:text-[10vw] font-black tracking-[-0.08em] text-primary leading-[0.75] mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                STABILITY <br />
                <span className="relative inline-block text-accent hover-jitter cursor-default">
                  THROUGH
                  <span className="absolute -bottom-2 left-0 w-full h-[0.1em] bg-primary/10 -z-10"></span>
                </span> <br />
                <span className="text-foreground italic font-serif font-light lowercase tracking-tight opacity-90 block mt-4">aggression.</span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-24">
                <div className="lg:col-span-1" />
                <div className="lg:col-span-6">
                  <p className="text-2xl md:text-3xl text-gray-800 font-serif leading-tight animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
                    Senior Systems Architect & DBA. I don't "manage" data; I orchestrate its survival in high-latency, high-stakes environments.
                    Clinical precision for the Silicon Valley machine.
                  </p>
                </div>

                {/* Overlapping Precision Widget */}
                <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                  <div className="absolute -top-12 lg:-left-24 lg:top-0 p-8 bg-primary text-white clip-brutalist shadow-antigravity animate-in fade-in zoom-in duration-1000 delay-500 z-20 group hover-jitter transition-transform">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-white/40">SYSTEM_HEALTH</div>
                    <div className="text-5xl font-black font-sans tabular-nums mb-2">99.9997%</div>
                    <div className="text-[10px] font-mono opacity-60 uppercase">Uptime protocol maintained</div>
                  </div>
                  <div className="p-8 border-4 border-primary/5 rounded-[3rem] mt-12 lg:mt-24 bg-white/50 backdrop-blur-xl animate-in fade-in slide-in-from-right-12 duration-1000 delay-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">
                      LATENCY_AUDIT :: COMPLETED
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-black text-accent">-45%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary leading-tight">
                        Post-Intervention <br /> Response Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24 flex flex-wrap items-center gap-8 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-1000">
                <a
                  href="#evidence"
                  className="group relative inline-flex items-center justify-center bg-primary px-16 py-6 text-xs font-black text-white hover:bg-accent transition-all active:scale-95 shadow-2xl skew-x-[-12deg]"
                >
                  <span className="skew-x-[12deg] tracking-[0.2em]">VIEW_EVIDENCE</span>
                </a>
                <a href="#contact" className="text-xs font-black text-primary hover:text-accent transition-colors tracking-[0.4em] uppercase border-b-2 border-primary/10 py-2">
                  DIRECT_QUERY()
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Evidence Grid (Extreme Disruption - The "Edgy" Overload) */}
      <section id="evidence" className="relative py-48 bg-background-dark text-white overflow-hidden scanlines grain-texture">
        {/* Disrupted Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none overflow-hidden uppercase font-black text-[20vw] leading-none select-none tracking-tighter text-white/50">
          <div className="rotate-12 translate-x-1/2">DATA_BREACH_RECOVERY</div>
          <div className="-rotate-12 -translate-x-1/4">ARCHITECTURE_SURGERY</div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
            <div className="relative">
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-accent mb-6 font-sans">02 // CLINICAL_EVIDENCE</h2>
              <h3 className="text-7xl md:text-[10vw] font-black text-white font-sans tracking-[-0.05em] leading-[0.8]">
                ARCHITECTURAL <br />
                <span className="text-accent underline decoration-[0.1em] underline-offset-[0.2em] italic font-serif lowercase font-light tracking-normal opacity-80">violence.</span>
              </h3>
            </div>
            <div className="max-w-xs pt-12">
              <div className="p-6 border-l-4 border-accent bg-white/[0.03] backdrop-blur-md">
                <p className="text-gray-400 font-serif text-lg italic leading-relaxed">
                  "I build systems that refuse to fail. Precision isn't suggested; it's forced into every byte."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Mega Card: The "Aggressive" Case Study (Overlapping & Skewed) */}
            <div className="md:col-span-9 md:row-span-2 relative group z-10">
              <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border-4 border-white/5 p-16 transition-all hover:-translate-y-4 hover:bg-white/[0.08] hover:border-accent/30 shadow-antigravity h-full">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <svg width="200" height="200" viewBox="0 0 100 100" className="rotate-45">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-3 py-1">PRIORITY_ALPHA</span>
                      <span className="text-[10px] font-mono text-white/40">ID: 0x992B2</span>
                    </div>
                    <h4 className="text-5xl md:text-7xl font-black text-white font-sans leading-[0.85] tracking-tight">ZERO_LATENCY <br />GLOBAL_CLUSTER.</h4>
                    <p className="text-2xl text-gray-300 font-serif leading-snug max-w-2xl">
                      Invasive optimization for a Tier-1 Fintech.
                      Implemented continental replication with sub-ms synchronization and hardened ACID compliance.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-12">
                    {['PSQL', 'K8S', 'GCP', 'DIRECT_CONNECT', 'TERRAFORM'].map(t => (
                      <span key={t} className="text-[9px] font-black border border-white/10 px-4 py-2 uppercase tracking-widest hover:bg-white hover:text-black transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Shifted Card Overlay (The "Disruption") */}
            <div className="md:col-span-3 md:pt-12">
              <div className="bg-accent p-12 text-white shadow-2xl transition-all hover:scale-110 hover:-rotate-3 group clip-brutalist relative z-20">
                <h4 className="text-3xl font-black font-sans mb-6 tracking-tighter uppercase leading-none">EMERGENCY <br />INGESTION.</h4>
                <p className="text-sm text-white/90 font-serif leading-relaxed mb-12">
                  InAPinch.run — A visceral geolocation utility for high-stakes physiological diagnostics.
                </p>
                <Link href="/projects/in-a-pinch" className="flex items-center gap-4 font-black text-xs uppercase tracking-[0.3em] group/btn">
                  DECODE_DETAILS <span className="h-px w-8 bg-white transition-all group-hover/btn:w-12"></span>
                </Link>
              </div>
            </div>

            {/* Clinical Optimization (Shifted) */}
            <div className="md:col-span-4 md:-translate-y-8 z-20">
              <div className="bg-white/[0.02] backdrop-blur-2xl border-2 border-white/5 p-12 shadow-antigravity hover:bg-accent/10 transition-colors h-full">
                <div className="text-4xl font-black text-white font-sans mb-6 italic opacity-20">01.</div>
                <h4 className="text-2xl font-black text-white font-sans mb-4 uppercase tracking-tighter">QUERY_SURGERY</h4>
                <p className="text-sm text-gray-400 font-serif leading-relaxed">
                  Total overhaul of query execution paths for a scaling fintech.
                  Scalability enforced through technical constraint.
                </p>
              </div>
            </div>

            {/* Dynamic Project (Sharp Corner) */}
            {(projects as Project[])?.slice(0, 1).map(project => (
              <div key={project.id} className="md:col-span-5 md:-translate-x-12 md:mt-12 group z-0">
                <div className="bg-primary/40 backdrop-blur-3xl border border-white/5 p-12 transition-all hover:bg-primary/60">
                  <div className="text-[8px] font-mono text-accent mb-4 tracking-[0.5em] uppercase">EXTRACTED_PROJECT_DATA</div>
                  <h4 className="text-3xl font-black text-white font-sans mb-6 uppercase tracking-tight line-clamp-1 italic">{project.title}</h4>
                  <p className="text-base text-gray-400 font-serif line-clamp-3 mb-8">{project.description}</p>
                  <a href={project.live_url} className="text-[10px] font-black uppercase tracking-[0.4em] text-accent hover:text-white transition-colors">RAW_PAYLOAD_VIEW →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Tech Stack (Monospace Schema Dump) */}
      <section className="py-32 bg-white border-y-[10px] border-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <h2 className="text-3xl font-black text-primary font-sans tracking-[-0.05em] uppercase italic group">
              THE_SCHEMA [<span className="group-hover:text-accent transition-colors">DUMP</span>]
            </h2>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-12">
              {['PostgreSQL', 'Google_Cloud', 'Terraform', 'Next.js', 'Cloudflare', 'Redis'].map(tech => (
                <span key={tech} className="text-sm font-black uppercase tracking-[0.6em] font-sans text-gray-300 hover:text-accent hover-jitter cursor-default transition-all">
                  {tech.replace('_', ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Direct Query (Extreme Contact) */}
      <section id="contact" className="py-48 bg-background-dark text-white grain-texture overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-12 duration-1000">
              <div className="inline-block p-4 bg-accent text-white font-black text-[10px] tracking-[0.5em] mb-12 uppercase skew-x-[-15deg]">
                <span className="skew-x-[15deg] block text-center">ESTABLISH_CONNECTION</span>
              </div>
              <h3 className="text-[10vw] font-black text-white font-sans leading-[0.75] mb-16 tracking-[-0.08em]">
                INITIATE <br />
                <span className="text-accent hover-jitter inline-block cursor-default select-none">INTERVENTION.</span>
              </h3>

              <div className="flex flex-wrap gap-12 mt-24">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-2">COORD_X</span>
                  <div className="text-xl font-black font-sans tracking-widest uppercase">manderson-boston@sys.io</div>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-2">COORD_Y</span>
                  <div className="text-xl font-black font-sans tracking-widest uppercase">@manderson_arch</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              {/* Decorative Grid Overlap */}
              <div className="absolute -top-12 -right-12 w-32 h-32 border-t-2 border-r-2 border-white/10 opacity-50 z-0"></div>

              <div className="bg-white p-12 rounded-none border-[12px] border-primary shadow-2xl animate-in fade-in slide-in-from-right-12 duration-1000 relative z-10">
                <form className="space-y-12">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">0x01 // SENDER_IDENTITY</label>
                    <input type="text" className="w-full bg-gray-50 border-b-4 border-primary/10 py-4 px-4 text-primary focus:border-accent focus:bg-white outline-none transition-all font-sans font-black text-xl placeholder:opacity-20" placeholder="NAME_REQUIRED" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">0x02 // RETURN_PATH</label>
                    <input type="email" className="w-full bg-gray-50 border-b-4 border-primary/10 py-4 px-4 text-primary focus:border-accent focus:bg-white outline-none transition-all font-sans font-black text-xl placeholder:opacity-20" placeholder="EMAIL_REQUIRED" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">0x03 // PAYLOAD_SPEC</label>
                    <textarea rows={4} className="w-full bg-gray-50 border-b-4 border-primary/10 py-4 px-4 text-primary focus:border-accent focus:bg-white outline-none transition-all font-sans font-black text-xl resize-none placeholder:opacity-20" placeholder="DESCRIBE_THE_CRITICAL_OBJECTIVE" />
                  </div>
                  <button className="w-full bg-primary hover:bg-accent text-white font-black py-8 shadow-2xl transition-all active:scale-[0.95] uppercase tracking-[0.5em] text-sm group relative overflow-hidden">
                    <span className="relative z-10">EXECUTE_TRANSMISSION</span>
                    <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}