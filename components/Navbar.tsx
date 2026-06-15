"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Lang } from "@/lib/i18n";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-colors duration-300"
      animate={{
        backgroundColor: scrolled ? "rgba(14,14,14,0.97)" : "transparent",
        borderBottomColor: scrolled ? "rgba(200,151,58,0.18)" : "transparent",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      }}
      transition={{ duration: 0.3 }}
    >
      <span className="font-inter font-bold text-lg tracking-tight text-gold">
        Artisan du Business
      </span>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLang("fr" as Lang)}
          className={`px-3 py-1 h-8 text-sm font-inter rounded transition-colors duration-200 ${
            lang === "fr" ? "text-white" : "text-text-muted hover:text-white hover:bg-transparent"
          }`}
        >
          FR
        </Button>
        <Separator orientation="vertical" className="h-4 bg-text-muted/40" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLang("en" as Lang)}
          className={`px-3 py-1 h-8 text-sm font-inter rounded transition-colors duration-200 ${
            lang === "en" ? "text-white" : "text-text-muted hover:text-white hover:bg-transparent"
          }`}
        >
          EN
        </Button>
      </div>
    </motion.nav>
  );
}
