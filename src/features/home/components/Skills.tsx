"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Zap,
  Cloud,
  GitBranch,
  Sparkles,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion",
      icon: Code2,
      gradient: "from-blue-600 to-cyan-600",
      accent: "bg-blue-600/20",
    },
    {
      title: "UI/UX Design",
      description:
        "Responsive design, Accessibility, Design systems, Component libraries",
      icon: Palette,
      gradient: "from-purple-600 to-pink-600",
      accent: "bg-purple-600/20",
    },
    {
      title: "Backend Development",
      description:
        "REST APIs, GraphQL, Node.js, Database design, Server-side rendering",
      icon: Database,
      gradient: "from-orange-600 to-red-600",
      accent: "bg-orange-600/20",
    },
    {
      title: "Performance & Optimization",
      description:
        "Code splitting, Lazy loading, Bundle optimization, Web vitals",
      icon: Zap,
      gradient: "from-yellow-600 to-orange-600",
      accent: "bg-yellow-600/20",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Azure, Docker, CI/CD, Deployment, Cloud infrastructure management",
      icon: Cloud,
      gradient: "from-cyan-600 to-blue-600",
      accent: "bg-cyan-600/20",
    },
    {
      title: "Version Control & Tools",
      description:
        "Git, GitHub, Jest, Cypress, Testing frameworks, Development tools",
      icon: GitBranch,
      gradient: "from-green-600 to-emerald-600",
      accent: "bg-green-600/20",
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
          <Sparkles size={16} className="text-blue-600" />
          <span className="text-foreground/60 text-sm">Skills & Expertise</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Technologies & Tools
        </h2>
        <p className="text-foreground/60 text-lg">
          A comprehensive toolkit built through years of professional experience
          and continuous learning.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative space-y-4">
                {/* Icon */}
                <div className={`inline-flex rounded-xl ${skill.accent} p-3`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-foreground text-lg font-bold">
                    {skill.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="h-1 w-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-20" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
