/*
  Mono tech/meta tag (05-components.md "Tags / labels"): mono, uppercase,
  radius-1, sunken surface, no per-category colour.
  ponytail: full-strength shadow-raised, not the ~40%-reduced-spread variant
  the guide suggests for small tags — tune if a dense tag row reads as noisy.
*/
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-sunken text-ink-secondary border-hairline shadow-raised text-label inline-block rounded-sm border px-2 py-1 font-mono uppercase">
      {children}
    </span>
  );
}
