import type { SkillsContent } from "../types";

export const skillsContent: SkillsContent = {
  header: {
    badge: "Skills & Expertise",
    title: "Technologies & Tools",
    description:
      "A comprehensive toolkit built through years of professional experience and continuous learning.",
  },
  categories: [
    {
      title: "Frontend Development",
      description:
        "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion",
      icon: "Code2",
      gradient: "from-blue-600 to-cyan-600",
      accent: "bg-blue-600/20",
    },
    {
      title: "UI/UX Design",
      description:
        "Responsive design, Accessibility, Design systems, Component libraries",
      icon: "Palette",
      gradient: "from-purple-600 to-pink-600",
      accent: "bg-purple-600/20",
    },
    {
      title: "Backend Development",
      description:
        "REST APIs, GraphQL, Node.js, Database design, Server-side rendering",
      icon: "Database",
      gradient: "from-orange-600 to-red-600",
      accent: "bg-orange-600/20",
    },
    {
      title: "Performance & Optimization",
      description:
        "Code splitting, Lazy loading, Bundle optimization, Web vitals",
      icon: "Zap",
      gradient: "from-yellow-600 to-orange-600",
      accent: "bg-yellow-600/20",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Azure, Docker, CI/CD, Deployment, Cloud infrastructure management",
      icon: "Cloud",
      gradient: "from-cyan-600 to-blue-600",
      accent: "bg-cyan-600/20",
    },
    {
      title: "Version Control & Tools",
      description:
        "Git, GitHub, Jest, Cypress, Testing frameworks, Development tools",
      icon: "GitBranch",
      gradient: "from-green-600 to-emerald-600",
      accent: "bg-green-600/20",
    },
  ],
};
