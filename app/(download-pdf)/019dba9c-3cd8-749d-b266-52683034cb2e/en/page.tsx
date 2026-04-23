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
  title: "John Hsieh | Staff Software Engineer — Visa",
  description:
    "7 years of full-stack engineering experience at TikTok Singapore and LINE Taiwan. Specialized in distributed systems, React/Next.js/TypeScript, CI/CD, and GenAI-assisted engineering. Tailored for Visa Staff Software Engineer role.",
  openGraph: { images: ["https://cdn.lazy-cv.com/avatar.jpg"] },
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
      "Part of the User Growth team, developing financial settlement systems for ad delivery using React, monorepo, and company's proprietary frontend microservices framework.",
      "Delivered engineering solutions in a large-scale distributed frontend architecture (50+ sub-projects, million-line codebase) — including high-precision numeric computation, micro-frontend dynamic loading, and Web Worker multi-threaded performance optimization.",
      "Led the development team in adopting Scrum — established self-correcting mechanisms, improved workload balance, and enhanced PM visibility into project schedules.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping daily with Vue SSR + GraphQL + TypeScript + ExpressJS, upholding strict code review culture — every line reviewed before merging.",
      "Served as Team Leader of a 4-person team, led CMS migration from PHP to NextJS App Router with iframe-based micro-service for progressive migration.",
      "Participated in JSTF to establish company-wide frontend development standards; introduced Lighthouse CI for automated performance evaluation in CI pipelines.",
      "Mentored 2 new engineers with positive feedback; led internal NextJS teaching forum to onboard new members.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely responsible for building an online photo book editor from scratch with drag-and-drop, resizing, and text editing features.",
      "Planned the entire tech architecture using Vue + NuxtJS; launched the product within 6 months with PWA support for native-app-like experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at the startup stage and designed frontend architecture from scratch using React / NextJS + TypeScript + TailwindCSS.",
      "Built a cross-project shared UI component library (Stencil.js Web Components) deployed to private NPM, usable across non-React projects.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer in a newly formed AI team, managing a 2-person frontend sub-team.",
      "Developed a B2B management platform integrating internal AI microservices, using NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Lazy CV — AI-Powered Resume Generator",
    summary:
      "A full-stack application combining AI Agent automation with Next.js 16. By providing a job posting URL, the system automatically scrapes the JD via Chrome DevTools MCP, analyzes requirements, and generates tailored bilingual (EN/ZH) resume web pages. Built from scratch to production in just 2 days through AI-assisted (Vibe Coding) development. This resume was generated using this system.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Docker", "GitHub Actions"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Docker packaging, deployed to AWS Lambda Web Adapter + S3 + CloudFront CDN",
      "AI Agent automated SOP: Chrome DevTools MCP scrapes JD → Copilot analysis → end-to-end resume generation",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe data access",
      "GitHub Actions CI/CD fully automated deployment pipeline",
    ],
  },
  {
    name: "UG Overseas Platform (TikTok)",
    summary:
      "Large-scale enterprise Monorepo frontend project serving TikTok's online advertising overseas user growth business line. Covers media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects in a million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker", "Thrift IDL"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Complex form components based on JSON Schema dynamic rendering engine — cascading selects, dynamic fields, conditional rendering",
      "High-precision numeric computation solution addressing JavaScript floating-point issues for financial/pricing scenarios",
      "Micro-frontend integration via proprietary framework for on-demand module loading and independent deployment",
      "Ferry + Thrift IDL auto-generated strongly-typed service code ensuring frontend-backend protocol consistency",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation + Comlink RPC communication — **reduced UI blocking time by 90%** across 10 data entries",
      "cache/cacheMany function caching utilities — **reduced Total Blocking Time (TBT) by 98%** on an interface rendering 500 form UIs without pagination",
    ],
  },
  {
    name: "LINE Shopping Platform",
    summary:
      "LINE's e-commerce service allowing users to earn LINE points by purchasing from partner merchants. Provides a unified shopping entry for third-party stores with search, comparison, and sharing features.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently developed the 'Live Shopping' feature: designed a **reusable video auto-preview module** with a global scheduler to resolve chaotic previews during high-speed scrolling and memory spikes caused by multiple live streams on a single page",
    ],
  },
  {
    name: "CMS Migration to NextJS (Team Leader)",
    summary:
      "Led migration of LINE Shopping's PHP-based CMS to React & NextJS App Router, leading a 4-person team to achieve full frontend-backend separation. One of LINE Taiwan's early adopters of Next App Router.",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe Micro-service"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "iframe-based micro-service for independent deployment; progressive URL-based migration from legacy to new system",
      "One of the company's early Next App Router adoption projects",
    ],
    contributions: [
      "Served as both architect and PM: designed the entire system architecture, assigned tasks, wrote technical documentation, and communicated with end users",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "Cross-project shared UI component platform built with Web Components (Stencil.js), framework-agnostic and deployable to private NPM. Integrated TailwindCSS + Semantic UI design system with Storybook documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo", "private NPM"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "Web Component architecture is framework-agnostic — usable across React, Vue, and plain HTML projects",
      "Monorepo structure separates component library from business code for independent publishing and testing",
    ],
    contributions: ["Built entirely from scratch as sole developer"],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "Integrated loan platform for Hong Kong SMEs. Aggregates government and bank loan information, enables one-stop applications, and uses OCR to organize documents to reduce redundant submission costs.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: ["Built entirely from scratch as sole developer"],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Node.js", "Express", "REST API"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS Lambda", "CloudFront", "S3", "ECR", "Monorepo", "Microservices"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["PostgreSQL", "MongoDB", "Redis", "Drizzle ORM", "Distributed Systems", "Web Worker", "Performance Optimization", "Thrift IDL", "Jest", "Lighthouse CI"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["GenAI", "AI Agent", "Prompt Engineering", "Chrome DevTools MCP", "Vibe Coding", "Scrum", "Agile", "Code Review", "Mentoring", "JLPT N1"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "yrs experience", value: 7 },
  { label: "products shipped", value: 18 },
  { label: "team managed", value: 4 },
  { label: "languages spoken", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "Soochow University", degree: "B.A. — Japanese Language & Literature", period: "2013 - 2017" },
  { institution: "Doshisha University, Kyoto", degree: "Exchange Student — Japanese Language & Culture", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "JLPT N1", description: "Highest Level — Business Proficiency", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "NTU CSIE Extension", description: "Web Development Technology Program" },
];

