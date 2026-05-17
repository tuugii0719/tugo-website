/* ============================================================================
   ORNAMENTS — Mongolian decorative motifs (khee cloud + ulzii + wave + peaks)
   Rendered as inline SVG so they recolor with currentColor + Tailwind text-*.
   ============================================================================ */

// One repeating unit of Mongolian cloud swirl ("üülen khee"). Used inside a
// pattern below so it tiles cleanly across any width.
function CloudUnit({ id, stroke }) {
  return (
    <pattern id={id} x="0" y="0" width="140" height="48" patternUnits="userSpaceOnUse">
      <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* big swirl */}
        <path d="M8 30 q 6 -16 18 -16 q 10 0 14 8 q 3 6 -3 9 q -5 3 -8 -2 q -2 -4 2 -5" />
        {/* trailing wisp */}
        <path d="M40 30 q 10 -10 22 -6 q 8 3 8 10" />
        {/* small swirl */}
        <path d="M76 28 q 5 -12 14 -12 q 8 0 10 7 q 2 5 -3 7 q -4 2 -6 -2" />
        {/* tail */}
        <path d="M100 28 q 8 -8 18 -4 q 6 3 14 0" />
        {/* dots */}
        <circle cx="32" cy="22" r="1.6" fill={stroke} stroke="none" />
        <circle cx="85" cy="20" r="1.4" fill={stroke} stroke="none" />
      </g>
    </pattern>
  );
}

/** Horizontal band of repeating cloud swirls. Use as a section divider. */
export function CloudBand({ id = "cloudBandDefault", color = "var(--color-sand-400)", opacity = 0.55, className = "" }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1400 48" preserveAspectRatio="none" className="w-full h-10 md:h-12 block" style={{ opacity }}>
        <defs>
          <CloudUnit id={id} stroke={color} />
        </defs>
        <rect width="1400" height="48" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

/** Decorative wave line — Mongolian water motif. */
export function WaveLine({ color = "var(--color-sand-400)", opacity = 0.4, className = "" }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1400 28" preserveAspectRatio="none" className="w-full h-6 block" style={{ opacity }}>
        <path
          d="M0 18 Q 70 4 140 14 T 280 14 T 420 14 T 560 14 T 700 14 T 840 14 T 980 14 T 1120 14 T 1260 14 T 1400 14"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0 24 Q 70 10 140 20 T 280 20 T 420 20 T 560 20 T 700 20 T 840 20 T 980 20 T 1120 20 T 1260 20 T 1400 20"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

/** Repeating mountain silhouette (small peaks) for hero/footer transitions. */
export function MountainRange({ color = "var(--color-sand-400)", opacity = 0.18, className = "" }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1400 90" preserveAspectRatio="none" className="w-full h-16 md:h-20 block" style={{ opacity }}>
        <path
          d="M0 90 L 80 38 L 160 62 L 240 22 L 320 58 L 400 30 L 480 70 L 560 18 L 640 52 L 720 26 L 800 64 L 880 32 L 960 58 L 1040 20 L 1120 60 L 1200 28 L 1280 56 L 1360 24 L 1400 50 L 1400 90 Z"
          fill={color}
        />
        {/* snow tips */}
        <g fill="#fff" opacity="0.55">
          <path d="M236 28 L 244 22 L 252 28 Z" />
          <path d="M396 36 L 400 30 L 404 36 Z" />
          <path d="M556 24 L 560 18 L 564 24 Z" />
          <path d="M716 32 L 720 26 L 724 32 Z" />
          <path d="M876 38 L 880 32 L 884 38 Z" />
          <path d="M1196 34 L 1200 28 L 1204 34 Z" />
          <path d="M1356 30 L 1360 24 L 1364 30 Z" />
        </g>
      </svg>
    </div>
  );
}

/** Decorative ulzii corner knot / center medallion — tiny ornament. */
export function UlziiKnot({ color = "var(--color-sand-400)", size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10 Q 6 6 10 6 L 14 6 Q 18 6 18 10 L 18 14 Q 18 18 22 18 L 26 18" />
        <path d="M26 22 Q 26 26 22 26 L 18 26 Q 14 26 14 22 L 14 18 Q 14 14 10 14 L 6 14" />
      </g>
    </svg>
  );
}
