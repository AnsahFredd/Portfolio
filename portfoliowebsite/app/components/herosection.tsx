"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-24 px-6 bg-background min-h-[90vh] flex items-center justify-center transition-colors duration-500 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Floating Profile Badge */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-8 p-1.5 rounded-full bg-background/50 backdrop-blur-md border border-border/50 shadow-xl flex items-center gap-4 pr-6 cursor-pointer hover:border-pink-500/30 transition-colors"
        >
            <div className="w-10 h-10 rounded-full overflow-hidden relative border border-border/50 shrink-0">
               <Image src="/fred2.jpg" alt="AnsahFredd" fill className="object-cover" />
            </div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground">
              Hello, I&#39;m Ansah
            </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-[80px] lg:text-[110px] font-black text-foreground mb-8 leading-[0.9] tracking-tighter"
        >
          Building <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">Digital</span> <br/>
          Clarity.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-12 max-w-2xl text-xl md:text-2xl font-medium leading-relaxed"
        >
          I architect high-performance web ecosystems and intuitive mobile experiences. 
          Based in Ghana, serving global innovation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            className="bg-foreground text-background hover:bg-pink-600 hover:text-white px-8 py-6 rounded-full text-lg font-black shadow-xl transition-all hover:scale-105 active:scale-95 group uppercase tracking-widest"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a Project <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            className="px-8 py-6 border-border rounded-full text-lg font-black hover:bg-muted transition-all shadow-xs uppercase tracking-widest text-foreground"
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}
          >
            Download CV <Download className="ml-3 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
