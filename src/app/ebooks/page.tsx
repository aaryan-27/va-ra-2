"use client";

import { BookMarked, Search, Loader2 } from "lucide-react";

export default function EBooks() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="fixed inset-0 mesh-gradient opacity-50 pointer-events-none"></div>
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <BookMarked className="w-4 h-4" />
            Digital Library
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            eBooks <span className="gradient-text">Library</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore our curated collection of academic and research eBooks. Read
            online or download for offline access.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search by title, author, or keyword..."
                className="w-full pl-12 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 text-sm transition-colors"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center py-20 animate-in fade-in duration-1000 delay-300">
          <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
        </div>
      </div>
    </div>
  );
}
