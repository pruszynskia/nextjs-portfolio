"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const orbClassName =
  "pointer-events-none absolute rounded-full blur-3xl will-change-transform";

/**
 * Animated gradient background with floating elements.
 * Keeps the ambient look while remaining subtle and performant.
 */
export function AmbientBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const staticLayer = (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`${orbClassName} bg-primary/20 -top-24 -left-20 h-72 w-72`}
      />
      <div
        className={`${orbClassName} bg-accent/20 right-[-4rem] bottom-[-4rem] h-72 w-72`}
      />
      <div
        className={`${orbClassName} top-1/2 right-1/4 h-48 w-48 bg-sky-400/10 dark:bg-cyan-300/10`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(90,200,250,0.12)_0%,transparent_60%)]" />
    </div>
  );

  if (prefersReducedMotion) {
    return staticLayer;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/15 absolute inset-0 bg-gradient-to-br via-transparent" />

      <motion.div
        className={`${orbClassName} from-primary/30 via-primary/20 -top-24 -left-24 h-80 w-80 bg-gradient-to-br to-transparent`}
        animate={{
          y: [0, 32, 0],
          x: [0, 18, 0],
          scale: [1, 1.08, 1],
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`${orbClassName} from-accent/30 via-accent/20 -right-28 -bottom-28 h-72 w-72 bg-gradient-to-br to-transparent`}
        animate={{
          y: [0, -34, 0],
          x: [0, -20, 0],
          scale: [1, 0.96, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className={`${orbClassName} top-1/2 right-1/4 h-48 w-48 bg-gradient-to-br from-sky-400/15 via-purple-400/10 to-transparent dark:from-cyan-300/20 dark:via-violet-400/10`}
        animate={{
          y: [0, 54, -16, 0],
          x: [0, -28, 28, 0],
          scale: [1, 1.04, 0.98, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(90,200,250,0.12)_0%,transparent_60%)]" />
    </div>
  );
}

/**
 * Animated particles background.
 */
export function ParticlesBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const particles = [
    { left: "8%", bottom: "-4%", duration: 12, delay: 0 },
    { left: "22%", bottom: "-10%", duration: 14, delay: 1.4 },
    { left: "41%", bottom: "-6%", duration: 11, delay: 0.8 },
    { left: "58%", bottom: "-3%", duration: 16, delay: 2.2 },
    { left: "76%", bottom: "-9%", duration: 13, delay: 3.1 },
    { left: "91%", bottom: "-5%", duration: 15, delay: 4.4 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="bg-primary/80 absolute h-2 w-2 rounded-full shadow-[0_0_12px_rgba(0,113,227,0.45)] will-change-transform dark:bg-sky-300/80 dark:shadow-[0_0_12px_rgba(90,200,250,0.45)]"
          style={{
            left: particle.left,
            bottom: particle.bottom,
          }}
          initial={{ opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.35 }
              : {
                  y: "-140vh",
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.15, 0.8],
                }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Smooth gradient transition between sections.
 */
export function SectionGradient({ className = "" }: { className?: string }) {
  return (
    <div
      className={`from-primary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b via-transparent to-transparent dark:from-white/[0.04] ${className}`}
    />
  );
}

/**
 * Animated shimmer effect.
 */
export function ShimmerEffect() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      initial={{ x: "-100%" }}
      animate={{
        x: "100%",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
