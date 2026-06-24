"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Legal Assistant AI",
      description:
        "An intelligent platform leveraging AI to help users draft, review, and manage legal documents with precision and efficiency.",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AEM"],
      gradient: "from-blue-600/20 via-purple-600/20 to-blue-600/20",
      accent: "from-blue-600 to-purple-600",
    },
    {
      title: "E-commerce Platform",
      description:
        "Revolutionary e-commerce solution with 3D product customization, enabling customers to create personalized experiences.",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AEM"],
      gradient: "from-purple-600/20 via-pink-600/20 to-purple-600/20",
      accent: "from-purple-600 to-pink-600",
    },
    {
      title: "Job Board Platform",
      description:
        "Comprehensive job matching platform connecting employers and seekers with advanced filtering, analytics, and recommendations.",
      technologies: ["React", "Next.js", "TypeScript", "REST API"],
      gradient: "from-pink-600/20 via-orange-600/20 to-pink-600/20",
      accent: "from-pink-600 to-orange-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Sparkles size={16} className="text-purple-600" />
          <span className="text-foreground/60 text-sm">Featured Projects</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Work I&apos;m proud of
        </h2>
        <p className="text-foreground/60 text-lg">
          A selection of projects that showcase my expertise and passion for
          building beautiful, functional solutions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="grid gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
          >
            <div className="relative space-y-6 p-8">
              {/* Title and Description */}
              <div className="space-y-3">
                <h3 className="text-foreground text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <motion.span
                    key={techIdx}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center rounded-full bg-gradient-to-r ${project.accent} border border-white/10 bg-clip-text px-3 py-1 text-sm font-medium text-transparent`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
