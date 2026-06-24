"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-white/5 backdrop-blur-md dark:border-white/5 dark:bg-black/30"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-lg font-bold text-transparent"
      >
        AP
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden gap-8 md:flex">
        {navLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            className="text-foreground/80 hover:text-foreground relative text-sm font-medium transition-colors"
            whileHover={{ y: -2 }}
          >
            {link.name}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <motion.a
          href="/Andrzej_Pruszynski_CV.pdf"
          download
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-foreground/80 hover:text-foreground inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium transition-colors hover:border-white/20 hover:bg-white/10"
        >
          <Download size={18} />
          Download CV
        </motion.a>

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground/60 hover:text-foreground rounded-full p-2 transition-colors hover:bg-white/10 dark:hover:bg-white/5"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground/60 hover:text-foreground rounded-full p-2 transition-colors hover:bg-white/10 md:hidden dark:hover:bg-white/5"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-full right-0 left-0 overflow-hidden border-b border-white/10 bg-white/10 backdrop-blur-md md:hidden dark:border-white/5 dark:bg-black/20"
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
