
import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";

export default async function Home() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="flex flex-col gap-16 py-12 md:py-20 lg:py-24">

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-sans">
            Architecting <span className="text-primary hover:text-accent transition-colors cursor-default">Reliability</span> in Complex Systems
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-serif">
            Senior Database Administrator & Systems Architect based in Boston.
            I build high-performance, resilient infrastructure for data-intensive applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#projects"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-sans transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 font-sans group">
              Contact Me <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 group">
              <dt className="text-base leading-7 text-gray-600 font-serif group-hover:text-primary transition-colors">Experience</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans transition-transform group-hover:-translate-y-1">10+ Years</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 group">
              <dt className="text-base leading-7 text-gray-600 font-serif group-hover:text-primary transition-colors">Uptime Maintained</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans transition-transform group-hover:-translate-y-1">99.99%</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 group">
              <dt className="text-base leading-7 text-gray-600 font-serif group-hover:text-primary transition-colors">Data Migrations</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans transition-transform group-hover:-translate-y-1">50+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 group">
              <dt className="text-base leading-7 text-gray-600 font-serif group-hover:text-primary transition-colors">Cloud Certifications</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans transition-transform group-hover:-translate-y-1">3x</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center font-sans">Recent Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {(projects as Project[])?.map((project) => (
            <div key={project.id} className="group relative rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all hover:border-primary/20 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                  {project.is_weird ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.tech_stack.slice(0, 2).map((tech) => (
                    <span key={tech} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors font-sans">
                <a href={project.live_url !== '#' ? project.live_url : undefined}>
                  <span className="absolute inset-0" />
                  {project.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 font-serif">
                {project.description}
              </p>
            </div>
          ))}

          {(!projects || projects.length === 0) && (
            <div className="col-span-full text-center py-12 text-gray-500 font-serif">
              No projects found in the database. Run the seed migration to see examples.
            </div>
          )}

        </div>
      </section>
    </div>
  );
}