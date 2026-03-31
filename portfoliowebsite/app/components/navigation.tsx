"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#testimonials", label: "Reviews" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm px-6 py-4 shadow-sm border-b border-border/50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-foreground">
          AnsFredd<span className="text-pink-500">.</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle light and dark theme">
            {mounted &&
              (theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              ))}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            className="text-white bg-pink-600 hover:bg-pink-700"
            variant="default"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Connect <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 pb-4 bg-background border-t border-border/50 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center space-x-4 mt-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              className="text-white bg-pink-600 hover:bg-pink-700 w-full justify-center"
              variant="default"
              aria-label="Connect with me"
              onClick={() => {
                setIsOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Connect <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
