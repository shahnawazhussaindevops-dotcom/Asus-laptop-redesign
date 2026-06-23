"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            The Vision
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.05]">
            Engineered to
            <span className="text-primary"> transcend </span>
            every boundary
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            <p>
              From the precision-milled aluminum chassis to the pixel-perfect
              OLED display, every millimeter of this machine is a statement.
              This is not an incremental update. It is a fundamental rethinking
              of what a laptop can be.
            </p>
            <p>
              Powered by next-generation Intel Core Ultra processors and NVIDIA
              RTX graphics, it delivers desktop-class performance in a chassis
              that defies its capabilities. The thermal architecture draws
              inspiration from aerospace engineering — keeping you in the flow,
              never waiting, never throttling.
            </p>
            <p>
              The result is a tool that disappears in your hands, leaving only
              the work. The creation. The flow state.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
