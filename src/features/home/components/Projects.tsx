"use client";
import { useState } from "react";

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Legal Assistant AI",
      description:
        "Developed an AI-powered legal assistant platform that helps users draft and review legal documents efficiently.",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AEM"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername/legal-assistant-ai",
        },
        { name: "Demo", url: "https://legal-assistant.ai" },
      ],
    },
    {
      title: "E-commerce Platform",
      description:
        "Built an e-commerce platform with advanced 3D customization features, enabling users to create personalized product experiences.",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AEM"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername/e-commerce-platform",
        },
        { name: "Demo", url: "https://ecommerce.example.com" },
      ],
    },
    {
      title: "Job Board Platform",
      description:
        "Developed a job board platform that helps employers and job seekers find each other efficiently, with advanced filtering and search capabilities.",
      technologies: ["React", "Next.js", "TypeScript", "REST API"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername/job-board-platform",
        },
        { name: "Demo", url: "https://jobboard.example.com" },
      ],
    },
  ];

  return (
    <div className="grid gap-4">
      {projects.map((project, index) => (
        <div key={index} className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p>{project.description}</p>
          <div className="mt-4">
            <h3>Technologies Used:</h3>
            <ul className="list-disc pl-5">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3>Links:</h3>
            <ul className="list-disc pl-5">
              {project.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
