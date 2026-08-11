import type { ProjectsContent } from "../types";

export const projectsContent: ProjectsContent = {
  header: {
    badge: "Projects",
    title: "Selected Work",
    description:
      "A self-built AI development platform, an AI-startup MVP, and an enterprise e-commerce system — three different scales of frontend ownership.",
  },
  items: [
    {
      index: "01",
      title: "AI Career OS",
      subtitle: "Personal Product",
      period: "2026 — Present",
      description:
        "A full-stack AI-powered job-search platform — CV parsing, job-match scoring, tailored CV and recruiter-message generation, and application tracking — built end to end and deployed live.",
      highlights: [
        "Designed a provider-agnostic AI service layer (Anthropic and OpenAI adapters behind one interface, Zod-validated output) so the product isn't locked to a single model vendor.",
        "Built the data layer on Supabase with Row Level Security and owner-scoped access, structured for multi-tenancy without a rewrite.",
        "Designed and built a custom Claude Code command pipeline — plan, implement, and verify against acceptance criteria via Playwright MCP in a correction loop — plus backlog-intake and milestone-generation commands.",
        "Currently single-user; the AI development workflow, not user traction, is the point of this build.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "Zustand",
        "React Query",
        "Anthropic API",
        "OpenAI API",
        "Claude Code",
      ],
    },
    {
      index: "02",
      title: "Legal Assistant AI",
      subtitle: "Freelance — Xentropy.ai",
      period: "2024",
      description:
        "An AI-powered legal assistant for law firms and individual consumers, built and shipped as an MVP for an early-stage startup.",
      highlights: [
        "Built the product landing page and a reusable component library alongside a junior UX designer.",
        "Authored foundational build and component documentation for the team.",
        "MVP launched and tested by two law firms and a small group of individual users.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "Vercel"],
    },
    {
      index: "03",
      title: "E-commerce Platform",
      subtitle: "Senior Frontend Developer — TD SYNNEX",
      period: "2023 — 2025",
      description:
        "Order tracking and renewals applications for a Fortune 500 B2B e-commerce and software-renewals platform, serving internal staff and business customers across APAC and the Americas.",
      highlights: [
        "Personally implemented ~80% of a business-critical order flow that retained an at-risk client contract for the international region.",
        "Standardized state management on Zustand and introduced a component library later adopted by a second product team.",
        "Became the organization's in-house AEM authority, integrating multilingual content across regions.",
      ],
      technologies: [
        "React",
        "Next.js",
        "AEM",
        "TypeScript",
        "Azure",
        "GraphQL",
      ],
    },
  ],
};
