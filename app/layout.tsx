import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400"],
});

const siteDescription =
  "Ingénieure DevOps & DevSecOps, diplômée de Polytech Marseille, trois ans d'alternance au CEA Cadarache. CI/CD, automatisation Python, logiciel en environnement réglementé. Recherche un CDI en région PACA.";

// Vercel fournit le domaine de production ; sert aux aperçus de lien (LinkedIn, etc.).
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Salma BABA",
  description: siteDescription,
  keywords: [
    "Salma BABA",
    "ingénieure DevOps",
    "DevSecOps",
    "CI/CD",
    "GitLab CI",
    "Python",
    "CEA Cadarache",
    "Polytech Marseille",
    "Aix-Marseille",
  ],
  openGraph: {
    title: "Salma BABA - Ingénieure DevOps & DevSecOps",
    description: siteDescription,
    type: "website",
    locale: "fr_FR",
    images: ["/avatar.png"],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-bg text-text">
        <ThemeProvider>
          <SmoothScroll />
          <CursorFollower />
          <NoiseOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
