import type { SkillsContent } from "../types";

export const skillsContent: SkillsContent = {
  header: {
    badge: "Skills & Expertise",
    title: "Core Frontend Expertise",
    description:
      "Focused on building scalable, accessible web experiences with modern tooling, strong engineering fundamentals, and a product-minded approach.",
  },
  categories: [
    {
      title: "Frontend Development",
      description:
        "React, Next.js, TypeScript, JavaScript, SSR, component architecture",
      icon: "Code2",
      gradient: "from-blue-600 to-cyan-600",
      accent: "bg-blue-600/20",
    },
    {
      title: "UI Systems",
      description:
        "Responsive UI, accessibility, design systems, reusable component libraries",
      icon: "Palette",
      gradient: "from-purple-600 to-pink-600",
      accent: "bg-purple-600/20",
    },
    {
      title: "Integration & Architecture",
      description:
        "REST APIs, GraphQL, Node.js, AEM integration, scalable frontend architecture",
      icon: "Database",
      gradient: "from-orange-600 to-red-600",
      accent: "bg-orange-600/20",
    },
    {
      title: "Performance & Optimization",
      description:
        "Core Web Vitals, code splitting, lazy loading, runtime performance tuning",
      icon: "Zap",
      gradient: "from-yellow-600 to-orange-600",
      accent: "bg-yellow-600/20",
    },
    {
      title: "Delivery & DevOps",
      description:
        "CI/CD, Azure, Docker, deployment pipelines, environment management",
      icon: "Cloud",
      gradient: "from-cyan-600 to-blue-600",
      accent: "bg-cyan-600/20",
    },
    {
      title: "Engineering Practices",
      description:
        "Git, GitHub, testing, code reviews, maintainable frontend delivery",
      icon: "GitBranch",
      gradient: "from-green-600 to-emerald-600",
      accent: "bg-green-600/20",
    },
  ],
};
