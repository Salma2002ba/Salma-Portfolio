"use client";

import { services } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Workflow, Code, Sparkles, Users, Leaf } from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  workflow: Workflow,
  code: Code,
  sparkles: Sparkles,
  users: Users,
  leaf: Leaf,
} as const;

/**
 * Services — 3-column card grid with animated gradient borders.
 */
export function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="container-main">
        <ScrollReveal>
          <span className="section-label">Domaines</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-12 max-w-3xl">
            Ce que j&apos;apporte.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={0.1 + i * 0.1}>
                <div className="glass-card gradient-border p-8 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-6 border border-border group-hover:border-pink/30 transition-colors">
                    <Icon size={22} className="text-pink" />
                  </div>
                  <h3 className="font-display font-bold text-fluid-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-fluid-sm text-muted leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
