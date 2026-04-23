"use client";

import { BookOpen, Search, Filter } from "lucide-react";

export default function Journals() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative section-padding pb-16">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative section-container">
          <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-medium mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Publication Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Our <span className="gradient-text">Journals</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Browse our comprehensive collection of peer-reviewed academic
              journals covering a wide range of research disciplines.
            </p>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search journals..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <select className="pl-10 pr-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none">
                  <option value="all" className="bg-vara-800 text-white">
                    All Categories
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-300">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-3 rounded-t-2xl bg-white/5 mb-6"></div>
              <div className="h-6 bg-white/5 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-white/5 rounded mb-2"></div>
              <div className="h-4 bg-white/5 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
