import { SectionHeading } from "@/components/layout/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import type { ExperienceContent, ExperienceItem } from "../types";

const TYPE_LABEL: Record<ExperienceItem["type"], string> = {
  "full-time": "Full-time",
  freelance: "Freelance",
  "self-directed": "Self-directed, unpaid",
  "career-break": "Career break, unpaid",
};

export function Experience({ content }: { content?: ExperienceContent }) {
  const items: ExperienceItem[] = content?.items ?? [];

  return (
    <div aria-labelledby="experience-heading">
      <SectionHeading
        id="experience"
        eyebrow={content?.header?.badge ?? "Experience"}
        title={content?.header?.title ?? "Where I've Worked"}
        description={content?.header?.description}
      />

      <ul className="border-hairline mt-16 border-t" aria-label="Work history">
        {items.map((item) => (
          <li
            key={item.index}
            className="border-hairline border-b py-12 md:py-16"
          >
            <div className="grid grid-cols-12 gap-6">
              <div className="text-ink-muted text-label col-span-12 font-mono uppercase md:col-span-1">
                {item.index}
              </div>

              <div className="col-span-12 md:col-span-11">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-ink font-display text-h3">
                    {item.company}
                    <span className="text-ink-secondary font-sans font-normal">
                      {" "}
                      — {item.role}
                    </span>
                  </h3>
                  <p className="text-ink-muted text-label shrink-0 font-mono uppercase">
                    {item.period}
                  </p>
                </div>

                <p className="text-ink-muted text-label mt-2 font-mono uppercase">
                  {TYPE_LABEL[item.type]}
                  {item.concurrentNote ? ` · ${item.concurrentNote}` : ""}
                </p>

                <p className="text-ink-secondary text-body-lg mt-5 max-w-[68ch]">
                  {item.summary}
                </p>

                {item.highlights.length > 0 ? (
                  <ul className="mt-6 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-ink-secondary text-body-sm flex gap-3 leading-relaxed"
                      >
                        <span
                          className="text-ink-muted font-mono"
                          aria-hidden="true"
                        >
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.technologies.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
