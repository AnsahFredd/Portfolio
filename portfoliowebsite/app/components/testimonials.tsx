"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Kwame Osei",
    role: "Founder, LawLens",
    text: "Ansah fundamentally changed how we handle our platform's architecture. His ability to translate complex AI requirements into a seamless user experience is unmatched.",
  },
  {
    name: "Sarah Mensah",
    role: "Product Manager, Cofuel",
    text: "Working with Ansah is a breath of fresh air. He doesn't just write code; he understands the business goals and engineers solutions that actually scale. The event platform he built for us is flawless.",
  },
  {
    name: "David Chen",
    role: "Lead Designer, MovieX",
    text: "I've worked with many developers, but Ansah's attention to UI detail and motion graphics in React Native is top-tier. He brought my Figma designs to life perfectly.",
  },
  {
    name: "Akua Danso",
    role: "CEO, TechNova Solutions",
    text: "From frontend polish to backend optimization, Ansah delivered a full-stack solution that exceeded our expectations. Highly professional and always communicative.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pink-600 font-black uppercase tracking-[0.3em] text-xs mb-3"
          >
            Client Feedback
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
          >
            What People Say
          </motion.h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group py-12">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
              <TestimonialCard key={`testimonial-${idx}`} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <Card className="w-[350px] md:w-[450px] p-8 shrink-0 flex flex-col justify-between bg-card/50 backdrop-blur-md border-border/50 rounded-3xl hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 whitespace-normal h-full">
      <div>
        <div className="flex text-pink-500 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="text-muted-foreground leading-[1.7] text-lg font-medium italic mb-8">
          &quot;{text}&quot;
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-black text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-foreground font-bold">{name}</h4>
          <p className="text-muted-foreground text-sm font-medium">{role}</p>
        </div>
      </div>
    </Card>
  );
}
