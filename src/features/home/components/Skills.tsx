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
import { staggerContainer, fadeInUp, cardReveal } from "@/lib/animations";
import type { SkillsContent, SkillCategory, IconMap } from "../types";

export function Skills({ content }: { content?: SkillsContent }) {
  const skillCategories: SkillCategory[] = content?.categories ?? [];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-12"
      aria-labelledby="skills-heading"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="space-y-4">
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
      <motion.ul
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Skill categories"
      >
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
            <motion.li key={idx} variants={cardReveal} className="list-none">
              <motion.article
                whileHover={{ y: -8, scale: 1.02 }}
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
              </motion.article>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
}
