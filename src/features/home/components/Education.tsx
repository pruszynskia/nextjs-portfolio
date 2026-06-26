"use client";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp, cardReveal } from "@/lib/animations";
import type { EducationContent, EducationItem, IconMap } from "../types";

export function Education({ content }: { content?: EducationContent }) {
  const educationData: EducationItem[] = content?.items ?? [];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <SectionHeader
          badge={
            <>
              <Sparkles size={16} className="text-indigo-600" />
              <span className="text-foreground/60 text-sm">
                {content?.header?.badge ?? "Education"}
              </span>
            </>
          }
          title={content?.header?.title ?? "Continuous Learning"}
          description={
            content?.header?.description ??
            "Self-taught Frontend Developer with strong project ownership, detail-driven execution, and a civil engineering architecture background that brings disciplined design thinking to modern UI work."
          }
        />
      </motion.div>

      {/* Timeline */}
      <motion.div className="space-y-6">
        {educationData.map((edu: EducationItem, index: number) => {
          const iconMap: IconMap = { GraduationCap };
          const Icon = iconMap[edu.icon] ?? GraduationCap;
          return (
            <motion.div
              key={index}
              variants={cardReveal}
              whileHover={{ x: 8 }}
              className="group relative flex gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
            >
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <div className="absolute top-full left-8 h-6 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
              )}

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="inline-flex rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-4">
                  <Icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-foreground text-xl font-bold">
                      {edu.title}
                    </h3>
                    <p className="text-foreground/60 text-sm font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-foreground/70 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold whitespace-nowrap dark:bg-white/10">
                    {edu.year}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
