"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ProjectsContent, Project } from "../types";

export function Projects({ content }: { content?: ProjectsContent }) {
  const projects: Project[] = content?.items ?? [];

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
        <SectionHeader
          badge={
            <>
              <Sparkles size={16} className="text-purple-600" />
              <span className="text-foreground/60 text-sm">
                {content?.header?.badge ?? "Featured Projects"}
              </span>
            </>
          }
          title={content?.header?.title ?? "Work I'm proud of"}
          description={
            content?.header?.description ??
            "A selection of projects that showcase my expertise and passion for building beautiful, functional solutions."
          }
        />
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: Project, idx: number) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
          >
            <div className="relative space-y-6 p-8">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-foreground text-2xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                  <div
                    className={`h-1 w-24 rounded-full bg-gradient-to-r ${project.accent}`}
                  />
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-foreground text-foreground/60 text-sm font-semibold tracking-[0.2em] uppercase">
                  What I delivered
                </h4>
                <ul className="text-foreground/70 space-y-2">
                  {project.highlights.map(
                    (highlight: string, highlightIdx: number) => (
                      <motion.li
                        key={highlightIdx}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: highlightIdx * 0.05 }}
                        className="flex gap-3 text-sm leading-relaxed"
                      >
                        <span className="bg-foreground mt-1 inline-flex h-2 w-2 shrink-0 rounded-full" />
                        <span>{highlight}</span>
                      </motion.li>
                    ),
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech: string, techIdx: number) => (
                  <motion.span
                    key={techIdx}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r ${project.accent} bg-clip-text px-3 py-1 text-sm font-medium text-transparent`}
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
