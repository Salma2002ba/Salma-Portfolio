"use client";

/**
 * NoiseOverlay — Full-page SVG noise texture at 3% opacity.
 * Fixed, pointer-events: none, highest z-index.
 */
export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}
