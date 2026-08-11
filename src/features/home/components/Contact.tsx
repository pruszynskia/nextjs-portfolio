import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import type { ContactContent } from "../types";

export function Contact({ content }: { content?: ContactContent }) {
  const contactMethods = content?.contactMethods ?? [];
  const socialLinks = content?.socialLinks ?? [];

  // Plain mono link list, deduped by href — LinkedIn is listed in both
  // contactMethods and socialLinks in the content file.
  const links = [
    ...contactMethods.map((m) => ({
      label: m.label,
      value: m.value,
      href: m.href,
    })),
    ...socialLinks
      .filter((s) => !contactMethods.some((m) => m.href === s.href))
      .map((s) => ({
        label: s.label,
        value: s.href.replace(/^https?:\/\//, ""),
        href: s.href,
      })),
  ];

  return (
    <div aria-labelledby="contact-heading">
      <SectionHeading
        id="contact"
        eyebrow={content?.header?.badge ?? "Contact"}
        title={content?.header?.title ?? "Let's Connect"}
        description={content?.header?.description}
      />

      <ul className="border-hairline mt-16 border-t" aria-label="Contact links">
        {links.map((link) => (
          <li key={link.href} className="border-hairline border-b">
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-8"
            >
              <span className="text-ink-muted text-label font-mono uppercase">
                {link.label}
              </span>
              <span className="text-ink group-hover:text-signal font-display text-h3 flex max-w-full items-center gap-3 text-right break-all transition-colors duration-[120ms]">
                {link.value}
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="shrink-0"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/Andrzej_Pruszynski_CV.pdf"
        download
        className="border-hairline text-ink shadow-raised hover:border-strong hover:shadow-raised-hover text-body-sm mt-12 inline-block rounded-md border px-6 py-3 font-medium transition-all duration-[120ms]"
      >
        Download CV
      </a>
    </div>
  );
}
