import React from 'react';
import { Star } from 'lucide-react';

const animes = [
  {
    title: 'Celestial Drifters',
    genre: 'Sci‑Fi • Adventure',
    image:
      'https://images.unsplash.com/photo-1609091839314-066f86d0060e?q=80&w=1600&auto=format&fit=crop',
    blurb:
      'Runaway pilots navigate singing nebulae and memory storms to reunite a scattered fleet.',
  },
  {
    title: 'Warden of Echoes',
    genre: 'Mystery • Supernatural',
    image:
      'https://images.unsplash.com/photo-1520975922284-0f8d4c1a7c7b?q=80&w=1600&auto=format&fit=crop',
    blurb:
      'In a city of mirrors, a quiet librarian catalogs ghosts that only speak in riddles.',
  },
  {
    title: 'Neon Orchard',
    genre: 'Cyberpunk • Drama',
    image:
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
    blurb:
      'Street poets hack billboards to seed gardens of light across a sleeping megacity.',
  },
  {
    title: 'Harbor of Giants',
    genre: 'Fantasy • Slice of Life',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
    blurb:
      'Fisherfolk befriend gentle titans that migrate through fog like floating islands.',
  },
];

const AnimeCard = ({ item }) => {
  return (
    <article className="group relative aspect-[4/5] w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-2xl backdrop-blur">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white">
        <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider backdrop-blur">
          <Star size={12} className="text-amber-300" />
          {item.genre}
        </div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-200/80">{item.blurb}</p>
      </div>
    </article>
  );
};

const AnimeSpotlight = () => {
  return (
    <section id="spotlight" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Spotlight Series</h2>
          <p className="mt-1 text-slate-300">A rotating gallery of original worlds and concepts.</p>
        </div>
        <div className="text-sm text-slate-400">Swipe or scroll →</div>
      </div>

      <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-2">
        {animes.map((a) => (
          <div key={a.title} className="snap-start">
            <AnimeCard item={a} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimeSpotlight;
