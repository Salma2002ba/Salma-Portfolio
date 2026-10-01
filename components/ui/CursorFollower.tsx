"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CursorFollower — Custom circular cursor that scales up on
 * interactive elements and shifts color based on accent zone.
 * Hidden on touch devices.
 */
export function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  useEffect(() => {
    /* Skip on touch devices */
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    window.addEventListener("mousemove", handleMouseMove);

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, [data-magnetic]";

    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    /* Initial pass */
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [handleMouseMove]);

  /* Don't render on SSR or touch */
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full mix-blend-difference"
      style={{
        x,
        y,
        width: 32,
        height: 32,
        backgroundColor: "var(--text)",
      }}
      animate={{
        scale: isHovering ? 2 : 1,
        opacity: isVisible ? 0.6 : 0,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      aria-hidden="true"
    />
  );
}
