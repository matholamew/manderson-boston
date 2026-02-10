import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
import Link from "next/link";

export default async function Home() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="flex flex-col">

      {/* Hero Section: The Architect */}
      <section className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24 border-b border-gray-100 animate-in fade-in duration-1000">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary font-sans leading-[1.1]">
              Architecting <span className="text-foreground italic font-serif font-light">Reliability</span> <br />
              in Complex Systems.
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-700 font-serif leading-relaxed">
              Senior Database Administrator & Systems Architect. <br />
              The "Level 4" last line of defense for mission-critical data infrastructure.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <a
                href="#profile"
                className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all font-sans"
              >
                The Profile
              </a>
              <a href="#projects" className="text-sm font-semibold leading-6 text-primary font-sans group">
                Recent Projects <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Profile Section */}
      <section id="profile" className="py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4 font-sans">The Profile</h2>
              <h3 className="text-4xl font-bold text-primary mb-8 font-sans">Architect & Community Builder</h3>
              <div className="space-y-6 text-lg text-gray-700 font-serif leading-relaxed">
                <p>
                  By day, I’m a Senior Database Administrator—the "Level 4" last line of defense for complex SQL stacks.
                  When high-availability clusters fail or queries hit a wall, I’m the one who gets the call.
                  I don’t just manage data; I perform surgery on it.
                </p>
                <p>
                  By night, I’m the President of a local non-profit running group. I lead a community that turns miles
                  into scholarships and park benches. It’s where my "commercial" brain lives—handling fundraising,
                  strategic growth, and stakeholder management to ensure our impact outpaces our overhead.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ring-1 ring-gray-900/5 transition-transform hover:-translate-y-1 duration-500">
              <h4 className="text-xl font-bold text-primary mb-6 font-sans">Technical Depth Meets Human Impact</h4>
              <dl className="space-y-8">
                <div>
                  <dt className="text-sm font-bold uppercase text-gray-400 mb-1 font-sans">Day Stack</dt>
                  <dd className="text-gray-900 font-serif italic text-lg">High-Availability SQL, System Architecture, Query Surgery</dd>
                </div>
                <div>
                  <dt className="text-sm font-bold uppercase text-gray-400 mb-1 font-sans">Night Stack</dt>
                  <dd className="text-gray-900 font-serif italic text-lg">Fundraising, Stakeholder Mgmt, Strategic Growth</dd>
                </div>
                <div className="pt-4 flex gap-3 flex-wrap">
                  {['PostgreSQL', 'Cloud Architecture', 'Leadership', 'Product-Led'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4 font-sans">The Philosophy</h2>
            <h3 className="text-4xl font-bold text-primary mb-8 font-sans">Building Things That Matter (Even the Weird Stuff)</h3>
            <p className="text-xl text-gray-700 font-serif leading-relaxed mb-12">
              I believe the best tech is the tech that solves a visceral problem.
            </p>

            <div className="group relative rounded-3xl bg-primary p-8 md:p-12 text-white overflow-hidden shadow-2xl transition-all hover:scale-[1.01]">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 font-sans">InAPinch.run</h4>
                <p className="text-lg opacity-90 font-serif leading-relaxed mb-8">
                  I built a geolocation web app to help runners find porta-johns in emergencies.
                  It combines clean code, geospatial data, and the reality that sometimes "the cloud"
                  isn't the only thing that needs to be cleared out.
                </p>
                <Link
                  href="/projects/in-a-pinch"
                  className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-white/30 hover:border-white transition-all pb-1 font-sans"
                >
                  View Case Study <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Why I Build Section */}
      <section className="py-24 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 font-sans">Why I Build</h2>
              <h3 className="text-4xl font-bold font-sans leading-tight">Technical depth meets human impact.</h3>
            </div>
            <div className="space-y-12">
              {[
                { rule: '01', title: 'Own the outcome', desc: 'Not just the task. Results are the only metric.' },
                { rule: '02', title: 'Translate the complex', desc: 'Complexity is a cost. Actionability is the gain.' },
                { rule: '03', title: 'Ship fast', desc: 'Especially when the "emergency" is real.' }
              ].map((item) => (
                <div key={item.rule} className="flex gap-6 group">
                  <span className="text-2xl font-bold text-white/30 font-sans group-hover:text-accent transition-colors">{item.rule}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-sans group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-white/70 font-serif text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work / Projects Showcase */}
      <section id="projects" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4 font-sans">Portfolio</h2>
              <h3 className="text-4xl font-bold text-primary font-sans">Recent Production</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(projects as Project[])?.map((project) => (
              <div key={project.id} className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 duration-500">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      {project.tech_stack.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.is_weird && (
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" title="Weird Project Alert" />
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 font-sans group-hover:text-accent transition-colors">{project.title}</h4>
                  <p className="text-gray-600 font-serif leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="px-8 pb-8">
                  <a
                    href={project.live_url !== '#' ? project.live_url : undefined}
                    className="text-sm font-bold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all font-sans"
                  >
                    Explore <span className="text-accent">→</span>
                  </a>
                </div>
              </div>
            ))}

            {(!projects || projects.length === 0) && (
              <div className="col-span-full text-center py-12 text-gray-500 font-serif">
                No projects found in the database. Add your projects to see them here.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}