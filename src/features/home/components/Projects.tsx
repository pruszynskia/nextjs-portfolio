import { SectionHeading } from "@/components/layout/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ProjectGraphic } from "./ProjectGraphic";
import type { ProjectsContent, Project } from "../types";

/*
  The project index — the signature component (05-components.md). Rendered
  full-bleed, ignoring Container: this is the page's one deliberate break out
  of the grid (04-spacing-layout.md). Rest state is flat/scannable — only the
  hovered row picks up shadow-raised and its thumbnail.
*/
export function Projects({ content }: { content?: ProjectsContent }) {
  const projects: Project[] = content?.items ?? [];

  return (
    <div aria-labelledby="projects-heading">
      <div className="max-w-editorial mx-auto px-4 md:px-8">
        <SectionHeading
          id="projects"
          eyebrow={content?.header?.badge ?? "Projects"}
          title={content?.header?.title ?? "Selected Work"}
          description={content?.header?.description}
        />
      </div>

      <ul
        className="border-hairline mt-16 border-t"
        aria-label="Selected projects"
      >
        {projects.map((project, idx) => (
          <li
            key={project.index}
            className={`group border-hairline hover:border-strong hover:shadow-raised relative border-b transition-[border-color,box-shadow] duration-[180ms] ${idx < 3 ? "project-row-reveal" : ""}`}
          >
            <div className="max-w-editorial relative mx-auto grid grid-cols-12 items-center gap-x-6 gap-y-4 px-4 py-12 md:px-8 md:py-16">
              <span className="text-ink-muted text-label col-span-2 font-mono uppercase md:col-span-1">
                {project.index}
              </span>

              <div className="col-span-10 md:col-span-7">
                <h3 className="text-ink group-hover:text-signal font-display text-h3 transition-colors duration-[180ms]">
                  {project.title}
                </h3>
                <p className="text-ink-muted text-label mt-1 font-mono uppercase">
                  {project.subtitle}
                </p>
                <p className="text-ink-secondary text-body mt-4 max-w-[62ch]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              <p className="text-ink-muted text-label col-span-12 font-mono uppercase md:col-span-4 md:text-right">
                {project.period}
              </p>

              {/* ponytail: hidden below lg rather than tap-to-reveal — no
                  hover state exists to reveal it on touch anyway; add an
                  explicit expand control if mobile users need the visual. */}
              <div
                className="text-ink-muted pointer-events-none absolute top-1/2 right-6 hidden w-40 -translate-y-1/2 opacity-0 transition-[opacity,transform] duration-[180ms] ease-[var(--ease-decisive)] group-hover:scale-105 group-hover:opacity-100 lg:block lg:w-56"
                aria-hidden="true"
              >
                <ProjectGraphic seed={idx} className="h-auto w-full" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
