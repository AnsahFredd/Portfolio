"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillsTabs from "./SkillsTabs";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50  ">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform rotate-6"></div>

              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/fred3.jpg"
                  alt="AnsFred"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Passionate Full Stack Developer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a passionate software developer with a strong focus on
                  creating user-friendly web interfaces and robust backend
                  systems. I enjoy exploring modern technologies and constantly
                  learning new frameworks to build innovative solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With expertise in both frontend and backend development, I
                  bring ideas to life through clean code, intuitive designs, and
                  seamless user experiences. I'm always excited to take on new
                  challenges and collaborate on interesting projects.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-1">
                    10+
                  </div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-1">
                    3+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </div>

          <SkillsTabs />
        </motion.div>
      </div>
    </section>
  );
}
