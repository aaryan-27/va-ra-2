"use client";

import { BookMarked, Search, ArrowRight, Star } from "lucide-react";
import data from "../../data/ebooks.json";

export default function EBooks() {
  const ebooks = data.ebooks;

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-300">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="glass-card p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {ebook.category || "E-Book"}
                </span>
                {ebook.featured && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1 uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-current" /> Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 line-clamp-2" title={ebook.title}>
                {ebook.title}
              </h3>
              <p className="text-xs text-purple-300 mb-3 line-clamp-1" title={ebook.author}>{ebook.author}</p>
              <p className="text-sm text-slate-400 mb-4 line-clamp-3 flex-1">
                {ebook.description}
              </p>
              
              <div className="flex flex-col gap-1 text-xs text-slate-500 mb-6">
                {ebook.isbn && <span><strong>ISBN:</strong> {ebook.isbn}</span>}
                {ebook.publisher && <span><strong>Publisher:</strong> {ebook.publisher}</span>}
              </div>
              
              <a
                href={ebook.fileUrl ? `https://va-ra.co${ebook.fileUrl}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-xl transition-colors"
              >
                Read / Download <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
