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
  title: "John Hsieh | Senior Frontend Engineer — Workato AI Lab",
  description:
    "7 years of frontend development experience. Expert in React / Next.js / TypeScript. Proven performance optimization, reusable component systems, and large-scale enterprise delivery. Applying for Senior Frontend (UI) Software Engineer (AI Lab) at Workato.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a0180e-93d7-7327-8d85-205fbb19bd18/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architected the financial settlement platform for ad delivery within an enterprise Monorepo spanning 50+ sub-projects and a million-line codebase, using React 17, TypeScript, Rush Monorepo, and a proprietary micro-frontend framework",
      "Built extensive business form components based on a JSON Schema dynamic rendering engine — covering cascading selects, dynamic fields, and conditional rendering with complex validation logic",
      "Reduced Total Blocking Time (TBT) by 98% on a 500-form interface by implementing cache/cacheMany utilities mimicking React's useMemo to eliminate redundant schema recomputation",
      "Reduced UI blocking time by 90% across 10 CSV data-entry workflows by offloading validation to a Web Worker via Comlink RPC, using Yup and Regex schemas — abstracted into a shared utility for reuse across complex frontend computations",
      "Led the team's adoption of Scrum: retrospectives to build self-correcting feedback loops, refinement sessions to eliminate siloed work, and balanced sprint planning to give PMs clear delivery visibility",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed and maintained LINE Shopping — a full-stack Vue SSR + GraphQL + TypeScript + ExpressJS e-commerce platform — independently designed a reusable video auto-preview module with a global scheduler that resolved chaotic previews during high-speed scrolling and eliminated memory spikes from concurrent live streams",
      "Led a 4-person team through a full CMS migration from PHP to Next.js App Router, acting as architect, PM, and developer — achieving complete frontend-backend separation with progressive iframe-based migration",
      "Contributed to the JavaScript Task Force (JSTF), a cross-team initiative establishing company-wide frontend development standards; introduced Lighthouse CI for automated performance measurement on every PR",
      "Mentored 2 new engineers to positive feedback and ran an internal Next.js teaching forum to accelerate onboarding",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Built a complex online photo book editor from scratch as sole developer — supporting drag-and-drop, photo resizing, text editing, and font styling — and shipped it to production in 6 months using Vue + NuxtJS",
      "Led backend API design covering OAuth sign-in, cart and order flow, and payment gateway integration — defining API contracts, data models, and error handling from the consumer perspective",
      "Supported PWA installation for a native app-like offline experience using Service Worker and Cache Storage",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Designed and built a cross-project shared UI component library using Stencil.js Web Components (framework-agnostic), with TailwindCSS + Semantic UI as the design system foundation and Storybook for documentation — published to private NPM",
      "Built the SME loan platform and Partner Portal from scratch as sole developer using React / Next.js, TypeScript, and TailwindCSS, targeting the Hong Kong market",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Managed a 2-person frontend team within a newly formed AI team, delivering a B2B management platform integrating internal AI microservices",
      "Built the frontend with NuxtJS / Next.js + TypeScript, and the backend with Node.js + MongoDB + Redis",
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
      "Large-scale enterprise Monorepo frontend for TikTok's overseas user-growth business, covering financial settlement, media asset management, supplier procurement, and data dashboards — 50+ sub-projects, million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Complex form component development based on JSON Schema dynamic rendering engine: cascading selects, dynamic fields, conditional rendering, and complex validation",
      "High-precision numeric computation for financial and pricing scenarios — addressed JavaScript floating-point precision issues with a custom solution",
      "Micro-frontend integration via proprietary framework with dynamic sub-application loading, supporting on-demand module loading with independent deployment",
      "Multi-language support with runtime-fetched translations via an internally developed translation platform",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread via Comlink RPC with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data-entry workflows",
      "Function caching utilities for rendering optimization: cache/cacheMany tools mimicking React useMemo — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js) for framework-agnostic usage. Integrates TailwindCSS + Semantic UI as the design system foundation, with Storybook for designer collaboration and documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Semantic UI", "Storybook", "Monorepo"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI components built as Stencil.js Web Components — framework-agnostic, usable in React, Vue, or vanilla JS without modification",
      "Design system constructed with TailwindCSS + Semantic UI as a shared token foundation",
      "Storybook documentation enabled direct designer-developer communication and visual verification",
      "Monorepo separating component library and business code — component library independently publishable to private NPM and testable before batch-building business modules",
    ],
    contributions: [
      "Designed and built entirely from scratch as sole developer; established the reusable component foundation for all FundFluent products",
    ],
  },
  {
    name: "CMS Migration to Next.js",
    summary:
      "Led the migration of LINE Shopping's CMS from a PHP monolith to React & Next.js App Router, managing a 4-person team to achieve full frontend-backend separation. One of the early Next.js App Router adoptions within LINE Taiwan.",
    stack: ["React", "Next.js", "App Router", "TypeScript", "iframe micro-frontend"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "Used iframe-based micro-frontend pattern to enable independent deployment of new and legacy projects, with progressive URL-based migration from old to new — zero big-bang cutover",
      "One of the earliest Next.js App Router adoptions within LINE Taiwan",
    ],
    contributions: [
      "Served as architect, PM, and developer simultaneously — planned the entire project, assigned tasks, wrote technical documentation, and communicated directly with end users throughout delivery",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "LINE's affiliate e-commerce platform where users earn LINE Points through partner merchants. A full-stack project: Vue SSR frontend repo + BFF repo (Node.js + GraphQL) integrating dozens of backend microservices, both in TypeScript.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently developed the 'Live Shopping' feature — designed a **reusable video auto-preview module** inspired by YouTube's preview mechanism, with a global scheduler that **resolved chaotic previews during high-speed scrolling** and **eliminated memory spikes from too many concurrent live streams** on a single page",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox browser extension that dynamically rewrites Bilibili's video CDN host to the fastest regional node for TW/SG users, with automatic fallback. Sole developer from architecture to store listing. 1,000 installs and 14 five-star reviews in 10 days — 100% organic traffic.",
    stack: ["Chrome Extension", "Manifest V3", "JavaScript", "Puppeteer", "Web Extension API"],
    image: [
      "https://cdn.lazy-cv.com/promo-cover-1280x800.png",
      "https://cdn.lazy-cv.com/10-days-report.png",
      "https://cdn.lazy-cv.com/before.png",
      "https://cdn.lazy-cv.com/after.png",
      "https://cdn.lazy-cv.com/screenshot-speedtest-en-1280x800.jpg",
      "https://cdn.lazy-cv.com/5-starts.png",
    ],
    url: "https://chromewebstore.google.com/detail/twsg-%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F-for-bilibili-%E9%9D%9E%E5%AE%98/dfaddcffoondcendifiljhdbdagebgch",
    highlights: [
      "MAIN-world content script injection hooking fetch/XHR and the playinfo JSON property setter, rewriting CDN hosts inside the playurl/DASH manifest in real time without disturbing native page behavior",
      "Dual-world bridge architecture: ISOLATED-world script syncs settings and i18n strings with the MAIN world via postMessage/localStorage, since MAIN world lacks chrome.storage/chrome.i18n access",
      "Automatic fallback: monitors segment requests (403/404/5xx/timeout) and playback stalls, silently switching to Bilibili's native backup node before surfacing any user-facing prompt",
      "Reproducible builds: pure Node.js scripts (jszip + sharp + puppeteer) produce byte-for-byte identical zips across Chrome/Edge/Firefox from the same source",
    ],
    contributions: [
      "Vibe Coded in one weekend — architecture, implementation, and store listing assets built and published solo",
      "**50% install conversion rate** (2,000 views → 1,000 installs) in 10 days; WAU surpassed 1,000 with **near-100% retention** and **14 five-star reviews with zero below five stars** — all organic",
      "GitHub: https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Provide a job URL — an AI Agent scrapes the JD via Chrome DevTools MCP, analyzes requirements, and generates tailored bilingual (EN/ZH) resume web pages in Next.js. Built from scratch to production in 2 days via Vibe Coding.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output for lightweight Docker packaging",
      "AI Agent automated SOP via Chrome DevTools MCP for end-to-end resume generation pipeline",
      "Serverless deployment on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
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

export default function WorkatoResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/01a0180e-93d7-7327-8d85-205fbb19bd18/en" },
        { locale: "zh-TW", label: "中文", href: "/01a0180e-93d7-7327-8d85-205fbb19bd18/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Senior Frontend (UI) Software Engineer (AI Lab) - Workato"}
        description={"7 years of frontend development, most recently at TikTok Singapore building the ad-delivery financial settlement platform within an enterprise Monorepo spanning 50+ sub-projects and a million-line codebase. Core stack: React (Next.js), Vue (Nuxt.js), and TypeScript, with deep expertise in JavaScript, the DOM and browser APIs — from standard rendering concerns down to Web Workers, Service Workers, and extension content-script injection.\n\nPerformance optimization is a documented strength: reduced Total Blocking Time by 98% on a 500-form interface using React-useMemo-style computation caching utilities, and cut UI blocking by 90% across CSV data-entry workflows by offloading validation to a Web Worker via Comlink. Component architecture is a consistent thread: built a Stencil.js Web Component library deployed to private NPM, led a 4-person team through a full CMS migration to Next.js App Router, and shipped a custom drag-and-drop photo book editor solo in 6 months. Quality tooling includes Lighthouse CI, Jest, Cypress, and GitHub Actions CI/CD.\n\nThe AI Lab context aligns with hands-on LLM API integration, RAG architecture design, and n8n-based agentic workflow development. Fluent in English, Japanese, and Mandarin. Experienced in Agile with retrospectives, refinement sessions, and cross-functional collaboration with PMs and designers."}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border Product Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing component architecture, performance optimization, and AI integration.`}
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
