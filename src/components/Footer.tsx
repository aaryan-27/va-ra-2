import Link from "next/link";
import { Mail, MapPin, MessageCircle, Briefcase, PlayCircle, BookOpen, Newspaper, Calendar, Wrench, Building2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] to-black border-t border-white/10 mt-auto">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          <div className="lg:col-span-2">
            <Link className="inline-flex items-center gap-3 mb-5 group" href="/">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-purple-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
                <span className="font-display font-bold text-white text-xl">V</span>
              </div>
              <span className="font-display font-bold text-2xl bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">VA-RA</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              <span className="font-semibold text-slate-300">VISENARY ANALYTICS</span> RESEARCH ASSOCIATION — Empowering researchers worldwide with cutting-edge journals, AI-powered tools, and collaborative platforms.
            </p>
            <div className="space-y-3 mb-7">
              <a href="mailto:info@va-ra.co" className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-amber-600 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                info@va-ra.co
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                Amritsar, Punjab, India
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300" aria-label="Twitter">
                <MessageCircle className="w-4.5 h-4.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300" aria-label="LinkedIn">
                <Briefcase className="w-4.5 h-4.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300" aria-label="YouTube">
                <PlayCircle className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Explore
            </h4>
            <ul className="space-y-3">
              <li><Link className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 group" href="/journals"><BookOpen className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />Journals</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 group" href="/news"><Newspaper className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />News</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 group" href="/conferences"><Calendar className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />Conferences</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 group" href="/tools"><Wrench className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />Tools</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 group" href="/ebooks"><Building2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />E-Books</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Company
            </h4>
            <ul className="space-y-3">
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/about">About Us</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/team">Our Team</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/pricing">Pricing</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/changelogs">Changelog</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/about#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Legal
            </h4>
            <ul className="space-y-3">
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/terms">Terms of Service</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/policy">Payment Policy</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" href="/doi-policy">DOI Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-purple-500/10 border border-amber-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Stay Updated</h4>
                  <p className="text-sm text-slate-400">Subscribe for latest research updates and announcements</p>
                </div>
              </div>
              <form className="flex gap-2 w-full md:w-auto">
                <input type="email" placeholder="your@email.com" required className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all" />
                <button type="submit" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold hover:from-amber-500 hover:to-orange-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center gap-2 disabled:opacity-70">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Global Offices
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "Amritsar", region: "India (HQ)", address: "Sharma Tower, 24, Dhawan Complex, Street No. 4, Vijay Nagar, Batala Road, Punjab - 143001" },
              { name: "Brampton", region: "Canada", address: "98 Madison St, L6S3C5 Ontario" },
              { name: "Sacramento", region: "USA", address: "3700 Abshire Ave, CA 95835" },
              { name: "Victoria", region: "Australia", address: "618 Armstrong Road, Wyndham Vale, 3024" },
              { name: "Auckland", region: "New Zealand", address: "3 Ellerslie Park Road, Ellerslie" },
              { name: "Upper Darby", region: "USA", address: "18 S Brighton Ave, PA 19082" }
            ].map((office) => (
              <div key={office.name} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-default">
                <p className="font-semibold text-sm text-white">{office.name}</p>
                <p className="text-xs text-amber-500 font-medium mb-1">{office.region}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 mb-10 mt-10">
          {[
            { value: "50+", label: "Journals Published" },
            { value: "10K+", label: "Researchers" },
            { value: "25+", label: "Countries" },
            { value: "100+", label: "AI Tools" }
          ].map((stat, idx) => (
            <div key={idx} className={`text-center ${idx > 0 ? "border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-4" : ""}`}>
              <div className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-sm text-slate-400">© 2026 VA-RA — All rights reserved.</p>
            <div className="hidden md:flex items-center gap-1.5 text-sm text-slate-400">
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>Powered by AI
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current mx-1" /> for the research community
          </div>
        </div>
      </div>
    </footer>
  );
}
