# Plan: `create-new-design` Skill — Research & Spec

**Status:** research complete, direction refined per your latest notes, awaiting your go-ahead to build (Phase 6). No code written yet.

**Skill name confirmed:** `create-new-design`.

## 1. What you already have (don't re-derive this)

Before researching externally, I audited what's already in your connected folders:

- **`DESIGN-STYLE-GUIDE`** — a complete, opinionated system ("Editorial Grotesque") for *your own portfolio*: color tokens, type scale, spacing, components, a motion philosophy, and a 20+ item anti-pattern checklist. Its motion rule is deliberately restrained — one signature hero reveal, no scroll-fade-everywhere, no parallax, no loops.
- **`nextjs-portfolio`** already has **13 installed skills** from `Leonxlnx/taste-skill` (`high-end-visual-design`, `design-taste-frontend` v1/v2, `gpt-taste`, `industrial-brutalist-ui`, `minimalist-ui`, `redesign-existing-projects`, `stitch-design-taste`, plus image-gen and brandkit skills).

A subagent read all 13 in full. Verdict: **static taste (color, type, layout, anti-slop copy/imagery rules) is covered exhaustively — 4-5 skills independently re-derive the same banned-pattern checklist** (no Inter, no AI-purple, no 3-card rows, no gradient text, no bento grids, no glassmorphism, etc.). **Motion/interaction implementation is the real gap.** Every skill *names* trendy techniques (parallax tilt cards, kinetic type, mesh gradients, holographic cards) as a vocabulary list to reach for, but only one (`design-taste-frontend` v2) has real, runnable code — two GSAP ScrollTrigger recipes (sticky-stack, horizontal-pan). Lenis, Three.js/WebGL, the View Transitions API, and real kinetic-type code appear **zero times** with working implementation across all 13 files.

This matches a wider pattern: I also checked the broader "AI design skill" ecosystem — Brendan Jowett's 63-skill collection, TypeUI's 48 design skills, the standalone `saas-design` skill. Same story everywhere: rich static-taste rules, silent or superficial on motion. This isn't a hole specific to your setup — it's a gap across the whole current skill ecosystem, which is exactly why this is worth building rather than adopting something off the shelf.

**Decision, confirmed with you:** this new skill is general-purpose, separate from the portfolio's restrained brand — for any project where a motion-rich, award-winning feel is the actual goal.

**Refinement from your latest note:** don't transplant `DESIGN-STYLE-GUIDE`'s specific bans onto this skill one-to-one. That guide bans parallax and "scroll-fade on every element" outright — but those were choices for *your portfolio's* restraint brand specifically, not evidence that scroll-reactive layered motion is itself a tell. Keep the underlying *principle* (avoid AI clichés) but let `create-new-design` judge cliché vs. craft on its own terms — see the reframed distinction below.

## 2. Research findings (2026, as of this research)

### Library/tooling landscape
- **GSAP is now fully free** — including ScrollTrigger, SplitText, and MorphSVG (Webflow acquired GreenSock and dropped the paywall). This directly unblocks real kinetic-typography code, which every existing skill named but none could implement while SplitText was paid.
- **Lenis** (`darkroomengineering/lenis`) has clearly won the "smooth inertial scroll" slot — it's what's cited as replacing Locomotive Scroll, and it's what I found running live on real 2026 award winners (below).
- **Native CSS scroll-driven animations** (`animation-timeline: view()` / `scroll()`) are maturing as a genuine no-JS alternative for simple reveals — lighter and more performant than a library for the cases that don't need pinning/scrubbing.
- **The View Transitions API** is real and native for page/state transitions, but nothing in the existing 13-skill pack or in the wild sites I checked has fully replaced JS-based transition libraries (Barba.js) with it yet — worth building both, with guidance on when each applies.
- **Three.js/WebGL** remains the right tool only for genuine 3D — one credible source (MindStudio) put it plainly: CSS 3D transforms + GSAP ScrollTrigger get "80% of the visual impact at 20% of the complexity" vs. full WebGL, which should be reserved for when a real 3D object/scene is the point, not a default.

### Hands-on evidence from real, current Awwwards Site-of-the-Day winners
Rather than trust marketing copy, I loaded two current SOTD sites in a live browser and inspected what's actually running:

