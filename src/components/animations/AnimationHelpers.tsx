"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  usePrefersReducedMotion,
  useSmoothScroll,
} from "@/hooks/useAnimations";

interface ScrollIndicatorProps {
  targetSectionId?: string;
  className?: string;
}

/**
 * Accessible scroll indicator with responsive layout and hover bounce animation
 */
export function ScrollIndicator({
  targetSectionId = "about",
  className = "",
}: ScrollIndicatorProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollToSection } = useSmoothScroll();

  const handleClick = () => {
    scrollToSection(targetSectionId);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={
        prefersReducedMotion ? { scale: 1.02 } : { y: [0, -6, 0], scale: 1.03 }
      }
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      transition={
        prefersReducedMotion
          ? { duration: 0.2 }
          : {
              duration: 0.7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }
      }
      className={`text-foreground/70 focus-visible:ring-primary/70 focus-visible:ring-offset-background mx-auto flex w-full max-w-fit flex-col items-center justify-center gap-2 rounded-full px-4 py-3 text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:gap-3 sm:px-5 sm:py-4 ${className}`}
      aria-controls={targetSectionId}
      aria-label="Scroll to explore"
      title="Scroll to explore"
    >
      <span className="text-foreground/70 text-[0.65rem] font-medium tracking-[0.3em] uppercase sm:text-xs">
        Scroll to explore
      </span>
      <span className="border-foreground/30 bg-background/70 ring-foreground/10 flex h-7 w-5 items-center justify-center rounded-full border shadow-sm ring-1 sm:h-8 sm:w-6">
        <ArrowDown className="text-foreground/70 h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    </motion.button>
  );
}

/**
 * Floating action button with smooth animations
 */
interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  label?: string;
  className?: string;
  variant?: "default" | "secondary";
}

export function FloatingActionButton({
  icon,
  onClick,
  label,
  className = "",
  variant = "default",
}: FloatingActionButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: [0, -8, 0],
              boxShadow: [
                "0 0 0 0 rgba(0, 113, 227, 0.7)",
                "0 0 0 10px rgba(0, 113, 227, 0)",
              ],
            }
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`focus:ring-primary/50 fixed right-8 bottom-8 flex items-center justify-center rounded-full p-4 shadow-lg transition-all focus:ring-2 focus:outline-none ${
        variant === "default"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
      } ${className}`}
      aria-label={label}
      title={label}
    >
      {icon}
    </motion.button>
  );
}

/**
 * Animated text reveal component
 */
interface TextRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  disableAnimation?: boolean;
}

export function TextReveal({
  text,
  delay = 0,
  staggerDelay = 0.05,
  className = "",
  disableAnimation = false,
}: TextRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !disableAnimation && !prefersReducedMotion;

  const characters = text.split("");

  if (!shouldAnimate) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Animated underline that reveals on hover/view
 */
interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: string;
}

export function AnimatedUnderline({
  children,
  className = "",
  hoverColor = "bg-primary",
}: AnimatedUnderlineProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {children}
      <motion.div
        className={`absolute right-0 bottom-0 left-0 h-1 ${hoverColor} rounded-full`}
        variants={{
          initial: { scaleX: 0, transformOrigin: "left" },
          hover: { scaleX: 1, transformOrigin: "left" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.span>
  );
}

/**
 * Pulse animation wrapper for emphasis
 */
interface PulseEmphasisProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export function PulseEmphasis({
  children,
  className = "",
  duration = 2,
}: PulseEmphasisProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(0, 113, 227, 0.7)",
          "0 0 0 10px rgba(0, 113, 227, 0)",
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
