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
import { SkillCloud } from "../skill-cloud";
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | Senior/Staff Frontend Engineer — OKX",
  description:
    "7 years of frontend development | TikTok Singapore & LINE Taiwan | React / Vue / TypeScript specialist — Applying for Senior/Staff Engineer - Frontend Developer at OKX",
  openGraph: { images: ["/avatar.jpg"] },
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
      "Part of the User Growth team, responsible for running advertisements across major DSP platforms to increase user base for TikTok and related apps.",
      "Developed financial settlement systems for ad delivery using React, monorepo, and the company's proprietary micro-frontend framework.",
      "Led Scrum adoption — leveraged retrospectives for team self-correction, refinement sessions to break down silos, and improved PM visibility into project schedules.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping (millions of users) with Vue SSR + GraphQL + TypeScript + ExpressJS.",
      "Team Leader of a 4-person team, led CMS migration from PHP to NextJS App Router with full frontend-backend separation.",
      "Joined JSTF to establish company-wide frontend standards; introduced Lighthouse CI for automated performance evaluation.",
      "Mentored 2 new engineers and led internal NextJS teaching forum.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely built an online photo book editor with drag-and-drop, resizing, and text editing features from scratch.",
      "Planned technical architecture using Vue + NuxtJS; launched the product within 6 months.",
      "Implemented PWA for a native-app-like experience with offline support.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at startup stage; planned frontend architecture and tech stack from scratch for a fintech platform.",
      "Built an SME loan platform for the Hong Kong market using React / NextJS + TypeScript + TailwindCSS.",
      "Designed a cross-project shared UI component library using Stencil.js Web Components, deployed to private NPM.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Developed a B2B management platform integrating internal AI microservices.",
      "Tech stack: NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth business, covering media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Complex form components based on JSON Schema dynamic rendering with cascading selects and conditional rendering",
      "High-precision numeric computation for financial scenarios, solving JavaScript floating-point precision issues",
      "Micro-frontend integration via proprietary framework with dynamic sub-application loading",
      "Type-safe API communication using Ferry + Thrift IDL for auto-generated strongly-typed service code",
      "Internationalization with runtime-fetched translations via internally developed online translation platform",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation using Comlink for RPC-like communication — **reduced UI blocking time by 90%**",
      "Function caching utilities mimicking React useMemo — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE affiliate shopping service with millions of active users, earning LINE Points through partner merchants. Developed the Live Shopping feature with video auto-preview.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently developed the 'Live Shopping' feature — designed a **reusable video auto-preview module** with a global scheduler that **resolved chaotic previews during high-speed scrolling** and **memory spikes from too many live streams**",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — just provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in just 2 days.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output for lightweight Docker packaging",
      "AI Agent automated SOP via Chrome DevTools MCP for end-to-end resume generation",
      "Serverless deployment: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
    ],
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led the migration of LINE Shopping CMS from PHP to React & NextJS App Router. Managed a 4-person team achieving full frontend-backend separation. One of the early NextJS App Router adopters within LINE Taiwan.",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "Used iframe for micro-services, enabling independent deployment with progressive URL-based migration",
      "One of the early projects within the company to adopt Next APP Router",
    ],
    contributions: [
      "Served as architect and PM — planning the project, assigning tasks, writing technical documentation, and communicating with stakeholders",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js) for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI components built with Stencil as Web Components — framework-agnostic",
      "Design system constructed with Tailwind + Semantic UI",
      "Components showcased via Storybook for designer communication",
      "Monorepo separating component library and business code; independently publishable and testable",
    ],
    contributions: ["Built entirely from scratch as sole developer"],
  },
  {
    name: "Aotter Trek DSP Platform",
    summary:
      "A big-data-driven DSP (Demand-Side Platform) for ad placement, featuring rich chart interfaces to help users identify optimal advertising audiences.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    image: "https://cdn.lazy-cv.com/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
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
  {
    keywords: ["Axios", "ECharts", "D3.js", "Framer Motion", "Drizzle ORM", "Rush Monorepo", "Arco Design", "Web Worker", "React Hook Form", "Yup"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "Years Frontend Exp.", value: 7 },
  { label: "Products Shipped", value: 18 },
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

export default function OKXResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019d2938-16ba-7208-a4b1-264ea20e3bc5/en" },
        { locale: "zh-TW", label: "中文", href: "/019d2938-16ba-7208-a4b1-264ea20e3bc5/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Senior/Staff Frontend Engineer"
        description={"7 years of frontend development experience, previously at TikTok Singapore and LINE Taiwan as a senior software engineer. Core tech stack includes React (NextJS), Vue (NuxtJS), and TypeScript.\n\nI can contribute to OKX by bringing proven expertise in building high-performance, scalable frontend systems for platforms serving millions of users — from TikTok's large-scale Monorepo financial settlement systems to LINE Shopping's high-traffic e-commerce platform.\n\nWhat sets me apart is my dual proficiency in both React and Vue ecosystems, combined with hands-on experience in financial system development, performance optimization (achieving 98% TBT reduction and 90% UI blocking reduction), and building reusable cross-project component libraries — directly aligned with OKX's needs for a world-class digital asset trading platform.\n\nI am passionate about technical architecture design, contributing to public components and modules, and continuously improving product quality and user experience. Fluent in English, Japanese, and Mandarin Chinese, enabling seamless collaboration in OKX's global team."}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border Product Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing product impact and tech stack.`}
        projects={projects}
        highlightsLabel="Technical Highlights"
        contributionsLabel="Key Contributions"
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
