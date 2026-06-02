export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative border-b border-white/5 py-24 md:py-32">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
      {children}
    </section>
  );
}
