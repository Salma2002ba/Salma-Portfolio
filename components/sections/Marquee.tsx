"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { marqueeWords as words } from "@/lib/data";

/**
 * Marquee — Infinite scrolling text banner.
 */
export function Marquee() {
  const prefersReduced = useReducedMotion();
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <section className="py-12 md:py-20 overflow-hidden bg-surface/50 border-y border-border relative">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: prefersReduced ? 0 : "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeatedWords.map((word, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display font-extrabold text-[clamp(2rem,4vw,4rem)] text-transparent bg-clip-text bg-gradient-to-b from-text to-muted/40 uppercase tracking-tighter">
                {word}
              </span>
              <span className="text-pink text-2xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
