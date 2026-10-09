import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

const description =
  "DevOps & DevSecOps engineer, Polytech Marseille graduate with three years of work-study at CEA Cadarache. CI/CD, Python automation, reliable software in regulated environments. Looking for a full-time role in the South of France.";

export const metadata: Metadata = {
  title: "Salma BABA",
  description,
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } },
  openGraph: {
    title: "Salma BABA",
    description,
    type: "website",
    locale: "en_US",
    images: ["/avatar.png"],
  },
};

export default function HomeEn() {
  return <HomePage locale="en" />;
}
