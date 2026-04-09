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
  title: "John Hsieh | Front End Engineer — Meta Manus",
  description:
    "7 years of frontend development experience | TikTok Singapore & LINE Taiwan | React / TypeScript / Next.js specialist — Applying for Front End Engineer, Manus at Meta",
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
      "Part of the User Growth team, developing the financial settlement systems for ad delivery — handling billing, invoicing, and reconciliation at global scale using React, monorepo, and proprietary micro-frontend framework.",
      "Built Web Worker multi-threaded CSV validation system using Comlink (RPC-like messaging), reducing UI blocking time by 90% for large data processing.",
      "Created function caching utilities (cache/cacheMany) mimicking React useMemo, reducing Total Blocking Time by 98% on a 500-form rendering interface.",
      "Led the team in adopting Scrum: leveraged retrospectives for self-correcting mechanisms, refinement sessions to break down siloed work, and improved PM visibility into delivery schedules.",
      "Participated in code reviews and established team-level coding standards to ensure code quality across the frontend codebase.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping — a large-scale e-commerce platform with Vue SSR + GraphQL + TypeScript + ExpressJS, serving millions of users.",
      "Served as Team Leader of a 4-person team, led CMS migration from PHP to NextJS App Router architecture with iframe-based micro-frontend for progressive URL migration.",
      "Participated in JavaScript Task Force to establish company-wide frontend standards; introduced Lighthouse CI for automated performance evaluation.",
      "Mentored 2 new engineers with positive feedback. Led internal NextJS teaching forum for onboarding.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely built an online photo book editor from scratch with Vue + NuxtJS — supporting drag-and-drop, resizing, and text editing.",
      "Planned the entire technical architecture independently; launched the product within 6 months.",
      "Supported PWA installation for a native-app-like experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at startup stage, planned frontend architecture from scratch for a fintech lending platform targeting Hong Kong SMEs.",
      "Built SME Portal and Partner Portal using React / NextJS + TypeScript + TailwindCSS, with OCR-based document processing.",
      "Designed a cross-project shared UI Kit (Stencil.js Web Components), deployed to private NPM for framework-agnostic reuse.",
    ],
  },
  {
    company: "Aotter Inc.",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "Worked on diverse client projects at a digital advertising & media tech company — including SuprLink (short link service with A/B testing), Aotter Trek (ad analytics platform), and government/enterprise data dashboards.",
      "Project-oriented team structure (PM + UI + FE/BE, ~4 people per project), running fast Scrum iterations while managing multiple concurrent projects.",
      "Built custom CSS frameworks per project using TailwindCSS to ensure pixel-perfect UI fidelity; emphasized reusable, scalable code across all deliverables.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Lazy CV — AI-Powered Resume Generator",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in 2 days via AI-assisted coding (Vibe Coding). This resume was generated using this project.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "AI Agent automated SOP via Chrome DevTools MCP for end-to-end resume generation pipeline",
      "Next.js 16 App Router + Standalone Output for lightweight Docker packaging",
      "Serverless deployment on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
    ],
  },
  {
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project at TikTok serving the overseas user growth business line. Covers media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Complex form components based on JSON Schema dynamic rendering with cascading selects, dynamic fields, and conditional rendering",
      "Micro-frontend integration via proprietary framework with dynamic sub-application loading and independent deployment",
      "Type-safe API communication using Ferry + Thrift IDL for auto-generated strongly-typed service code",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy computation to separate thread — reduced UI blocking time by 90%",
      "Function caching utilities (cache/cacheMany) — reduced Total Blocking Time by 98% on a 500-form rendering interface",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE affiliate e-commerce service where users earn LINE Points through partner merchants. Serving millions of users with Vue SSR + GraphQL + TypeScript.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently developed the 'Live Shopping' feature — designed a reusable video auto-preview module with a global scheduler that resolved chaotic previews during high-speed scrolling and memory spikes",
    ],
  },
  {
    name: "CMS Refactoring to NextJS",
    summary:
      "Led the migration of LINE Shopping CMS from PHP to React & NextJS App Router architecture. Managed a 4-person team handling tech decisions, scheduling, and cross-team coordination.",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "Used iframe to implement micro-services, enabling independent deployment with progressive URL-based migration",
      "One of the early projects within LINE Taiwan to adopt Next App Router",
    ],
    contributions: [
      "Served as architect and PM — planning the project, assigning tasks, writing technical documentation, and communicating with stakeholders",
    ],
  },
  {
    name: "AI.Book Online Photo Book Editor",
    summary:
      "An online photo book editing platform allowing users to create personalized photo albums on the web and print physical keepsake books. Solely built as a custom editor with drag-and-drop, resizing, and text editing.",
    stack: ["Vue", "NuxtJS", "Canvas", "PWA"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    url: "https://aibook.com.tw",
    highlights: [
      "Built a custom editor with pure Vue — supporting photos, text, fonts, and layout editing on both web and mobile",
      "Supports PWA installation for a native-app-like user experience",
    ],
    contributions: [
      "Built entirely from scratch as sole developer — from architecture planning to product launch in 6 months",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js), framework-agnostic. Integrated TailwindCSS + Semantic UI with Storybook for documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI components built as web components — framework-agnostic, reusable across React/Vue projects",
      "Design system with Tailwind + Semantic UI, documented via Storybook",
      "Monorepo separating component library and business code for independent publishing and testing",
    ],
    contributions: [
      "Built entirely from scratch as sole developer",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "Node.js", "Express", "REST API", "AI Agent"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Microservices", "Monorepo"],
    badgeClassName: "border-blue-200 bg-blue-50/50 text-blue-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Web Worker", "Jest", "Cypress", "Storybook", "Webpack", "Vite", "TailwindCSS", "Sass", "ECharts", "D3.js"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Scrum", "Agile", "Micro-Frontend", "Web Component", "PWA", "i18n", "Lighthouse", "Prompt Engineering", "Drizzle ORM", "Framer Motion"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "Years of Experience", value: 7 },
  { label: "Products Shipped", value: 18 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "Soochow University", degree: "BA — Japanese Language & Literature", period: "2013 - 2017" },
  { institution: "Doshisha University, Kyoto", degree: "Exchange Study — Japanese Language & Culture", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "JLPT N1", description: "Highest-level certification — Business-level Japanese", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "NTU Extension Program", description: "Web Development Technical Courses" },
];

const languages: LanguageItem[] = [
  { name: "Chinese — Native", badgeClassName: "bg-blue-100 text-blue-800" },
  { name: "Japanese — Business (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "English — Fluent Professional", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function MetaManusResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019d7022-95e1-746b-b67e-0016e503b18f/en" },
        { locale: "zh-TW", label: "中文", href: "/019d7022-95e1-746b-b67e-0016e503b18f/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Front End Engineer"
        description={`I'm a front-end engineer with 7 years of experience building large-scale web applications at TikTok Singapore and LINE Taiwan. I'm proficient in React, TypeScript, Next.js, and the modern frontend ecosystem, with a proven track record of optimizing front-end performance — including a 90% reduction in UI blocking via Web Workers and a 98% reduction in Total Blocking Time through custom caching utilities. I actively participate in code reviews and have helped establish frontend coding standards at both LINE and TikTok.

I'm deeply passionate about AI products and have hands-on experience integrating AI tools into real workflows. I built Lazy CV — an AI Agent-powered resume generator that uses Chrome DevTools MCP to scrape job descriptions and auto-generate tailored bilingual resumes, shipped from scratch to production in 2 days via AI-assisted coding. This project demonstrates my ability to leverage AI to drive measurable productivity gains.

Beyond technical delivery, I value team growth and cross-functional collaboration. At LINE Taiwan, I mentored 2 new engineers and led an internal Next.js teaching forum; at TikTok, I drove the adoption of Scrum practices within our team. I thrive in diverse, collaborative environments and believe great products come from great teams.

I also have strong experience as an independent contributor. As a contract engineer, I single-handedly built AI.Book's online photo book editor from scratch to launch in 6 months, and developed FundFluent's entire frontend platform for a fintech startup. These experiences shaped my ability to own end-to-end delivery with high autonomy.

As a native Mandarin speaker with fluent English and business-level Japanese (JLPT N1), I can seamlessly lead technical syncs with Mandarin-speaking teams, translate and review technical specifications, and bridge communication across Meta's global and APAC partners. I'm excited to contribute to Manus — building the cutting-edge AI agent that turns advanced AI into reliable, practical results for billions of people.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border Product Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} selected projects demonstrating product impact and technical depth.`}
        projects={projects}
        highlightsLabel="Technical Highlights"
        contributionsLabel="Key Contributions"
      />

      <TechStackVisualization title="Tech Stack Visualization" description="Core technologies and peripheral capabilities relationship map.">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <FrontendJSBeam locale="en" />
        <CSSBeam locale="en" />
        <PWABeam locale="en" />
        <WebComponentBeam locale="en" />
        <BackendBeam locale="en" />
      </TechStackVisualization>

      <SkillKeywords title="Skills & Keywords" rows={skillKeywordRows} />

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
