"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles } from "lucide-react";

export function Education() {
  const educationData = [
    {
      type: "degree",
      title: "Bachelor of Science in Computer Science",
      institution: "University of Technology Sydney",
      year: "2018 - 2022",
      description:
        "Graduated with honors in Computer Science, focusing on software development and web applications.",
      icon: GraduationCap,
    },
    {
      type: "certification",
      title: "Certified React Developer",
      institution: "Coursera",
      year: "2021",
      description:
        "Completed a specialized course in React development, enhancing skills in building interactive web applications.",
      icon: Award,
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
          <span className="text-foreground/60 text-sm">
            Education & Certifications
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Continuous Learning
        </h2>
        <p className="text-foreground/60 text-lg">
          Building expertise through formal education and professional
          certifications.
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
                  <Icon
                    size={28}
                    className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  />
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
