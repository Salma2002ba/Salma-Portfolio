"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "ghost";
  accent?: "pink" | "green" | "blue";
}

/**
 * MagneticButton — CTA button with magnetic hover effect.
 * Pulls toward cursor position on hover.
 */
export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "filled",
  accent = "pink",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } =
      ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const resetPosition = () => setPosition({ x: 0, y: 0 });

  const accentColors = {
    pink: { bg: "var(--pink)", border: "var(--pink)", glow: "var(--glow-pink)" },
    green: { bg: "var(--green)", border: "var(--green)", glow: "var(--glow-green)" },
    blue: { bg: "var(--blue)", border: "var(--blue)", glow: "var(--glow-blue)" },
  };

  const colors = accentColors[accent];

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-body font-medium text-fluid-sm transition-shadow duration-300";

  const variantStyles =
    variant === "filled"
      ? "px-7 py-3.5 text-bg"
      : "px-7 py-3.5 border bg-transparent";

  const Tag = href ? "a" : "button";
  const isExternal = href?.startsWith("http");

  return (
    <motion.div
      ref={ref}
      data-magnetic
      className="inline-block"
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
    >
      <Tag
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles} ${className}`}
        style={{
          backgroundColor: variant === "filled" ? colors.bg : "transparent",
          borderColor: colors.border,
          color: variant === "filled" ? "var(--bg)" : colors.border,
          boxShadow: `0 0 0px ${colors.glow}`,
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.boxShadow = `0 0 30px ${colors.glow}`;
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.boxShadow = `0 0 0px ${colors.glow}`;
        }}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
