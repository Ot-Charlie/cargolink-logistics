"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = ["Services", "Solutions", "Tracking"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className="fixed top-4 z-50 w-[80%] left-1/2 -translate-x-1/2">
      {/* Navbar */}
      <nav className={`w-full px-6 py-2 rounded-[75px] border transition-all duration-300 ${
        scrolled
          ? "bg-background border-background shadow-md"
          : "bg-background/20 backdrop-blur-md border-background/20"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Cargolink logo"
              width={32}
              height={32}
              loading="eager"
            />
            <span className="text-xl font-bold font-urbanist">
              <span className={scrolled ? "text-text-heading" : "text-background"}>CARGO</span>
              <span className="text-accent">LINK</span>
            </span>
          </div>

          {/* Desktop links — hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-text-heading font-inter text-base font-medium hover:text-accent transition-colors"
              >
                {link}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="text-background font-inter text-base font-medium bg-text-heading rounded-lg w-35 h-12 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger button — hidden on desktop */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
          >
            {isOpen ? (
              <Image src="/close.svg" alt="Close menu" width={20} height={20} />
            ) : (
              <Image
                src="/hamburg.svg"
                alt="Open menu"
                width={22}
                height={22}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown — mobile only */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background rounded-2xl py-4 px-6 flex flex-col gap-4 shadow-md z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-text-heading font-inter text-base font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="text-background font-inter text-base font-medium bg-text-heading rounded-lg px-6 py-3 w-fit mx-auto hover:opacity-90 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
}