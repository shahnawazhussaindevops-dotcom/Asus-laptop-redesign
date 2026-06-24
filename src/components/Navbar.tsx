"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Specs", href: "#specs" },
  { label: "Design", href: "#gallery" },
  { label: "Configure", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "top-3 left-3 right-3 md:top-4 md:left-6 md:right-6 rounded-2xl border border-white/[0.06] bg-background/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "top-0 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 md:h-16 items-center justify-between px-5 md:px-7">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/40 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-primary/30">
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="none"
                className="text-primary"
              >
                <path d="M4 8L16 4L28 8V24L16 28L4 24V8Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M16 4V28" stroke="currentColor" strokeWidth="2" />
                <path d="M4 8L28 24" stroke="currentColor" strokeWidth="2" />
                <path d="M28 8L4 24" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-semibold tracking-tight font-heading md:text-base">
            ASUS Zenbook
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/[0.04] hover:text-foreground cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="ml-4 inline-flex h-9 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_24px_var(--color-primary)] cursor-pointer"
          >
            Buy Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/[0.06] px-5 md:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
