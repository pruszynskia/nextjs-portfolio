import { Code2, Database, Layers, Cpu, Cloud, TestTube2 } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import type { SkillsContent, SkillCategory, IconMap } from "../types";

const ICONS: IconMap = { Code2, Database, Layers, Cpu, Cloud, TestTube2 };

export function Skills({ content }: { content?: SkillsContent }) {
  const categories: SkillCategory[] = content?.categories ?? [];

  return (
    <div aria-labelledby="skills-heading">
      <SectionHeading
        id="skills"
        eyebrow={content?.header?.badge ?? "Skills"}
        title={content?.header?.title ?? "Core Expertise"}
        description={content?.header?.description}
      />

      <ul
        className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Skill categories"
      >
        {categories.map((skill) => {
          const Icon = ICONS[skill.icon] ?? Code2;
          return (
            <li key={skill.title} className="border-hairline border-t pt-6">
              <Icon size={22} className="text-ink-muted" aria-hidden="true" />
              <h3 className="text-ink font-display text-body-lg mt-4 font-semibold">
                {skill.title}
              </h3>
              <p className="text-ink-secondary text-body-sm mt-2">
                {skill.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
