"use client";

import { aboutData } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * About — Short, punchy bio section.
 */
export function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-main">
        <ScrollReveal>
          <span className="section-label">À propos</span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-extrabold text-fluid-3xl break-words leading-[1.1] tracking-tight">
              {aboutData.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-5">
              {aboutData.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-body text-fluid-base text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
