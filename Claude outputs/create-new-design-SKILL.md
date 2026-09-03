---
name: create-new-design
description: Design and build motion-rich, "award-winning"-feeling web pages via a two-stage Design-then-Build workflow, with scroll-reactive layered storytelling as the flagship technique. Use when the user wants a landing page, portfolio, or marketing site to feel like an Awwwards/land-book Site-of-the-Day entry, mentions scrollytelling, parallax storytelling, kinetic type, GSAP/ScrollTrigger, Lenis, smooth scroll, Three.js/WebGL hero, page transitions, or says a design feels flat/static/templated and needs real motion.
---

# create-new-design

Motion and interaction layer for producing sites that read as produced, not
templated. This skill owns **motion, interaction, and the two-stage
Design→Build workflow**, plus a compact static-taste baseline (§ Static
taste, quick reference) for projects that have no dedicated taste/design
skill installed. If the project already has a real taste skill installed,
prefer its full color/type/layout/copy rules over this skill's condensed
version — the quick reference here is a floor, not a replacement for a real
one. If neither exists, ask once whether a taste skill should be added, or
proceed on the baseline below. Either way, motion is always this skill's
job — that never gets deferred.

**Never treat a personal brand guide (e.g. a portfolio's own restrained
design-system doc) as universal law.** A guide that bans parallax and
scroll-fade outright is encoding *that specific brand's* restraint, not a
verdict on scroll-reactive motion in general. Read it for inspiration on
craft and matte/considered rendering, never copy its bans wholesale into a
different project's brief.

## The core distinction: cheap vs. expensive, not simple vs. animated

Everything in this skill hangs on one line: **the dividing line between
"AI slop" and "award-winning" is cheap-default vs. produced-effect — not
static vs. animated.**

Cheap tells (avoid, whatever the `MOTION_INTENSITY` dial says):
- Generic gradient fills, gloss, or glow on buttons/cards
- Decorative pill badges with a pulsing dot
- Floating-blob loops with no narrative purpose
- Fade-up applied to literally every section, mechanically, in sequence
- Any animation you can't justify in one sentence ("what does this
  communicate?")

Expensive, motivated effects (the actual goal, lean into these):
- A layered background that tracks scroll position across multiple depth
  planes and changes what it's showing as the user scrolls — a scene that
  narrates the page
- One real pinned/scrubbed scroll sequence that reveals content in a
  deliberate order
- A single restrained 3D hero moment (matte material, soft single-direction
  light, not a rainbow-gradient orb)
- A real page transition, not an instant hard cut

Confirmed on two live 2026 Awwwards Site-of-the-Day winners: `trevornoah.com`
ships Lenis + exactly one `<canvas>` with a single matte `.glb` 3D earth —
one restrained hero moment, nothing more. `paulkalkbrenner.net` exposes
`gsap`, `ScrollTrigger`, `Lenis`, and `barba` as page globals with zero 3D —
its entire effect budget is scroll-driven storytelling and page transitions.
Neither site is "more animated" for its own sake; both are motivated,
produced, and restrained in scope even while being technically ambitious.

## Read the brief before picking techniques

Before generating anything, read the brief: page kind (landing / portfolio /
marketing / product), audience (who has to be persuaded), vibe words the
user actually used, any brand assets already supplied, and quiet constraints
that override aesthetic ambition (accessibility-critical, public-sector,
regulated, or trust-first commerce briefs all argue for restraint regardless
of how ambitious the rest of the ask sounds).

State a one-line **design read** before generating artboards: *"Reading
this as: `<page kind>` for `<audience>`, `<intensity>` motion budget, leaning
on `<2-4 techniques from the cut below>`."*

Size the technique count to an informal intensity read rather than reaching
for everything on the cut:
- **Restrained** (1-2 techniques — typically Lenis + one scrollytelling
  scene, or Lenis + one kinetic headline): editorial, trust-first,
  public-sector, or accessibility-critical briefs, or anything using words
  like "calm", "minimal", "Linear-style".
