"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
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
    const id = window.setTimeout(() => setHasMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  const isDarkMode = hasMounted ? theme === "dark" : true;

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const handleHomeNavigation = (
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => {
    event?.preventDefault();
    setIsOpen(false);
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/", onClick: handleHomeNavigation },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-slate-50/95 backdrop-blur-md dark:border-white/5 dark:bg-black/80"
          : "bg-transparent"
      }`}
    >
      <motion.a
        href="/"
        onClick={handleHomeNavigation}
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-lg font-bold text-transparent"
      >
        AP
      </motion.a>

      <ul className="hidden gap-8 md:flex">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <motion.a
              href={link.href}
              onClick={link.onClick}
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
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <motion.a
          href="/Andrzej_Pruszynski_CV.pdf"
          download
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-foreground/80 hover:text-foreground inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
        >
          <Download size={18} aria-hidden="true" />
          Download CV
        </motion.a>

        <motion.button
          type="button"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground/60 hover:text-foreground rounded-full p-2 transition-colors hover:bg-slate-100 dark:hover:bg-white/5"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? (
            <Sun size={20} aria-hidden="true" />
          ) : (
            <Moon size={20} aria-hidden="true" />
          )}
        </motion.button>

        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-foreground/60 hover:text-foreground rounded-full p-2 transition-colors hover:bg-slate-100 md:hidden dark:hover:bg-white/5"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </motion.button>
      </div>

      <motion.div
        id="mobile-navigation"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-full right-0 left-0 overflow-hidden border-b border-slate-200 bg-slate-50 backdrop-blur-md md:hidden dark:border-white/5 dark:bg-black/80"
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
                onClick={(event) => {
                  link.onClick?.(event);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
