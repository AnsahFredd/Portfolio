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
    <section id="services" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-pink-600 mb-2">What I offer</p>
          <h2 className="text-4xl font-bold text-gray-900">My Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I&apos;m Frederick from Ghana, a full-stack developer who builds
            modern web and mobile solutions with Django, Next.js, and React
            Native.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeIndex === index;

            return (
              <Card
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-shadow cursor-pointer ${
                  isActive ? "bg-pink-50 shadow-lg" : "hover:shadow-md bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
