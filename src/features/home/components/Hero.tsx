import { motion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";
import { HeroHeadline } from "./HeroHeadline";
import { CTAGroup } from "./CTAGroup";
import { SocialLinks } from "./SocialLinks";
import { ParticlesBackground } from "../../../components/animations/AmbientBackground";

import type { HeroContent } from "../types";

export function Hero({ content }: { content?: HeroContent }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start justify-center gap-8 py-32"
    >
      <ParticlesBackground />
      <StatusBadge variants={itemVariants} text={content?.badgeText ?? ""} />

      <HeroHeadline
        variants={itemVariants}
        greeting={content?.greeting ?? ""}
        name={content?.name ?? ""}
        title={content?.title ?? ""}
        description={content?.description ?? ""}
      />

      <CTAGroup variants={itemVariants} ctas={content?.ctas ?? []} />

      <SocialLinks variants={itemVariants} links={content?.socialLinks ?? []} />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground/50 text-xs">Scroll to explore</span>
          <div className="border-foreground/30 flex h-6 w-4 items-center justify-center rounded-full border">
            <div className="bg-foreground/50 h-1 w-1 rounded-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
