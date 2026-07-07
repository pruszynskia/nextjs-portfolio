import { ArrowRight } from "lucide-react";
import type { CTA } from "../types";

export function CTAGroup({ ctas }: { ctas: CTA[] }) {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      {ctas.map((cta, idx) => {
        if (cta.variant === "primary") {
          return (
            <a
              key={idx}
              href={cta.href}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              aria-label={cta.label}
            >
              {cta.label}
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          );
        }

        return (
          <a
            key={idx}
            href={cta.href}
            className="text-foreground rounded-lg border border-slate-200 px-8 py-3 font-semibold transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-white/20 dark:hover:border-white/40 dark:hover:bg-white/5"
            aria-label={cta.label}
          >
            {cta.label}
          </a>
        );
      })}
    </div>
  );
}
