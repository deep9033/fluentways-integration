
import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const nav = [
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" }
];

export const Footer = () => (
  <footer className="w-full pt-10 pb-7 border-t-4 border-accent-soft bg-gradient-to-t from-white via-accent-soft/90 to-white animate-fade-in"
    style={{ boxShadow: "0 -2px 24px 0 #6366f120" }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-5 sm:px-8 gap-8 md:gap-3">
      <div className="flex-1 mb-5 md:mb-0">
        <div className="font-playfair text-2xl font-extrabold text-accent mb-1">FluentWays<span className="ml-2 text-zinc-400 font-normal text-lg align-bottom">™</span></div>
        <div className="text-zinc-700 text-sm mb-2">1-on-1 Spoken English Coaching</div>
        <div className="text-zinc-400 text-xs">&copy; 2025 FluentWays. All rights reserved.</div>
      </div>
      <div className="flex-1 flex flex-col-reverse md:flex-row md:items-center md:justify-end gap-5 md:gap-8">
        {/* Nav */}
        <div className="flex gap-5 mb-2 md:mb-0">
          {nav.map(link => (
            <a href={link.href} key={link.name}
              className="text-zinc-600 hover:text-accent relative transition group after:opacity-0 after:group-hover:opacity-100 after:transition after:duration-200 after:bg-accent after:h-0.5 after:w-full after:absolute after:-bottom-1 after:left-0"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Social */}
        <div className="flex gap-4">
          <a href="https://instagram.com" rel="noreferrer" target="_blank"
            className="p-2 rounded-full text-accent hover:bg-accent-soft hover:text-accent transition-colors duration-200">
            <Instagram size={22} />
          </a>
          <a href="https://linkedin.com" rel="noreferrer" target="_blank"
            className="p-2 rounded-full text-accent hover:bg-accent-soft hover:text-accent transition-colors duration-200">
            <Linkedin size={22} />
          </a>
          <a href="https://facebook.com" rel="noreferrer" target="_blank"
            className="p-2 rounded-full text-accent hover:bg-accent-soft hover:text-accent transition-colors duration-200">
            <Facebook size={22} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
