"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const DURATION = 10;

const heroTexts = [
  { id: 0, range: [0, 0.08], line1: "Transcend", line2: "Boundaries", tag: "Discover the new" },
  { id: 1, range: [0.08, 0.25], line1: "Precision", line2: "Engineered", tag: "Crafted for excellence" },
  { id: 2, range: [0.25, 0.45], line1: "Ultimate", line2: "Performance", tag: "Uncompromising power" },
  { id: 3, range: [0.45, 0.65], line1: "AI-Powered", line2: "Intelligence", tag: "Next-gen capabilities" },
  { id: 4, range: [0.65, 0.85], line1: "Designed", line2: "to Inspire", tag: "Form meets function" },
  { id: 5, range: [0.85, 1], line1: "Yours", line2: "Now", tag: "The future awaits" },
];

export default function ScrollCanvas() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTextId, setActiveTextId] = useState(0);

  const getActiveText = useCallback((p: number) => {
    for (const t of heroTexts) {
      if (p >= t.range[0] && p < t.range[1]) return t;
    }
    return heroTexts[heroTexts.length - 1];
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function onLoaded() {
      setReady(true);
    }

    video.addEventListener("loadeddata", onLoaded);
    if (video.readyState >= 2) {
      setReady(true);
    }

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    function update() {
      const scrollTop = window.scrollY;
      if (!section || !video) return;
      const heroHeight = section.offsetHeight;
      const scrollable = heroHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(scrollTop / scrollable, 1);

      setProgress(p);
      setActiveTextId(getActiveText(p).id);

      const time = p * DURATION;
      if (Math.abs(video.currentTime - time) > 0.01) {
        video.currentTime = time;
      }

      rafRef.current = requestAnimationFrame(update);
    }

    rafRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready, getActiveText]);

  const current = heroTexts[activeTextId];

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen w-full bg-background overflow-hidden">
        {/* Grain overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03] animate-grain">
          <div className="h-full w-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
        </div>

        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/sequence.mp4"
          preload="auto"
          muted
          playsInline
          loop={false}
          aria-label="ASUS laptop animation sequence"
        />

        {/* Ambient gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/20 to-background/60" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-radial-gradient" />

        {/* Text overlay */}
        <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl">
              <div className="overflow-hidden">
                <p className="text-[11px] font-medium tracking-[0.25em] text-white/40 uppercase mb-4 animate-fade-up" key={`tag-${current.id}`}>
                  {current.tag}
                </p>
              </div>
              <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92]">
                <span className="block overflow-hidden">
                  <span className="inline-block animate-reveal-mask" key={`l1-${current.id}`}>
                    {current.line1}
                  </span>
                </span>
                <span className="block overflow-hidden mt-1">
                  <span
                    className="inline-block animate-reveal-mask"
                    style={{ animationDelay: "0.15s" }}
                    key={`l2-${current.id}`}
                  >
                    <span className="text-gradient-brand">{current.line2}</span>
                  </span>
                </span>
              </h1>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="pointer-events-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_32px_var(--color-primary)] cursor-pointer"
                >
                  Configure Yours
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="#specs"
                  className="pointer-events-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-7 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white cursor-pointer"
                >
                  Explore Specs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[9px] font-semibold tracking-[0.3em] text-white/20 uppercase">Scroll to explore</span>
            <div className="h-10 w-[18px] rounded-full border border-white/15 flex items-start justify-center p-[3px]">
              <ScrollIndicator className="h-[6px] w-[2px] rounded-full bg-white/50" progress={progress} />
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 z-[3] h-[2px] bg-gradient-to-r from-primary via-accent to-primary/50 transition-all duration-100" style={{ width: `${progress * 100}%` }} />

        {/* Loading state */}
        {!ready && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-background">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full border-2 border-white/[0.06]" />
                <div className="absolute inset-0 rounded-full border-2 border-t-primary animate-spin" />
              </div>
              <div className="text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
                Loading Experience
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ScrollIndicator({ className, progress }: { className: string; progress: number }) {
  const maxTravel = 26;
  const y = progress * maxTravel;
  return (
    <svg width="2" height="26" viewBox="0 0 2 26" fill="none" className={className}>
      <rect x="0" y={y} width="2" height="6" rx="1" fill="currentColor" style={{ transition: "y 0.1s ease-out" }} />
    </svg>
  );
}
