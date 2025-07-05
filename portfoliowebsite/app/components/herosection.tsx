"use client";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating Profile Images */}
        <div className="relative mb-8"></div>

        {/* Main Profile */}
        <div className="w-48 h-48 aspect-square mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
          <Image
            src="/fred2.jpg"
            alt="AnsFredd"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        <p className="text-gray-600 mb-2">
          Hi! I&#39;m Ansah Frederick Owusu 👋
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-pink-600">software developer</span>
          <br />
          based in Ghana.
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          I&#39;m a passionate software developer from Ghana, dedicated to
          building responsive, user-friendly web interfaces. I&#39;m currently
          growing my skills through real-world projects and constantly exploring
          modern technologies like React, Tailwind CSS, Node.js, Express.js, and
          Next.js.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            connect with me <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="px-6 py-3 bg-transparent"
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}
          >
            my resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
