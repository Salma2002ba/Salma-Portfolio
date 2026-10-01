"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Stats — Count-up numbers triggered by scroll intersection.
 */
export function Stats() {
  return (
    <section className="section-spacing">
      <div className="container-main">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-border">
            {stats.map((stat) => (
              <CountUpStat key={stat.label} stat={stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CountUpStat({
  stat,
}: {
  stat: (typeof stats)[number];
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(stat.value, 2000);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated, stat.value]);

  const animateCount = (target: number, duration: number) => {
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      /* Ease out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const display = count.toLocaleString("fr-FR");

  return (
    <div ref={ref} className="text-center py-4 md:py-0">
      <span className="font-display font-extrabold text-fluid-3xl text-text">
        {display}
        {stat.suffix}
      </span>
      <p className="font-body text-fluid-sm text-muted mt-1">{stat.label}</p>
    </div>
  );
}
