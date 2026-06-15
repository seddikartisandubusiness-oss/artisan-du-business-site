import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artisan du Business | Audit Visibilité Locale Google Maps — Suisse",
  description:
    "Service d'audit de visibilité locale Google Maps pour fiduciaires et PME en Suisse romande. Rapport gratuit, rapport complet 149 CHF.",
  keywords: [
    "audit Google Maps",
    "visibilité locale",
    "SEO local Suisse",
    "fiduciaire Suisse romande",
    "PME Suisse",
    "référencement local",
  ],
  alternates: {
    canonical: "https://artisandubusiness.com",
    languages: {
      fr: "https://artisandubusiness.com",
      en: "https://artisandubusiness.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://artisandubusiness.com",
    title: "Artisan du Business | Audit Visibilité Locale Google Maps — Suisse",
    description:
      "Service d'audit de visibilité locale Google Maps pour fiduciaires et PME en Suisse romande. Rapport gratuit, rapport complet 149 CHF.",
    siteName: "Artisan du Business",
    locale: "fr_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisan du Business | Audit Visibilité Locale Google Maps",
    description:
      "Audit de visibilité locale Google Maps pour PME en Suisse romande. Rapport gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-inter bg-[#0E0E0E] text-white antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
