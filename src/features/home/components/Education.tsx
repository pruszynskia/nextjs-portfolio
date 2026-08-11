import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import type { EducationContent, EducationItem } from "../types";

export function Education({ content }: { content?: EducationContent }) {
  const items: EducationItem[] = content?.items ?? [];

  return (
    <div aria-labelledby="education-heading">
      <SectionHeading
        id="education"
        eyebrow={content?.header?.badge ?? "Education"}
        title={content?.header?.title ?? "Background"}
        description={content?.header?.description}
      />

      <ul className="border-hairline mt-16 border-t" aria-label="Education">
        {items.map((edu) => (
          <li
            key={edu.title}
            className="border-hairline grid grid-cols-12 gap-6 border-b py-12 md:py-16"
          >
            <div className="col-span-12 flex items-center gap-4 md:col-span-4">
              <GraduationCap
                size={22}
                className="text-ink-muted"
                aria-hidden="true"
              />
              <p className="text-ink-muted text-label font-mono uppercase">
                {edu.year}
              </p>
            </div>

            <div className="col-span-12 md:col-span-8">
              <h3 className="text-ink font-display text-h3">{edu.title}</h3>
              <p className="text-ink-secondary text-label mt-2 font-mono uppercase">
                {edu.institution}
              </p>
              <p className="text-ink-secondary text-body-lg mt-5 max-w-[68ch]">
                {edu.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
