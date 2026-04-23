"use client";

import { BookOpen, Search, Filter, Star, ArrowRight } from "lucide-react";
import data from "../../data/journals.json";

export default function Journals() {
  const journals = data.journals;

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
                  {Array.from(new Set(journals.map(j => j.category))).map(cat => (
                    <option key={cat} value={cat} className="bg-vara-800 text-white">{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-300">
          {journals.map((journal) => (
            <div key={journal.id} className="glass-card p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {journal.category}
                </span>
                {journal.featured && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1 uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-current" /> Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 line-clamp-2">
                {journal.name}
              </h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-3 flex-1">
                {journal.description}
              </p>
              
              <div className="flex flex-col gap-1 text-xs text-slate-500 mb-6">
                {journal.issn && <span><strong>ISSN:</strong> {journal.issn}</span>}
                {journal.impactFactor && <span><strong>IF:</strong> {journal.impactFactor}</span>}
              </div>
              
              <a
                href={journal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group-hover:underline"
              >
                Visit Journal Website <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
