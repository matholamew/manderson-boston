import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
import Link from "next/link";

export default async function Home() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="relative isolate min-h-screen">
      {/* 2. The "Boston Tech" Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-slate-50 to-white"></div>

      {/* 1. The Identity Hero */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-primary font-sans leading-[1.05] mb-8">
              Architecting <span className="text-foreground italic font-serif font-light">Stability</span> <br />
              for the Digital Age.
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-600 font-serif leading-relaxed max-w-2xl">
              Senior Systems Architect & DBA representing the Boston technocracy.
              I specialize in "Level 4" clinical intervention for complex data environments.
            </p>

            {/* Systems Performance Widget */}
            <div className="mt-12 inline-flex items-center gap-6 p-1 pr-6 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-antigravity">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">99.9</div>
              <div className="text-sm font-sans font-semibold text-gray-500 tracking-wide uppercase">
                Avg Uptime <span className="text-primary ml-2">Maintained</span>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <a
                href="#evidence"
                className="rounded-full bg-primary px-10 py-4 text-sm font-bold text-white shadow-antigravity hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 font-sans"
              >
                The Evidence
              </a>
              <a href="#contact" className="text-sm font-bold leading-6 text-primary font-sans group">
                Direct Query <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Evidence Grid (Bento Box) */}
      <section id="evidence" className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4 font-sans">The Evidence</h2>
            <h3 className="text-4xl font-bold text-primary font-sans">Architecture & Optimizations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Case Study 01 */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-white/80 backdrop-blur-md border border-slate-200 shadow-antigravity rounded-3xl p-8 md:p-12 transition-all hover:-translate-y-2">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4 block">Case Study 01</span>
                  <h4 className="text-3xl font-bold text-primary mb-6 font-sans">Global Multi-Cloud Migration</h4>
                  <p className="text-lg text-gray-600 font-serif leading-relaxed max-w-xl">
                    Orchestrated the zero-downtime migration of a legacy SQL cluster to a cloud-native architecture
                    spanning three regions. Improved query latency by 45%.
                  </p>
                </div>
                <div className="flex gap-4">
                  {['PostgreSQL', 'GCP', 'Terraform'].map(t => (
                    <span key={t} className="text-[10px] font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-full uppercase tracking-tighter">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* InAPinch.run */}
            <div className="md:col-span-4 md:row-span-1 group bg-primary rounded-3xl p-8 text-white shadow-antigravity transition-all hover:-translate-y-2 overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-xl font-bold font-sans mb-3">InAPinch.run</h4>
                <p className="text-sm opacity-80 font-serif leading-relaxed">
                  A "weird" geolocation tool for emergencies. Clean code, real-world utility.
                </p>
                <Link href="/projects/in-a-pinch" className="text-xs font-bold uppercase tracking-widest mt-6 inline-block border-b border-white/30 hover:border-white transition-all pb-1">Review</Link>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110 group-hover:opacity-40">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
            </div>

            {/* Performance Audit */}
            <div className="md:col-span-4 md:row-span-1 bg-white/80 backdrop-blur-md border border-slate-200 shadow-antigravity rounded-3xl p-8 transition-all hover:-translate-y-2">
              <h4 className="text-xl font-bold text-primary font-sans mb-3">Performance Audit</h4>
              <p className="text-sm text-gray-500 font-serif leading-relaxed">
                Refined query plans for a fintech unicorn, reducing CPU overhead by 60% during peak trade hours.
              </p>
            </div>

            {/* Dynamic Projects from Supabase */}
            {(projects as Project[])?.slice(0, 1).map(project => (
              <div key={project.id} className="md:col-span-4 md:row-span-1 bg-white/80 backdrop-blur-md border border-slate-200 shadow-antigravity rounded-3xl p-8 transition-all hover:-translate-y-2">
                <h4 className="text-xl font-bold text-primary font-sans mb-3">{project.title}</h4>
                <p className="text-sm text-gray-500 font-serif line-clamp-2">{project.description}</p>
                <a href={project.live_url} className="text-xs font-bold uppercase tracking-widest text-accent mt-4 inline-block hover:opacity-80">Link →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Tech Stack (The Schema) */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-2xl font-bold text-primary font-sans tracking-tight">The Schema. <span className="font-serif italic font-light text-gray-400">Core Proficiencies.</span></h2>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['PostgreSQL', 'Google Cloud', 'Terraform', 'Next.js', 'Cloudflare', 'Redis'].map(tech => (
                <span key={tech} className="text-sm font-bold uppercase tracking-[0.3em] font-sans text-primary">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Direct Query (Contact) */}
      <section id="contact" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white shadow-[0_50px_100px_-20px_rgba(0,53,94,0.3)] overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start lg:items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">Let's solve for <br /> <span className="italic font-serif font-light text-blue-200">Scalability.</span></h2>
                <p className="text-lg opacity-80 font-serif leading-relaxed max-w-md">
                  Available for architectural consulting, data strategy audits, or deep-dives into mission-critical infra.
                </p>
              </div>
              <div className="w-full lg:w-[400px]">
                <form className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-sans" />
                  <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-sans" />
                  <textarea placeholder="Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-sans" />
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] font-sans">
                    Execute Query
                  </button>
                </form>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-accent opacity-[0.05] rounded-full blur-[100px]" />
          </div>
        </div>
      </section>
    </div>
  );
}