"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillsTabs from "./SkillsTabs";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-pink-500 font-semibold uppercase tracking-wide mb-2">
            Get to Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-56 h-56 mx-auto">
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
                <Image
                  src="/fred3.jpg"
                  alt="AnsFred"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Architecting Solutions, Not Just Apps
                </h3>
                <p className="text-muted-foreground leading-[1.6] mb-6 text-lg">
                  I don&#39;t just build apps; I architect solutions that solve
                  real-world friction. From automating legal workflows to creating
                  seamless event experiences, my focus is on bridge-building
                  between complex backend logic and human-centric design.
                </p>
                <p className="text-muted-foreground leading-[1.6] text-lg">
                  With 3+ years of experience in the React and Django ecosystems,
                  I bring ideas to life through high-performance code and 
                  intuitive interfaces. My goal is to ensure every line of code 
                  serves a purpose: making the user&#39;s life easier.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 py-6 border-y border-border/50 my-8">
                <div className="text-center group">
                  <div className="text-3xl font-extrabold text-pink-500 mb-1">
                    15+
                  </div>
                  <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-extrabold text-pink-500 mb-1">
                    3+
                  </div>
                  <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Years Exp.</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-extrabold text-pink-500 mb-1">
                    99%
                  </div>
                  <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                    Success
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Technical Arsenal
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
              The tools and technologies I use to turn vision into reality.
            </p>
          </div>

          <SkillsTabs />
        </motion.div>
      </div>
    </section>
  );
}
