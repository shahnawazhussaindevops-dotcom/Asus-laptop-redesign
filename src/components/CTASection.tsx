"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/[0.04] via-accent/[0.02] to-transparent blur-3xl" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center relative"
        >
          {/* Icon */}
          <div className="mx-auto mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 ring-1 ring-primary/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>

          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.05]">
            Own the{" "}
            <span className="text-gradient-brand">evolution</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            Experience the pinnacle of laptop engineering. Configure your
            build and step into the future of computing. Free shipping, secure checkout.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_var(--color-primary)] cursor-pointer"
            >
              Configure Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
            <a
              href="#"
              className="inline-flex h-13 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03] px-8 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-foreground cursor-pointer"
            >
              View Models
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Free Shipping
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Secure Checkout
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9" />
                <path d="M12 6v6l4 2" />
              </svg>
              3-Year Warranty
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              30-Day Returns
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
