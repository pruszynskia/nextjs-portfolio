import type { ProjectsContent } from "../types";

export const projectsContent: ProjectsContent = {
  header: {
    badge: "Featured Projects",
    title: "Selected Work",
    description:
      "Examples of frontend systems I’ve built and improved across startups, enterprise platforms, and high-growth products.",
  },
  items: [
    {
      title: "Legal Assistant AI",
      subtitle: "Xentropy.ai — Frontend Developer",
      description:
        "Delivered a production-ready MVP for an AI-powered legal assistant, helping the team validate demand and strengthen early product adoption.",
      highlights: [
        "Built the MVP in under 8 weeks to support fast product validation and early traction.",
        "Shipped a conversational experience with clear UX patterns for non-technical users.",
        "Improved frontend responsiveness and reliability for a fast-moving product.",
        "Collaborated on experience quality and prompt design to strengthen trust in the product.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "Vercel"],
      gradient: "from-blue-600/20 via-sky-600/20 to-blue-600/20",
      accent: "from-blue-600 to-sky-500",
    },
    {
      title: "E-commerce Platform",
      subtitle: "TD Synnex / Stellarity — Senior Frontend Developer",
      description:
        "Led frontend development for a large-scale commerce platform with multilingual workflows and complex product customization.",
      highlights: [
        "Delivered critical UI features for a high-volume e-commerce platform across APAC markets.",
        "Improved load performance and stability, reducing friction in high-value customer journeys.",
        "Implemented AEM-driven content solutions and scalable state handling for multi-region delivery.",
        "Modernized legacy modules and supported a major business renewal with reliable frontend execution.",
      ],
      technologies: [
        "React",
        "Next.js",
        "AEM",
        "TypeScript",
        "Azure",
        "GraphQL",
      ],
      gradient: "from-purple-600/20 via-pink-600/20 to-purple-600/20",
      accent: "from-purple-600 to-pink-500",
    },
    {
      title: "Job Board Platform",
      subtitle: "Freelance — Frontend Developer",
      description:
        "Built a performant job board and supporting frontend applications with a focus on scalable architecture and user experience.",
      highlights: [
        "Developed a responsive job board experience optimized for performance and usability.",
        "Created reusable frontend patterns and a maintainable architecture across multiple products.",
        "Improved long-term scalability and delivery speed through stronger structure and component design.",
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
