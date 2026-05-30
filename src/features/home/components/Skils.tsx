"use client";
import { useState } from "react";

export function Skills() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Proficient in React, Next.js, TypeScript, JavaScript (ES6+), Redux, Zustand, and React Query.",
    },
    {
      title: "Backend Development",
      description:
        "Experience with REST API, GraphQL, and server-side rendering using Next.js.",
    },
    {
      title: "UI/UX Design",
      description:
        "Skilled in creating responsive and user-friendly interfaces using HTML5, CSS3, and modern design frameworks.",
    },
    {
      title: "Version Control",
      description:
        "Expert in Git, with experience using GitHub and Vercel for continuous integration and deployment.",
    },
    {
      title: "Testing",
      description:
        "Familiar with testing frameworks like Jest and Cypress, ensuring robust application reliability.",
    },
    {
      title: "Cloud Services",
      description:
        "Experience with Azure, including deployment and management of cloud-based applications.",
    },
  ];

  return (
    <div className="grid gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">{skill.title}</h2>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
}
