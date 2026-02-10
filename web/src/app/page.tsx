export const runtime = 'edge';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 font-mono">
      {/* Container */}
      <div className="max-w-2xl w-full border border-blue-500/30 bg-blue-500/5 p-8 rounded-lg shadow-[0_0_30px_rgba(0,112,243,0.1)]">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
              MANDERSON.BOSTON
            </h1>
            <p className="text-gray-500 text-xs mt-1">EST. 2026 // BASE: BOSTON, MA</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/30">
              v1.0.0-alpha
            </span>
          </div>
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 border border-white/10 rounded bg-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Infrastructure</h3>
            <p className="text-sm font-semibold text-blue-400">Cloudflare Edge</p>
          </div>
          <div className="p-4 border border-white/10 rounded bg-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Data Layer</h3>
            <p className="text-sm font-semibold text-blue-400">PostgreSQL / Supabase</p>
          </div>
        </div>

        {/* Console Output Style */}
        <div className="space-y-2 text-sm">
          <p className="text-gray-400"><span className="text-green-500">➜</span> <span className="text-white">whoami:</span> Senior Database Administrator & Non-Profit President</p>
          <p className="text-gray-400"><span className="text-green-500">➜</span> <span className="text-white">status:</span> Architecting a technical showcase...</p>
          <p className="text-gray-400"><span className="text-green-500">➜</span> <span className="text-white">latest_project:</span> <a href="https://inapinch.run" className="text-blue-400 underline underline-offset-4 decoration-blue-500/50">InAPinch.run</a></p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-600">
          <p>© 2026 M. Anderson</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-blue-500">Next.js 15</span> & <span className="text-blue-500">Cloudflare</span>
          </p>
        </div>
      </div>
    </main>
  );
}