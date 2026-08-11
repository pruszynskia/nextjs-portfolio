# Architectural Decisions

- Chose App Router over Pages Router for scalability
- Tailwind selected for speed of UI development
- No Redux — prefer React Query / server state
- Visual system follows `~/claude/DESIGN-STYLE-GUIDE/` (Editorial Grotesque)
  — hairline structure over card grids, one hero SVG visual, no
  gradients/glassmorphism/emoji. Project index is the one deliberate
  full-bleed break out of the container per section (04-spacing-layout.md).
- Don't use framer-motion's `useReducedMotion()` directly — it reads
  `window` synchronously on the client's first render, causing a hydration
  mismatch that can leave motion-driven inline styles (e.g. a clip-path
  wipe) permanently stuck. Use a `useSyncExternalStore`-based hook instead
  (`src/hooks/usePrefersReducedMotion.ts`) — SSR-safe by contract.
- Career timeline includes unpaid/non-employment periods (the 2020-2022
  self-directed transition, the 2025-2026 caregiving career break) as
  explicit, honestly-labeled entries rather than gaps — per
  career-intelligence content rules.