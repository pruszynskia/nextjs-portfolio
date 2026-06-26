import type { ProjectsContent } from "../types";

export const projectsContent: ProjectsContent = {
  header: {
    badge: "Featured Projects",
    title: "Work I'm proud of",
    description:
      "A selection of projects that showcase my expertise and passion for building beautiful, functional solutions.",
  },
  items: [
    {
      title: "Legal Assistant AI",
      subtitle: "Xentropy.ai — Frontend Developer",
      description:
        "Delivered an AI-powered legal assistant MVP that helped validate product-market fit and improve early user trust.",
      highlights: [
        "Built the MVP in under 2 months to help the startup validate product-market fit.",
        "Improved onboarding with chatbot-driven UX to reduce friction for non-technical users.",
        "Optimized frontend responsiveness and performance for a fast-growing startup product.",
        "Enhanced AI prompt quality and generated response accuracy for better legal outcomes.",
      ],
      technologies: ["Next.js", "Python", "Supabase", "Vercel", "React"],
      gradient: "from-blue-600/20 via-sky-600/20 to-blue-600/20",
      accent: "from-blue-600 to-sky-500",
    },
    {
      title: "E-commerce Platform",
      subtitle: "TD Synnex / Stellarity — Senior Frontend Developer",
      description:
        "Led frontend development for a large-scale platform with 3D customization and international ecommerce workflows.",
      highlights: [
        "Delivered critical frontend features for a large-scale e-commerce platform across multiple APAC markets.",
        "Improved page load times by ~30%, fixing slow UX issues that affected engagement.",
        "Designed multilingual AEM solutions and defined state management for a multi-region app.",
        "Refactored legacy modules and stabilized order flow to support major business contract renewal.",
      ],
      technologies: ["React", "Next.js", "AEM", "Zustand", "Azure", "GraphQL"],
      gradient: "from-purple-600/20 via-pink-600/20 to-purple-600/20",
      accent: "from-purple-600 to-pink-500",
    },
    {
      title: "Job Board Platform",
      subtitle: "Freelance — Frontend Developer",
      description:
        "Delivered a high-performance job board and multiple frontend applications focused on architecture and usability.",
      highlights: [
        "Built a SPA job board platform that solved performance and usability challenges.",
        "Created multiple apps with a focus on frontend architecture and fast loading experience.",
        "Improved application structure for long-term maintainability and better user journeys.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Performance Optimization",
        "Frontend Architecture",
      ],
      gradient: "from-pink-600/20 via-orange-600/20 to-pink-600/20",
      accent: "from-pink-600 to-orange-500",
    },
  ],
};
