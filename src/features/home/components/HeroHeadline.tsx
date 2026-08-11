"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/*
  The page's one signature motion moment (06-motion.md): a hard-edge mask wipe
  on the headline, --dur-4 / --ease-decisive. Everything else on the page is
  static — no scroll-triggered reveals, no looping animation.

  No session flag: the guide asks for it so the reveal never repeats on route
  change, but this is a single route and nav is hash anchors only, so the
  component never remounts and the wipe already runs exactly once per load.
*/
const EASE = [0.2, 0, 0, 1] as const;

export function HeroHeadline({
  greeting,
  name,
  title,
  description,
}: {
  greeting: string;
  name: string;
  title: string;
  description: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  /*
    `animate` always targets the visible end-state — never omit it. This hook
    is null during SSR/first paint and flips to its real value in an effect
    after mount; if the reduced-motion branch returned `{}` here, framer-motion
    would just stop driving the value wherever the wipe-in had gotten to,
    leaving the headline stuck fully clipped (invisible) instead of visible.
    `initial: false` (rather than omitted) skips the clipped starting state on
    first mount when reduced motion is already known.
  */
  const wipe = (delay: number) => ({
    initial: prefersReducedMotion ? false : { clipPath: "inset(0 100% 0 0)" },
    animate: { clipPath: "inset(0 0% 0 0)" },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.44, ease: EASE, delay },
  });

  return (
    <div>
      <p className="text-ink-muted text-label font-mono uppercase">
        {greeting}
      </p>

      <h1 id="hero-heading" className="mt-5">
        {/* The `hero` token tops out at 128px, which assumes a short headline
            word — "Pruszyński" overflows the column there. Same role, clamp
            tuned to the actual longest word. */}
        <motion.span
          {...wipe(0)}
          className="text-ink font-display font-expanded block text-[clamp(40px,7vw,112px)] leading-[1.05] font-bold tracking-[-0.03em]"
        >
          {name}
        </motion.span>
        <motion.span
          {...wipe(0.12)}
          className="text-ink-secondary font-display text-h2 mt-3 block"
        >
          {title}
        </motion.span>
      </h1>

      <p className="text-ink-secondary text-lead mt-8">{description}</p>
    </div>
  );
}
