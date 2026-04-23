"use client";

import { Newspaper, Search, ArrowRight } from "lucide-react";
import data from "../../data/news.json";

export default function News() {
  const newsItems = data.news;

  return (
    <div className="min-h-screen pt-24">
      <section className="relative section-padding pb-16">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative section-container">
          <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs font-medium mb-4">
              <Newspaper className="w-3.5 h-3.5" />
              Stay Informed
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              News &amp; <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Latest announcements, call for papers, research breakthroughs, and
              updates from the VA-RA community.
            </p>
          </div>
          
          <div className="mt-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500/50 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-all bg-rose-500/20 text-rose-300 border border-rose-500/30">
                All
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-300">
          {newsItems.map((item) => (
            <div key={item.id} className="glass-card p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {item.category || "Announcement"}
                </span>
                <span className="text-xs text-slate-500">
                  {new Date(item.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-3 flex-1">
                {item.excerpt || item.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."}
              </p>
              
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors group-hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
