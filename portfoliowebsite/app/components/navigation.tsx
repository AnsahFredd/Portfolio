"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Moon } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          AnsFredd<span className="text-pink-500">.</span>
        </div>

        {/* Desktop Links */}
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

        {/* Actions (Theme + Connect) */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>
          <Button className="text-white" variant="outline">
            Connect <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 pb-4">
          <a href="#home" className="block text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="block text-gray-700 hover:text-gray-900">
            About me
          </a>
          <a
            href="#services"
            className="block text-gray-700 hover:text-gray-900"
          >
            Services
          </a>
          <a href="#work" className="block text-gray-700 hover:text-gray-900">
            My work
          </a>
          <a
            href="#testimonials"
            className="block text-gray-700 hover:text-gray-900"
          >
            Testimonials
          </a>

          {/* Optional: Mobile actions */}
          <div className="flex items-center space-x-4 mt-4">
            <Button variant="ghost" size="icon">
              <Moon className="h-5 w-5" />
            </Button>
            <Button className="text-white" variant="outline">
              Connect <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
