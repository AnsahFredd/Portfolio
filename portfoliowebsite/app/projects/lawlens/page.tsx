"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Zap, Shield, BarChart3, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function LawLensCaseStudy() {
  const techStack = [
    { name: "Next.js 15", icon: Globe, color: "text-blue-500" },
    { name: "Django REST", icon: Server, color: "text-green-600" },
    { name: "OpenAI GPT-4", icon: Cpu, color: "text-purple-600" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
    { name: "Tailwind 4", icon: Zap, color: "text-cyan-400" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="group flex items-center gap-2 text-foreground/70 hover:text-pink-600 transition-colors font-bold">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-600 rounded-full text-xs font-black uppercase tracking-widest border border-pink-500/20 mb-6">
                Featured Case Study
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                LawLens: <span className="text-pink-600">AI-Powered</span> Legal Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Transforming the complex landscape of legal research through 
                sophisticated Large Language Models and intuitive document analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl"
            >
              <Image 
                src="/lawlens.png" 
                alt="LawLens Platform Dashboard" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview Grid */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <Shield className="text-pink-600 h-8 w-8" />
                  The Challenge
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Legal professionals spend over 60% of their time reviewing thousands of pages for 
                  specific clauses. The challenge was to build a system that can accurately parse 
                  diverse document formats (PDF, DOCX) and provide contextually relevant legal 
                  insights without human-level fatigue or LLM hallucinations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <Zap className="text-pink-600 h-8 w-8" />
                  Technical Decisions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We chose <strong>Next.js 15</strong> for the frontend to leverage server components 
                  for SEO-friendly document previews. The backend utilizes <strong>Django REST Framework</strong> 
                  to handle complex data relationships and heavy PDF processing tasks asynchronously.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl border border-border/50">
                      <tech.icon className={`h-6 w-6 ${tech.color}`} />
                      <span className="font-bold text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <BarChart3 className="text-pink-600 h-8 w-8" />
                  Measurable Impact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-8 bg-pink-500/5 rounded-3xl border border-pink-500/10">
                    <div className="text-4xl font-black text-pink-600 mb-2">60%</div>
                    <p className="text-muted-foreground font-bold">Reduction in manual document review time</p>
                  </div>
                  <div className="p-8 bg-pink-500/5 rounded-3xl border border-pink-500/10">
                    <div className="text-4xl font-black text-pink-600 mb-2">99%</div>
                    <p className="text-muted-foreground font-bold">Accuracy in clause classification</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="p-8 bg-card border border-border/50 rounded-3xl shadow-xl sticky top-32">
                <h3 className="text-xl font-black mb-6">Project Details</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-pink-600 text-xs font-black uppercase tracking-widest mb-1">Role</dt>
                    <dd className="font-bold text-foreground">Lead Full Stack Developer</dd>
                  </div>
                  <div>
                    <dt className="text-pink-600 text-xs font-black uppercase tracking-widest mb-1">Timeline</dt>
                    <dd className="font-bold text-foreground">6 Months (Ongoing)</dd>
                  </div>
                  <div>
                    <dt className="text-pink-600 text-xs font-black uppercase tracking-widest mb-1">Status</dt>
                    <dd className="font-bold text-foreground">Production Alpha</dd>
                  </div>
                </dl>
                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-2xl py-6 font-black" onClick={() => window.open('https://lawlens.vercel.app', '_blank')}>
                    View Live Site <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Button>
                  <Button variant="outline" className="w-full border-border hover:bg-muted font-black rounded-2xl py-6" onClick={() => window.open('https://github.com/AnsahFredd/LawLens', '_blank')}>
                    View Repository
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Closing */}
        <section className="px-6 py-32 bg-muted/20 border-y border-border/50 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic">&quot;Building LawLens wasn&apos;t just about code; it was about defining the future of legal clarity.&quot;</h2>
            <Link href="/" className="inline-flex items-center gap-2 text-pink-600 font-bold hover:scale-105 transition-transform text-xl">
              Next Project: Cofuel Branding <ArrowLeft className="h-6 w-6 rotate-180" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground font-bold text-sm uppercase tracking-[0.3em]">
          &copy; 2026 AnsFredd Portfolio • Built for Next Generation
        </div>
      </footer>
    </div>
  );
}

// Fixed missing icons
function Server(props: React.SVGProps<SVGSVGElement>) {
  return <Zap {...props} />
}
function Database(props: React.SVGProps<SVGSVGElement>) {
  return <Shield {...props} />
}
