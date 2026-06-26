import { motion, type Variants } from "framer-motion";

export function HeroHeadline({
  variants,
  greeting,
  name,
  title,
  description,
}: {
  variants?: Variants;
  greeting: string;
  name: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={variants} className="space-y-4">
      <motion.p className="text-foreground/60 text-lg font-medium">
        {greeting}
      </motion.p>
      <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
        <motion.span
          className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {name}
        </motion.span>
      </h1>

      <motion.p className="text-foreground text-2xl font-semibold md:text-3xl">
        {title}
      </motion.p>

      <motion.p className="text-foreground/70 max-w-2xl text-lg leading-relaxed">
        {description}
      </motion.p>
    </motion.div>
  );
}
