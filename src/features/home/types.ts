import type { ComponentType } from "react";

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
  /** @deprecated brand-color hover states are an anti-pattern (single-color icon
   *  set per style guide) — retained only until Phase 3/4 components stop reading
   *  it, at which point delete. */
  color?: string;
};

export type HeroContent = {
  /** Plain availability/location line, rendered as mono text — not a pill with
   *  a pulsing dot (07-anti-patterns.md). */
  badgeText: string;
  greeting: string;
  name: string;
  title: string;
  description: string;
  ctas: CTA[];
  socialLinks: SocialLink[];
};

export type AboutContent = {
  header: { badge: string; title: string; description: string };
  paragraphs: string[];
};

export type ExperienceItem = {
  index: string;
  company: string;
  role: string;
  period: string;
  type: "full-time" | "freelance" | "self-directed" | "career-break";
  /** Set only when the role ran concurrently with another entry (e.g. weekend
   *  freelance work alongside a full-time job) — state it plainly, never hide it. */
  concurrentNote?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type ExperienceContent = {
  header: { badge: string; title: string; description: string };
  items: ExperienceItem[];
};

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  /** @deprecated gradient bar/pill — anti-pattern, dropped when Projects.tsx
   *  becomes a hairline index in Phase 4. */
  gradient?: string;
  /** @deprecated see `gradient`. */
  accent?: string;
};

export type ProjectsContent = {
  header: { badge: string; title: string; description: string };
  items: Project[];
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: "Code2" | "Database" | "Layers" | "Cpu" | "Cloud" | "TestTube2";
  /** @deprecated colored gradient icon tile — anti-pattern, dropped when
   *  Skills.tsx is rebuilt in Phase 4 to use single-color icons. */
  gradient?: string;
  /** @deprecated see `gradient`. */
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
