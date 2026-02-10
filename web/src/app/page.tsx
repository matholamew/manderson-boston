

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-20 lg:py-24">

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-sans">
            Architecting <span className="text-primary">Reliability</span> in Complex Systems
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-serif">
            Senior Database Administrator & Systems Architect based in Boston.
            I build high-performance, resilient infrastructure for data-intensive applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-sans transition-colors"
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
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 font-serif">Experience</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans">10+ Years</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 font-serif">Uptime Maintained</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans">99.99%</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 font-serif">Data Migrations</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans">50+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 font-serif">Cloud Certifications</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary font-sans">3x</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center font-sans">Recent Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Project Card 1 */}
          <div className="group relative rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Architecture</span>
            </div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors font-sans">
              <a href="#">
                <span className="absolute inset-0" />
                High-Availability DB Cluster
              </a>
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 font-serif">
              Designed and implemented a multi-region PostgreSQL cluster on AWS with automated failover and &lt; 500ms latency replication.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="group relative rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Optimization</span>
            </div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors font-sans">
              <a href="#">
                <span className="absolute inset-0" />
                Query Performance Tuning
              </a>
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 font-serif">
              Optimized critical reporting queries for a FinTech client, reducing average execution time from 15s to 200ms using advanced indexing strategies.
            </p>
          </div>

          {/* Project Card 3 */}
          <div className="group relative rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-600/10">Automation</span>
            </div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors font-sans">
              <a href="#">
                <span className="absolute inset-0" />
                Infrastructure as Code
              </a>
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 font-serif">
              Migrated manual server provisioning to a fully automated Terraform & Ansible pipeline, reducing deployment errors by 100%.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}