const languages: LanguageItem[] = [
  { name: "Chinese — Native", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "Japanese — Business Level (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "English — Fluent Professional", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function VisaResumeEn() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019dba9c-3cd8-749d-b266-52683034cb2e/en" },
        { locale: "zh-TW", label: "中文", href: "/019dba9c-3cd8-749d-b266-52683034cb2e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Staff Software Engineer"
        description={`7 years of full-stack engineering experience, previously at TikTok Singapore and LINE Taiwan as a Senior Software Engineer. I specialize in building scalable, distributed systems and high-quality web products — the same caliber of engineering challenges Visa's global payment network demands.\n\nOn engineering impact: I have delivered measurable performance wins in production systems at scale — a 90% reduction in UI blocking time through Web Worker multi-threading, and a 98% reduction in Total Blocking Time on complex form interfaces. These are the kinds of high-stakes, high-precision optimizations critical to Visa's 65k+ transactions-per-second infrastructure.\n\nOn leadership and mentorship: At LINE Taiwan, I led a 4-person team to migrate a legacy PHP CMS to Next.js App Router, and mentored 2 engineers who gave positive feedback. At TikTok, I introduced Scrum to our team, improving collaboration and delivery predictability. Influencing engineering standards across teams is exactly the impact a Staff Engineer at Visa is expected to create.\n\nOn GenAI engineering: I independently built Lazy CV — a fully automated, AI-agent-driven resume generation system integrating Chrome DevTools MCP with structured prompts, shipped from scratch to production in 2 days. I apply GenAI not as a novelty, but as a force-multiplier for engineering delivery.\n\nI am confident I can contribute to Visa's next generation of Payment Services, Real-Time Payments, and global B2C platforms — engineering systems that touch 40% of the world's population.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Global-scale product engineering"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description="6 projects most relevant to Visa's JD, demonstrating distributed systems, performance engineering, and GenAI practices."
        projects={projects}
        highlightsLabel="Technical Highlights"
        contributionsLabel="Key Contributions"
      />

      <TechStackVisualization title="Tech Stack Visualization" description="Core technologies and surrounding capabilities.">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <FrontendJSBeam />
        <CSSBeam />
        <PWABeam />
        <WebComponentBeam />
        <BackendBeam />
      </TechStackVisualization>

      <SkillKeywords title="Skills & Keywords (ATS Optimized)" rows={skillKeywordRows} />

      <EducationCerts
        sectionTitle="Education & Certifications"
        educationLabel="Education"
        educationHeaders={{ institution: "Institution", degree: "Degree / Type", period: "Period" }}
        educations={educations}
        certLabel="Certifications"
        certifications={certifications}
        languageLabel="Languages"
        languages={languages}
      />
    </ResumeLayout>
  );
}
