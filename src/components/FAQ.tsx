"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is the battery life under real-world usage?",
    a: "The Zenbook delivers up to 18 hours of mixed usage including web browsing, document editing, and video playback. Under heavy creative workloads (video editing, 3D rendering), expect 8-10 hours. The 96Wh battery is the largest in its class.",
  },
  {
    q: "Can I upgrade the RAM or storage after purchase?",
    a: "The RAM is soldered LPDDR5X for optimal performance and thinness, configurable up to 64GB at purchase. The SSD is a replaceable M.2 PCIe 5.0 slot, so storage can be upgraded later.",
  },
  {
    q: "Does it support external GPUs or multiple monitors?",
    a: "Yes. With dual Thunderbolt 5 ports (40Gbps) and HDMI 2.1, you can connect up to three external 4K displays or a single 8K display. Thunderbolt 5 also supports external GPU enclosures.",
  },
  {
    q: "How does the cooling system perform under sustained loads?",
    a: "The dual-fan vapor chamber system with AAS Ultra cooling maintains sustained 65W TDP on the CPU and 105W total system power. Under full load, the chassis stays below 42°C on the keyboard deck.",
  },
  {
    q: "Is the OLED display burn-in resistant?",
    a: "Yes. ASUS uses Samsung E7 OLED panels with advanced pixel shifting, automatic brightness limiting for static elements, and a vapor-deposited encapsulation layer. The display carries a 3-year burn-in warranty.",
  },
  {
    q: "What colors and configurations are available?",
    a: "Available in Ponder Blue, Celestial Silver, and Deep Black. Each color has distinct anodization and finish. Configure with Intel Core Ultra 7 or 9, up to 64GB RAM, and up to 4TB storage.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 lg:py-40 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Questions?
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-[1.05]">
            Everything you need to{" "}
            <span className="text-gradient-brand">know</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 space-y-2"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/[0.05] bg-card/30 transition-all duration-300 hover:border-white/[0.08] hover:bg-card/50"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground md:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 md:px-6 md:pb-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
