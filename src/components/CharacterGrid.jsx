import React from 'react';

const characters = [
  {
    name: 'Kira Aomori',
    role: 'Starway Navigator',
    color: 'from-rose-400/20 to-fuchsia-500/10',
    avatar:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop',
    quote: 'Maps are just lullabies for the afraid. I prefer the unknown.',
  },
  {
    name: 'Jun Ren',
    role: 'Echo Librarian',
    color: 'from-cyan-400/20 to-blue-500/10',
    avatar:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop',
    quote: 'Every silence is an archive. You just have to learn to read it.',
  },
  {
    name: 'Mika Sol',
    role: 'Neon Gardener',
    color: 'from-amber-400/20 to-rose-500/10',
    avatar:
      'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=800&auto=format&fit=crop',
    quote: 'We plant light where the city forgets to look.',
  },
  {
    name: 'Taro Inei',
    role: 'Harbor Watch',
    color: 'from-emerald-400/20 to-teal-500/10',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
    quote: 'If you hear the fog singing, row toward it—slowly.',
  },
];

const CharacterCard = ({ c }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-xl transition">
      <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${c.color}`} />
      <div className="relative z-10 flex items-center gap-4">
        <img
          src={c.avatar}
          alt={c.name}
          className="h-16 w-16 rounded-xl object-cover shadow-md ring-2 ring-white/20"
          loading="lazy"
        />
        <div>
          <h3 className="text-white">{c.name}</h3>
          <p className="text-sm text-slate-300">{c.role}</p>
        </div>
      </div>
      <p className="relative z-10 mt-4 text-slate-200/90">“{c.quote}”</p>
    </div>
  );
};

const CharacterGrid = () => {
  return (
    <section id="characters" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Character Gallery</h2>
      <p className="mt-1 text-slate-300">Faces and voices from our featured universes.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {characters.map((c) => (
          <CharacterCard key={c.name} c={c} />
        ))}
      </div>
    </section>
  );
};

export default CharacterGrid;
