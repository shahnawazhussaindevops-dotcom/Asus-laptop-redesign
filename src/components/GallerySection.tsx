"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const frames = [0, 40, 80, 120, 160, 200, 239];

function frameUrl(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.041s.png`;
}

const designPoints = [
  { label: "Precision Hinge", desc: "180° lay-flat, CNC-machined steel" },
  { label: "Thermal Vents", desc: "Aerospace-inspired airflow channels" },
  { label: "Edge Detail", desc: "Diamond-cut chamfer, 0.3mm radius" },
  { label: "Keyboard", desc: "Full-depth 1.4mm travel, per-key RGB" },
  { label: "Trackpad", desc: "Haptic feedback, 130mm x 85mm" },
  { label: "Port Array", desc: "2x Thunderbolt 5, HDMI 2.1, USB-A" },
  { label: "Speaker Grille", desc: "Precision laser-drilled, 1,200 holes" },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-42%"]);

  return (
    <section id="gallery" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.04] px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Design Philosophy
            </div>
            <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
              Every detail,{" "}
              <span className="text-gradient-brand">intentional</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From the thermal vents to the hinge mechanism, nothing is left to
              chance. Seven months of industrial design. One thousand prototypes.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scroll track */}
        <div className="mt-12 relative">
          <motion.div style={{ x }} className="flex gap-5 pl-6 md:gap-7 md:pl-8">
            {frames.map((frameIndex, i) => (
              <motion.div
                key={frameIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-[16/10] h-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-card md:h-[420px] lg:h-[520px]"
                style={{ perspective: "1000px" }}
              >
                <img
                  src={frameUrl(frameIndex)}
                  alt={`ASUS Zenbook design detail ${i + 1}`}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] transition-all duration-500 group-hover:ring-primary/20 pointer-events-none" />

                {/* Hover info overlay */}
                {designPoints[i] && (
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-xs font-semibold text-white/80">
                      {designPoints[i].label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-white/50">
                      {designPoints[i].desc}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
