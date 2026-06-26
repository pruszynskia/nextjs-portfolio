"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  useScrollReveal,
  usePrefersReducedMotion,
} from "@/hooks/useAnimations";
import { SectionGradient } from "../animations/AmbientBackground";

interface EnhancedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  disableAnimation?: boolean;
}

/**
 * Enhanced section component with scroll-triggered reveal animations
 * Provides smooth entrance as section comes into view
 */
export function EnhancedSection({
  children,
  id,
  className = "",
  delay = 0,
  disableAnimation = false,
}: EnhancedSectionProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.15,
    once: true,
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !disableAnimation && !prefersReducedMotion;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative border-b border-white/5 py-24 md:py-32 ${className}`}
      initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
      animate={shouldAnimate && isVisible ? { opacity: 1 } : { opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <SectionGradient />
      {children}
    </motion.section>
  );
}

/**
 * Legacy Section component (for backward compatibility)
 */
export function Section({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <EnhancedSection id={id} className={className} disableAnimation={false}>
      {children}
    </EnhancedSection>
  );
}
