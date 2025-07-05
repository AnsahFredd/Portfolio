"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const projects = [
  {
    title: "Full Stack AI-powered Legal Document Intelligence Platform",
    category: "Web App",
    image: "/lawlens.png",
    type: "web",
    description:
      "An intelligent legal document analysis platform powered by AI. Features document parsing, contract analysis, and legal insights generation.",
    status: "In Progress",
    github: "https://github.com/AnsahFredd/LawLens",
    liveUrl: "https://lawlens.vercel.app",
  },
  {
    title: "Cofuel - Event Booking Web App",
    category: "Web App",
    image: "/cofuel.png",
    type: "web",
    description:
      "A full-stack event booking platform tailored for weddings, parties, and other celebrations. Users can browse events, make reservations, and manage bookings with an elegant, user-friendly interface.",
    status: "In Progress",
    github: "https://github.com/AnsahFredd/Cofuel",
    liveUrl: "https://cofuel-umber.vercel.app/",
  },
  {
    title: "Movie App",
    category: "Mobile App",
    image: "/movie.png",
    type: "mobile",
    description:
      "A sleek movie discovery app with trending movies, search functionality, and detailed movie information. Built with React Native.",
    status: "Completed",
    github: "https://github.com/AnsahFredd/movie_app",
    liveUrl: null,
  },
  {
    title: "Portfolio Website",
    category: "Web App",
    image: "/portfolio.png",
    type: "web",
    description:
      "A modern, responsive portfolio website showcasing my skills and projects. Built with Next.js and Tailwind CSS.",
    status: "Completed",
    github: "https://github.com/AnsahFredd/Portfolio",
    liveUrl: "https://portfolio-smoky-chi-16nwjts7uz.vercel.app/",
  },
];

export function PortfolioSection() {
  return (
    <section id="work" className="py-16 px-6 bg-white ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-pink-500 font-semibold uppercase tracking-wide">
            My Portfolio
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            My Latest Work
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Projects that highlight my skills in full-stack development, mobile
            apps, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="w-full h-64 relative">
                  {project.type === "mobile" ? (
                    // Mobile mockup with phone frame
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                      <div className="relative">
                        {/* Phone frame */}
                        <div className="w-32 h-56 bg-gray-900 rounded-2xl p-1 shadow-2xl">
                          <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-900 rounded-full"></div>
                        {/* Phone button */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    // Regular web project layout
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">
                      {project.title}
                    </h3>
                    {project.status === "In Progress" && (
                      <span className="flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium">
                        <Clock className="h-3 w-3" />
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    {project.category}
                  </p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Button
                        size="sm"
                        className="flex items-center gap-2 text-xs bg-pink-600 hover:bg-pink-700 text-white"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <FaGithub className="h-3 w-3" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs border-pink-600 text-pink-600 hover:bg-pink-50"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/AnsahFredd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-base font-semibold">
              Show More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
