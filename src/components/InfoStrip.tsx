"use client";

import { motion } from "framer-motion";

const specs = [
  { label: "Processor", value: "Intel Core Ultra 9" },
  { label: "Graphics", value: "NVIDIA GeForce RTX 40" },
  { label: "Display", value: '16" OLED 3.2K 120Hz' },
  { label: "Memory", value: "Up to 64GB DDR5" },
  { label: "Storage", value: "Up to 4TB PCIe 5.0" },
  { label: "Battery", value: "90Whrs, 16hrs" },
];

export default function InfoStrip() {
  return (
    <section id="specs" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Technical Specifications
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-12 lg:gap-x-16">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                {spec.label}
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
                {spec.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
