"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const specs = [
  { label: "Processor", value: "Intel Core Ultra 9 285H", desc: "Up to 5.4 GHz, 16 cores, AI NPU" },
  { label: "Graphics", value: "NVIDIA GeForce RTX 4070", desc: "8GB GDDR6, ray tracing gen 3" },
  { label: "Display", value: '16" ASUS Lumina OLED', desc: "3.2K, 120Hz, 0.2ms, 100% DCI-P3" },
  { label: "Memory", value: "Up to 64GB LPDDR5X", desc: "8400MHz, dual-channel" },
  { label: "Storage", value: "Up to 4TB PCIe 5.0", desc: "NVMe M.2, seq. read 10,000MB/s" },
  { label: "Battery", value: "96Wh Li-Polymer", desc: "Up to 18 hours, 65W fast charge" },
  { label: "Chassis", value: "Precision Aluminum", desc: "CNC-milled, 14.9mm thin, 1.35kg" },
  { label: "Audio", value: "Harman Kardon", desc: "Dolby Atmos, 4-speaker array" },
  { label: "Connectivity", value: "Wi-Fi 7 + Bluetooth 5.4", desc: "Intel BE200, 6GHz band" },
];

const highlights = [
  { number: "3.2K", label: "OLED Resolution", detail: "120Hz variable refresh" },
  { number: "14.9mm", label: "Ultra-Slim Profile", detail: "CNC unibody aluminum" },
  { number: "18h", label: "Battery Life", detail: "Real-world usage" },
  { number: "99%", label: "DCI-P3 Coverage", detail: "Factory calibrated Delta E < 1" },
];

export default function SpecsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [48, 0, 0, -48]);

  return (
    <section id="specs" ref={ref} className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:py-40">
        <motion.div style={{ opacity, y }} className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.04] px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Technical Specifications
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.05]">
            Engineered to{" "}
            <span className="text-gradient-brand">transcend</span>
            <br />
            every limit
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              From the precision-milled aluminum chassis to the pixel-perfect
              OLED display, every millimeter of this machine is a statement.
              This is not an incremental update. It is a fundamental rethinking
              of what a laptop can be.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Powered by next-generation Intel Core Ultra processors and NVIDIA
              RTX graphics, it delivers desktop-class performance in a chassis
              that defies its capabilities. The thermal architecture draws
              inspiration from aerospace engineering.
            </p>
          </div>
        </motion.div>

        {/* Highlight metrics */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-white/[0.06] bg-card p-6 md:p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-gradient-brand">
                  {h.number}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-foreground">
                  {h.label}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {h.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specs grid */}
        <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-white/[0.05] bg-card/50 p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-card md:p-6 glow-card"
            >
              <div className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {spec.label}
              </div>
              <div className="mt-1.5 font-heading text-base font-semibold tracking-tight text-foreground md:text-lg">
                {spec.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {spec.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
