import type { HeroContent } from "../types";

export const heroContent: HeroContent = {
  badgeText: "Available for freelance work",
  greeting: "Hey, I'm",
  name: "Andrzej Pruszyński",
  title: "Senior Frontend Developer",
  description:
    "I craft beautiful, high-performance web experiences. With 5+ years building scalable applications, I specialize in React, Next.js, and modern architecture. Let's build something extraordinary together.",
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
