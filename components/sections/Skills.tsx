"use client";

import { skillCategories, softSkillCategories } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const accentColors = ["pink", "green", "blue"] as const;

/**
 * Skills — Grouped columns with hoverable tag pills and subtle background.
 */
export function Skills() {
  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      {/* Very subtle gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue opacity-[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green opacity-[0.03] blur-[100px]" />
      </div>

      <div className="container-main relative z-10">
        <ScrollReveal>
          <span className="section-label">Compétences</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-14">
            Mes outils.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <ScrollReveal key={cat.category} delay={0.1 + catIndex * 0.08}>
              <div>
                <h3 className="font-display font-bold text-fluid-base mb-4 text-text">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, skillIndex) => {
                    const accent =
                      accentColors[
                        (catIndex + skillIndex) % accentColors.length
                      ];
                    return (
                      <SkillPill
                        key={skill}
                        label={skill}
                        accent={accent}
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Soft skills, langues, centres d'intérêt */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-display font-extrabold text-fluid-xl tracking-tight mt-20 mb-10">
            Au-delà de la technique.
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
          {softSkillCategories.map((cat, catIndex) => (
            <ScrollReveal key={cat.category} delay={0.1 + catIndex * 0.08}>
              <div>
                <h4 className="font-display font-bold text-fluid-base mb-4 text-text">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, skillIndex) => (
                    <SkillPill
                      key={skill}
                      label={skill}
                      accent={accentColors[(catIndex + skillIndex + 1) % accentColors.length]}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillPill({
  label,
  accent,
}: {
  label: string;
  accent: "pink" | "green" | "blue";
}) {
  const glowMap = {
    pink: "hover:border-pink/40 hover:shadow-[0_0_16px_var(--glow-pink)] hover:text-pink",
    green: "hover:border-green/40 hover:shadow-[0_0_16px_var(--glow-green)] hover:text-green",
    blue: "hover:border-blue/40 hover:shadow-[0_0_16px_var(--glow-blue)] hover:text-blue",
  };

  return (
    <span
      className={`inline-block px-3.5 py-1.5 rounded-full text-fluid-xs font-mono border border-border bg-surface text-muted transition-all duration-300 cursor-default ${glowMap[accent]}`}
    >
      {label}
    </span>
  );
}
