"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

import { type Project, projects } from "../data/projects";



import Link from "next/link";

export function PortfolioSection() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured).slice(0, 3); // Show top 3 max here

  return (
    <section id="work" className="py-24 px-6 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.p className="text-pink-600 font-black uppercase tracking-[0.3em] text-xs mb-3">Curated Work</motion.p>
            <motion.h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">
              Featured <span className="text-pink-600">Projects</span>
            </motion.h2>
          </div>
          <motion.p className="text-muted-foreground text-lg max-w-md font-medium leading-relaxed">
            High-performance solutions built for scale and human experience.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 mb-16">
          {/* Featured Project - Large Card */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FeaturedProjectCard project={featuredProject} />
            </motion.div>
          )}

          {/* Other Projects Grid - Elegant Standard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <StandardProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/projects" passHref>
            <Button
              className="bg-card text-foreground border-border border hover:bg-pink-600 hover:text-white hover:border-pink-600 px-8 py-6 rounded-xl text-lg font-black shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto group"
            >
              View All Projects <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col lg:flex-row rounded-4xl overflow-hidden border-border/50 bg-card/40 backdrop-blur-md hover:border-pink-500 transition-all duration-500 hover:shadow-2xl">
      {/* Padded image container to prevent clipping and make it look premium */}
      <div className="lg:w-[55%] bg-muted/30 p-8 lg:p-12 relative flex items-center justify-center shrink-0">
         <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50 group-hover:scale-[1.02] transition-transform duration-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
         </div>
         <div className="absolute top-6 left-6 z-10">
          <span className="bg-background/90 backdrop-blur-md text-foreground px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-border/50 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8 lg:p-12 flex flex-col justify-center flex-1">
        <h3 className="font-black text-foreground leading-[1.1] mb-6 tracking-tight text-3xl lg:text-4xl">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed font-medium">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="text-xs font-black text-pink-600 uppercase tracking-[0.2em] px-3 py-1.5 bg-pink-500/5 rounded-lg border border-pink-500/20">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-border/50">
          {project.slug === "lawlens" && (
            <Button 
              variant="link" 
              className="p-0 h-auto text-pink-600 font-black hover:no-underline flex items-center gap-2 group/btn uppercase tracking-widest text-sm"
              onClick={() => window.location.href = `/projects/${project.slug}`}
            >
              Case Study <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          )}
          <div className="flex gap-6 ml-auto lg:ml-0">
            <button
              className="text-xs font-black text-foreground/70 hover:text-pink-600 flex items-center gap-2 transition-colors uppercase tracking-[0.2em]"
              onClick={() => window.open(project.github || "#", "_blank")}
            >
              <FaGithub className="h-5 w-5" /> Code
            </button>
            {project.liveUrl && (
              <button
                className="text-xs font-black text-foreground/70 hover:text-pink-600 flex items-center gap-2 transition-colors uppercase tracking-[0.2em]"
                onClick={() => window.open(project.liveUrl || undefined, "_blank")}
              >
                <ExternalLink className="h-5 w-5" /> Live
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function StandardProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full flex flex-col rounded-4xl overflow-hidden border-border/50 bg-card/20 backdrop-blur-md hover:border-pink-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="p-4 pb-0 opacity-90 group-hover:opacity-100 transition-opacity">
        <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border border-border/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
           <span className="text-pink-600 text-[10px] font-black uppercase tracking-widest block mb-2">
            {project.category}
          </span>
          <h3 className="font-black text-foreground leading-tight mb-3 tracking-tight text-xl">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-sm line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
          <div className="flex gap-4">
            <button
              className="text-[10px] font-black text-foreground/70 hover:text-pink-600 flex items-center gap-2 transition-colors uppercase tracking-[0.2em]"
              onClick={() => window.open(project.github || "#", "_blank")}
            >
              <FaGithub className="h-4 w-4" /> Code
            </button>
            {project.liveUrl && (
              <button
                className="text-[10px] font-black text-foreground/70 hover:text-pink-600 flex items-center gap-2 transition-colors uppercase tracking-[0.2em]"
                onClick={() => window.open(project.liveUrl || undefined, "_blank")}
              >
                <ExternalLink className="h-4 w-4" /> Live
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
