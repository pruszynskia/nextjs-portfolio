import { StatusBadge } from "./StatusBadge";
import { HeroHeadline } from "./HeroHeadline";
import { CTAGroup } from "./CTAGroup";
import { SocialLinks } from "./SocialLinks";
import { ScrollIndicator } from "@/components/animations/AnimationHelpers";

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

      <div className="mt-6 flex w-full justify-center">
        <ScrollIndicator targetSectionId="about" />
      </div>
    </section>
  );
}
