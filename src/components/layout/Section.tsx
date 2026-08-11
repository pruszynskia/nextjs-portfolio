/*
  Section padding is 128px / 192px (--space-10 / --space-11) — 04-spacing-layout.md
  calls the generous whitespace non-negotiable and names "64px pretending to be
  generous" as the likely regression. Hairline rule between sections, no gradient
  wash, no decorative overlay.
*/
export function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`border-hairline relative border-b py-32 md:py-48 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
