import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsPreview() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Led the development of a large-scale e-commerce platform, enabling faster delivery of business initiatives and improving platform scalability. Improved application performance by ~30%.",
      techStack: ["React", "Next.js", "GraphQL", "Redux"],
    },
    {
      title: "AI-Powered Legal Assistant Platform",
      description:
        "Delivered an MVP of an AI-powered legal assistant platform within 2 months, improving onboarding flow and optimizing UI responsiveness.",
      techStack: ["Next.js", "Python", "Supabase", "Vercel"],
    },
    {
      title: "Advanced 3D Customization Features",
      description:
        "Developed an e-commerce platform with advanced 3D customization features, optimizing GraphQL data-fetching strategy to reduce redundant API calls.",
      techStack: [
        "React",
        "Next.js",
        "Redux",
        "GraphQL",
        "TypeScript",
        "Azure",
      ],
    },
    {
      title: "SPA Job Board Platform",
      description:
        "Built a SPA job board platform, solving performance and usability challenges.",
      techStack: ["React", "Next.js"],
    },
  ];

  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-semibold">Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      ))}
    </div>
  );
}
