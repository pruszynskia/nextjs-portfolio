import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CTA } from "../types";

export function CTAGroup({
  variants,
  ctas,
}: {
  variants?: Variants;
  ctas: CTA[];
}) {
  return (
    <motion.div variants={variants} className="flex flex-wrap gap-4 pt-4">
      {ctas.map((cta, idx) => {
        if (cta.variant === "primary") {
          return (
            <motion.a
              key={idx}
              href={cta.href}
              whileHover={{ scale: 1.05, gap: 8 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              {cta.label}
              <ArrowRight size={20} />
            </motion.a>
          );
        }

        return (
          <motion.a
            key={idx}
            href={cta.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-foreground rounded-lg border border-slate-200 px-8 py-3 font-semibold transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-white/20 dark:hover:border-white/40 dark:hover:bg-white/5"
          >
            {cta.label}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
