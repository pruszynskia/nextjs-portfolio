/*
  Shared section header: mono eyebrow, Archivo h2, optional lead paragraph.
  Offset to col 3 (04-spacing-layout.md — "primary column typically starts at
  col 3"), never centered. `id` feeds Section's aria-labelledby="${id}-heading".
*/
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8 md:col-start-3">
        <p className="text-ink-muted text-label font-mono uppercase">
          {eyebrow}
        </p>
        <h2 id={`${id}-heading`} className="text-ink font-display text-h2 mt-4">
          {title}
        </h2>
        {description ? (
          <p className="text-ink-secondary text-lead mt-5 max-w-[52ch]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
