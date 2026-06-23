"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Specs", href: "#specs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Configure", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-3 left-3 right-3 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight font-heading">
            ASUS
          </span>
          <span className="hidden text-xs font-light tracking-[0.15em] text-muted-foreground uppercase sm:block">
            Transcend
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted/50 hover:text-foreground cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="ml-2 inline-flex h-9 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 cursor-pointer"
          >
            Buy Now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border md:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
