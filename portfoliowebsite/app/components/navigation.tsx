"use client";

import { ArrowRight, Moon } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-gray-900">
        AnsFredd<span className="text-pink-500">.</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-gray-700 hover:text-gray-900">
          Home
        </a>
        <a href="#about" className="text-gray-700 hover:text-gray-900">
          About me
        </a>
        <a href="#services" className="text-gray-700 hover:text-gray-900">
          Services
        </a>
        <a href="#work" className="text-gray-700 hover:text-gray-900">
          My work
        </a>
        <a href="#testimonials" className="text-gray-700 hover:text-gray-900">
          Testimonials
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Moon className="h-5 w-5" />
        </Button>
        <Button className="text-white" variant="outline">
          Connect <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}
