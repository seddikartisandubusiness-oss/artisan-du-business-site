"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="#C8973A" strokeWidth="1.2" />
      <path d="M5 8L7 10L11 6" stroke="#C8973A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { free, full } = t.pricing;

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-light-bg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-inter font-semibold text-dark text-center mb-16"
          style={{ fontSize: "32px" }}
        >
          {t.pricing.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Free card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
            className="flex"
          >
            <Card className="bg-white border-brand-border flex flex-col w-full">
              <CardContent className="p-8 flex flex-col flex-1">
                <Badge variant="outline" className="w-fit mb-6 text-text-muted border-brand-border font-inter text-xs">
                  {free.tag}
                </Badge>
                <div className="mb-1">
                  <span className="font-inter font-bold text-dark" style={{ fontSize: "clamp(36px, 5vw, 48px)" }}>
                    {free.price}
                  </span>
                </div>
                <p className="font-inter text-text-muted text-sm mb-8">{free.sub}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {free.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="font-inter text-dark text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@artisandubusiness.com"
                  className="inline-flex items-center justify-center w-full h-10 px-5 py-2 rounded-lg border border-brand-border text-dark font-inter font-medium text-sm transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  {free.cta}
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Full card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(200,151,58,0.15)" }}
            className="flex"
          >
            <div
              className="rounded-xl border flex flex-col w-full"
              style={{ backgroundColor: "#0E0E0E", borderColor: "#2A2A2A" }}
            >
              <div className="p-8 flex flex-col flex-1">
                <Badge variant="gold" className="w-fit mb-6 font-inter text-xs">
                  {full.tag}
                </Badge>
                <div className="mb-1">
                  <span className="font-inter font-bold text-gold" style={{ fontSize: "clamp(36px, 5vw, 48px)" }}>
                    {full.price}
                  </span>
                </div>
                <p className="font-inter text-text-muted text-sm mb-8">{full.sub}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {full.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="font-inter text-[#CCCCCC] text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@artisandubusiness.com"
                  className="inline-flex items-center justify-center w-full h-10 px-5 py-2 rounded-lg bg-[#C8973A] text-[#0E0E0E] font-inter font-semibold text-sm transition-all duration-200 hover:bg-[#D4A44A]"
                >
                  {full.cta}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
