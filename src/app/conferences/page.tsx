"use client";

import { Calendar, Search, MapPin, ExternalLink, Star } from "lucide-react";
import data from "../../data/conferences.json";

export default function Conferences() {
  const conferences = data.conferences;

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
          {conferences.map((conf) => (
            <div key={conf.id} className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${conf.status === 'upcoming' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : conf.status === 'ongoing' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                      {conf.status.charAt(0).toUpperCase() + conf.status.slice(1)}
                    </span>
                    {conf.featured && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1 uppercase tracking-wider">
                        <Star className="w-3 h-3 fill-current" /> Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{conf.title}</h3>
                  <p className="text-slate-400 mb-4">{conf.description}</p>
                </div>
                
                <div className="md:text-right shrink-0">
                  <div className="inline-flex flex-col gap-1 items-start md:items-end p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-sm text-white font-medium">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      {new Date(conf.startDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {conf.location}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-400 pt-4 border-t border-white/10 mt-4">
                <div className="flex items-center gap-2">
                   <strong>Venue:</strong> {conf.venue}
                </div>
                {conf.website && (
                  <a href={conf.website} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
