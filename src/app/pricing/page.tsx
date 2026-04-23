"use client";

import { Sparkles, Loader2, Users, Star, Shield, Clock } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="fixed inset-0 mesh-gradient opacity-50 pointer-events-none"></div>
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Choose Your <span className="gradient-text">Research Plan</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Unlock powerful AI-driven research tools, access premium journals, and
            accelerate your academic work with our flexible plans.
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm font-medium text-white">Monthly</span>
            <button className="relative w-14 h-7 rounded-full transition-colors duration-300 bg-slate-700">
              <div className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-lg left-1"></div>
            </button>
            <span className="text-sm font-medium text-slate-500">
              Annual<span className="ml-2 text-xs text-emerald-400 font-semibold">Save 17%</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-24">
          <div className="col-span-3 flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-amber-400" />
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-24">
            <div className="text-center p-6 rounded-2xl glass-card">
              <Users className="w-6 h-6 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-display font-bold text-white mb-1">10,000+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Active Researchers</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-card">
              <Star className="w-6 h-6 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-display font-bold text-white mb-1">4.9/5</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-card">
              <Shield className="w-6 h-6 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-display font-bold text-white mb-1">99.9%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Uptime</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass-card">
              <Clock className="w-6 h-6 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-display font-bold text-white mb-1">&lt;2 hrs</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Support Response</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group p-6 rounded-2xl glass-card cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-white list-none">
                Can I cancel my subscription anytime?
                <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Yes, you can cancel your subscription at any time. Your access
                will continue until the end of your billing period.
              </p>
            </details>
            <details className="group p-6 rounded-2xl glass-card cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-white list-none">
                Is there a free trial for Pro plan?
                <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Yes! The Pro plan comes with a 7-day free trial. No credit card
                required to start.
              </p>
            </details>
            <details className="group p-6 rounded-2xl glass-card cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-white list-none">
                What payment methods are accepted?
                <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                We accept all major credit/debit cards, UPI, net banking, and
                wallets through Razorpay's secure payment gateway.
              </p>
            </details>
            <details className="group p-6 rounded-2xl glass-card cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-white list-none">
                Can I upgrade or downgrade my plan?
                <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Absolutely. You can change your plan at any time. The price
                difference will be prorated.
              </p>
            </details>
            <details className="group p-6 rounded-2xl glass-card cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-white list-none">
                Do you offer discounts for students?
                <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Yes, we offer a 50% discount for verified students and educators.
                Contact us with your institutional email.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
