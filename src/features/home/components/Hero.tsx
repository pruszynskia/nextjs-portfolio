import { StatusBadge } from "./StatusBadge";
import { HeroHeadline } from "./HeroHeadline";
import { CTAGroup } from "./CTAGroup";
import { SocialLinks } from "./SocialLinks";

import type { HeroContent } from "../types";

export function Hero({ content }: { content?: HeroContent }) {
  return (
    <section
      className="flex min-h-[70vh] flex-col items-start justify-center gap-8 py-24 md:py-32"
      aria-labelledby="hero-heading"
    >
      <StatusBadge text={content?.badgeText ?? ""} />

      <HeroHeadline
        greeting={content?.greeting ?? ""}
        name={content?.name ?? ""}
        title={content?.title ?? ""}
        description={content?.description ?? ""}
      />

      <CTAGroup ctas={content?.ctas ?? []} />

      <SocialLinks links={content?.socialLinks ?? []} />

      <div className="pt-6" aria-label="Scroll to explore">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-foreground/50 text-xs">Scroll to explore</span>
          <div className="border-foreground/30 flex h-6 w-4 items-center justify-center rounded-full border">
            <div className="bg-foreground/50 h-1 w-1 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
