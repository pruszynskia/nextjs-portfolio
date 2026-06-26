import type { ContactContent } from "../types";

export const contactContent: ContactContent = {
  header: {
    badge: "Get In Touch",
    title: "Let's Work Together",
    description:
      "Have a project in mind or want to chat? I'd love to hear from you. Reach out through any of these channels.",
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
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andrzej-pruszynski",
      icon: "FaLinkedin",
      color: "hover:text-blue-600",
    },
  ],
};