- **Balanced** (3-4 techniques — Lenis + scrollytelling + ScrollTrigger +
  kinetic type is the common combination): most landing pages and
  portfolios, the default when nothing pushes toward either extreme.
- **Maximalist** (5+ techniques, WebGL and/or page transitions included):
  agency, experimental, or explicitly Awwwards-chasing briefs only — and
  only when the brief actually asks for that level of ambition, never by
  default just because the library budget allows it.

If genuinely ambiguous, ask **one** question, not a multi-question dump —
e.g. "Should this feel closer to restrained editorial or full
Awwwards-experimental?"

## Workflow: two stages, four entry points

### Stage A — Design

Invoke the built-in `design` skill to produce editable `.dc.html` artboards
that embody the technique cut below (§ Technique cut) plus the static taste
baseline (§ Static taste, quick reference) or the project's installed taste
skill, whichever applies. Two entry points:

- **Fresh brief.** Apply the brief read above, then pick 2-4 techniques from
  the cut below that the brief actually motivates — never all of them.
- **Existing site supplied.** Analyze it first: what's the current motion
  budget (static / some CSS transitions / already GSAP-driven), what's the
  brand's existing restraint level, is this evolution or a from-scratch
  reskin. Either restyle the motion layer in place or use the site as
  source content for a new design — ask once if genuinely ambiguous.

**Representing motion in static artboards.** A `.dc.html` artboard is a
static, pannable canvas — it can't literally scrub on scroll, so represent
motion as a design decision the user can review, not as an attempt to fake
the animation:
- **Scrollytelling scene:** one artboard per beat (3-5 total), arranged on
  the canvas in scroll order, so panning across them mirrors scrolling
  through the story. Caption each artboard with what's in the far/mid/near
  depth planes and what swaps between beats.
- **Pinned/scrubbed sequences (ScrollTrigger):** show the start and end
  state as two artboards, captioned with what pins, what scales, and where
  the trigger points fall.
- **Kinetic type, page transitions, hover/cursor effects:** a single
  artboard of the resting state plus a short caption describing the motion
  (e.g. "words arrive top-to-bottom, staggered 40ms, on scroll into view")
  — Stage B implements directly against that written spec.

### Stage B — Build

Once artboards are approved, implement for real in Next.js/React/Tailwind
(the default stack — confirm if the project uses something else; the
libraries below are framework-agnostic, so the same setup/cleanup mechanics
port to Vue, Svelte, Astro, or plain HTML/JS if that's what the project
uses). Two entry points:

