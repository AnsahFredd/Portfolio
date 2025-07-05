"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-white border-t">
      <div className="max-w-6xl mx-auto">
        {/* Brand and Contact */}
        <div className="text-center mb-8">
          <div className="text-2xl font-bold text-gray-900 mb-2">
            AnsFredd<span className="text-pink-500">.</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <Mail className="h-4 w-4" />
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
              href="https://www.linkedin.com/in/ansah-frederick-8a63b126b"
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

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-sm text-gray-600">
          <p>© {year} AnsFredd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Connect with me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
