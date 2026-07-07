import type { HeroContent } from "../types";

export const heroContent: HeroContent = {
  badgeText: "Open to senior frontend opportunities",
  greeting: "Hello, I'm",
  name: "Andrzej Pruszyński",
  title: "Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 5+ years of experience building React and Next.js applications that are fast, accessible, and ready to scale. I focus on architecture, component design, and delivering measurable product impact.",
  ctas: [
    { label: "View My Work", href: "#projects", variant: "primary" },
    { label: "Get in Touch", href: "#contact", variant: "outline" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/pruszynskia", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andrzej-pruszynski/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:andrzej.pruszynski90@gmail.com",
      icon: "mail",
    },
  ],
};
