"use client";

import {
  Sparkles,
  ArrowRight,
  Type,
  FileSearch,
  BarChart3,
  Search,
  Brain,
  PenTool,
  Zap,
  Lightbulb,
  FileText,
  Heading,
} from "lucide-react";

export default function Tools() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative section-padding pb-16">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative section-container">
          <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Features
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Research <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Supercharge your research workflow with our growing suite of
              AI-powered tools designed specifically for academic researchers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-amber-500/20 text-amber-300 border border-amber-500/30">
              All Tools
            </button>
            {["Writing", "Analytics", "AI", "Organization"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pb-24">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="relative p-8 md:p-12 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-purple-500/5 to-transparent overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  NEW — AI-Powered
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                  AI Writing Tool
                </h2>
                <p className="text-slate-400 max-w-lg mb-6">
                  A full-featured document editor like MS Word — with AI-powered
                  content generation, grammar fixing, tone rewriting, tables,
                  formatting, export, and auto-save. Write smarter, publish
                  faster.
                </p>
                <a
                  href="/tools/writer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-purple-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  Open AI Writer
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="w-64 h-48 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 border-b border-white/5 pb-2">
                  <div className="w-3 h-3 rounded bg-amber-500/20"></div>
                  <div className="w-3 h-3 rounded bg-purple-500/20"></div>
                  <div className="w-3 h-3 rounded bg-emerald-500/20"></div>
                  <span className="ml-auto">AI Writer</span>
                </div>
                <div className="space-y-1.5 flex-1 mt-2">
                  <div className="h-2 bg-white/10 rounded w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded w-full"></div>
                  <div className="h-2 bg-white/10 rounded w-5/6"></div>
                  <div className="h-2 bg-amber-500/20 rounded w-2/3 mt-3"></div>
                  <div className="h-2 bg-white/10 rounded w-full"></div>
                  <div className="h-2 bg-white/10 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <ToolCard
            title="Grammar Checker"
            category="Writing"
            status="Available"
            icon={<Type className="w-7 h-7 text-amber-400" />}
            link="/tools/grammar"
            description="AI-powered grammar, punctuation, and style checker specifically tuned for academic and research writing. Get instant suggestions to improve clarity and readability."
          />
          <ToolCard
            title="Citation Generator"
            category="Writing"
            status="Available"
            icon={<FileSearch className="w-7 h-7 text-amber-400" />}
            link="/tools/citation"
            description="Generate properly formatted citations in APA, MLA, Chicago, Harvard, IEEE & Vancouver styles. Manual entry or AI-powered auto-parsing from DOI/URL."
          />
          <ToolCard
            title="Research Analytics Dashboard"
            category="Analytics"
            status="Coming Soon"
            icon={<BarChart3 className="w-7 h-7 text-amber-400" />}
            description="Visualize research trends, citation networks, and impact metrics. Track the influence of publications across our journal network."
          />
          <ToolCard
            title="Plagiarism Detector"
            category="Writing"
            status="Coming Soon"
            icon={<Search className="w-7 h-7 text-amber-400" />}
            description="Check your manuscripts against millions of academic sources, web pages, and publications to ensure originality before submission."
          />
          <ToolCard
            title="AI Writing Assistant"
            category="AI"
            status="Available"
            icon={<Brain className="w-7 h-7 text-amber-400" />}
            link="/tools/writer"
            description="Full-featured AI writing tool like MS Word — with formatting, tables, export, and AI-powered content generation, grammar fixing, rewriting, and more."
          />
          <ToolCard
            title="Reference Manager"
            category="Organization"
            status="Coming Soon"
            icon={<PenTool className="w-7 h-7 text-amber-400" />}
            description="Organize, annotate, and manage your research references. Import from databases, generate bibliographies, and collaborate with team members."
          />
          <ToolCard
            title="Data Visualization Studio"
            category="Analytics"
            status="Coming Soon"
            icon={<Sparkles className="w-7 h-7 text-amber-400" />}
            description="Create publication-ready charts, graphs, and visualizations from your research data. Supports multiple formats and statistical plots."
          />
          <ToolCard
            title="Manuscript Formatter"
            category="Writing"
            status="Coming Soon"
            icon={<Zap className="w-7 h-7 text-amber-400" />}
            description="Automatically format your manuscript to meet the submission guidelines of any journal in our network. One-click formatting for instant compliance."
          />
          <ToolCard
            title="Research Idea Generator"
            category="AI"
            status="Available"
            icon={<Lightbulb className="w-7 h-7 text-amber-400" />}
            link="/tools/ideas"
            description="Brainstorm novel research ideas for any topic or field. Get methodology suggestions, novelty analysis, difficulty ratings, and keyword recommendations."
          />
          <ToolCard
            title="Abstract Generator"
            category="Writing"
            status="Available"
            icon={<FileText className="w-7 h-7 text-amber-400" />}
            link="/tools/abstract"
            description="Generate structured academic abstracts from your research details. Supports IMRAD format with keyword extraction and word count tracking."
          />
          <ToolCard
            title="Title Optimizer"
            category="Writing"
            status="Available"
            icon={<Heading className="w-7 h-7 text-amber-400" />}
            link="/tools/title"
            description="Optimize your research paper titles for maximum impact, searchability, and clarity using advanced NLP algorithms."
          />
        </div>
      </section>
    </div>
  );
}

function ToolCard({
  title,
  category,
  status,
  icon,
  description,
  link,
}: {
  title: string;
  category: string;
  status: "Available" | "Coming Soon";
  icon: React.ReactNode;
  description: string;
  link?: string;
}) {
  const isAvailable = status === "Available";
  return (
    <div className={`glass-card p-8 group ${!isAvailable ? "opacity-80" : ""}`}>
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-lg font-display font-bold text-white">
              {title}
            </h3>
            <span
              className={`px-2 py-0.5 rounded-full text-xs border ${
                isAvailable
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-400 border-amber-500/20"
              }`}
            >
              {status}
            </span>
          </div>
          <span className="inline-block px-2 py-0.5 rounded bg-white/5 text-xs text-slate-400 mb-3">
            {category}
          </span>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            {description}
          </p>
          {isAvailable && link && (
            <a
              href={link}
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              Launch Tool
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
