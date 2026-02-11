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
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-slate-50 to-white"></div>
      <div className="fixed inset-0 -z-10 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#00355E 1px, transparent 1px), linear-gradient(90deg, #00355E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Extreme ASCII Background Background */}
      <div className="fixed inset-0 -z-10 opacity-[0.02] pointer-events-none flex items-center justify-center select-none font-mono text-[1vw] leading-none whitespace-pre">
        {`
01010101010101010101010101010101010101010101
10                                         10
01   M A N D E R S O N // S Y S T E M S    01
10                                         10
01010101010101010101010101010101010101010101
`}
      </div>

      {/* 1. The Identity Hero (Extreme Brutalist / Redacted) */}
      <section className="relative pt-32 pb-24 md:pt-64 md:pb-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Sidebar Text - Visible on all resolutions with safer positions */}
            <div className="absolute -left-4 md:-left-8 xl:-left-12 top-0 z-20">
              <span className="text-vertical text-[10px] font-black uppercase tracking-[1.5em] text-primary/40 select-none animate-flicker">
                BOSTON // ARCHITECT // CLASSIFIED // 0xDEADBEEF
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-16 md:mb-20 animate-in fade-in slide-in-from-left-4 duration-700">
                <span className="h-px w-16 md:w-24 bg-accent"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent font-mono animate-glitch-skew">PROTOCOL_0x01: LEVEL_4_INTERVENTION</span>
              </div>

              <h1 className="text-fluid-h1 font-black tracking-[-0.1em] text-primary mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                STABILITY <br />
                <span className="relative inline-block text-accent hover-jitter cursor-default">
                  THROUGH
                  <span className="absolute -bottom-2 left-0 w-full h-[0.1em] bg-primary/20 -z-10"></span>
                </span> <br />
                <span className="text-foreground italic font-serif font-light lowercase tracking-tight opacity-90 block mt-8">precision.</span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-20 md:mt-32 items-start">
                <div className="lg:col-span-1" />
                <div className="lg:col-span-6 xl:col-span-7 2xl:col-span-6 relative">
                  <div className="absolute -top-10 md:-top-12 left-0 text-[10px] font-mono text-primary/30 uppercase tracking-widest">[NARRATIVE_STREAM]</div>
                  <p className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-gray-900 font-serif leading-none animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
                    I provide <span className="redacted px-2">Level 4 Support</span> for broken SQL stacks.
                    Writing queries from scratch, architecting <span className="redacted px-2">absolute persistence</span> for those who can't afford to fail.
                  </p>
                </div>

                {/* Overlapping Precision Widget - Shifted absolute overlap to 2xl+ */}
                <div className="lg:col-span-5 xl:col-span-4 2xl:col-span-5 relative mt-16 lg:mt-0 lg:pl-12 xl:pl-0">
                  <div className="responsive-overlap lg:relative 2xl:absolute 2xl:-top-24 2xl:-left-32 p-8 md:p-12 bg-primary text-white clip-brutalist shadow-antigravity animate-in fade-in zoom-in duration-1000 delay-500 z-20 group hover-jitter transition-all hover:bg-accent border-r-[15px] md:border-r-[20px] border-accent/20">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6 text-white/50">NODE_HEALTH</div>
                    <div className="text-4xl md:text-6xl font-black font-sans tabular-nums mb-4 animate-flicker">99.99%</div>
                    <div className="text-[9px] md:text-[10px] font-mono opacity-80 uppercase tracking-widest leading-loose">
                      [SUCCESS] DBA Intervention complete <br />
                      [SUCCESS] SQL stack restored
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 md:mt-32 flex flex-wrap items-center gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-1000">
                <a
                  href="#evidence"
                  className="group relative inline-flex items-center justify-center bg-primary px-12 md:px-20 py-6 md:py-8 text-xs font-black text-white hover:bg-accent transition-all active:scale-[0.9] shadow-[15px_15px_0px_rgba(200,16,46,0.2)] md:shadow-[20px_20px_0px_rgba(200,16,46,0.2)] skew-x-[-15deg] overflow-hidden"
                >
                  <span className="skew-x-[15deg] tracking-[0.4em] relative z-20">DECODE_EVIDENCE()</span>
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
                <a href="#contact" className="text-[10px] font-black text-primary hover:text-accent transition-colors tracking-[0.6em] uppercase border-b-4 md:border-b-8 border-accent/5 pb-2 animate-flicker">
                  _PING(sys.admin)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Evidence Grid (Extreme Skewed Overload) */}
      <section id="evidence" className="relative py-32 md:py-64 bg-background-dark text-white overflow-hidden scanlines grain-texture border-y-[10px] md:border-y-[20px] border-accent xl:skew-brutalist mt-20 md:mt-32">
        <div className="xl:unskew-brutalist">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 mb-20 md:mb-40">
              <div className="relative">
                <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.6em] text-accent mb-4 md:mb-8 font-sans animate-flicker pointer-events-none">02 // DATA_CORRUPTION</h2>
                <h3 className="text-fluid-h3 font-black text-white font-sans tracking-[-0.08em]">
                  CLINICAL <br />
                  <span className="redacted px-4 text-accent">INTERVENTION.</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              {/* Mega Card: InAPinch.run */}
              <div className="md:col-span-12 lg:col-span-8 md:row-span-2 relative group z-10">
                <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-3xl border-2 border-white/5 p-8 md:p-20 transition-all hover:bg-white/[0.05] shadow-antigravity h-full group">
                  <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 italic font-mono text-2xl md:text-4xl group-hover:opacity-20 transition-opacity">DATA_DUMP_01</div>

                  <div className="flex flex-col xl:flex-row xl:items-center gap-8 md:gap-12 mt-12 relative z-10">
                    <div className="space-y-6 md:space-y-8 flex-1">
                      <h4 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white font-sans leading-[0.8] tracking-tight animate-glitch-skew">INAPINCH <br />.RUN</h4>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-serif leading-tight max-w-2xl border-l-[6px] md:border-l-[10px] border-accent pl-6 md:pl-8">
                        Porta-john geolocation for physiological emergencies.
                        A web-app engineered for runners hit by the <span className="redacted">unforeseen</span>.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 mt-6 xl:mt-0 xl:self-end pb-4">
                      <a href="https://inapinch.run" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black bg-accent px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-accent transition-all whitespace-nowrap">VIEW_LIVE_URL</a>
                      <span className="text-[9px] md:text-[10px] font-mono text-white/40 italic">// built_for_survival</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Card: Non-Profit Context */}
              <div className="md:col-span-12 lg:col-span-4 h-full">
                <div className="bg-primary/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 text-white h-full relative overflow-hidden flex flex-col justify-center">
                  <div className="text-[10px] font-black text-accent mb-6 tracking-[0.4em]">COMMUNITY_LEADERSHIP</div>
                  <h4 className="text-3xl md:text-4xl font-black font-sans mb-6 md:mb-8 leading-none italic">SOLES OF <br />MEDFIELD</h4>
                  <p className="text-sm text-gray-400 font-serif mb-8 md:mb-12">
                    President of this 501(c)(3). Engineering fundraisers for scholarships and town recreational infrastructure.
                  </p>
                  <a href="https://solesofmedfield.run" target="_blank" rel="noopener noreferrer" className="font-black text-[10px] uppercase tracking-[0.5em] text-accent hover:text-white transition-colors">
                    SOLES_PROTOCOLS →
                  </a>
                </div>
              </div>

              {/* Dynamic Project: No As A Service */}
              <div className="md:col-span-12 lg:col-span-4 z-20 group">
                <div className="bg-accent p-8 md:p-12 shadow-2xl transition-all hover:lg:-translate-y-2">
                  <div className="font-mono text-[8px] text-white/50 mb-6 tracking-[0.5em]">EXTRACT_CORE_PAYLOAD</div>
                  <h4 className="text-3xl font-black text-white font-sans mb-6 uppercase tracking-tight italic">NO AS A SERVICE</h4>
                  <p className="text-base text-white/80 font-serif mb-10 border-l border-white/20 pl-6">
                    Raycast extension for high-integrity rejection.
                    Built for the developer who knows how to say <span className="redacted">NO</span>.
                  </p>
                  <a href="https://github.com/matholamew/no-as-a-service" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-white hover:underline transition-all">
                    VIEW_SOURCE →
                  </a>
                </div>
              </div>

              {/* Final Project Card */}
              {(projects as Project[])?.slice(0, 1).map(project => (
                <div key={project.id} className="md:col-span-12 lg:col-span-8 z-0">
                  <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-12 h-full flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[8px] text-white/30 mb-6 tracking-[0.8em]">SYSTEM_REPOSITORY_DUMP</div>
                      <h4 className="text-3xl font-black text-white font-sans mb-6 uppercase tracking-tight italic redacted truncate">{project.title}</h4>
                      <p className="text-lg text-gray-400 font-serif line-clamp-2 pl-6 border-l border-white/10">{project.description}</p>
                    </div>
                    <a href={project.live_url} className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-accent hover:text-white transition-colors flex items-center gap-4">
                      <span className="h-px w-10 bg-accent"></span> RAW_PAYLOAD_VIEW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Tech Stack (Monospace Schema Dump) */}
      <section className="py-20 md:py-32 bg-white border-y-[8px] md:border-y-[10px] border-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16">
            <h2 className="text-2xl md:text-3xl font-black text-primary font-sans tracking-[-0.05em] uppercase italic group">
              THE_SCHEMA [<span className="group-hover:text-accent transition-colors">SQL_SCRATCH</span>]
            </h2>
            <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-20 gap-y-8 md:gap-y-12">
              {['PostgreSQL', 'SQL_Surgical', 'DBA_Intervention', 'HL7_FHIR', 'Cloudflare', 'SUPABASE_ENGINE'].map(tech => (
                <span key={tech} className="text-xs md:text-sm font-black uppercase tracking-[0.4em] md:tracking-[0.6em] font-sans text-gray-300 hover:text-accent hover-jitter cursor-default transition-all">
                  {tech.replace('_', ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Direct Query (Breach Protocol Theme) */}
      <section id="contact" className="py-32 md:py-64 bg-background text-primary grain-texture relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.05] pointer-events-none font-mono text-[10vw] font-black select-none leading-none -translate-y-1/2">ACCESS_GRANTED</div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-end">
            <div className="lg:col-span-7">
              <div className="mb-12 md:mb-16 flex items-center gap-4 md:gap-6">
                <span className="h-3 w-3 md:h-4 md:w-4 bg-accent animate-ping"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary">04 // BREACH_PROTOCOL_CONTACT</span>
              </div>
              <h3 className="text-fluid-h3 font-black text-primary font-sans leading-[0.7] mb-12 md:mb-20 tracking-[-0.08em] uppercase">
                INITIATE <br />
                <span className="redacted px-6 hover:text-accent transition-colors">INTERVENTION</span>.
              </h3>

              <div className="space-y-6 md:space-y-8 font-mono text-xs md:text-sm tracking-widest uppercase text-primary/60">
                <a href="https://linkedin.com/in/matthewandersonj/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer group">
                  <span className="opacity-20 group-hover:opacity-100 transition-opacity">LINKED:</span> /in/matthewandersonj
                </a>
                <a href="https://github.com/matholamew" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer group">
                  <span className="opacity-20 group-hover:opacity-100 transition-opacity">GIT:</span> @matholamew
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-8 md:p-16 border-[10px] md:border-[16px] border-primary bg-white shadow-[20px_20px_0px_rgba(0,53,94,0.1)] md:shadow-[40px_40px_0px_rgba(0,53,94,0.1)] group">
                <div className="mb-8 md:mb-12 flex justify-between items-center pb-6 border-b-4 border-gray-100">
                  <div className="text-[10px] font-black tracking-widest">INPUT_TERMINAL_v4.2</div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-gray-200"></div>)}
                  </div>
                </div>
                <form className="space-y-8 md:space-y-12">
                  <div className="space-y-3">
                    <input type="text" className="w-full bg-transparent border-b-4 md:border-b-8 border-primary/5 py-4 md:py-6 px-2 text-primary focus:border-accent outline-none transition-all font-sans font-black text-xl md:text-2xl placeholder:opacity-10" placeholder="IDENT_STRING" />
                  </div>
                  <div className="space-y-3">
                    <input type="email" className="w-full bg-transparent border-b-4 md:border-b-8 border-primary/5 py-4 md:py-6 px-2 text-primary focus:border-accent outline-none transition-all font-sans font-black text-xl md:text-2xl placeholder:opacity-10" placeholder="ADDR_V4" />
                  </div>
                  <div className="space-y-3">
                    <textarea rows={4} className="w-full bg-transparent border-b-4 md:border-b-8 border-primary/5 py-4 md:py-6 px-2 text-primary focus:border-accent outline-none transition-all font-sans font-black text-xl md:text-2xl resize-none placeholder:opacity-10" placeholder="PAYLOAD_BLOCK" />
                  </div>
                  <button className="w-full bg-primary hover:bg-accent text-white font-black py-6 md:py-10 shadow-antigravity transition-all active:scale-[0.9] uppercase tracking-[0.6em] md:tracking-[0.8em] text-[10px] md:text-xs group relative overflow-hidden border-t-8 border-accent">
                    <span className="relative z-10">AUTH_AND_TRANSMIT</span>
                    <div className="absolute inset-x-0 top-0 h-full bg-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer ASCII Signature */}
      <footer className="py-24 border-t-8 border-primary/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <pre className="text-[10px] font-mono text-gray-300 inline-block text-left opacity-40 hover:opacity-100 transition-opacity select-none leading-tight">
            {`   _____ _________  _______ _   __
  / ___// ___/ __ \\/ ____/ | / /
  \\__ \\/ __/ / / / / / / /  |/ /
 ___/ / /___/ /_/ / /___/ /|  /
/____/_____/\\____/\\____/_/ |_/   `}
          </pre>
          <p className="mt-8 text-[8px] font-black uppercase tracking-[1em] text-primary/20">© 2026 MANDERSON // ARCHITECTURAL_INTERVENTION // BOSTON_MA</p>
        </div>
      </footer>
    </div>
  );
}