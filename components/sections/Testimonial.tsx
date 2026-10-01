"use client";

import { testimonials } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Testimonial — Grid layout of glassmorphism feedback cards.
 */
export function Testimonial() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-main relative">
        <ScrollReveal>
          <span className="section-label">Ils m&apos;ont encadrée</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-14 max-w-2xl">
            Ce qu&apos;en disent mes encadrants.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test, i) => (
            <ScrollReveal key={test.name} delay={0.1 + i * 0.1}>
              <div className="glass-card p-8 md:p-10 h-full flex flex-col justify-between group">
                <blockquote className="font-display font-bold text-fluid-lg leading-snug mb-8 text-text group-hover:text-pink transition-colors duration-300">
                  &ldquo;{test.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-base text-pink">
                      {test.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-fluid-sm font-bold text-text">
                      {test.name}
                    </p>
                    <p className="font-body text-[13px] text-muted">
                      {test.role}, {test.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
