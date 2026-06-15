"use client";

import { useLang } from "@/lib/LangContext";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-dark px-6 md:px-12 pb-8">
      <Separator className="bg-[#1E1E1E] mb-8" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-inter text-text-muted text-sm">{t.footer.copy}</p>
        <a
          href="mailto:contact@artisandubusiness.com"
          className="font-inter text-sm text-gold hover:opacity-80 transition-opacity"
        >
          contact@artisandubusiness.com
        </a>
      </div>
    </footer>
  );
}
