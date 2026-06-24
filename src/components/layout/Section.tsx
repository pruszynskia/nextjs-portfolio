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
      className={`relative border-b border-white/5 py-24 md:py-32 ${className ?? ""}`}
    >
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
      {children}
    </section>
  );
}
