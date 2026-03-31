"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 bg-background border-t border-border/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-3xl font-black text-foreground mb-4 italic tracking-tighter">
            AnsFredd<span className="text-pink-600">.</span>
          </div>

          <div className="flex items-center justify-center space-x-3 text-muted-foreground mb-8 font-bold text-lg">
            <Mail className="h-5 w-5 text-pink-600" />
            <span>ansahfredrick01@gmail.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-gray-500 text-xl">
            <a
              href="https://github.com/AnsahFredd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ansah-fredrick-owusu-709654394"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border/50 text-base text-muted-foreground font-bold">
          <p>© {year} AnsFredd • Architecting the Future.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 uppercase tracking-widest text-[10px] sm:text-xs">
            <Link href="/privacy" className="hover:text-pink-600 transition-colors">
              Privacy
            </Link>
            <Link href="/#contact" className="hover:text-pink-600 transition-colors">
              Connect
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
