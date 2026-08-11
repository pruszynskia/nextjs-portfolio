import type { SkillsContent } from "../types";

export const skillsContent: SkillsContent = {
  header: {
    badge: "Skills",
    title: "Core Expertise",
    description:
      "Production frontend depth, the architecture judgment to back it, and an AI-assisted development workflow built from scratch.",
  },
  categories: [
    {
      title: "Frontend Development",
      description:
        "React, Next.js, TypeScript, JavaScript ES6+, Tailwind CSS, component architecture",
      icon: "Code2",
    },
    {
      title: "State & Data",
      description:
        "Zustand, Redux, React Query, GraphQL, REST, Supabase / PostgreSQL",
      icon: "Database",
    },
    {
      title: "Architecture & Systems",
      description:
        "Design systems and tokens, reusable component libraries, Feature-Sliced Architecture, clean architecture",
      icon: "Layers",
    },
    {
      title: "AI-Assisted Development",
      description:
        "Claude Code, MCP (Playwright), Anthropic API, OpenAI API, provider-agnostic AI service-layer design, Zod validation",
      icon: "Cpu",
    },
    {
      title: "Delivery & DevOps",
      description: "Azure CI/CD, Vercel, GitHub Actions, Git",
      icon: "Cloud",
    },
    {
      title: "Testing & Quality",
      description: "Jest, Cypress, Enzyme, code review",
      icon: "TestTube2",
    },
  ],
};
