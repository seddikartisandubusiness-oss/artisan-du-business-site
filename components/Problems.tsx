"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { Card, CardContent } from "@/components/ui/card";

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#C8973A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#C8973A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke="#C8973A" strokeWidth="1.5" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M10.29 3.86L1.82 18A2 2 0 003.54 21H20.46A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z" stroke="#C8973A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="9" x2="12" y2="13" stroke="#C8973A" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.5" fill="#C8973A" stroke="#C8973A" strokeWidth="1" />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  star: <StarIcon />,
  location: <LocationIcon />,
  alert: <AlertIcon />,
};

export default function Problems() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problems" ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-light-bg">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-syne font-bold text-dark text-center mb-16"
          style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
        >
          {t.problems.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problems.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
            >
              <Card className="bg-white border-brand-border h-full">
                <CardContent className="p-8">
                  <div className="mb-5 w-10 h-10 flex items-center justify-center rounded-lg bg-[#FBF8F3]">
                    {icons[card.icon]}
                  </div>
                  <h3
                    className="font-syne font-bold text-dark mb-3"
                    style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="font-inter font-light text-text-muted leading-relaxed text-[15px]">
                    {card.body}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
