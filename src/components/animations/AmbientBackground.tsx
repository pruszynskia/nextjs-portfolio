"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

/**
 * Animated gradient background with floating elements
 * Creates an ambient, polished feel
 */
export function AmbientBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="from-primary/5 to-accent/5 pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br via-transparent">
      {/* Large floating orb */}
      <motion.div
        className="from-primary/20 via-primary/10 absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br to-transparent blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium floating orb */}
      <motion.div
        className="from-accent/20 via-accent/10 absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-gradient-to-br to-transparent blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Small floating orb */}
      <motion.div
        className="absolute top-1/2 right-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-transparent blur-3xl"
        animate={{
          y: [0, 60, -20, 0],
          x: [0, -30, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.03)_0%,transparent_50%)]" />
    </div>
  );
}

/**
 * Animated particles background
 */
export function ParticlesBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  // Static particle configuration.
  // Deterministic = React 19 friendly.
  const particles = [
    { left: "8%", bottom: "-2%", duration: 10, delay: 0 },
    { left: "22%", bottom: "-8%", duration: 12, delay: 2 },
    { left: "41%", bottom: "-5%", duration: 9, delay: 1 },
    { left: "58%", bottom: "-3%", duration: 14, delay: 3 },
    { left: "76%", bottom: "-7%", duration: 11, delay: 4 },
    { left: "91%", bottom: "-4%", duration: 13, delay: 5 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="bg-primary/40 absolute h-1 w-1 rounded-full"
          style={{
            left: particle.left,
            bottom: particle.bottom,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            y: "-120vh",
            opacity: [0, 0.5, 0],
          }}
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
 * Smooth gradient transition between sections
 */
export function SectionGradient({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent ${className}`}
    />
  );
}

/**
 * Animated shimmer effect
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
