"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiGithub,
  SiFlutter,
  SiDart
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <SiNextdotjs className="text-foreground" />, name: "Next.js" },
      { icon: <SiFlutter className="text-sky-400" />, name: "Flutter" },
      { icon: <SiDart className="text-blue-500" />, name: "Dart" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
      { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3 className="text-blue-600" />, name: "CSS3" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-600" />, name: "Express.js" },
      { icon: <SiDjango className="text-green-700" />, name: "Django" },
      { icon: <FaPython className="text-blue-500" />, name: "Python" },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    ]
  },
  {
    title: "Tools & Cloud",
    skills: [
      { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
      { icon: <SiGithub className="text-gray-800" />, name: "GitHub" },
      { icon: <SiVercel className="text-foreground" />, name: "Vercel" },
      { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    ]
  }
];

export default function SkillsTabs() {
  return (
    <div className="mt-16 space-y-16">
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex}>
          <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
             <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
             {category.title}
          </h4>
          <div className="flex flex-wrap gap-4">
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex items-center gap-3 px-5 py-4 bg-card border border-border/50 rounded-2xl hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 backdrop-blur-sm relative z-10">
                  <div className="text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 filter drop-shadow-sm shrink-0">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-bold text-foreground tracking-tight">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
