"use client";

import React from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends ComponentProps<"div"> {
  isHoverable?: boolean;
  delay?: number;
  disableAnimation?: boolean;
  glassEffect?: boolean;
}

/**
 * Enhanced Card component with animations and glassmorphism effects
 */
export const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  (
    {
      className,
      isHoverable = true,
      delay = 0,
      disableAnimation = false,
      glassEffect = false,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses = cn(
      "group/card bg-card text-card-foreground ring-foreground/10 flex flex-col gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0",
      glassEffect &&
        "backdrop-blur-md bg-white/[0.02] border border-white/10 shadow-lg shadow-black/5",
      className,
    );

    const motionProps: MotionProps = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: {
        duration: 0.6,
        delay: delay * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
      whileHover: isHoverable
        ? {
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          }
        : undefined,
    };

    if (disableAnimation) {
      return (
        <div ref={ref} className={baseClasses} {...props}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={baseClasses}
        {...motionProps}
        {...(props as MotionProps)}
      >
        {/* Hover gradient shine effect */}
        {isHoverable && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="relative">{children}</div>
      </motion.div>
    );
  },
);

AnimatedCard.displayName = "AnimatedCard";

/* ------------------------------------------------------------------ */
/* Card subcomponents                                                  */
/* ------------------------------------------------------------------ */

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "bg-muted/50 flex items-center rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3",
        className,
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

export {
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
