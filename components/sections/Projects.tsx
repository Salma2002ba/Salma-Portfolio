"use client";

import { useContent } from "@/lib/i18n";
import type { ProjectItem } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight, Cloud, ShieldCheck, Sprout } from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  cloud: Cloud,
  sprout: Sprout,
} as const;

/* Classes écrites en entier pour que Tailwind les génère (pas de concaténation). */
const accentStyles: Record<
  ProjectItem["accent"],
  { text: string; arrow: string; iconBox: string; chip: string; bar: string }
> = {
  pink: {
    text: "text-pink",
    arrow: "group-hover:text-pink",
    iconBox: "group-hover:border-pink/40 group-hover:shadow-[0_0_20px_var(--glow-pink)]",
    chip: "group-hover:border-pink/30",
    bar: "bg-pink",
  },
  green: {
    text: "text-green",
    arrow: "group-hover:text-green",
    iconBox: "group-hover:border-green/40 group-hover:shadow-[0_0_20px_var(--glow-green)]",
    chip: "group-hover:border-green/30",
    bar: "bg-green",
  },
  blue: {
    text: "text-blue",
    arrow: "group-hover:text-blue",
    iconBox: "group-hover:border-blue/40 group-hover:shadow-[0_0_20px_var(--glow-blue)]",
    chip: "group-hover:border-blue/30",
    bar: "bg-blue",
  },
};

/**
 * Projects — 3 cartes côte à côte (même style que Services), chacune reliée à son dépôt GitHub.
 */
export function Projects() {
  const { projects, ui } = useContent();
  return (
    <section id="work" className="section-spacing">
      <div className="container-main">
        <ScrollReveal>
          <span className="section-label">{ui.sections.projects}</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-extrabold text-fluid-3xl leading-[1.1] tracking-tight mb-12 max-w-3xl">
            {ui.sections.projectsTitle}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon];
            const accent = accentStyles[project.accent];
            return (
              <ScrollReveal key={project.title} delay={0.1 + i * 0.1}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card gradient-border relative overflow-hidden p-8 h-full flex flex-col group"
                >
                  {/* Barre de couleur en haut de la carte */}
                  <span className={`absolute top-0 left-0 right-0 h-1 ${accent.bar} opacity-70`} aria-hidden="true" />

                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-border transition-all duration-300 ${accent.iconBox}`}
                    >
                      <Icon size={22} className={accent.text} />
                    </div>
                    <ArrowUpRight
                      size={22}
                      className={`text-muted transition-all duration-300 group-hover:rotate-45 ${accent.arrow}`}
                    />
                  </div>

                  <span className={`font-mono text-fluid-xs uppercase tracking-widest mb-2 ${accent.text}`}>
                    {project.tag}
                  </span>
                  <h3 className="font-display font-bold text-fluid-lg mb-3">{project.title}</h3>
                  <p className="font-body text-fluid-sm text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mb-6">
                    {project.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        className={`font-mono text-[0.7rem] text-text px-2.5 py-1 rounded-full border border-border bg-surface transition-colors duration-300 ${accent.chip}`}
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>

                  <span className={`mt-auto inline-flex items-center gap-2 font-body text-fluid-sm font-medium ${accent.text}`}>
                    <GithubIcon />
                    {ui.sections.viewCode}
                  </span>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
