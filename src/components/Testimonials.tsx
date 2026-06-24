"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The most impressive laptop I've used this year. The OLED display is absolutely stunning — colors pop like nothing else on the market.",
    author: "Alex Chen",
    role: "Creative Director",
    company: "Studio Form",
  },
  {
    quote: "Zero compromises. I can edit 8K video, run AI models, and still get a full day of work on a single charge. This is the new standard.",
    author: "Sarah Mitchell",
    role: "Senior Developer",
    company: "Vercel",
  },
  {
    quote: "ASUS has outdone themselves. The build quality rivals machines costing twice as much. Every detail feels intentional.",
    author: "Marcus Williams",
    role: "Product Designer",
    company: "Figma",
  },
  {
    quote: "I've been reviewing laptops for a decade. This is the first time I've felt genuinely excited about a professional machine.",
    author: "Emily Nakamura",
    role: "Tech Editor",
    company: "The Verge",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Trusted by creators
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-[1.05]">
            Loved by the{" "}
            <span className="text-gradient-brand">best</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            From designers to developers, creators worldwide are making the switch.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-white/[0.05] bg-card/50 p-6 md:p-8 transition-all duration-300 hover:border-white/[0.1] hover:bg-card glow-card"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-4 text-primary/30">
                <path d="M3 21C3 21 4 12 7 9C10 6 11 3 14 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M13 21C13 21 14 12 17 9C20 6 21 3 24 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <blockquote className="text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-xs font-semibold text-foreground">
                  {t.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
