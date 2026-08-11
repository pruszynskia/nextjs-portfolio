import type { ContactContent } from "../types";

export const contactContent: ContactContent = {
  header: {
    badge: "Contact",
    title: "Let's Connect",
    description:
      "Available immediately, no notice period — open to senior frontend roles where architecture, UI craft, and AI-assisted delivery matter.",
  },
  contactMethods: [
    {
      label: "Email",
      value: "andrzej.pruszynski90@gmail.com",
      href: "mailto:andrzej.pruszynski90@gmail.com",
      icon: "Mail",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/andrzej-pruszynski",
      href: "https://www.linkedin.com/in/andrzej-pruszynski",
      icon: "MessageSquare",
    },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/pruszynskia",
      icon: "FaGithub",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andrzej-pruszynski",
      icon: "FaLinkedin",
    },
  ],
};
