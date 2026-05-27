import { useState } from "react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
}
interface ProjectCardProps {
  project: Project;
  expandedIndex: number | null;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export function ProjectCard({
  project,
  expandedIndex,
  setExpandedIndex,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-lg border p-4 transition hover:-translate-y-1 hover:shadow-md"
      onClick={() => setExpanded(!expanded)}
    >
      <p className="font-medium">{project.title}</p>
      {expanded && (
        <div className="mt-2">
          <p className="text-muted-foreground text-sm">{project.description}</p>
          <div className="mt-2">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc pl-5">
              {project.techStack.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
