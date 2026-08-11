import type { CTA } from "../types";

/*
  Primary: solid accent, radius-2, shadow-raised at rest deepening on hover.
  Secondary: hairline outline, transparent fill. No pill shape, no gradient,
  no translate-lift — elevation changes, position doesn't (05-components.md).
*/
export function CTAGroup({ ctas }: { ctas: CTA[] }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {ctas.map((cta, idx) =>
        cta.variant === "primary" ? (
          <a
            key={idx}
            href={cta.href}
            className="bg-signal text-signal-fg shadow-raised hover:bg-signal-hover hover:shadow-raised-hover text-body-sm rounded-md px-6 py-3 font-medium transition-all duration-[120ms]"
          >
            {cta.label}
          </a>
        ) : (
          <a
            key={idx}
            href={cta.href}
            className="border-hairline text-ink hover:border-strong text-body-sm rounded-md border px-6 py-3 font-medium transition-colors duration-[120ms]"
          >
            {cta.label}
          </a>
        ),
      )}
    </div>
  );
}
