import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink } from "../types";

const ICONS = {
  github: { Icon: FaGithub, fallbackLabel: "Visit GitHub profile" },
  linkedin: { Icon: FaLinkedin, fallbackLabel: "Visit LinkedIn profile" },
  FaGithub: { Icon: FaGithub, fallbackLabel: "Visit GitHub profile" },
  FaLinkedin: { Icon: FaLinkedin, fallbackLabel: "Visit LinkedIn profile" },
  mail: { Icon: Mail, fallbackLabel: "Send an email" },
} as const;

/** Single-colour icons, no brand tints, no hover lift (07-anti-patterns.md). */
export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex gap-5">
      {links.map((link, idx) => {
        const { Icon, fallbackLabel } = ICONS[link.icon] ?? ICONS.mail;

        return (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label || fallbackLabel}
            className="text-ink-muted hover:text-ink transition-colors duration-[120ms]"
          >
            <Icon size={19} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
