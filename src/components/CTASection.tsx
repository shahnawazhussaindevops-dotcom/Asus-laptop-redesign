"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Ready for the next step
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.05]">
            Own the evolution
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            Experience the pinnacle of laptop engineering. Configure your
            build and step into the future of computing.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-14 items-center justify-center rounded-lg bg-primary px-10 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              Configure Now
            </motion.a>
            <a
              href="#"
              className="inline-flex h-14 items-center justify-center rounded-lg border border-border bg-background px-10 text-sm font-semibold text-foreground transition-all hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              View Models
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
