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
      <section className="relative pt-40 pb-32 md:pt-64 md:pb-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Sidebar Text */}
            <div className="absolute -left-12 top-0 hidden xl:block">
              <span className="text-vertical text-[10px] font-black uppercase tracking-[1.5em] text-primary/40 select-none animate-flicker">
                BOSTON // ARCHITECT // CLASSIFIED // 0xDEADBEEF
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-20 animate-in fade-in slide-in-from-left-4 duration-700">
                <span className="h-px w-24 bg-accent"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent font-mono animate-glitch-skew">PROTOCOL_0x01: IDENTITY_BREACH</span>
              </div>

              <h1 className="text-[14vw] md:text-[12vw] font-black tracking-[-0.1em] text-primary leading-[0.7] mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                SCALING <br />
                <span className="relative inline-block text-accent hover-jitter cursor-default">
                  THE_VOID
                  <span className="absolute -bottom-2 left-0 w-full h-[0.1em] bg-primary/20 -z-10"></span>
                </span> <br />
                <span className="text-foreground italic font-serif font-light lowercase tracking-tight opacity-90 block mt-8">implicitly.</span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-32">
                <div className="lg:col-span-1" />
                <div className="lg:col-span-6 relative">
                  <div className="absolute -top-12 left-0 text-[10px] font-mono text-primary/30 uppercase tracking-widest">[NARRATIVE_STREAM]</div>
                  <p className="text-3xl md:text-4xl text-gray-900 font-serif leading-none animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
                    I provide <span className="redacted px-2">surgical interventions</span> for broken architectures.
                    Systems optimized for <span className="redacted px-2">absolute persistence</span>.
                  </p>
                </div>

                {/* Overlapping Precision Widget */}
                <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                  <div className="absolute -top-24 lg:-left-32 lg:top-0 p-12 bg-primary text-white clip-brutalist shadow-antigravity animate-in fade-in zoom-in duration-1000 delay-500 z-20 group hover-jitter transition-all hover:bg-accent border-r-[20px] border-accent/20">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 text-white/50">NODE_HEALTH</div>
                    <div className="text-6xl font-black font-sans tabular-nums mb-4 animate-flicker">99.99%</div>
                    <div className="text-[10px] font-mono opacity-80 uppercase tracking-widest leading-loose">
                      [SUCCESS] Uptime record <br />
                      [SUCCESS] Redundancy verified
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-32 flex flex-wrap items-center gap-12 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-1000">
                <a
                  href="#evidence"
                  className="group relative inline-flex items-center justify-center bg-primary px-20 py-8 text-xs font-black text-white hover:bg-accent transition-all active:scale-[0.9] shadow-[20px_20px_0px_rgba(200,16,46,0.2)] skew-x-[-15deg] overflow-hidden"
                >
                  <span className="skew-x-[15deg] tracking-[0.4em] relative z-20">DECODE_EVIDENCE()</span>
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
                <a href="#contact" className="text-[10px] font-black text-primary hover:text-accent transition-colors tracking-[0.6em] uppercase border-b-8 border-accent/5 pb-2 animate-flicker">
                  _PING(sys.admin)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Evidence Grid (Extreme Skewed Overload) */}
      <section id="evidence" className="relative py-64 bg-background-dark text-white overflow-hidden scanlines grain-texture border-y-[20px] border-accent skew-brutalist mt-32">
        <div className="unskew-brutalist">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-40">
              <div className="relative">
                <h2 className="text-sm font-black uppercase tracking-[0.6em] text-accent mb-8 font-sans animate-flicker pointer-events-none">02 // DATA_CORRUPTION</h2>
                <h3 className="text-8xl md:text-[12vw] font-black text-white font-sans tracking-[-0.08em] leading-[0.7]">
                  CLINICAL <br />
                  <span className="redacted px-4 text-accent">VIOLENCE.</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Mega Card: The "High Intensity" Case Study */}
              <div className="md:col-span-10 md:row-span-2 relative group z-10">
                <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-3xl border-2 border-white/5 p-20 transition-all hover:bg-white/[0.05] shadow-antigravity h-full group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 italic font-mono text-4xl group-hover:opacity-20 transition-opacity">DATA_DUMP_01</div>

                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div className="space-y-12">
                      <h4 className="text-6xl md:text-8xl font-black text-white font-sans leading-[0.8] tracking-tight animate-glitch-skew">ZERO_SYNC <br />GLOBAL_HA.</h4>
                      <p className="text-2xl text-gray-400 font-serif leading-none max-w-2xl border-l-[10px] border-accent pl-8">
                        High-integrity database intervention for a Tier-1 FinTech.
                        Replication latency enforced at <span className="redacted">&lt;1.2ms</span> globally.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-16">
                      {['PSQL', 'REDIS', 'GO', 'K8S'].map(t => (
                        <span key={t} className="text-[10px] font-black bg-white/5 px-6 py-3 uppercase tracking-widest hover:bg-accent transition-all cursor-default">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Red Link Overlay */}
              <div className="md:col-span-2 md:pt-24 h-full">
                <div className="bg-accent p-12 text-white h-full group hover-jitter relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 animate-pulse"></div>
                  <h4 className="text-4xl font-black font-sans mb-8 leading-none italic rotate-90 origin-left ml-8">IN_A_PINCH</h4>
                  <Link href="/projects/in-a-pinch" className="mt-auto font-black text-[10px] uppercase tracking-[0.5em] group/btn">
                    DECODE_STRATEGY →
                  </Link>
                </div>
              </div>

              {/* Dynamic Project (Redacted and Monospace) */}
              {(projects as Project[])?.slice(0, 1).map(project => (
                <div key={project.id} className="md:col-span-6 md:-mt-20 z-20 group">
                  <div className="bg-primary p-16 border-b-[20px] border-accent shadow-2xl transition-all hover:scale-105">
                    <div className="font-mono text-[8px] text-accent mb-6 tracking-[0.8em]">EXTRACT_PROJECT_METADATA</div>
                    <h4 className="text-4xl font-black text-white font-sans mb-8 tracking-tighter uppercase line-clamp-1 italic redacted">{project.title}</h4>
                    <p className="text-lg text-gray-400 font-serif line-clamp-3 mb-10 border-l border-white/20 pl-6">{project.description}</p>
                    <a href={project.live_url} className="text-[10px] font-black uppercase tracking-[0.3em] text-accent hover:text-white transition-colors flex items-center gap-4">
                      <span className="h-px w-10 bg-accent"></span> RAW_PAYLOAD_VIEW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Direct Query (Breach Protocol Theme) */}
      <section id="contact" className="py-64 bg-background text-primary grain-texture relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none font-mono text-[10vw] font-black select-none leading-none -translate-y-1/2">ACCESS_GRANTED</div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-end">
            <div className="lg:col-span-7">
              <div className="mb-16 flex items-center gap-6">
                <span className="h-4 w-4 bg-accent animate-ping"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary">04 // BREACH_PROTOCOL_CONTACT</span>
              </div>
              <h3 className="text-[12vw] font-black text-primary font-sans leading-[0.7] mb-20 tracking-[-0.08em] uppercase">
                INITIATE <br />
                <span className="redacted px-6 hover:text-accent transition-colors">INTERVENTION</span>.
              </h3>

              <div className="space-y-8 font-mono text-sm tracking-widest uppercase text-primary/60">
                <div className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer group">
                  <span className="opacity-20 group-hover:opacity-100 transition-opacity">ADDR:</span> manderson-boston@sys.io
                </div>
                <div className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer group">
                  <span className="opacity-20 group-hover:opacity-100 transition-opacity">USER:</span> @manderson_arch
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-16 border-[16px] border-primary bg-white shadow-[40px_40px_0px_rgba(0,53,94,0.1)] group">
                <div className="mb-12 flex justify-between items-center pb-6 border-b-4 border-gray-100">
                  <div className="text-[10px] font-black tracking-widest">INPUT_TERMINAL_v4.2</div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-gray-200"></div>)}
                  </div>
                </div>
                <form className="space-y-12">
                  <div className="space-y-3">
                    <input type="text" className="w-full bg-transparent border-b-8 border-primary/5 py-6 px-2 text-primary focus:border-accent outline-none transition-all font-sans font-black text-2xl placeholder:opacity-10" placeholder="IDENT_STRING" />
                  </div>
                  <div className="space-y-3">
                    <input type="email" className="w-full bg-transparent border-b-8 border-primary/5 py-6 px-2 text-primary focus:border-accent outline-none transition-all font-sans font-black text-2xl placeholder:opacity-10" placeholder="ADDR_V4" />
                  </div>
                  <div className="space-y-3">
                    <textarea rows={4} className="w-full bg-transparent border-b-8 border-primary/5 py-6 px-2 text-primary focus:border-accent outline-none transition-all font-sans font-black text-2xl resize-none placeholder:opacity-10" placeholder="PAYLOAD_BLOCK" />
                  </div>
                  <button className="w-full bg-primary hover:bg-accent text-white font-black py-10 shadow-antigravity transition-all active:scale-[0.9] uppercase tracking-[0.8em] text-xs group relative overflow-hidden border-t-8 border-accent">
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