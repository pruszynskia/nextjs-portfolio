"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Projects() {
  const projects = [
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
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
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
      <motion.div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
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
                  {project.highlights.map((highlight, highlightIdx) => (
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
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, techIdx) => (
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
