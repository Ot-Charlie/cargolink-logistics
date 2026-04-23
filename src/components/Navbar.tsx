"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = ["Services", "Solutions", "Tracking"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="relative w-[80%] mx-auto">
    {/* Navbar */}
    <nav className="w-full px-6 py-2 rounded-[75px] bg-white/20 backdrop-blur-md border border-white/20">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Cargolink logo" width={32} height={32} />
          <span className="text-xl font-bold font-urbanist">
            <span className="text-white">CARGO</span>
            <span className="text-accent">LINK</span>
          </span>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 cursor-pointer"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
    </nav>

    {/* Dropdown — outside nav, below it */}
    {isOpen && (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl py-4 px-6 flex flex-col gap-4 shadow-md z-50">
        {NAV_LINKS.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase()}`}
            className="text-text-primary font-inter text-base font-medium hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link}
          </Link>
        ))}
      </div>
    )}
  </div>
);
}