"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Intel", slug: "intel" },
  { name: "NVIDIA", slug: "nvidia" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Harman Kardon", slug: "harmankardon" },
  { name: "Dolby", slug: "dolby" },
  { name: "Adobe", slug: "adobe" },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-8">
        <div className="text-center">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            Powered by industry leaders
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 items-center gap-x-8 gap-y-8 md:grid-cols-6 md:gap-x-12">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center"
            >
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}/666`}
                alt={logo.name}
                className="h-6 md:h-7 opacity-40 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
