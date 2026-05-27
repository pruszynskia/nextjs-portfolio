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
        Building scalable, high-performance web applications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-muted-foreground max-w-xl"
      >
        With over 5 years of experience, I specialize in React and Next.js
        development. My expertise lies in building scalable web applications
        with a focus on performance, architecture, and user experience.
      </motion.p>
    </div>
  );
}
