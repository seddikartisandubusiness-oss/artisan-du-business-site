"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { Separator } from "@/components/ui/separator";

const badgeStyles = [
  { bg: "#F0FAF4", color: "#1E6A3D", border: "#A7D9B8" },
  { bg: "#FBF8F3", color: "#854F0B", border: "#E2C98B" },
  { bg: "#F5F3FF", color: "#4B3FA0", border: "#C4BBF0" },
];

export default function HowItWorks() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-syne font-bold text-dark text-center mb-16"
          style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
        >
          {t.how.title}
        </motion.h2>

        <div className="flex flex-col gap-0">
          {t.how.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex gap-6 items-start py-8">
                {/* Left: number + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-sm z-10"
                    style={{ backgroundColor: "#0E0E0E", border: "2px solid #C8973A", color: "#C8973A" }}
                  >
                    {step.num}
                  </div>
                  {i < t.how.steps.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ backgroundColor: "rgba(200,151,58,0.25)", minHeight: "32px" }} />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3
                      className="font-syne font-bold text-dark"
                      style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="px-3 py-1 rounded-full font-inter font-semibold text-xs border"
                      style={{
                        backgroundColor: badgeStyles[i].bg,
                        color: badgeStyles[i].color,
                        borderColor: badgeStyles[i].border,
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <p className="font-inter font-light text-text-muted leading-relaxed text-[15px]">
                    {step.body}
                  </p>
                </div>
              </div>

              {i < t.how.steps.length - 1 && (
                <Separator className="bg-[#F0EDE8] ml-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
