"use client";

import { Target, Eye, BookOpen, Sparkles, Globe, Lightbulb, Shield, Users, Award, Building2, Mail, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative section-padding pb-16">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative section-container">
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-medium mb-4">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              About <span className="gradient-text">VA-RA</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              The VISENARY ANALYTICS RESEARCH ASSOCIATION (VA-RA) is a
              forward-thinking foundation dedicated to advancing academic research
              and innovation. We operate a network of peer-reviewed journals,
              develop AI-powered research tools, and organize international
              academic conferences.
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="section-padding bg-vara-800/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-100">
              <div className="glass-card p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-rose-500/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-amber-400" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  To democratize access to high-quality academic publishing and
                  research tools, enabling researchers worldwide to share
                  knowledge, collaborate effectively, and push the boundaries of
                  human understanding through innovation and technology.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="glass-card p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-purple-400" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  To become the leading global research association that bridges
                  traditional academic excellence with cutting-edge AI technology,
                  fostering an interconnected research ecosystem where every
                  scholar can thrive, innovate, and contribute to humanity's
                  collective knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              VA-RA operates across three core pillars to serve the global
              research community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              <div className="glass-card p-8 text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Journal Publishing
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We publish 5+ peer-reviewed academic journals across diverse
                  research disciplines, maintaining rigorous editorial standards
                  with international editorial boards.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <div className="glass-card p-8 text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  AI Research Tools
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our suite of AI-powered tools includes grammar checkers,
                  citation generators, analytics dashboards, and writing
                  assistants tailored for academic use.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="glass-card p-8 text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-500 mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  Academic Conferences
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We organize international conferences and symposiums, bringing
                  together researchers, industry leaders, and academics for
                  knowledge exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-vara-800/30">
        <div className="section-container">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              <div className="glass-card p-6 group h-full">
                <Lightbulb className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Innovation
                </h3>
                <p className="text-sm text-slate-400">
                  Pioneering new approaches in academic publishing and research
                  technology.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="glass-card p-6 group h-full">
                <Shield className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Integrity
                </h3>
                <p className="text-sm text-slate-400">
                  Upholding the highest standards of ethical research and peer
                  review.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <div className="glass-card p-6 group h-full">
                <Users className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Collaboration
                </h3>
                <p className="text-sm text-slate-400">
                  Building bridges between researchers, institutions, and
                  disciplines worldwide.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-250">
              <div className="glass-card p-6 group h-full">
                <Globe className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Accessibility
                </h3>
                <p className="text-sm text-slate-400">
                  Making quality research accessible to academics everywhere,
                  regardless of geography.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="glass-card p-6 group h-full">
                <Award className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Excellence
                </h3>
                <p className="text-sm text-slate-400">
                  Maintaining rigorous standards across all our journals and
                  platforms.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-350">
              <div className="glass-card p-6 group h-full">
                <Sparkles className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Progress
                </h3>
                <p className="text-sm text-slate-400">
                  Continuously evolving our tools and platforms to serve the
                  research community better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-vara-800/30">
        <div className="section-container">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Global <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our presence spans across multiple countries, serving researchers
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-rose-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      Headquarters
                    </h3>
                    <p className="text-xs text-amber-400">India</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p>Sharma Tower, 24, Dhawan Complex</p>
                  <p>Street No. 4, Vijay Nagar, Batala Road</p>
                  <p>Amritsar, Punjab, India -143001</p>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      Branch Office
                    </h3>
                    <p className="text-xs text-purple-400">Brampton, Canada</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p className="font-medium text-white">Gurjeet Singh</p>
                  <p className="text-xs text-slate-500">S/o S. Ajmer Singh</p>
                  <p>98 Madison st</p>
                  <p>Brampton, L6S3C5 Ontario</p>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      Branch Office
                    </h3>
                    <p className="text-xs text-emerald-400">Sacramento, USA</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p className="font-medium text-white">Amrinder Singh</p>
                  <p className="text-xs text-slate-500">S/O S. Ajmer Singh</p>
                  <p>3700 Abshire Ave</p>
                  <p>Sacramento, CA 95835</p>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      Branch Office
                    </h3>
                    <p className="text-xs text-orange-400">Victoria, Australia</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p className="font-medium text-white">Rohit Sharma</p>
                  <p className="text-xs text-slate-500">S/o Surinder Sharma</p>
                  <p>618 Armstrong Road</p>
                  <p>Wyndham Vale, Victoria 3024</p>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-red-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      Branch Office
                    </h3>
                    <p className="text-xs text-rose-400">Auckland, New Zealand</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p className="font-medium text-white">Mr. Lukesh Bansal</p>
                  <p className="text-xs text-slate-500">S/o Mr Raja Lal Bansal</p>
                  <p>3 Ellerslie park Road, Ellerslie</p>
                  <p>Auckland</p>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      Branch Office
                    </h3>
                    <p className="text-xs text-indigo-400">Upper Darby, USA</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p className="font-medium text-white">Bhupendra Singh</p>
                  <p className="text-xs text-slate-500">S/o Rulda Singh</p>
                  <p>18 S Brighton Ave</p>
                  <p>Upper Darby, PA 19082</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400">
              Have questions or want to collaborate? Reach out to us.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="glass-card p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <a href="mailto:info@va-ra.co" className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-xs text-slate-400">info@va-ra.co</p>
                </a>
                <a href="#" className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-xs text-slate-400">Global Network</p>
                </a>
                <a href="tel:+15550000000" className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-xs text-slate-400">+1 (555) 000-0000</p>
                </a>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