- **trevornoah.com** (Awwwards SOTD): ships `lenis`/`lenis-stopped` classes on `<html>` (Lenis confirmed running) + exactly **one** `<canvas>` loading a single `.glb` 3D earth model. One restrained 3D hero moment, smooth scroll underneath, nothing more. This is, concretely, the same "one hero render, matte, considered" instinct your own `DESIGN-STYLE-GUIDE` Pillar 4 already encodes — the taste is convergent, not something you'd need to abandon.
- **paulkalkbrenner.net** (Awwwards SOTD): exposes `gsap`, `ScrollTrigger`, `Lenis`, **and** `barba` (Barba.js page-transition library) as page globals directly. No 3D at all — the effect budget here is entirely scroll-driven storytelling + page transitions.
- **land-book.com** (your source) has **"Motion" as a first-class top-level filter category**, distinct from general "Websites" — motion is being treated as its own discipline by the gallery itself, not an afterthought. Its "Motion" gallery right now is dominated by AI-product landing pages (an accounting AI, an AI doctor's-office tool, "AI twins for brands") — i.e., the sites most at risk of reading as generic AI slop are the ones leaning hardest on motion to read as credible/premium instead. That's a useful case-study set.
- **21st.dev** (your source): its top in-demand component categories right now are animated heroes, shader/liquid/metal effects, and 3D carousels — again, motion/interaction, not static layout, is what's being actively shopped for.

### On your sourced YouTube videos
Titles resolved via metadata (direct transcript fetch was blocked by YouTube, so these are the concrete leads, not full transcripts — flagging so you can supply more if you want deeper coverage):
- *"Claude Design FINALLY Solved Motion Graphics"* (Jack Roberts) and *"Claude's NEW /design Skill Is INSANE For SaaS Design"* (Brendan Jowett) — both about Claude's own `/design` skill specifically for motion/SaaS work. This directly validates the two-stage workflow you described (design phase via the Design skill, then code).
- *"How I Build Insane Three.js Websites With Claude Opus 5"* (DesignCode/Meng To) and *"Create Scrollable 3D Websites in 10 Minutes"* (Sean Kochel) — both Three.js + scroll-driven 3D builds via Claude.
- *"Fable 5.1 FINALLY Kills AI Website Slop"* (Nate Herk) — a different AI tool's anti-slop pitch; useful as competitive framing for what "not slop" is being marketed as right now, not a technique source.

### What "AI slop" means specifically for motion (not just visuals)
The existing skills already nailed the *visual* tells (gradients, bento grids, glassmorphism). The motion-specific tell, confirmed across sources, is different: it's not *which* library you use, it's whether **motion is decorative or motivated**. Fade-up on every div, infinite looping "alive" cards, floating blobs — all decorative, all a tell. A single pinned scroll-scrub, one hero 3D moment, a real page transition — all motivated by content, and that's what the two real SOTD sites above actually ship. The new skill's anti-slop rule for motion should be this distinction, not a longer list of banned/allowed libraries.

**Sharpened per your note:** the cheap/expensive axis matters as much as decorative/motivated. A glossy button, a default gradient fill, a generic pill badge — these are *cheap tells* precisely because they're a one-line default anyone reaches for. A layered background that actually moves in response to scroll position, tracks multiple depth planes, and unfolds a narrative across the page — that's expensive to build well (it takes real engineering: scroll progress mapped to multiple transforms, timed content changes, asset choreography), and expensive-to-produce is exactly what reads as "not AI slop" even though it's also more *animated* than the portfolio's restrained brand would ever allow. So: production value is a legitimate signal of quality here, not a red flag to be suspicious of. The skill should actively favor scroll-reactive, multi-layer, story-carrying backgrounds as its signature move, while still flagging the genuinely cheap surface tricks (gloss, generic gradients, decorative pill badges, floating-blob loops with no narrative purpose) as the actual clichés to avoid.

## 3. Critical technique cut (not "add every effect")

You explicitly asked me not to just reach for the easiest option, and your follow-up sharpened the direction further: lean into scroll-reactive, layered, story-telling motion as the skill's actual identity, not just one item on a menu. Revised cut:

| Technique | Priority | Why |
|---|---|---|
| **Scrollytelling via layered, scroll-reactive backgrounds** (multiple depth planes moving at different rates/timings, content and imagery choreographed to scroll position to unfold a narrative) | **Flagship / Highest** | This is now the skill's signature move per your direction. Confirmed as real, current, award-winning practice (paulkalkbrenner.net's entire effect budget is scroll-driven storytelling); expensive to build well, which is precisely why it reads as premium rather than templated |
| Lenis (inertial smooth scroll as the substrate under the above) | **High** | Confirmed running on both real SOTD sites inspected; free; the mechanical foundation the scrollytelling above is built on |
| GSAP ScrollTrigger (pinning, scrubbing, multi-layer parallax depth) | **High** | Now fully free; the actual engine for layered/scroll-reactive backgrounds — the existing skill pack has two partial recipes to build past |
| Kinetic type (GSAP SplitText, now free) | **High** | Named constantly, implemented nowhere in the existing pack — free license removes the reason it was skipped before; pairs naturally with scroll-driven narrative reveals |
| Restrained WebGL/3D hero or background layer (Three.js or a lightweight lib) | **Medium-High** | Real and effective (trevornoah.com); can also serve as one of the "layers" in a scroll-reactive background rather than only a standalone hero moment |
| Native CSS scroll-driven animation (`animation-timeline`) | **Medium** | The lightweight option for simple single-layer reveals that don't need full scrollytelling — still worth documenting so the skill doesn't reach for GSAP by default when it isn't needed |
| Page transitions: Barba.js vs. View Transitions API | **Medium** | Confirmed in real use (Barba.js on paulkalkbrenner.net); View Transitions is the native modern alternative — the skill should teach both and when to pick which |
| Cursor/magnetic hover interactions | **Low-Medium, guarded** | Real but risky — one of your existing skills already bans custom cursors outright as "outdated, accessibility-hostile." Include with a strong restraint rule, not as a default |
| Gloss/glossy surface effects, generic gradient fills, decorative pill badges, floating-blob loops with no narrative purpose | **Actively avoid** | These are the *cheap* tells — one-line defaults, not produced effects. This is the real dividing line per your note: cheap surface polish reads as slop; expensive, choreographed, narrative motion (the flagship row above) does not, even though both are "animation" |
| Particle-button explosions, holographic foil cards used purely for decoration | **Flagged, use with judgment** | Named constantly across the wider skill ecosystem's vocabulary lists but easy to deploy as decoration rather than narrative — fine when motivated by actual content, a tell when reached for by default |

