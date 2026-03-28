"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10 w-full">
        {/* Centralized Typography */}
        <div className="text-center mb-16 space-y-6 w-full">
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

        {/* Centralized Form */}
        <Card className="w-full shadow-[0_20px_60px_-15px_rgba(236,72,153,0.1)] border-border/50 bg-card/60 backdrop-blur-2xl rounded-[3rem] overflow-hidden">
          <CardContent className="p-8 md:p-16">
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Jane Smith"
                    className="rounded-3xl bg-muted/50 border border-border h-16 px-8 focus:ring-2 focus:ring-pink-600 transition-all font-bold text-lg placeholder:text-muted-foreground/50 shadow-inner"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@innovation.com"
                    className="rounded-3xl bg-muted/50 border border-border h-16 px-8 focus:ring-2 focus:ring-pink-600 transition-all font-bold text-lg placeholder:text-muted-foreground/50 shadow-inner"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your vision..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[200px] rounded-[2rem] bg-muted/50 border border-border p-8 focus:ring-2 focus:ring-pink-600 transition-all font-bold text-lg placeholder:text-muted-foreground/50 shadow-inner resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-foreground text-background hover:bg-pink-600 hover:text-white h-20 rounded-[2rem] text-xl font-black shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-4 disabled:opacity-50 group hover:-translate-y-1"
              >
                {loading ? "Transmitting..." : "Send Message"}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