- **Fresh scaffold.** Stand up the project, install the libraries the
  chosen techniques need (see each technique's setup below), wire the
  motion layer in isolated client components per the isolation rule below.
- **Existing codebase supplied.** Analyze its structure first (App Router
  vs Pages Router, existing animation libraries already in `package.json`,
  existing design tokens) and integrate — do not blow away working code
  unless the user asks for a full rebuild. Reuse existing color/spacing
  tokens; this skill only adds the motion layer on top.

**Isolation rule (applies to every technique below):** any component using
scroll listeners, GSAP, Lenis, Three.js, or pointer physics must be an
isolated Client Component leaf (`"use client"` at the top), instantiated
inside `useEffect` with a cleanup function (`gsap.context().revert()` for
GSAP, `lenis.destroy()` for Lenis, `renderer.dispose()` for Three.js).
Server Components render static layout only. Never mix GSAP/Three.js and
Framer Motion/Motion in the same component tree — they fight over frames;
pick one engine per interaction and isolate it.

**Reduced motion, non-negotiable for every technique below:** wrap every
scroll-driven or pinned effect in a `prefers-reduced-motion` check and
degrade to the static end-state instantly, not a slower version of the same
motion. A half-built or skipped scroll effect under reduced motion is a
bug, not an acceptable fallback gap.

## Technique cut (priority order — pick from this, don't ship all of it)

| # | Technique | Priority | Use it when |
|---|---|---|---|
| 1 | Scrollytelling: layered, scroll-reactive backgrounds | **Flagship** | The page has a narrative to unfold — a product story, a process, a journey. This is the skill's signature move. |
| 2 | Lenis (inertial smooth scroll) | High | Almost always, as the substrate under any scroll-driven technique — it's the mechanical foundation, free, and what both inspected SOTD sites run. |
| 3 | GSAP ScrollTrigger (pin/scrub/parallax) | High | The engine behind #1 and most of what follows. Now fully free (Webflow dropped the GreenSock paywall). |
| 4 | Kinetic type (GSAP SplitText) | High | A headline or key statement should arrive as part of the narrative, not just fade in. SplitText is now free. |
| 5 | Restrained WebGL/3D (Three.js) | Medium-High | There's a real 3D subject (a product, a globe, a material) — one hero moment or one background layer, never a default. |
| 6 | Native CSS scroll-driven animation (`animation-timeline`) | Medium | A single simple reveal that doesn't need pinning or scrubbing — lighter than reaching for GSAP by default. |
| 7 | Page transitions (Barba.js or View Transitions API) | Medium | Multi-page site where a hard cut between routes would break the mood the scroll work built. |
| 8 | Cursor/magnetic hover | Low-Medium, guarded | Only when the brief is genuinely playful/premium-agency AND it's implemented with motion values, never `useState`. Easy to overdo; many taste skills ban custom cursors outright for accessibility reasons — respect that ban if present. |
| 9 | Particle-button explosions, holographic foil cards | Flagged | Fine when a specific interaction is content-motivated (a real "success" moment). A default reach-for on every CTA is a tell. |

Actively avoid, regardless of dial settings: gloss/glossy surface effects,
generic gradient fills, decorative pill badges, floating-blob loops with no
narrative purpose. These are cheap by construction — one-line defaults, not
produced effects — and no amount of "but it's animated" makes them read as
premium.

## Static taste, quick reference (baseline — defer to an installed taste skill if one exists)

Deliberately compact. If the project has a real taste/design skill
installed, its full rules win — this section exists so `create-new-design`
is never starting from nothing on a project with no other design skill.

**Color.** One accent hue on a neutral base — not the default AI-purple or
blue-glow gradient. No colored glow or neon drop-shadows on buttons or
cards. One palette, one theme (light or dark) for the whole page; sections
don't invert independently. WCAG AA contrast minimum, checked on every
button and form field.

**Type.** Choose a real display face and a real body face deliberately —
don't default to Inter/system-ui by reflex, and don't reach for a serif
"because it feels premium" without a reason tied to the brand. Two
typefaces plus a mono for data is plenty; more than that reads as noise.

**Layout.** Break the centered-hero / three-equal-cards / bento-grid default
when the brief calls for anything with edge — asymmetry should be motivated
by content, not applied for its own sake. Hero fits above the fold: one
headline (max 2 lines), short subtext, one primary CTA. Don't repeat the
same section-layout shape more than twice in a row down the page.

**Copy.** No filler verbs ("elevate", "unleash", "revolutionize"), no
fake-precise stats invented to look like data, no generic placeholder brand
names. One voice register for the whole page.

Run this alongside the motion checklist below before calling a build done,
whether or not a fuller taste skill is also installed.

---

## 1. Scrollytelling — layered, scroll-reactive backgrounds (flagship)

The pattern: multiple background layers (depth planes) that move at
different rates and swap content as the user scrolls, so the background
itself narrates the page rather than just sitting behind static content.
Built on Lenis (§2) + GSAP ScrollTrigger (§3).

```tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react"; // or your own media-query hook

gsap.registerPlugin(ScrollTrigger);

type Beat = {
  id: string;
  // Content that appears while this beat is "active" in the scroll story
  render: () => React.ReactNode;
};

export function ScrollytellingScene({ beats }: { beats: Beat[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const bgFar = useRef<HTMLDivElement>(null);   // slowest layer, e.g. gradient/sky
  const bgMid = useRef<HTMLDivElement>(null);   // medium layer, e.g. terrain/shape
  const bgNear = useRef<HTMLDivElement>(null);  // fastest layer, e.g. foreground object
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current) return;
    const ctx = gsap.context(() => {
      const total = beats.length;

      // Depth planes move at different scroll-scrubbed rates -> parallax
      gsap.to(bgFar.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: wrap.current, start: "top top", end: "bottom bottom", scrub: 1 },
      });
      gsap.to(bgMid.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: wrap.current, start: "top top", end: "bottom bottom", scrub: 1 },
      });
      gsap.to(bgNear.current, {
        yPercent: -60,
        ease: "none",
        scrollTrigger: { trigger: wrap.current, start: "top top", end: "bottom bottom", scrub: 1 },
      });

      // Each beat gets its own trigger zone; crossing into it swaps state
      // (a class toggle, a CSS variable, or a small bit of client state
      // driven by ScrollTrigger's onEnter/onLeaveBack — not useState on
      // every scroll frame, only on discrete beat transitions).
      beats.forEach((beat, i) => {
        ScrollTrigger.create({
          trigger: `#beat-${beat.id}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => wrap.current?.style.setProperty("--active-beat", String(i)),
          onEnterBack: () => wrap.current?.style.setProperty("--active-beat", String(i)),
        });
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduce, beats]);

  return (
    <div ref={wrap} className="relative">
      {/* Fixed/sticky background stack, one element per depth plane */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden pointer-events-none">
        <div ref={bgFar} className="absolute inset-0" /* far layer asset */ />
        <div ref={bgMid} className="absolute inset-0" /* mid layer asset */ />
        <div ref={bgNear} className="absolute inset-0" /* near layer asset */ />
      </div>
      {/* Foreground content beats, normal document flow, each tall enough
          to own a scroll segment */}
      {beats.map((beat) => (
        <section key={beat.id} id={`beat-${beat.id}`} className="relative min-h-[100dvh] flex items-center">
          {beat.render()}
        </section>
      ))}
    </div>
  );
}
```

Rules specific to this technique:
- **3-5 beats max per scene.** More than that and the story stops reading
  as deliberate and starts reading as an endless scroll gimmick.
- Each depth plane must be doing narrative work — texture/mood (far),
  shape/environment (mid), the subject (near). If a layer is just there to
  add parallax with nothing to say, cut it.
- Preload/lazy-load background assets for each beat so the reveal doesn't
  pop in late — this is the single most common way scrollytelling reads as
  broken rather than polished.
- Under `prefers-reduced-motion`, collapse to a static stack: show the last
  beat's background, or a single considered static image, with no parallax.

## 2. Lenis — smooth inertial scroll substrate

The mechanical foundation everything scroll-driven above sits on. Confirmed
running on both inspected 2026 SOTD sites.

```bash
npm install lenis
```

```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync Lenis with GSAP's ticker so ScrollTrigger reads the smoothed
    // scroll position instead of raw native scroll.
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

