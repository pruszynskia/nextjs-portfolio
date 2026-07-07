"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function AboutPreview() {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
      aria-labelledby="about-preview-heading"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <Sparkles size={16} className="text-emerald-600" />
          <span className="text-foreground/60 text-sm">About Me</span>
        </div>
        <h2
          id="about-preview-heading"
          className="text-4xl font-bold tracking-tight md:text-5xl"
        >
          Frontend engineering with business impact
        </h2>
      </motion.div>

      {/* Main Content */}
      <motion.div variants={itemVariants} className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Bio */}
        <div className="space-y-6">
          <p className="text-foreground/80 text-lg leading-relaxed">
            I&apos;m a Senior Frontend Engineer with 5+ years of experience
            building React, Next.js, and TypeScript products for enterprise and
            growth-stage teams. My work combines strong engineering fundamentals
            with a product-minded approach to delivery.
          </p>

          <p className="text-foreground/80 text-lg leading-relaxed">
            At TD Synnex, I led frontend work for large-scale commerce
            platforms, improving performance, supporting multilingual and
            multi-region experiences, and helping ship reliable solutions in
            complex business environments.
          </p>

          <p className="text-foreground/80 text-lg leading-relaxed">
            I care about clean architecture, reusable UI systems, accessible
            experiences, and pragmatic decisions that make products easier to
            scale and maintain over time.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg font-semibold text-transparent transition-opacity hover:opacity-80"
            aria-label="Get to know me better"
          >
            Get to know me better
            <ArrowRight size={20} aria-hidden="true" />
          </motion.a>
        </div>

        {/* Right Column - Stats */}
        <div className="space-y-4">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Enterprise Platforms", value: "3+" },
            { label: "Core Technologies", value: "React / Next.js" },
            { label: "Performance Focus", value: "Accessibility & SEO" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
            >
              <div className="relative">
                <p className="text-foreground/60 text-sm">{stat.label}</p>
                <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
