"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="flex flex-col items-start gap-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-muted-foreground text-sm"
      >
        Senior Frontend Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold tracking-tight"
      >
        Building modern, scalable web applications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-muted-foreground max-w-xl"
      >
        I specialize in React, Next.js and frontend architecture with a focus on
        performance, UX and clean code.
      </motion.p>
    </div>
  );
}
