"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-dark">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="font-syne font-bold text-white mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
          >
            {t.contact.title}
          </h2>
          <p className="font-inter font-light text-text-muted" style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="rounded-xl border p-8"
          style={{ backgroundColor: "#1A1A1A", borderColor: "#2A2A2A" }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#3E9B5C]/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12L9 16L19 8" stroke="#3E9B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-syne font-bold text-white text-lg mb-2">
                {lang === "fr" ? "Message envoyé !" : "Message sent!"}
              </p>
              <p className="font-inter text-text-muted text-sm">
                {lang === "fr" ? "Je vous réponds sous 24h." : "I'll reply within 24 hours."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#AAAAAA] font-inter text-sm">
                  {t.contact.fields.name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder={t.contact.fields.name}
                  className="bg-dark border-border-dark text-white placeholder:text-text-muted focus-visible:ring-gold/50 focus-visible:border-gold/60 h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#AAAAAA] font-inter text-sm">
                  {t.contact.fields.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.fields.email}
                  className="bg-dark border-border-dark text-white placeholder:text-text-muted focus-visible:ring-gold/50 focus-visible:border-gold/60 h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#AAAAAA] font-inter text-sm">
                  {t.contact.fields.company}
                </Label>
                <Input
                  id="company"
                  name="company"
                  required
                  placeholder={t.contact.fields.company}
                  className="bg-dark border-border-dark text-white placeholder:text-text-muted focus-visible:ring-gold/50 focus-visible:border-gold/60 h-11"
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={loading}
                className="w-full font-inter font-semibold"
              >
                {loading ? "..." : t.contact.cta}
              </Button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="mailto:contact@artisandubusiness.com"
            className="font-inter text-sm text-gold hover:opacity-80 transition-opacity"
          >
            contact@artisandubusiness.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
