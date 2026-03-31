"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const api_url = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const LoadingToast = toast.loading("Sending your message...");

    if (!api_url) {
      throw new Error("API URL is undefined");
    }

    try {
      const res = await fetch(api_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Sending failed");

      toast.success("Message sent successully!", { id: LoadingToast });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Try again", { id: LoadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-muted/20 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Centralized Typography */}
        <div className="text-center mb-20 space-y-6 w-full max-w-4xl mx-auto">
          <p className="inline-block px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 uppercase font-black tracking-[0.3em] text-[10px] mb-2 border border-pink-500/20">
            Next Project
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-foreground leading-[1.1] tracking-tighter">
            Let&#39;s build something <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">extraordinary</span>.
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
            Whether you have a groundbreaking idea or a complex technical 
            challenge, I&#39;m here to architect the solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block rounded-[3rem] overflow-hidden group border border-border/50 shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background/80 z-10" />
            <Image
              src="/code.jpg"
              alt="Code and Innovation"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-12 left-12 right-12 z-20 space-y-4">
              <div className="h-px w-24 bg-pink-500" />
              <h3 className="text-3xl font-black text-white tracking-tight">Elegance in <span className="text-pink-500">Efficiency</span></h3>
              <p className="text-white/80 font-medium text-lg max-w-sm leading-relaxed">
                Turning complex requirements into clean, scalable, and maintainable architectural patterns.
              </p>
            </div>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Card className="w-full h-full shadow-[0_20px_60px_-15px_rgba(236,72,153,0.1)] border-border/50 bg-card/60 backdrop-blur-2xl rounded-[3rem] overflow-hidden">
              <CardContent className="p-8 md:p-14">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Jane Smith"
                        className="rounded-2xl bg-muted/30 border border-border h-14 px-6 focus:ring-2 focus:ring-pink-600 transition-all font-bold text-base placeholder:text-muted-foreground/40 shadow-sm"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@innovation.com"
                        className="rounded-2xl bg-muted/30 border border-border h-14 px-6 focus:ring-2 focus:ring-pink-600 transition-all font-bold text-base placeholder:text-muted-foreground/40 shadow-sm"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                      Briefing
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your vision..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[160px] rounded-3xl bg-muted/30 border border-border p-6 focus:ring-2 focus:ring-pink-600 transition-all font-bold text-base placeholder:text-muted-foreground/40 shadow-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-foreground text-background hover:bg-pink-600 hover:text-white h-16 rounded-2xl text-lg font-black shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 group hover:-translate-y-1"
                  >
                    {loading ? "Transmitting..." : "Send Message"}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