Mount once near the root layout (`app/layout.tsx`), not per-page. Respect
`prefers-reduced-motion`: skip instantiating Lenis entirely when it's set,
so the browser's native (already accessible) scroll behavior takes over.

## 3. GSAP ScrollTrigger — pin/scrub/parallax engine

This is the engine behind the scrollytelling pattern above. If the project's
taste skill already ships sticky-stack and horizontal-pan recipes (as
`design-taste-frontend` v2 does), use those directly for that specific
shape — don't rewrite them. This skill adds the piece those recipes don't
cover: **layered depth parallax that isn't a stack of full-bleed cards**,
i.e. §1 above, plus the general rules:

- `start: "top top"` for anything that pins — `"top center"` or `"top 80%"`
  fires the trigger before the section is actually in position and is the
  most common ScrollTrigger bug.
- `scrub: true` for tight 1:1 coupling to scroll position; `scrub: 1` (a
  number) for a slight easing lag that feels less mechanical — prefer the
  numeric form for anything narrative.
- Always `gsap.context()` + `ctx.revert()` in a `useEffect` cleanup, and
  always call `ScrollTrigger.refresh()` after any layout-affecting async
  content (fonts, images) finishes loading, or triggers will be measured
  against the wrong document height.
- Never animate `top`/`left`/`width`/`height`. `transform` and `opacity`
  only, for the same hardware-acceleration reasons any taste skill's
  performance section already states.

