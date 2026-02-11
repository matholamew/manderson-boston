import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MANDERSON // Clinical Systems Architect",
  description: "High-integrity clinical interventions for mission-critical data infrastructure. Senior Systems Architect & DBA representing Boston Tech & Ivy.",
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
      <body className="flex flex-col min-h-full bg-background text-foreground font-serif">
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex py-4 md:py-6 h-auto max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 font-display font-bold text-xl text-primary tracking-tight group">
              <img src="/favicon.png" alt="M" className="h-8 w-8 object-contain group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">anderson</span>
            </Link>
            <nav className="flex items-center gap-8 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-primary">
              <a href="#evidence" className="hover:text-accent transition-colors font-sans py-3 px-2">Evidence</a>
              <a href="#contact" className="hover:text-accent transition-colors font-sans py-3 px-2">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-auto">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
              <p>&copy; {new Date().getFullYear()} Matthew Anderson. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/matthewandersonj/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com/matholamew" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
