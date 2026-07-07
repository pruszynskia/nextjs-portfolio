import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink } from "../types";

export function SocialLinks({
  variants,
  links,
}: {
  variants?: Variants;
  links: SocialLink[];
}) {
  return (
    <motion.div variants={variants} className="flex gap-6 pt-8">
      {links.map((link: SocialLink, idx: number) => {
        const baseProps = {
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer",
          whileHover: { scale: 1.1, y: -2 },
          whileTap: { scale: 0.95 },
          className:
            "text-foreground/60 hover:text-foreground rounded-full p-3 transition-all hover:bg-slate-100 dark:hover:bg-white/5",
        } as const;

        if (link.icon === "github") {
          return (
            <motion.a
              key={idx}
              {...baseProps}
              aria-label={link.label || "Visit GitHub profile"}
            >
              <FaGithub size={24} aria-hidden="true" />
            </motion.a>
          );
        }

        if (link.icon === "linkedin") {
          return (
            <motion.a
              key={idx}
              {...baseProps}
              aria-label={link.label || "Visit LinkedIn profile"}
            >
              <FaLinkedin size={24} aria-hidden="true" />
            </motion.a>
          );
        }

        return (
          <motion.a
            key={idx}
            {...baseProps}
            aria-label={link.label || "Send an email"}
          >
            <Mail size={24} aria-hidden="true" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
