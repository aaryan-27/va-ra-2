import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Globe,
  Users,
  Database,
  Calendar,
  Sparkles,
  Newspaper,
  Earth,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-vara-900">
          <div className="absolute inset-0 mesh-gradient"></div>
          <div className="absolute inset-0 bg-grid opacity-40"></div>
          <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px] animate-float-slow"></div>
          <div className="absolute top-[20%] right-[20%] w-20 h-20 border border-amber-500/10 rounded-2xl"></div>
          <div className="absolute bottom-[30%] left-[10%] w-16 h-16 border border-purple-500/10 rounded-xl"></div>
          <div className="absolute top-[60%] right-[10%] w-12 h-12 border border-rose-500/10 rounded-lg"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm font-medium mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles w-4 h-4"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
              Advancing Research &amp; Innovation
            </span>
          </div>
          <h1 className="font-display font-bold text-white mb-4">
            <span className="block text-7xl md:text-9xl gradient-text leading-tight">
              VA-RA
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-display font-medium text-slate-300 mb-3">
            VISENARY ANALYTICS RESEARCH ASSOCIATION
          </p>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering researchers worldwide with cutting-edge academic
            journals, AI-powered analytical tools, and collaborative conference
            platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="btn-primary group" href="/journals">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open w-5 h-5"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Explore Journals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a className="btn-secondary" href="/about">
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                5+
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">
                Academic Journals
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                1K+
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">
                Published Articles
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                50+
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">
                Conferences
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                AI
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">
                Powered Tools
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down w-6 h-6 text-slate-600"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </section>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-vara-900/50"></div>
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="relative section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group glass-card p-8 text-center hover:group-hover:shadow-amber-500/20 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open w-7 h-7 text-white"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div className="text-4xl font-display font-bold text-white mb-1">
                <span>0+</span>
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-2">
                Academic Journals
              </div>
              <div className="text-xs text-slate-500">
                Peer-reviewed publications across disciplines
              </div>
            </div>
            <div className="group glass-card p-8 text-center hover:group-hover:shadow-purple-500/20 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text w-7 h-7 text-white"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="text-4xl font-display font-bold text-white mb-1">
                <span>0+</span>
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-2">
                Published Articles
              </div>
              <div className="text-xs text-slate-500">
                Indexed and accessible research articles
              </div>
            </div>
            <div className="group glass-card p-8 text-center hover:group-hover:shadow-rose-500/20 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users w-7 h-7 text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="text-4xl font-display font-bold text-white mb-1">
                <span>0+</span>
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-2">
                Researchers
              </div>
              <div className="text-xs text-slate-500">
                Contributing researchers from around the world
              </div>
            </div>
            <div className="group glass-card p-8 text-center hover:group-hover:shadow-emerald-500/20 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe w-7 h-7 text-white"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="text-4xl font-display font-bold text-white mb-1">
                <span>0+</span>
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-2">
                Countries
              </div>
              <div className="text-xs text-slate-500">
                Global research community representation
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="relative section-container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-medium mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open w-3.5 h-3.5"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Our Publications
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Featured <span className="gradient-text">Journals</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our diverse collection of peer-reviewed academic journals
              spanning multiple research disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </div>
      </section>
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="relative section-container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 text-xs font-medium mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-database w-3.5 h-3.5"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
              Our Network
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Indexing <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Your research gets maximum visibility through our partnerships
              with leading academic databases and indexing services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"></div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                0
              </div>
              <div className="text-xs text-muted">Indexing Partners</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                50+
              </div>
              <div className="text-xs text-muted">Citation Databases</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                100%
              </div>
              <div className="text-xs text-muted">Open Access</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                Yes
              </div>
              <div className="text-xs text-muted">DOI Registration</div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative section-padding bg-vara-800/30">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="relative section-container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs font-medium mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text w-3.5 h-3.5"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              Recently Indexed
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Freshly crawled and indexed articles from our partner journals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </div>
      </section>
      <section className="relative section-padding">
        <div className="relative section-container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-3.5 h-3.5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Events
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Upcoming <span className="gradient-text">Conferences</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Join leading researchers at our upcoming academic events and
              conferences.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"></div>
        </div>
      </section>
      <section className="relative section-padding bg-vara-800/30">
        <div className="absolute inset-0 mesh-gradient opacity-50"></div>
        <div className="relative section-container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-medium mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles w-3.5 h-3.5"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
              AI-Powered
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Research <span className="gradient-text">Tools</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Supercharge your research workflow with our suite of AI-powered
              tools designed for academics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
          <div className="text-center mt-12">
            <a
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors group"
              href="/tools"
            >
              Explore All Tools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="relative section-padding">
        <div className="relative section-container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs font-medium mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-newspaper w-3.5 h-3.5"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                <path d="M18 14h-8"></path>
                <path d="M15 18h-5"></path>
                <path d="M10 6h8v4h-8V6Z"></path>
              </svg>
              Latest Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              News &amp; <span className="gradient-text">Announcements</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Stay informed about the latest developments, call for papers, and
              research breakthroughs.
            </p>
          </div>
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-rose-500/30 border-t-rose-400 rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-vara-900/50"></div>
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"></div>
        <div className="relative section-container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs font-medium mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-earth w-3.5 h-3.5"
              >
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path>
                <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Live Visitor Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Global <span className="gradient-text">Research Community</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Researchers from around the world trust VA-RA for their academic
              needs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            <button className="p-5 rounded-2xl text-center transition-all duration-300 border glass-card border-white/10 scale-105 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock w-5 h-5 mx-auto mb-2 text-emerald-400"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                0
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                Today
              </div>
            </button>
            <button className="p-5 rounded-2xl text-center transition-all duration-300 border bg-white/[0.02] border-white/5 hover:bg-white/[0.04]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up w-5 h-5 mx-auto mb-2 text-amber-400"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                0
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                7 Days
              </div>
            </button>
            <button className="p-5 rounded-2xl text-center transition-all duration-300 border bg-white/[0.02] border-white/5 hover:bg-white/[0.04]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-5 h-5 mx-auto mb-2 text-purple-400"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                0
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                This Month
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-purple-600/10 to-rose-600/10"></div>
          <div className="absolute inset-0 bg-grid opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="relative section-container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-purple-600 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rocket w-8 h-8 text-white"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Advance Your{" "}
              <span className="gradient-text">Research?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Join the VA-RA community and gain access to world-class journals,
              cutting-edge tools, and a global network of researchers dedicated
              to pushing the boundaries of knowledge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a className="btn-primary group" href="/journals">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a className="btn-secondary" href="/about">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
