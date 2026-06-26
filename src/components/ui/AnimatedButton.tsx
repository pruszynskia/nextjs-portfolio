"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "./Button";
import type { VariantProps } from "class-variance-authority";

interface AnimatedButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disableAnimation?: boolean;
}

/**
 * Enhanced button with smooth animations, hover effects, and micro-interactions
 * Maintains accessibility while adding polish
 */
export const AnimatedButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps
>(({ disableAnimation = false, children, ...props }, ref) => {
  return (
    <motion.div
      whileHover={disableAnimation ? {} : { scale: 1.02 }}
      whileTap={disableAnimation ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button ref={ref} className="relative overflow-hidden" {...props}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={disableAnimation ? {} : { x: "100%" }}
          transition={{ duration: 0.5 }}
          style={{ pointerEvents: "none" }}
        />
        <span className="relative">{children}</span>
      </Button>
    </motion.div>
  );
});

AnimatedButton.displayName = "AnimatedButton";
