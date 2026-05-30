"use client";
import { useState } from "react";

export function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University of Technology Sydney",
      year: "2018 - 2022",
      description:
        "Graduated with honors in Computer Science, focusing on software development and web applications.",
    },
    {
      title: "Certified React Developer",
      institution: "Coursera",
      year: "2021",
      description:
        "Completed a specialized course in React development, enhancing my skills in building interactive and dynamic web applications.",
    },
  ];

  return (
    <div className="grid gap-4">
      {education.map((edu, index) => (
        <div key={index} className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">{edu.title}</h2>
          <p>
            {edu.institution}, {edu.year}
          </p>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
}
