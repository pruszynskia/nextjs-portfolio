# Code Patterns

- Feature folder structure:
  /features/hero
  /features/projects
  /features/contact

Each feature contains:
- components
- hooks
- services
- types

Home sections (`features/home/components/*`) each take a typed `content`
prop sourced from a matching `features/home/content/*.ts` file — component
has no hardcoded copy. Shared section chrome lives in
`components/layout/SectionHeading.tsx` (eyebrow/h2/description, wired to
`Section`'s `aria-labelledby`) and `components/ui/Tag.tsx` (mono meta tags).

Deterministic seeded-SVG technique for decorative visuals (`HeroField.tsx`,
`ProjectGraphic.tsx`): pure math on grid indices + a seed, no
`Math.random()` — guarantees server/client render identically and stays
static (no animation) per the motion budget.