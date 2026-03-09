import type { Metadata } from "next";
import {
  ResumeLayout,
  LanguageToggle,
  HeroProfile,
  WorkExperience,
  ProjectsGrid,
  TechStackVisualization,
  SkillKeywords,
  EducationCerts,
} from "@/components/resume";
import type {
  Experience,
  Project,
  StatItem,
  ContactItem,
  SkillKeywordRow,
  EducationItem,
  CertificationItem,
  LanguageItem,
} from "@/components/resume";
import { SkillCloud } from "../../john-hsieh/skill-cloud";
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../../john-hsieh/skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | Frontend Engineer — Cloud Latitude Software Alliance Management System",
  description:
    "7 years of frontend development experience. Specializing in React / Next.js / TypeScript / Vue / TailwindCSS. Previously at TikTok Singapore and LINE Taiwan. Applying for the Alliance Management System Frontend Engineer position at Cloud Latitude Software.",
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Part of the User Growth team, responsible for ad monetization financial system development.",
      "Use React and internal frameworks to handle ad financial workflows and data analytics.",
      "Collaborate with cross-functional teams, regularly conducting Code Reviews and Pair Programming.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer / Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping daily with Vue SSR + GraphQL + TypeScript + ExpressJS.",
      "Served as Team Leader of a 4-person team, led CMS migration from PHP to NextJS App Router architecture, achieving full frontend-backend separation.",
      "Participated in JSTF to establish company-wide frontend development standards; introduced Lighthouse CI for automated performance evaluation into CI/CD pipeline.",
      "Mentored 2 new engineers with positive feedback; routinely conducted open Code Reviews.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely responsible for building an online photo book editor with drag-and-drop, resizing, and text editing features.",
      "Planned the entire technical architecture from scratch using Vue + NuxtJS; launched the product within 6 months.",
      "Supported PWA installation for a native-app-like experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at the startup stage and planned frontend architecture and tech stack from scratch.",
      "Built an SME loan platform targeting the Hong Kong market using React / NextJS + TypeScript + TailwindCSS.",
      "Designed a cross-project shared UI component library (Stencil.js Web Component), deployed to private NPM.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Served as a full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Developed a B2B management platform integrating internal AI microservices.",
      "Tech stack included NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — just provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in just 2 days via Vibe Coding.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
    ],
    url: "https://lazy-cv.com",
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE affiliate shopping service where users earn LINE Points through partner merchants. Developed in a 60-person agile team with strict Code Review culture — every single line must be reviewed before merging.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: "https://cdn.lazy-cv.com/1da75a22-2c28-4bbc-baef-1ec66ee781bb.png",
    url: "https://buy.line.me",
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led the migration of LINE Shopping CMS from PHP to React & NextJS App Router architecture, managing a 4-person team to achieve full frontend-backend separation. Responsible for tech stack decisions, training, scheduling, and risk assessment.",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
  },
  {
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor supporting drag-and-drop, resizing, and text editing with cross-platform PWA support. Built the entire technical architecture from scratch to launch in just 6 months.",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    image: "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js) for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
  },
  {
    name: "SuprLink",
    summary:
      "A URL shortener service with A/B split testing, data analytics, and ad delivery in a single platform. Deployed via Docker + K8s CI/CD pipeline with a focus on automation and maintainability.",
    stack: ["NuxtJS", "TypeScript", "TailwindCSS", "Docker", "K8s"],
    image: "https://cdn.lazy-cv.com/a14d9a80-45b9-4943-a043-49dacb460bb9.png",
    url: "https://supr.link",
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Sass / SCSS", "Node.js", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "Jest", "Cypress", "Firebase", "Storybook", "Webpack"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Web Component", "StencilJS", "PWA", "Socket.io", "i18n", "Git", "REST API", "SEO", "Lighthouse", "Renovate"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
];

const stats: StatItem[] = [
  { label: "Years Frontend Exp.", value: 7 },
  { label: "Products Shipped", value: 16 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "Soochow University", degree: "Bachelor of Arts — Japanese Language & Literature", period: "2013 - 2017" },
  { institution: "Doshisha University, Kyoto", degree: "Exchange Program — Japanese Language & Culture", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "JLPT N1 (Japanese)", description: "Highest level — Business conversation proficiency", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "NTU Extension Program", description: "Web Development Technology Course" },
];

const languages: LanguageItem[] = [
  { name: "Mandarin Chinese — Native", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "Japanese — Business (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "English — Professional Working", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function ResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019ccd3c-3517-7009-abd3-910b18c676e5/en" },
        { locale: "zh-TW", label: "中文", href: "/019ccd3c-3517-7009-abd3-910b18c676e5/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Frontend Engineer"
        description={`7 years of frontend development experience, previously at TikTok Singapore and LINE Taiwan as a Software Engineer. Core tech stack includes React (NextJS), Vue (NuxtJS), and TypeScript, with strong proficiency in TailwindCSS, Docker, and CI/CD automated deployment pipelines.

At LINE Taiwan, my daily work was centered around agile development — our 60-person team placed great emphasis on Code Reviews, Pair Programming, and continuous process improvement, which closely aligns with the working culture at Cloud Latitude Software's Alliance Management System team. Additionally, I led a CMS migration project from PHP to NextJS, managing a 4-person team through tech stack decisions, scheduling, and risk assessment — demonstrating the ability to analyze user pain points and design architectural solutions.

What I can contribute to Cloud Latitude includes: rapidly building frontend systems for league schedules and player performance tracking using React, leveraging unit testing experience to ensure code quality, utilizing Docker + CI/CD for automated deployment, and supporting backend development when needed. What sets me apart is my combination of rigorous development experience from large enterprises and hands-on product-building ability from startups — enabling me to deliver high-quality results quickly in greenfield projects.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border Product Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing technical skills relevant to the Alliance Management System Frontend Engineer role.`}
        projects={projects}
      />

      <TechStackVisualization title="Tech Stack Visualization" description="Core technologies and their interconnections.">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <FrontendJSBeam locale="en" />
        <CSSBeam locale="en" />
        <PWABeam locale="en" />
        <WebComponentBeam locale="en" />
        <BackendBeam locale="en" />
      </TechStackVisualization>

      <SkillKeywords title="Skill Keywords" rows={skillKeywordRows} />

      <EducationCerts
        sectionTitle="Education & Certifications"
        educationLabel="Education"
        educationHeaders={{ institution: "Institution", degree: "Degree / Program", period: "Period" }}
        educations={educations}
        certLabel="Certifications"
        certifications={certifications}
        languageLabel="Languages"
        languages={languages}
      />
    </ResumeLayout>
  );
}