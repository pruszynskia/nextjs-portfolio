"use client";

import { useState, useEffect } from "react";
import { LucideSun, LucideMoon } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 flex bg-white p-4 shadow-md"
    >
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </li>
      </ul>
      <button className="ml-auto" onClick={toggleTheme}>
        {isDarkMode ? <LucideMoon fill="black" /> : <LucideSun />}
      </button>
    </motion.nav>
  );
}
