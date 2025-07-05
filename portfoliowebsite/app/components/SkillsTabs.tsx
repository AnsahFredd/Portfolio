"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
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
} from "react-icons/si";

const frontendSkills = [
  {
    icon: <FaHtml5 className="text-orange-500" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3 className="text-blue-600" />,
    name: "CSS3",
  },
  {
    icon: <FaJs className="text-yellow-500" />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-blue-600" />,
    name: "TypeScript",
  },
  {
    icon: <FaReact className="text-cyan-400" />,
    name: "React.js",
  },
  {
    icon: <SiNextdotjs className="text-black" />,
    name: "Next.js",
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
    name: "Tailwind CSS",
  },
];

const backendSkills = [
  {
    icon: <FaNodeJs className="text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <SiExpress className="text-gray-600" />,
    name: "Express.js",
  },
  {
    icon: <SiDjango className="text-green-700" />,
    name: "Django",
  },
  {
    icon: <FaPython className="text-blue-500" />,
    name: "Python",
  },
  {
    icon: <SiMongodb className="text-green-500" />,
    name: "MongoDB",
  },
];

const toolsSkills = [
  {
    icon: <FaGitAlt className="text-orange-600" />,
    name: "Git",
  },
  {
    icon: <SiGithub className="text-gray-800" />,
    name: "GitHub",
  },
  {
    icon: <SiVercel className="text-black" />,
    name: "Vercel",
  },
  {
    icon: <SiFirebase className="text-yellow-500" />,
    name: "Firebase",
  },
];

export default function SkillsTabs() {
  return (
    <div className="mt-12">
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-8 bg-gray-100 p-1 rounded-xl">
          <TabsTrigger
            value="frontend"
            className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-white font-semibold transition-all duration-300"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-white font-semibold transition-all duration-300"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            value="tools"
            className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-white font-semibold transition-all duration-300"
          >
            Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="frontend">
          <SkillGrid skills={frontendSkills} />
        </TabsContent>

        <TabsContent value="backend">
          <SkillGrid skills={backendSkills} />
        </TabsContent>

        <TabsContent value="tools">
          <SkillGrid skills={toolsSkills} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SkillGrid({
  skills,
}: {
  skills: { icon: React.ReactNode; name: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-pink-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105 ">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <p className="text-sm font-semibold text-gray-800 text-center">
              {skill.name}
            </p>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </motion.div>
      ))}
    </div>
  );
}
