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
  const [Loading, setLoading] = useState(false);

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
    } catch (error) {
      toast.error("Failed to send message. Try again", { id: LoadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-20 px-4`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div>
          <div className="mb-8">
            <p className="text-pink-500 uppercase font-semibold tracking-wide">
              Connect with me
            </p>
            <h2 className={`text-4xl font-bold mt-2 `}>Get in Touch</h2>
            <p className={`mt-4`}>
              I'd love to hear from you. Whether it's a project, a question, or
              just a hello — use the form below!
            </p>
          </div>
          <Card className={`shadow-lg border-none rounded-xl`}>
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={`text-sm font-medium `}>
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className={`rounded-md shadow-inner transition`}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={`text-sm font-medium`}>
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={`rounded-md shadow-inner transition`}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={`text-sm font-medium`}>
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`min-h-[150px] rounded-md shadow-inner`}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white text-base font-medium"
                >
                  {Loading ? "Sending..." : " Send Message "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Image Section */}
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            src="/code.jpg"
            alt="code"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
