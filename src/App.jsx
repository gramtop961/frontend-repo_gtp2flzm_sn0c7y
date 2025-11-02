import React from 'react';
import Hero3D from './components/Hero3D';
import AnimeSpotlight from './components/AnimeSpotlight';
import CharacterGrid from './components/CharacterGrid';
import NewsletterCTA from './components/NewsletterCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Cosmic backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.08),transparent_45%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-block h-3 w-3 rounded-full bg-rose-500"></span>
          <span className="font-semibold tracking-wide">ANIMA.MX</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
          <a href="#spotlight" className="hover:text-white">Spotlight</a>
          <a href="#characters" className="hover:text-white">Characters</a>
          <a href="#subscribe" className="hover:text-white">Subscribe</a>
        </nav>
        <a
          href="#subscribe"
          className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/15"
        >
          Join Free
        </a>
      </header>

      <main className="relative z-10">
        <Hero3D />
        <AnimeSpotlight />
        <CharacterGrid />
        <div id="subscribe">
          <NewsletterCTA />
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-400">
          <p>
            Built with love for anime fans. Worlds, characters, and imagery are original concepts for this demo experience.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Anima.MX</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
