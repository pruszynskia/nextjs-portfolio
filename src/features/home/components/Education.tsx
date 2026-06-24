"use client";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";

export function Education() {
  const educationData = [
    {
      type: "degree",
      title: "Master of Science in Civil Engineering Architecture",
      institution: "University of Technology Wroclaw, Poland",
      year: "2009 - 2017",
      description:
        "Graduated with honors in Civil Engineering Architecture, focusing on Architecture and Urbanistics.",
      icon: GraduationCap,
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
          <Sparkles size={16} className="text-indigo-600" />
          <span className="text-foreground/60 text-sm">Education</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Continuous Learning
        </h2>
        <p className="text-foreground/60 text-lg">
          Self-taught Frontend Developer with strong project ownership,
          detail-driven execution, and a civil engineering architecture
          background that brings disciplined design thinking to modern UI work.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div className="space-y-6">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="group relative flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
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
                  <span className="text-foreground/70 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold whitespace-nowrap">
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
