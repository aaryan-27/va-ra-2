"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-500 bg-transparent ${
          mounted ? "translate-y-0" : "-translate-y-[100px]"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <Link className="flex items-center gap-3 group" href="/">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center font-display font-bold text-white text-lg overflow-hidden">
                <span className="relative z-10">V</span>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl tracking-tight">
                  VA-RA
                </span>
                <span className="hidden sm:block text-[10px] text-slate-500 leading-none tracking-widest uppercase">
                  VISENARY ANALYTICS RESEARCH ASSOCIATION
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <div className="relative group">
                <button className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 text-slate-400 group-hover:text-white">
                  Explore
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-xl w-48 overflow-hidden py-2">
                    <Link href="/journals" className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Journals</Link>
                    <Link href="/news" className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">News</Link>
                    <Link href="/conferences" className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Conferences</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 text-slate-400 group-hover:text-white">
                  Resources
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-xl w-48 overflow-hidden py-2">
                    <Link href="/tools" className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">AI Tools</Link>
                    <Link href="/ebooks" className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">E-Books</Link>
                  </div>
                </div>
              </div>
              <Link
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white"
                href="/pricing"
              >
                <span className="relative z-10">Pricing</span>
              </Link>
              <Link
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white"
                href="/about"
              >
                <span className="relative z-10">About</span>
              </Link>
              <div className="relative group">
                <button className="relative px-4 py-2 rounded-lg text-sm font-medium text-slate-400 group-hover:text-white transition-all duration-300 flex items-center gap-1">
                  Policy
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-xl w-48 overflow-hidden py-2">
                    <span className="block px-4 py-2 text-sm text-slate-500 cursor-not-allowed">Privacy Policy</span>
                    <span className="block px-4 py-2 text-sm text-slate-500 cursor-not-allowed">Terms of Service</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 animate-pulse"></div>
              <button className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
