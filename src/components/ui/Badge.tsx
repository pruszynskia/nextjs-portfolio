import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, children }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-foreground/60 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
