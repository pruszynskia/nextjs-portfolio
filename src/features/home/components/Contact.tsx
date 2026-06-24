"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "andrzej@example.com",
      href: "mailto:andrzej@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MessageSquare,
      label: "LinkedIn",
      value: "linkedin.com/in/andrzej",
      href: "https://linkedin.com/in/andrzej",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
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
      <motion.div variants={itemVariants} className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Sparkles size={16} className="text-pink-600" />
          <span className="text-foreground/60 text-sm">Get In Touch</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s Work Together
        </h2>
        <p className="text-foreground/60 mx-auto max-w-2xl text-lg">
          Have a project in mind or want to chat? I&apos;d love to hear from
          you. Reach out through any of these channels.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Methods */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-foreground text-2xl font-bold">Contact Info</h3>
          <div className="space-y-4">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-pink-600/20 to-rose-600/20 p-3">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-foreground/60 text-sm font-medium">
                      {method.label}
                    </p>
                    <p className="text-foreground text-lg font-semibold">
                      {method.value}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-foreground/30 group-hover:text-foreground/60 ml-auto flex-shrink-0 transition-all group-hover:translate-x-1"
                  />
                </motion.a>
              );
            })}
          </div>
          {/* Social Links */}
          <div className="pt-6">
            <h3 className="text-foreground mb-4 text-lg font-semibold">
              Connect On Social
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-foreground/60 rounded-full p-3 transition-all hover:bg-white/10 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="text-foreground text-2xl font-bold">
              Send Me a Message
            </h3>

            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-foreground/80 block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-foreground placeholder-foreground/40 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-all focus:border-white/30 focus:bg-white/10 focus:ring-0 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-foreground/80 block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-foreground placeholder-foreground/40 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-all focus:border-white/30 focus:bg-white/10 focus:ring-0 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-foreground/80 block text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="text-foreground placeholder-foreground/40 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-all focus:border-white/30 focus:bg-white/10 focus:ring-0 focus:outline-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                  />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-green-600/50 bg-green-600/20 p-4 text-center text-sm font-medium text-green-600"
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
