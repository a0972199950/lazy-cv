export type Experience = {
  company: string;
  role: string;
  period: string;
  logo: string;
  highlights: string[];
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  image: string | string[];
  url?: string;
};

export type StatItem = {
  label: string;
  value: number;
};

export type ContactItem = {
  href: string;
  type: "mail" | "github" | "linkedin";
  label: string;
};

export type SkillKeywordRow = {
  keywords: string[];
  badgeClassName: string;
  marqueeClassName: string;
  reverse?: boolean;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

export type CertificationItem = {
  name: string;
  description: string;
  image?: string;
};

export type LanguageItem = {
  name: string;
  badgeClassName: string;
};
