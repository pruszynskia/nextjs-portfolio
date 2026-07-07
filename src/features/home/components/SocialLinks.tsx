import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink } from "../types";

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex gap-6 pt-8">
      {links.map((link: SocialLink, idx: number) => {
        const baseProps = {
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "text-foreground/60 hover:text-foreground rounded-full p-3 transition-all hover:-translate-y-0.5 hover:bg-slate-100 dark:hover:bg-white/5",
        } as const;

        if (link.icon === "github") {
          return (
            <a
              key={idx}
              {...baseProps}
              aria-label={link.label || "Visit GitHub profile"}
            >
              <FaGithub size={24} aria-hidden="true" />
            </a>
          );
        }

        if (link.icon === "linkedin") {
          return (
            <a
              key={idx}
              {...baseProps}
              aria-label={link.label || "Visit LinkedIn profile"}
            >
              <FaLinkedin size={24} aria-hidden="true" />
            </a>
          );
        }

        return (
          <a
            key={idx}
            {...baseProps}
            aria-label={link.label || "Send an email"}
          >
            <Mail size={24} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
