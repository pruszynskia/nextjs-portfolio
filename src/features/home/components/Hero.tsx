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
        Andrzej Pruszyński
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold tracking-tight"
      >
        Senior Frontend Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-muted-foreground max-w-xl"
      >
        Senior Frontend Developer with over 5 years of experience building
        scalable, high-performance web applications in enterprise environments.
        Specialized in React and Next.js with a focus on performance,
        architecture, and user experience.
      </motion.p>
    </div>
  );
}
