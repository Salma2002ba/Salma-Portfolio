"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroData, socialLinks } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Hero — Full viewport, centered massive typography.
 * Integrated avatar pill and animated grid background.
 */
export function Hero() {
  const prefersReduced = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fadeUp: any = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 md:pt-20 md:pb-16 px-4">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden="true" />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-pink opacity-[0.08] blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-green opacity-[0.08] blur-[100px] animate-float-slow [animation-delay:2s]" />

      <div className="container-main relative mt-2 z-10 flex flex-col items-center text-center">

        {/* Large Centered Avatar */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-surface shadow-2xl overflow-hidden mb-8 md:mb-10 ring-1 ring-border"
        >
          <Image
            src="/avatar.png"
            alt="Salma BABA"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-mono text-fluid-xs text-pink uppercase tracking-widest mb-6"
        >
          {heroData.eyebrow}
        </motion.span>

        {/* Massive Headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="font-display font-extrabold leading-[0.95] tracking-tighter mb-6 md:mb-8 w-full max-w-5xl mx-auto text-text [container-type:inline-size]"
        >
          {heroData.headline.split("\n").map((line, i) => (
            <motion.span key={i} variants={fadeUp} className="block whitespace-nowrap px-[0.1em] text-[min(8cqw,7rem)] text-transparent bg-clip-text bg-gradient-to-br from-text to-muted">
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-body text-fluid-lg text-muted max-w-2xl mb-12 leading-relaxed"
        >
          {heroData.subline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
        >
          <MagneticButton href={heroData.ctaPrimary.href} variant="filled" accent="pink">
            {heroData.ctaPrimary.label}
          </MagneticButton>
          <MagneticButton href={heroData.ctaSecondary.href} variant="ghost" accent="green">
            {heroData.ctaSecondary.label}
          </MagneticButton>
        </motion.div>

        {/* Social Row */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex items-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-surface text-muted hover:text-pink hover:border-pink/40 transition-all duration-300"
              aria-label={link.name}
            >
              <SocialIconHero name={link.icon} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SocialIconHero({ name }: { name: string }) {
  const size = 20;
  switch (name) {
    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x={2} y={9} width={4} height={12} />
          <circle cx={4} cy={4} r={2} />
        </svg>
      );
    case "dribbble":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={12} cy={12} r={10} />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={12} cy={12} r={10} />
          <line x1={2} y1={12} x2={22} y2={12} />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}
