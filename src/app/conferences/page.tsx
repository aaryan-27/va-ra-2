"use client";

import { Calendar, Search } from "lucide-react";

export default function Conferences() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative section-padding pb-16">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative section-container">
          <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-4">
              <Calendar className="w-3.5 h-3.5" />
              Academic Events
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              <span className="gradient-text">Conferences</span> &amp; Events
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Discover and participate in academic conferences, symposiums, and
              workshops organized by our research community.
            </p>
          </div>
          
          <div className="mt-10 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search conferences..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  All
                </button>
                <button className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all bg-white/5 text-slate-400 border border-white/10 hover:text-white">
                  Upcoming
                </button>
                <button className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all bg-white/5 text-slate-400 border border-white/10 hover:text-white">
                  Ongoing
                </button>
                <button className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all bg-white/5 text-slate-400 border border-white/10 hover:text-white">
                  Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-24">
        <div className="space-y-6 animate-in fade-in duration-1000 delay-300">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card p-8 animate-pulse">
              <div className="h-6 bg-white/5 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-white/5 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-white/5 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
