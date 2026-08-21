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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam, AIBeam } from "../../john-hsieh/skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | Front-end Developer (Futures) — Binance",
  description:
    "7 years of production React/TypeScript development, delivering scalable, maintainable UI for high-traffic financial platforms. Senior Software Engineer at TikTok Singapore.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a02262-c15f-747e-8c11-dcc2538b5171/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Built React 17 + TypeScript frontend systems for TikTok's User Growth advertising platform — a high-traffic financial settlement and procurement product — within a 50+ sub-project, million-line-codebase Rush monorepo",
      "Delivered scalable, maintainable UI for complex financial business forms via a JSON-Schema-driven dynamic form rendering engine, covering cascading selects, dynamic fields, and conditional validation, plus a custom floating-point precision solution for pricing accuracy",
      "Reduced UI blocking time by 90% across 10 data-entry workflows by offloading CSV validation to a Web Worker via Comlink RPC, using Yup and Regex validation schemas",
      "Reduced Total Blocking Time (TBT) by 98% on a 500-form interface by building cache/cacheMany utilities that mimic React's useMemo to cache expensive computation results",
      "Led the team's adoption of Scrum, using retrospectives to build self-correcting feedback loops and refinement sessions to balance workload and give PMs clear visibility into delivery timelines",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed and maintained LINE Shopping, LINE's e-commerce affiliate platform, using Vue SSR, GraphQL, TypeScript, and ExpressJS — independently built a reusable, responsive video auto-preview module with a global scheduler that eliminated chaotic previews during high-speed scrolling and memory spikes from concurrent live streams",
      "Led a 4-person team through the CMS migration from PHP to a React + Next.js App Router architecture, delivering a scalable, maintainable replacement system with full frontend-backend separation",
      "Contributed to JSTF, a cross-team initiative establishing company-wide frontend tooling and coding standards (Webpack, static analysis, PR review requirements), and introduced Lighthouse CI for automated performance evaluation",
      "Mentored 2 new engineers and led an internal Next.js teaching forum to accelerate onboarding for new team members",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Built a responsive online photo book editor from scratch as sole developer, supporting both desktop and mobile editing with drag-and-drop, resizing, and text editing features",
      "Planned the entire technical architecture using Vue + NuxtJS and launched the product within 6 months",
      "Led backend API design covering OAuth third-party sign-in, cart/order flow, and payment gateway integration, defining the API contract and data models from the frontend consumer's perspective",
      "Supported PWA installation across web and mobile for a native-app-like, offline-capable experience",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Planned frontend architecture and technology stack from scratch, joining at the company's startup stage, using React (Next.js) + TypeScript",
      "Delivered a responsive SME loan platform targeting the Hong Kong market, with scalable, maintainable UI shared across the SME Portal and Partner Portal",
      "Designed a cross-project shared UI component library (Stencil.js Web Component), framework-agnostic and deployed to private NPM",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Managed a 2-person frontend team as full-stack engineer within a newly formed AI team, architecting a SaaS automation platform from scratch",
      "Built a maintainable frontend with Next.js + TypeScript + ElementUI, integrating PDF conversion, translation, editing, and e-signature microservices behind a unified UI",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth business, covering media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Complex form component development based on JSON Schema dynamic rendering with cascading selects, dynamic fields, and conditional rendering",
      "High-precision numeric computation for financial scenarios, solving JavaScript floating-point precision issues",
      "Micro-frontend integration via proprietary framework with dynamic sub-application loading",
      "Internationalization with runtime-fetched translations via an internally developed online translation platform",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread using Comlink for RPC-like communication, with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching utilities for rendering optimization: created cache/cacheMany tools mimicking React useMemo to cache computation results — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led the migration of LINE Shopping CMS from PHP architecture to React & NextJS App Router, managing a 4-person team to achieve full frontend-backend separation. One of the early projects within LINE Taiwan to adopt the NextJS App Router.",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "Used iframe to implement micro-services, enabling independent deployment of new and legacy projects with progressive URL-based migration",
      "One of the early projects within the company to adopt Next APP router",
    ],
    contributions: [
      "Beyond coding, served as architect planning the entire project while also acting as PM — assigning tasks, writing technical documentation, and communicating with users",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js) for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    company: "FundFluent",
    image:
      "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI components built with Stencil as web components, framework-agnostic",
      "Design system constructed with Tailwind + Semantic UI",
      "Components showcased via StoryBook for easier communication with designers",
      "Monorepo separating component library and business code; component library can be independently published and tested",
    ],
    contributions: [
      "Built entirely from scratch as sole developer",
    ],
  },
  {
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor supporting drag-and-drop, resizing, and text editing with cross-platform PWA support. Built from scratch to launch in just 6 months.",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    company: "AI.Book",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Built a custom editor with pure Vue, supporting add/remove photos, text input, and font style/size editing",
      "Editor supports both web and mobile editing",
      "Supports PWA installation for a native app-like experience",
    ],
    contributions: [
      "Built entirely from scratch as sole developer",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "An integrated loan platform for Hong Kong SMEs, providing bank and government loan information with one-stop applications, using OCR to streamline document management and reduce redundant submissions.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    company: "FundFluent",
    image:
      "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "Built entirely from scratch as sole developer",
    ],
  },
  {
    name: "FundFluent Partner Portal",
    summary:
      "A management platform for lenders such as banks, enabling them to list and manage loan products and review SME applications.",
    stack: ["React", "NextJS", "TypeScript", "Semantic UI"],
    company: "FundFluent",
    image:
      "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    url: "https://partner.fundfluent.io",
    contributions: [
      "Built entirely from scratch as sole developer",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Sass / SCSS", "Node.js", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GitHub Actions", "Firebase", "AWS", "Drizzle ORM", "Mongoose"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Jest", "Cypress", "Storybook", "Webpack", "Vite", "Git", "Lighthouse", "Renovate", "pnpm", "ESLint"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Axios", "ECharts", "Chart.js", "Framer Motion", "React Hook Form", "Yup", "Lodash", "i18n", "Arco Design", "Rush Monorepo"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["GitHub Copilot", "Cursor", "n8n", "Prompt Engineering", "MCP", "AI Agent", "Vibe Coding", "Claude API", "Gemini API", "RAG"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["Web Worker", "Comlink", "Service Worker", "IndexedDB", "StencilJS", "Shadow DOM", "Socket.io", "PWA", "Web Socket", "REST API"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
    reverse: true,
  },
  {
    keywords: ["Bootstrap", "ElementUI", "Buefy", "Vuetify", "CSS Modules", "Less", "BEM", "Vuex", "Vue Router", "MobX"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:31s]",
  },
  {
    keywords: ["HTML", "JavaScript", "jQuery", "npm", "SDD", "OpenAI API", "Vuelidate", "VeeValidate", "Quill", "D3.js"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
  },
  {
    keywords: ["CSS", "CSS variable", "Media query", "Cache Storage", "Workbox", "web-push", "Navigator API", "EJS", "Swagger", "mustache"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:37s]",
    reverse: true,
  },
  {
    keywords: ["Chrome Extension", "Manifest V3", "Puppeteer", "Vert.x", "Web Extension API"],
    badgeClassName: "border-fuchsia-200 bg-fuchsia-50/50 text-fuchsia-800",
    marqueeClassName: "[--duration:38s]",
  },
  {
    keywords: ["Redux", "React Query"],
    badgeClassName: "border-sky-200 bg-sky-50/50 text-sky-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "Years Frontend Exp.", value: 7 },
  { label: "Products Shipped", value: 19 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "Soochow University", degree: "Bachelor of Arts — Japanese Language & Literature", period: "2013 – 2017" },
  { institution: "Doshisha University, Kyoto", degree: "Exchange Program — Japanese Language & Culture", period: "Mar 2016 – Aug 2016" },
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
        { locale: "en", label: "EN", href: "/01a02262-c15f-747e-8c11-dcc2538b5171/en" },
        { locale: "zh-TW", label: "中文", href: "/01a02262-c15f-747e-8c11-dcc2538b5171/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Front-end Developer (Futures) - Binance"}
        description={"7 years of production JavaScript/React engineering experience, including two multi-year remote contract engagements — AI.Book and FundFluent — where autonomy and fast-paced delivery in an innovative environment were the norm. At AI.Book, independently designed, built, and shipped a responsive online photo book editor from scratch as sole developer — spanning technical architecture, the editor core, and backend API design (OAuth, cart/order flow, payment gateway) — launching within 6 months with PWA support. At FundFluent, joined at the company's early startup stage to independently plan the frontend architecture and technology stack from zero, delivering a scalable, maintainable SME lending platform and a cross-project shared UI component library (Stencil.js Web Component) published to private NPM.\n\nAlso brings experience as a Senior Software Engineer at TikTok Singapore, building React 17 + TypeScript systems within a 50+ sub-project, million-line-codebase Rush monorepo for financial settlement and procurement, with hands-on experience in state management patterns (Redux, unstated-next, MobX) and asynchronous data handling via React Query. At LINE Taiwan, built responsive web applications (Vue SSR + GraphQL) and led a 4-person team migrating a legacy PHP CMS to a React/Next.js App Router architecture, contributing to company-wide frontend tooling standards (Webpack, TailwindCSS, Lighthouse CI)."}
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
        personalProjectsLabel="Personal Projects"
        companyProjectsLabel="Company Projects"
        companyLogos={companyLogos}
      />

      <TechStackVisualization title="Tech Stack Visualization" description="Core technologies and their interconnections.">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <AIBeam locale="en" />
        <FrontendJSBeam locale="en" />
        <CSSBeam locale="en" />
        <PWABeam locale="en" />
        <WebComponentBeam locale="en" />
        <BackendBeam locale="en" />
      </TechStackVisualization>

      <SkillKeywords title="Skills" rows={skillKeywordRows} />

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
