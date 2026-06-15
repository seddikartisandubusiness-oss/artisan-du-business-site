"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function AnimatedCounter({ from, to, duration }: { from: number; to: number; duration: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { t, lang } = useLang();
  const gaugeRef = useRef<HTMLDivElement>(null);
  const gaugeInView = useInView(gaugeRef, { once: true });

  const titleLines = t.hero.title.split("\n");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-dark flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-20">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C8973A 1px, transparent 1px), linear-gradient(90deg, #C8973A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* Title */}
        <motion.div initial="hidden" animate="visible" className="mb-6">
          {titleLines.map((line, i) => (
            <motion.h1
              key={i}
              custom={i}
              variants={fadeUp}
              className="font-syne font-extrabold leading-[1.1] text-white block"
              style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
            >
              {line}
            </motion.h1>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-inter font-light text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Score Card */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-card-dark border border-border-dark rounded-xl p-8 max-w-lg mx-auto mb-10"
        >
          {/* Score */}
          <div className="text-center mb-6">
            <div
              className="font-syne font-bold"
              style={{ fontSize: "clamp(42px, 8vw, 72px)", color: "#B83232" }}
            >
              <AnimatedCounter from={0} to={31} duration={2} />
              <span className="text-3xl font-inter font-light text-text-muted"> / 100</span>
            </div>
            <p className="font-inter font-medium text-red-score text-base mt-1">
              {lang === "fr" ? "Zone critique" : "Critical zone"}
            </p>
          </div>

          {/* Gauge */}
          <div ref={gaugeRef} className="relative h-3 rounded-full overflow-hidden mb-8 bg-[#1E1E1E]">
            <div className="absolute left-0 top-0 h-full bg-red-score" style={{ width: "33.33%" }} />
            <div className="absolute top-0 h-full bg-[#E07B39]" style={{ left: "33.33%", width: "33.33%" }} />
            <div className="absolute top-0 h-full bg-[#3E9B5C]" style={{ left: "66.66%", right: 0 }} />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-dark"
              initial={{ left: "0%" }}
              animate={gaugeInView ? { left: "29%" } : { left: "0%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.hero.chips.map((chip, i) => (
              <Badge
                key={i}
                variant={chip.type === "amber" ? "amber" : "danger"}
                className="text-left px-3 py-2 h-auto rounded-lg text-xs font-medium leading-snug w-full justify-start"
              >
                {chip.label}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <Button
            variant="gold"
            size="lg"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 shadow-[0_4px_24px_rgba(200,151,58,0.25)] hover:shadow-[0_6px_32px_rgba(200,151,58,0.35)] transition-shadow"
          >
            {t.hero.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
