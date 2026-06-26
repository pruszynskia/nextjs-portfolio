import type { ComponentType, SVGProps } from "react";

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | string;
};

export type SocialIconKey =
  | "github"
  | "linkedin"
  | "mail"
  | "FaGithub"
  | "FaLinkedin";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconKey;
  color?: string;
};

export type HeroContent = {
  badgeText: string;
  greeting: string;
  name: string;
  title: string;
  description: string;
  ctas: CTA[];
  socialLinks: SocialLink[];
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  gradient?: string;
  accent?: string;
};

export type ProjectsContent = {
  header: { badge: string; title: string; description: string };
  items: Project[];
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: "Code2" | "Palette" | "Database" | "Zap" | "Cloud" | "GitBranch";
  gradient?: string;
  accent?: string;
};

export type SkillsContent = {
  header: { badge: string; title: string; description: string };
  categories: SkillCategory[];
};

export type EducationItem = {
  type: string;
  title: string;
  institution: string;
  year: string;
  description: string;
  icon: "GraduationCap";
};

export type EducationContent = {
  header: { badge: string; title: string; description: string };
  items: EducationItem[];
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: "Mail" | "MessageSquare";
};

export type ContactContent = {
  header: { badge: string; title: string; description: string };
  contactMethods: ContactMethod[];
  socialLinks: SocialLink[];
};

export type IconMap = Record<string, ComponentType<Record<string, unknown>>>;
