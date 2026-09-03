/*
  The page's single hero visual — a flat 2D texture per 01-principles.md Pillar 4.
  A dot-matrix field whose radius is driven by two overlapping falloffs, so the
  form reads as sculptural without being symmetrical. Deterministic (pure math on
  indices, no randomness) so server and client render identically.

  The field is banded by intensity into four <g> groups so each can carry its own
  scroll-bound opacity via CSS `animation-timeline: view()` (globals.css) — outer/
  faint dots dissolve first as the hero scrolls out, the accent core lingers
  longest. Opacity only, no translate: this is not parallax and it never loops,
  so it stays inside 06-motion.md's transform budget. Still a pure Server
  Component — the motion is CSS-only, no client JS.
*/

const COLS = 30;
const ROWS = 22;
const GAP = 28;
const MAX_R = 7;

/** Density field: 0 at the edges, 1 at the core of the form. */
function intensity(nx: number, ny: number): number {
  const primary = Math.hypot((nx - 0.6) * 1.05, (ny - 0.42) * 1.35);
  const secondary = Math.hypot((nx - 0.28) * 1.3, (ny - 0.68) * 1.55);
  const a = Math.max(0, 1 - primary / 0.54);
  const b = Math.max(0, 1 - secondary / 0.32) * 0.8;
  return Math.min(1, Math.max(a, b));
}

/** Band boundaries mirror the guide's opacity ramp; band 3 is the accent core. */
function bandFor(t: number): 0 | 1 | 2 | 3 {
  if (t > 0.92) return 3;
  if (t > 0.65) return 2;
  if (t > 0.4) return 1;
  return 0;
}

export function HeroField({ className = "" }: { className?: string }) {
  const bands: React.ReactNode[][] = [[], [], [], []];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const t = intensity(col / COLS, row / ROWS);
      const r = MAX_R * Math.pow(t, 1.5);

      if (r < 0.25) continue;

      const band = bandFor(t);
      bands[band].push(
        <circle
          key={`${col}-${row}`}
          cx={col * GAP + GAP / 2}
          cy={row * GAP + GAP / 2}
          r={Number(r.toFixed(2))}
          // The single accent moment on the page's visual — only the densest
          // core dots, keeping accent well inside the ~2% budget.
          fill={band === 3 ? "var(--accent-bg)" : "currentColor"}
          opacity={band === 3 ? 1 : Number((0.18 + 0.5 * t).toFixed(2))}
        />,
      );
    }
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${COLS * GAP} ${ROWS * GAP}`}
      width={COLS * GAP}
      height={ROWS * GAP}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {bands.map((dots, band) => (
        <g key={band} className={`hero-field-band hero-field-band-${band}`}>
          {dots}
        </g>
      ))}
    </svg>
  );
}
