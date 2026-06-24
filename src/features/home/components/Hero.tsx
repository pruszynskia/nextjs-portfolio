import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start justify-center gap-8 py-32"
    >
      {/* Badge */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
      >
        <div className="h-2 w-2 rounded-full bg-green-500" />
        <span className="text-foreground/60 text-sm">
          Available for freelance work
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants} className="space-y-4">
        <motion.p className="text-foreground/60 text-lg font-medium">
          Hey, I&apos;m
        </motion.p>
        <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
          <motion.span
            className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Andrzej Pruszyński
          </motion.span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        animate="active"
        className="text-foreground text-2xl font-semibold md:text-3xl"
      >
        Senior Frontend Developer
      </motion.p>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        animate="active"
        className="text-foreground/70 max-w-2xl text-lg leading-relaxed"
      >
        I craft beautiful, high-performance web experiences. With 5+ years
        building scalable applications, I specialize in React, Next.js, and
        modern architecture. Let&apos;s build something extraordinary together.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, gap: 8 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
        >
          View My Work
          <ArrowRight size={20} />
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground rounded-lg border border-white/20 px-8 py-3 font-semibold transition-all hover:border-white/40 hover:bg-white/5"
        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={itemVariants} className="flex gap-6 pt-8">
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground/60 hover:text-foreground rounded-full p-3 transition-all hover:bg-white/10 dark:hover:bg-white/5"
        >
          <FaGithub size={24} />
        </motion.a>

        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground/60 hover:text-foreground rounded-full p-3 transition-all hover:bg-white/10 dark:hover:bg-white/5"
        >
          <FaLinkedin size={24} />
        </motion.a>

        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground/60 hover:text-foreground rounded-full p-3 transition-all hover:bg-white/10 dark:hover:bg-white/5"
        >
          <Mail size={24} />
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground/50 text-xs">Scroll to explore</span>
          <div className="border-foreground/30 flex h-6 w-4 items-center justify-center rounded-full border">
            <div className="bg-foreground/50 h-1 w-1 rounded-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
