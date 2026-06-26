"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

/**
 * Animated scroll indicator with smooth bouncing animation
 */
export function ScrollIndicator() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground/50 text-xs">Scroll to explore</span>
          <div className="border-foreground/30 flex h-6 w-4 items-center justify-center rounded-full border">
            <div className="bg-foreground/50 h-1 w-1 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-foreground/50 text-xs">Scroll to explore</span>
        <div className="border-foreground/30 flex h-6 w-4 items-center justify-center rounded-full border">
          <motion.div
            className="bg-foreground/50 h-1 w-1 rounded-full"
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
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
