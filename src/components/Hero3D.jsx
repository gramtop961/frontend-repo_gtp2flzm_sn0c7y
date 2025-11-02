import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-b-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6YJv1nVbWcv16O3P/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil that doesn't block the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Rocket size={14} className="text-rose-300" />
            <span className="tracking-wide text-rose-100">New • Immersive Anime Universe</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Discover Worlds Beyond Imagination
          </h1>
          <p className="mt-4 text-slate-200/90">
            Dive into a curated multiverse of anime—spotlights, characters, and scenes that feel alive. Built for fans, dreamers, and creators.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#spotlight"
              className="inline-flex items-center gap-2 rounded-xl bg-rose-500 px-5 py-3 font-medium text-white shadow-lg shadow-rose-500/30 transition hover:brightness-110"
            >
              <Play size={18} />
              Start Exploring
            </a>
            <a
              href="#characters"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              View Characters
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
