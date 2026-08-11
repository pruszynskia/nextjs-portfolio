/*
  Per-project hover thumbnail — the same deterministic dot-field technique as
  HeroField (01-principles.md "flat 2D texture"), seeded per project index so
  each row gets a distinct but consistent composition (pure math, no
  randomness — server/client render identically). Monochrome: the hero visual
  already spends the page's one accent allowance.
*/
const COLS = 16;
const ROWS = 12;
const GAP = 20;
const MAX_R = 5;

function intensity(nx: number, ny: number, seed: number): number {
  const angle = seed * 2.4;
  const fx = 0.5 + 0.32 * Math.cos(angle);
  const fy = 0.5 + 0.32 * Math.sin(angle);
  const d = Math.hypot(
    (nx - fx) * (1 + seed * 0.15),
    (ny - fy) * (1 + seed * 0.1),
  );
  return Math.max(0, 1 - d / 0.5);
}

export function ProjectGraphic({
  seed,
  className = "",
}: {
  seed: number;
  className?: string;
}) {
  const dots = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const t = intensity(col / COLS, row / ROWS, seed);
      const r = MAX_R * Math.pow(t, 1.6);

      if (r < 0.2) continue;

      dots.push(
        <circle
          key={`${col}-${row}`}
          cx={col * GAP + GAP / 2}
          cy={row * GAP + GAP / 2}
          r={Number(r.toFixed(2))}
          fill="currentColor"
          opacity={Number((0.15 + 0.55 * t).toFixed(2))}
        />,
      );
    }
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${COLS * GAP} ${ROWS * GAP}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {dots}
    </svg>
  );
}
