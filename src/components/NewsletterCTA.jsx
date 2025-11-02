import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,114,182,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(96,165,250,0.25),transparent_40%)]" />
        <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Get episode drops and concept art</h3>
            <p className="mt-2 text-slate-300">
              Subscribe for early looks, creator Q&As, and hidden scene walkthroughs.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-emerald-500/10 p-6 text-emerald-300 ring-1 ring-emerald-500/30">
              Thanks! Check your inbox to confirm your subscription.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex w-full items-center gap-3">
              <div className="relative w-full">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@neon.city"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-white placeholder-slate-400 outline-none ring-rose-500/0 transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-rose-500 px-5 py-3 font-medium text-white shadow-lg shadow-rose-500/30 transition hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
