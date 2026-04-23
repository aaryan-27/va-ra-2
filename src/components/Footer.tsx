import Link from "next/link";
import { Mail, MapPin, BookOpen, Newspaper, Calendar, Wrench, Building2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border-t border-[var(--glass-border)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          <div className="lg:col-span-2">
            <Link className="inline-flex items-center gap-3 mb-5 group" href="/">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-purple-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
                <span className="font-display font-bold text-white text-xl">V</span>
              </div>
              <span className="font-display font-bold text-2xl bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
                VA-RA
              </span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-sm">
              <span className="font-semibold text-[var(--text-secondary)]">VISENARY ANALYTICS</span> RESEARCH ASSOCIATION — Empowering researchers worldwide with cutting-edge journals, AI-powered tools, and collaborative platforms.
            </p>
            <div className="space-y-3 mb-7">
              <a href="mailto:info@va-ra.co" className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-amber-600 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                info@va-ra.co
              </a>
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                Amritsar, Punjab, India
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-amber-600 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-[var(--text-primary)] text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Explore
            </h4>
            <ul className="space-y-3">
              <li><Link className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200 group" href="/journals"><BookOpen className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />Journals</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200 group" href="/news"><Newspaper className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />News</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200 group" href="/conferences"><Calendar className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />Conferences</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200 group" href="/tools"><Wrench className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />Tools</Link></li>
              <li><Link className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200 group" href="/ebooks"><Building2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-500 transition-colors" />E-Books</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[var(--text-primary)] text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Company
            </h4>
            <ul className="space-y-3">
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/about">About Us</Link></li>
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/team">Our Team</Link></li>
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/pricing">Pricing</Link></li>
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/changelogs">Changelog</Link></li>
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/about#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[var(--text-primary)] text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Legal
            </h4>
            <ul className="space-y-3">
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/terms">Terms of Service</Link></li>
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/policy">Payment Policy</Link></li>
              <li><Link className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-1 transition-all duration-200" href="/doi-policy">DOI Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-purple-500/10 border border-amber-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[var(--text-primary)] text-base">Stay Updated</h4>
                  <p className="text-sm text-[var(--text-muted)]">Subscribe for latest research updates and announcements</p>
                </div>
              </div>
              <form className="flex gap-2 w-full md:w-auto">
                <input type="email" placeholder="your@email.com" required className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white/60 border border-[var(--glass-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-amber-500/50 focus:bg-white transition-all" />
                <button type="submit" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold hover:from-amber-500 hover:to-orange-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center gap-2 disabled:opacity-70">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="font-display font-bold text-[var(--text-primary)] text-sm uppercase tracking-wide mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Global Offices
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { city: "Amritsar", country: "India (HQ)", address: "Sharma Tower, 24, Dhawan Complex, Street No. 4, Vijay Nagar, Batala Road, Punjab - 143001" },
              { city: "Brampton", country: "Canada", address: "98 Madison St, L6S3C5 Ontario" },
              { city: "Sacramento", country: "USA", address: "3700 Abshire Ave, CA 95835" },
              { city: "Victoria", country: "Australia", address: "618 Armstrong Road, Wyndham Vale, 3024" },
              { city: "Auckland", country: "New Zealand", address: "3 Ellerslie Park Road, Ellerslie" },
              { city: "Upper Darby", country: "USA", address: "18 S Brighton Ave, PA 19082" },
            ].map((office) => (
              <div key={office.city} className="p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                <p className="font-semibold text-sm text-[var(--text-primary)]">{office.city}</p>
                <p className="text-xs text-amber-600 font-medium mb-1">{office.country}</p>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] mb-10 mt-10">
          <div className="text-center">
            <div className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">50+</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Journals Published</div>
          </div>
          <div className="text-center border-t md:border-t-0 md:border-l border-[var(--glass-border)] pt-3 md:pt-0 md:pl-4">
            <div className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Researchers</div>
          </div>
          <div className="text-center border-t md:border-t-0 md:border-l border-[var(--glass-border)] pt-3 md:pt-0 md:pl-4">
            <div className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">25+</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Countries</div>
          </div>
          <div className="text-center border-t md:border-t-0 md:border-l border-[var(--glass-border)] pt-3 md:pt-0 md:pl-4">
            <div className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">100+</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">AI Tools</div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-sm text-[var(--text-muted)]">© 2026 VA-RA — All rights reserved.</p>
            <div className="hidden md:flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>Powered by AI
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
            Made with<span className="mx-1 text-red-500"><Heart className="w-4 h-4 fill-current" /></span>for the research community
          </div>
        </div>
      </div>
    </footer>
  );
}
