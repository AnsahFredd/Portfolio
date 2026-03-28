"use client";

import { useState } from "react";
import { Monitor, Smartphone, Code, Server, Database } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "I build fast, responsive websites with React and Next.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "I build cross-platform mobile apps with React Native.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "I build robust APIs using Django and Node.js.",
  },
  {
    icon: Database,
    title: "Database & API Integration",
    description: "I work with PostgreSQL, MongoDB, and third-party APIs.",
  },
  {
    icon: Code,
    title: "Full-Stack Solutions",
    description: "From frontend to backend, I deliver complete web systems.",
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
        <div className="lg:w-1/3 static lg:sticky top-32 h-fit mb-12 lg:mb-0">
          <p className="text-pink-600 font-black uppercase tracking-[0.2em] text-sm mb-4">My Expertise</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
            Technical <br className="hidden lg:block"/>Solutions
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed font-medium">
            I build modern, scalable web and mobile solutions tailored to your 
            business needs, using the latest industry-standard technologies.
          </p>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeIndex === index;

            return (
              <Card
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-500 cursor-pointer border-border/50 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/5 group rounded-3xl overflow-hidden ${
                  isActive ? "ring-2 ring-pink-500 bg-background" : "bg-card/50 backdrop-blur-sm"
                }`}
              >
                <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 text-pink-600">
                    <IconComponent className="h-8 w-8 text-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
