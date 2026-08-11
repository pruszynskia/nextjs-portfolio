import { ArrowDown } from "lucide-react";

import { HeroHeadline } from "./HeroHeadline";
import { HeroField } from "./HeroField";
import { CTAGroup } from "./CTAGroup";
import { SocialLinks } from "./SocialLinks";

import type { HeroContent } from "../types";

export function Hero({ content }: { content?: HeroContent }) {
  return (
    <section
      id="home"
      className="border-hairline relative overflow-hidden border-b"
      aria-labelledby="hero-heading"
    >
      {/* Single hero visual, bled off the right edge — full-bleed break (04-spacing-layout.md) */}
      <div
        className="text-ink-secondary pointer-events-none absolute -top-24 -right-32 w-[560px] opacity-40 sm:-right-24 sm:w-[680px] lg:top-1/2 lg:right-[-8%] lg:w-[860px] lg:-translate-y-1/2 lg:opacity-100"
        aria-hidden="true"
      >
        <HeroField className="h-auto w-full" />
      </div>

      <div className="max-w-editorial relative mx-auto w-full px-4 md:px-8">
        <div className="grid grid-cols-12 gap-6 pt-24 pb-24 md:pt-32 md:pb-32">
          <div className="col-span-12 lg:col-span-6 lg:col-start-2">
            <HeroHeadline
              greeting={content?.greeting ?? ""}
              name={content?.name ?? ""}
              title={content?.title ?? ""}
              description={content?.description ?? ""}
            />

            <CTAGroup ctas={content?.ctas ?? []} />

            <div className="border-hairline mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-8">
              <p className="text-ink-muted text-label font-mono uppercase">
                {content?.badgeText ?? ""}
              </p>
              <SocialLinks links={content?.socialLinks ?? []} />
            </div>
          </div>
        </div>

        {/* Scroll cue — the one permitted true-circle control (05-components.md), static */}
        <a
          href="#about"
          className="text-ink-muted hover:text-ink group mb-12 inline-flex items-center gap-3 transition-colors duration-[120ms]"
        >
          <span className="border-hairline group-hover:border-strong flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-[120ms]">
            <ArrowDown size={15} aria-hidden="true" />
          </span>
          <span className="text-label font-mono uppercase">Scroll</span>
        </a>
      </div>
    </section>
  );
}