## 4. Kinetic type — GSAP SplitText

Now free (previously gated behind GSAP's paid Business plan). Use for a
headline or key line that should arrive as a scroll-driven or load-driven
reveal — pairs naturally with a scrollytelling beat transition.

```bash
npm install gsap
```

```tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function KineticHeadline({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduce) return; // headline just renders statically, no split needed

    const ctx = gsap.context(() => {
      const split = new SplitText(ref.current, { type: "lines,words" });
      gsap.from(split.words, {
        yPercent: 110,
        opacity: 0,
        stagger: 0.04,
        ease: "power3.out",
        duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
      return () => split.revert();
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return <h2 ref={ref}>{text}</h2>;
}
```

Reach for word/line splits (arriving in sequence) over character splits by
default — character-by-character reveals read as a demo effect more often
than they read as considered typography. Reserve char-splits for a single
deliberate moment (a logo mark, a very short standalone statement), not a
whole paragraph.

## 5. Restrained WebGL/3D (Three.js)

Right tool only for a genuine 3D subject — a product, a globe, a material
study. `trevornoah.com`'s entire 3D budget is one `<canvas>` with a single
matte `.glb` model; that restraint is the point, not a limitation. CSS 3D
transforms + ScrollTrigger get most of the visual impact at a fraction of
the complexity for anything that doesn't need a real 3D scene — reach for
Three.js only when the brief genuinely needs geometry, materials, or camera
movement that CSS can't fake.

```bash
npm install three @react-three/fiber @react-three/drei
```

```tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useGLTF, Environment } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export function HeroModel({ modelUrl }: { modelUrl: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <Model url={modelUrl} />
        {/* Soft, single-direction light — matte material, no rainbow
            specular hotspots. This is the difference between "considered
            render" and "generic 3D-stock-asset" hero blob. */}
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
```

Guardrails: one canvas, one hero moment or one background layer — never a
default across the page. Matte materials, soft single-direction lighting,
tinted to the page's own neutral ramp, not a multi-color glossy orb. Lazy
load the model and the `Canvas` itself (`dynamic(() => import(...), { ssr:
false })` in Next.js); Three.js is heavy, never ship it above-the-fold
without a real reason.

## 6. Native CSS scroll-driven animation (`animation-timeline`)

The lightweight option — no JS, no library — for a single reveal that
doesn't need pinning, scrubbing across depth planes, or cross-browser
polyfilling concerns beyond what the project already accepts. Use this
instead of reaching for GSAP by default when the effect really is this
simple.

```css
@keyframes reveal {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal-on-scroll {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll { animation: none; opacity: 1; transform: none; }
}
```

Browser support (2026): shipped in Chromium and Firefox; check current
Safari status before relying on it as the only implementation for a
cross-browser-critical reveal — fall back to the Motion `whileInView`
pattern (see any installed taste skill's scroll-reveal recipe) if Safari
support is a hard requirement at build time.

## 7. Page transitions — Barba.js vs. View Transitions API

Confirmed in real use: `paulkalkbrenner.net` runs Barba.js for its page
transitions. The View Transitions API is the native modern alternative but
had not fully replaced JS-based transition libraries in the wild as of this
research — pick based on the project's constraints, not by default.

**View Transitions API** — prefer this first when the target browsers
support it (or the project can accept a same-behavior fallback), because
it's native, zero-dependency, and works with the browser's own paint
pipeline:

```tsx
// Next.js App Router: wrap navigation in the View Transitions API where supported
"use client";
import { useRouter } from "next/navigation";

function useTransitionRouter() {
  const router = useRouter();
  return (href: string) => {
    if (!document.startViewTransition) {
      router.push(href);
      return;
    }
    document.startViewTransition(() => {
      router.push(href);
    });
  };
}
```

```css
/* Name the elements that should morph across the transition */
.hero-image { view-transition-name: hero-image; }

::view-transition-old(hero-image),
::view-transition-new(hero-image) {
  animation-duration: 0.5s;
}
```

**Barba.js** — reach for this when the project needs more choreographed
control than the View Transitions API currently offers (staged exit/enter
sequencing across multiple unrelated elements, tighter GSAP integration),
or when browser support for View Transitions is a blocker:

```bash
npm install @barba/core
```

```ts
import barba from "@barba/core";
import { gsap } from "gsap";

barba.init({
  transitions: [
    {
      name: "fade",
      leave(data) {
        return gsap.to(data.current.container, { opacity: 0, duration: 0.4 });
      },
      enter(data) {
        return gsap.from(data.next.container, { opacity: 0, duration: 0.4 });
      },
    },
  ],
});
```

Barba.js is built for traditional multi-page apps; in a Next.js App Router
project, integrating it means opting out of some of the framework's own
navigation handling — weigh that cost against what View Transitions can
already do before reaching for it.

## 8. Cursor / magnetic hover — guarded, low priority

Real and effective when motivated, but the single easiest technique on this
list to overdo, and several taste skills ban custom cursors outright as
accessibility- and performance-hostile. **If the project's installed taste
skill bans custom cursors, respect that ban — don't override it from this
skill.** Where it's allowed:

```tsx
"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.button>
  );
}
```

Never `useState` for pointer position (re-renders every frame, collapses on
mobile) — motion values only, as above. Never on more than a handful of
elements per page; a magnetic effect on every button and link is the
overdone version of this technique.

## 9. Particle buttons / holographic cards — judgment call

Both appear constantly in "trendy technique" vocabulary lists across the
wider AI-design-skill ecosystem, and both are easy to deploy as pure
decoration. Use only when tied to a real moment the content earns (a
successful form submit, a genuinely premium product's signature card) —
never as a default CTA or card treatment. If you can't name the specific
content reason for it in one sentence, it's decoration, not a produced
effect — cut it.

---

## Anti-slop checklist for motion (run before calling any build done)

1. Can you name, in one sentence, what each animation communicates
   (hierarchy, narrative sequence, feedback, or state change)? If not, cut
   it — "it looked cool" is not a reason.
2. Is any effect a cheap tell from the "actively avoid" list (gloss,
   generic gradient, decorative pulsing pill, purposeless floating loop)?
3. Does the scrollytelling scene (if used) have 3-5 beats, each doing
   distinct narrative work — not more layers than the story needs?
4. Does every scroll-driven/pinned/parallax effect degrade to a static,
   instant end-state under `prefers-reduced-motion` — not a slower version
   of itself?
5. Is every scroll/pointer listener implemented via Lenis, ScrollTrigger,
   `IntersectionObserver`, CSS `animation-timeline`, or Motion's
   `useMotionValue`/`useScroll` — never a raw `window.addEventListener(
   "scroll", ...)` or `useState` tracking a continuous value?
6. Is GSAP/Three.js kept out of the same component tree as Motion/Framer
   Motion? Are all client-side motion components isolated leaves with
   `"use client"` and proper cleanup?
7. If Three.js/WebGL is used: is it one restrained hero moment or one
   background layer, matte and soft-lit, not a multi-color glossy default?
8. Would this page, screenshotted mid-scroll with the logo removed, be
   mistaken for a template gallery entry — or does the motion read as
   built specifically for this content?

If the project has its own installed taste skill, run its full pre-flight/
anti-pattern checklist for everything static instead of the quick reference
above. If not, run the Static taste, quick reference section above. Either
way, this motion checklist runs on top of whichever one applies, never
instead of it.
