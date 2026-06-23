"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const TOTAL_FRAMES = 240;

const heroTexts = [
  { id: 0, range: [0, 0.08], line1: "Transcend", line2: "Boundaries" },
  { id: 1, range: [0.08, 0.25], line1: "Precision", line2: "Engineered" },
  { id: 2, range: [0.25, 0.45], line1: "Ultimate", line2: "Performance" },
  { id: 3, range: [0.45, 0.65], line1: "AI-Powered", line2: "Intelligence" },
  { id: 4, range: [0.65, 0.85], line1: "Designed", line2: "to Inspire" },
  { id: 5, range: [0.85, 1], line1: "Yours", line2: "Now" },
];

function frameUrl(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.041s.png`;
}

export default function ScrollCanvas() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [loaded, setLoaded] = useState(0);
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
    const imgs: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        count++;
        setLoaded(count);
        if (i === 0) {
          imagesRef.current = imgs;
          setReady(true);
        }
      };
      img.onerror = () => {
        if (i === 0) {
          imagesRef.current = imgs;
          setReady(true);
        }
      };
      img.src = frameUrl(i);
      imgs[i] = img;
    }
  }, []);

  useEffect(() => {
    if (!ready) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const images = imagesRef.current;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function drawFrame(index: number) {
      if (!canvas || !ctx) return;
      const img = images[index];
      if (!img) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, sx, sy, sw, sh);
    }

    function updateFrame() {
      if (!canvas) return;
      const scrollTop = window.scrollY;
      const section = sectionRef.current;
      if (!section) return;
      const heroHeight = section.offsetHeight;
      const scrollable = heroHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(scrollTop / scrollable, 1);
      const index = Math.min(
        Math.floor(p * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      setProgress(p);
      setActiveTextId(getActiveText(p).id);

      if (index !== frameRef.current) {
        frameRef.current = index;
        drawFrame(index);
      }
    }

    drawFrame(0);
    frameRef.current = 0;
    updateFrame();
    window.addEventListener("scroll", updateFrame, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateFrame);
    };
  }, [ready, getActiveText]);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen w-full bg-black overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          aria-label="ASUS laptop animation sequence"
        />

        {/* Animated text overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative text-center">
            {heroTexts.map((t) => (
              <div
                key={t.id}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                  activeTextId === t.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-[0.97]"
                }`}
              >
                <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                  {t.line1}
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
                    {t.line2}
                  </span>
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient + Gemini logo mask */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-32 bg-gradient-to-l from-black/90 via-black/60 to-transparent" />

        {/* Scroll progress indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
            Scroll to explore
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        {/* Loading overlay */}
        {!ready && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-background">
            <div className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Loading Experience
            </div>
            <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${(loaded / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              {Math.round((loaded / TOTAL_FRAMES) * 100)}%
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
