import { motion, type Variants } from "framer-motion";

export function StatusBadge({
  variants,
  text,
}: {
  variants?: Variants;
  text: string;
}) {
  return (
    <motion.div
      variants={variants}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
      role="status"
      aria-live="polite"
    >
      <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
      <span className="text-foreground/80 text-sm font-medium">{text}</span>
    </motion.div>
  );
}
