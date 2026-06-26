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

import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SkillsContent, SkillCategory, IconMap } from "../types";

export function Skills({ content }: { content?: SkillsContent }) {
  const skillCategories: SkillCategory[] = content?.categories ?? [];

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
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-foreground/60 text-sm">
                {content?.header?.badge ?? "Skills & Expertise"}
              </span>
            </>
          }
          title={content?.header?.title ?? "Technologies & Tools"}
          description={
            content?.header?.description ??
            "A comprehensive toolkit built through years of professional experience and continuous learning."
          }
        />
      </motion.div>

      {/* Skills Grid */}
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((skill: SkillCategory, idx: number) => {
          const iconMap: IconMap = {
            Code2,
            Palette,
            Database,
            Zap,
            Cloud,
            GitBranch,
          };
          const Icon = iconMap[skill.icon] ?? Code2;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
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
