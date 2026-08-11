import type { ExperienceContent } from "../types";

export const experienceContent: ExperienceContent = {
  header: {
    badge: "Experience",
    title: "Where I've Worked",
    description:
      "Frontend roles across enterprise e-commerce, an AI startup, and a software house — plus the career break that followed and the self-directed transition that started it.",
  },
  items: [
    {
      index: "01",
      company: "Career Break — Family Caregiving",
      role: "Family caregiving",
      period: "09/2025 — 05/2026",
      type: "career-break",
      summary:
        "Stepped back from full-time work to care for a family member, remaining technically active throughout on personal projects — including the initial build of AI Career OS. Available immediately.",
      highlights: [],
      technologies: [],
    },
    {
      index: "02",
      company: "TD SYNNEX",
      role: "Senior Frontend Developer",
      period: "03/2023 — 09/2025",
      type: "full-time",
      summary:
        "Acted as team lead for over a year at a Fortune 500 technology distributor (~22,000 employees), owning frontend architecture and the full Scrum cycle for a six-year-old B2B e-commerce and renewals platform.",
      highlights: [
        "Personally implemented ~80% of the Create Order Flow under a compressed deadline, restructuring the story split for parallel delivery and introducing feature flags — retained an at-risk client contract for the international region.",
        "Standardized state management on Zustand across a six-year legacy codebase, deliberately documenting Redux as a fallback for cases that outgrow it.",
        "Introduced a reusable component library and design-token system that was adopted by a second product team.",
        "Replaced ad-hoc REST calls with GraphQL and React Query; profiled and tuned performance with Lighthouse, Core Web Vitals, and React Profiler.",
        "Became the organization's in-house Adobe Experience Manager (AEM) authority, building dialogs and integrating multilingual content across APAC and the Americas.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Zustand",
        "Redux",
        "React Query",
        "GraphQL",
        "AEM",
        "Azure",
        "Jest",
        "Cypress",
      ],
    },
    {
      index: "03",
      company: "Xentropy.ai",
      role: "Frontend Developer (Freelance)",
      period: "05/2024 — 11/2024",
      type: "freelance",
      concurrentNote: "Weekends only, concurrent with TD SYNNEX",
      summary:
        "Frontend developer for an AI-powered legal assistant startup, building the product landing page and contributing the design system alongside a junior UX designer.",
      highlights: [
        "Built the product landing page and a reusable component library.",
        "Authored foundational engineering documentation — component and build standards — for an early-stage team.",
        "MVP launched and tested by two law firms and a small group of individual users before the startup ceased operations.",
      ],
      technologies: ["Next.js", "Supabase", "Vercel", "Python"],
    },
    {
      index: "04",
      company: "Stellarity",
      role: "Frontend Developer",
      period: "02/2022 — 01/2023",
      type: "full-time",
      summary:
        "First commercial role — most experienced frontend engineer on a five-person team at a software house, owning feature delivery and mentoring two junior developers.",
      highlights: [
        "Built a Three.js-based 3D product-customization frontend for a 3D-printing client, presenting demos directly to the client.",
        "Built admin and user panels for a rental platform, integrating a physical barcode/QR scanner into the workflow.",
        "Reworked the GraphQL data-fetching strategy to eliminate redundant calls; wrote e2e and component tests with Cypress and Enzyme.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux",
        "GraphQL",
        "Three.js",
        "Cypress",
        "Enzyme",
        "Azure",
      ],
    },
    {
      index: "05",
      company: "Career Transition — Self-Directed Frontend Development",
      role: "Self-directed learning (unpaid)",
      period: "08/2020 — 02/2022",
      type: "self-directed",
      summary:
        "Transitioned from architecture and civil engineering into frontend development through structured, mentored self-study that replicated a professional engineering environment — Agile ceremonies, sprint planning, code review, deployment.",
      highlights: [
        "Designed, built, and deployed multiple applications end to end, including a single-page job board.",
        "Built foundations in HTML, CSS, JavaScript, TypeScript, React, and Next.js.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
  ],
};