## 4. The two-stage workflow (per your answer)

**Stage A — Design.** Invoke the built-in `design` skill to produce editable `.dc.html` artboards that embody the curated technique cut above plus the existing anti-slop taste rules (reusing/complementing the 13-skill pack rather than re-deriving it). Two entry points:
   - Fresh concept from a brief.
   - Existing site supplied (e.g. your portfolio) — analyze it and either restyle in place or use it as source content for a new design.

**Stage B — Build.** Once artboards are approved/tweaked in the Design canvas, implement for real in Next.js/React/Tailwind (your stated default stack). Two branches:
   - Fresh repo scaffold.
   - Existing codebase supplied — analyze its structure and integrate rather than blowing it away, unless you ask for a full rebuild.

This skill owns the **motion/interaction layer and the two-stage orchestration**; it defers to (or folds in the best of) the existing 13-skill pack for static color/type/layout taste, so we're not writing a 5th copy of the same anti-pattern checklist.

## 5. Delivery

Built as a **Cowork account skill** (via the skill-review/save flow) — this is the mechanism that reaches "everywhere," since account skills sync automatically into Claude Code as well (confirmed by how your existing account skills already show up here as a synced, read-only cache) and are usable directly in Cowork. No separate packaging is needed for it to invoke the `design` skill — that's a normal built-in tool skill any session can call.

## 6. Open decisions for you before I build (Phase 6)

1. ~~Name~~ — **decided: `create-new-design`.**
2. **What happens to the 13 existing `nextjs-portfolio` skills** once this ships — leave them untouched (default), or fold/retire the most redundant ones (`design-taste-frontend-v1`, `stitch-design-taste`, `redesign-existing-projects` are the most duplicative per the audit)? Your call, not required to decide now.
3. ~~Confirm or adjust the priority cut in §3~~ — **updated above** to make scroll-reactive layered storytelling the flagship technique, per your note. Still open: send more specific sites/videos any time before I lock the build if you want to push the cut further.

## 7. Next step

This document is the full research + spec. Once you review it and say go, Phase 6 (actually writing the SKILL.md, reference files, and code recipes) is a separate task — worth starting as a **fresh conversation** so the build doesn't drag all of this research context along. I'll prepare a handoff note for that when you're ready.
