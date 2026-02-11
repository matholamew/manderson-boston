import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    icon: "/favicon.png",
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
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-display font-bold text-xl text-primary tracking-tight">
              <span className="text-accent">M</span>anderson
            </div>
            <nav className="flex items-center gap-6 text-sm font-black uppercase tracking-widest text-primary">
              <a href="#evidence" className="hover:text-accent transition-colors font-sans decoration-2 underline-offset-4 hover:underline">Evidence</a>
              <a href="#contact" className="hover:text-accent transition-colors font-sans decoration-2 underline-offset-4 hover:underline">Contact</a>
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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
