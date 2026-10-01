"use client";

import { experiences, education } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Experience & Education — Timeline layout with numbered items.
 */
export function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-main">
        {/* Experience Section */}
        <ScrollReveal>
          <span className="section-label">Expérience</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-14">
            Mon parcours.
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-6 md:left-[120px] top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={0.1 + i * 0.08}>
                <div className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-8 border-b border-border/50">
                  {/* Left: number + year */}
                  <div className="flex flex-col items-start md:items-end gap-1 relative z-10 md:pr-6">
                    <span className="font-mono text-fluid-xs text-pink font-semibold group-hover:translate-x-3 transition-transform duration-300 ease-out">
                      {exp.id}
                    </span>
                    <span className="font-mono text-fluid-xs text-muted whitespace-nowrap">
                      {exp.year}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div>
                    <h3 className="font-display font-bold text-fluid-lg leading-snug group-hover:text-pink transition-colors duration-300 flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <p className="font-body text-fluid-sm text-pink mb-4">
                      {exp.company}
                    </p>
                    <p className="font-body text-fluid-sm text-muted leading-relaxed group-hover:text-text/90 transition-colors duration-300">
                      {exp.description}
                    </p>
                    {exp.bullets && (
                      <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-pink">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="font-body text-fluid-sm text-muted leading-relaxed group-hover:text-text/90 transition-colors duration-300">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <ScrollReveal className="mt-24">
          <span className="section-label">Formation</span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-14 ">
            Mes études.
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div
            className="absolute left-6 md:left-[120px] top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.id} delay={0.1 + i * 0.08}>
                <div className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-8 border-b border-border/50">
                  <div className="flex flex-col items-start md:items-end gap-1 relative z-10 md:pr-6">
                    <span className="font-mono text-fluid-xs text-blue font-semibold group-hover:translate-x-3 transition-transform duration-300 ease-out">
                      {edu.id}
                    </span>
                    <span className="font-mono text-fluid-xs text-muted whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-fluid-lg leading-snug group-hover:text-blue transition-colors duration-300 flex items-center gap-2">
                      {edu.degree}
                    </h3>
                    <p className="font-body text-fluid-sm text-blue mb-4">
                      {edu.school}
                    </p>
                    <p className="font-body text-fluid-sm text-muted leading-relaxed group-hover:text-text/90 transition-colors duration-300">
                      {edu.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
