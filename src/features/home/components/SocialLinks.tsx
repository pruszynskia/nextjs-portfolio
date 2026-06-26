import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink, IconMap } from "../types";

export function SocialLinks({
  variants,
  links,
}: {
  variants?: Variants;
  links: SocialLink[];
}) {
  const iconMap: IconMap = { FaGithub, FaLinkedin, Mail };

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
            <motion.a key={idx} {...baseProps}>
              <FaGithub size={24} />
            </motion.a>
          );
        }

        if (link.icon === "linkedin") {
          return (
            <motion.a key={idx} {...baseProps}>
              <FaLinkedin size={24} />
            </motion.a>
          );
        }

        // default to mail icon
        return (
          <motion.a key={idx} {...baseProps}>
            <Mail size={24} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
