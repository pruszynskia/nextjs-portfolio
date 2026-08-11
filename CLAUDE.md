# CLAUDE.md — nextjs-portfolio

Inherits Claude-OS. Do not copy global rules here — reference them.

- Local (Claude Code): `~/claude/CLAUDE-OS/CLAUDE.md`
- Desktop Project without file access: fetch the mirrored copy at
  `/Claude-OS/CLAUDE.md` via the file connector before relying on it; if the
  fetch fails or the file's `Last verified` date is >30 days old, say so
  instead of proceeding on stale rules.

That file carries the hard rules, routing table, and model tiering. This file
holds only what's specific to nextjs-portfolio.

## Project-specific rules

- Memory lives in `memory-bank/` (architecture.md, decisions.md, patterns.md,
  progress.md, project.md, rules.md) — not `MEMORY.md`. Same pattern as
  `ai-career-os` and `ai-interview-coach`. Write there at session end only.
- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind, shadcn/ui
  (`components.json`), Framer Motion.
- `npm run lint` / `npm run build` before considering a change done; husky +
  lint-staged run eslint/prettier on commit already.
- Design system: this portfolio's visuals must follow
  `~/claude/DESIGN-STYLE-GUIDE/` (Editorial Grotesque — Swiss editorial bones,
  grotesque display voice, dark+light via semantic tokens). Read its
  `README.md` first, then `01`–`07` as needed; pull color/type/spacing values
  from `tokens.css` / `tailwind.theme.ts`, never hardcode. Reference images
  live in `~/claude/DESIGN-STYLE-GUIDE/Inspirations/`. `07-anti-patterns.md`
  is the pre-ship checklist — check any new screen against it.
- Career content (CV, work history, skills) for populating site copy is
  sourced from `~/claude/career-intelligence-system/knowledge/` — never
  invent or paraphrase from memory. That folder is the source of truth, not
  any cached summary here. Check each file's own freshness before relying on
  it for site copy.

## Routing

| Need | Load |
|---|---|
| This project's long-term memory | `memory-bank/` |
| Facts about Andrzej, global rules, templates | Claude-OS root (path above) |
| This project's state in the OS-wide index | `projects-index.md` in Claude-OS |
| Design tokens/rules for this portfolio | `~/claude/DESIGN-STYLE-GUIDE/` |
| Career/CV data to populate site content | `~/claude/career-intelligence-system/knowledge/` (`master-cv.md`, `experience.md`, `skills.md`, `master-profile.md`) |

## Budget

This file ≤60 lines.
