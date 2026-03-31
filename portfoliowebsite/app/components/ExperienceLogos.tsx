"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass } from "lucide-react";

const companies = [
  {
    name: "LivelyCura",
    logo: "/favicon.svg",   // real logo — swap path if filename changes
    icon: null,
  },
  {
    name: "Connect",
    logo: "/logo-blue.png", // real logo
    icon: null,
  },
  {
    name: "Waypik",
    logo: null,             // no logo yet — using placeholder icon
    icon: Compass,
  },
];

export function ExperienceLogos() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-background transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-foreground font-bold text-xl md:text-2xl leading-snug mb-14 max-w-lg mx-auto"
        >
          I&apos;m proud to have collaborated with some awesome companies:
        </motion.p>

        {/* Logo row — centred, 3 items */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {companies.map(({ name, logo, icon: Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              {/* Logo / placeholder icon */}
              <div className="shrink-0 w-10 h-10 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {logo ? (
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={36}
                    height={36}
                    className="object-contain w-9 h-9"
                  />
                ) : Icon ? (
                  <Icon className="w-7 h-7 text-amber-400" strokeWidth={1.5} />
                ) : null}
              </div>

              {/* Company name */}
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-semibold text-base tracking-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
