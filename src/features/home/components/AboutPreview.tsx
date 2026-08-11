import { SectionHeading } from "@/components/layout/SectionHeading";
import { aboutContent } from "../content/about";

export function AboutPreview() {
  const { header, paragraphs } = aboutContent;

  return (
    <div aria-labelledby="about-heading">
      <SectionHeading id="about" eyebrow={header.badge} title={header.title} />

      <div className="mt-16 grid grid-cols-12 gap-6">
        <div className="text-ink-secondary text-lead col-span-12 space-y-6 md:col-span-7 md:col-start-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
