"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const frames = [0, 60, 120, 180, 239];

function frameUrl(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.041s.png`;
}

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);

  return (
    <section id="gallery" ref={ref} className="border-t border-border overflow-hidden">
      <div className="py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Every Angle Considered
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Design in the details
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 md:gap-8 md:pl-8">
          {frames.map((frameIndex, i) => (
            <motion.div
              key={frameIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-[16/10] h-[280px] shrink-0 overflow-hidden rounded-xl border border-border bg-muted md:h-[380px] lg:h-[460px]"
            >
              <img
                src={frameUrl(frameIndex)}
                alt={`ASUS laptop design detail ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
