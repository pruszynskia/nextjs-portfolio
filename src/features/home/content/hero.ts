import type { HeroContent } from "../types";

export const heroContent: HeroContent = {
  badgeText: "Available immediately — Wrocław, PL · Remote",
  greeting: "Hello, I'm",
  name: "Andrzej Pruszyński",
  title: "Senior Frontend Developer",
  description:
    "Enterprise e-commerce frontend engineer — React, Next.js, TypeScript — who acted as team lead at Fortune 500 scale and now builds with an AI-assisted development workflow of his own design.",
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
