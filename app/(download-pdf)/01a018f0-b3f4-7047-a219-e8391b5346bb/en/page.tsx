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
  title: "John Hsieh | Full Stack JavaScript Developer — Capgemini",
  description:
    "7 years of full-stack JavaScript development. React (Next.js), Node.js, PostgreSQL/MongoDB, REST/GraphQL. Senior Software Engineer at TikTok Singapore.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a018f0-b3f4-7047-a219-e8391b5346bb/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architected and developed the financial settlement frontend platform for TikTok's overseas ad-delivery business within a 50+ sub-project, million-line-codebase monorepo — using React 17, TypeScript, and the company's proprietary micro-frontend framework",
      "Designed complex JSON-Schema-driven form components with cascading selects, dynamic fields, and conditional rendering; implemented high-precision floating-point arithmetic for financial pricing scenarios",
      "Reduced UI blocking time by 90% across 10 data-entry workflows by introducing Web Worker multi-threading via Comlink RPC with Yup + Regex validation schemas",
      "Reduced Total Blocking Time (TBT) by 98% on a 500-form interface by building cache/cacheMany utilities that cache expensive schema computation, mimicking React useMemo",
      "Led the team's adoption of Scrum: retrospectives for self-correcting feedback loops, refinement sessions to break down siloed work, and sprint planning to give PMs clear delivery-timeline visibility",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed and maintained LINE Shopping full-stack: Vue SSR frontend + Node.js (ExpressJS) BFF integrating dozens of backend microservices via GraphQL and TypeScript",
      "Independently built the 'Live Shopping' feature — designed a reusable video auto-preview module with a global scheduler that resolved chaotic previews during high-speed scrolling and memory spikes from concurrent live streams",
      "Led a 4-person team migrating the CMS from PHP to Next.js App Router, achieving full frontend-backend separation; one of LINE Taiwan's earliest App Router production deployments",
      "Joined JSTF, a cross-team task force establishing company-wide frontend standards; introduced Lighthouse CI for automated performance evaluation in each PR",
      "Mentored 2 new engineers and led an internal Next.js teaching forum to accelerate onboarding",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Built an online photo book editor from scratch as sole developer — delivered a full product in 6 months using Vue + NuxtJS, supporting drag-and-drop, text editing, and PWA installation",
      "Led backend API design end-to-end: defined OAuth third-party sign-in flow, cart and order API contracts, data models, and payment gateway integration from the frontend consumer's perspective",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Designed the frontend architecture and technology stack from scratch at company startup stage, building 3 products: SME Portal, Partner Portal, and an internal UI Kit",
      "Built the SME loan platform targeting the Hong Kong market using React, Next.js, TypeScript, and TailwindCSS",
      "Designed a cross-project shared UI component library using Stencil.js Web Components (framework-agnostic), published to private NPM and documented via Storybook",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Planned the technical architecture and led a 2-person team to build a SaaS office-automation platform from scratch — similar to n8n, integrating all internal PDF services (conversion, translation, editing, signing) with configurable triggers (manual, email keyword, Google Doc updates) to automate end-to-end document workflows",
      "Built the backend API layer with Node.js, NestJS, GraphQL, MongoDB, and Redis; built the frontend with Next.js, TypeScript, and ElementUI",
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
      "Large-scale enterprise Monorepo frontend serving TikTok's overseas user growth ad business — financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with a million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Micro-Frontend", "GraphQL", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Complex JSON-Schema-driven form component architecture with cascading selects, dynamic fields, and conditional rendering",
      "High-precision floating-point arithmetic for financial and pricing scenarios",
      "Micro-frontend sub-application dynamic loading via proprietary framework — independent development and deployment per business module",
      "Runtime i18n with translations fetched from an internal online translation platform",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation via Comlink RPC with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data-entry workflows",
      "cache/cacheMany utility functions mimicking React useMemo — **reduced TBT by 98%** on a 500-form-UI interface",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator combining AI Agent automation with Next.js 16 — just provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in 2 days.",
    stack: ["Next.js 16", "TypeScript", "Node.js", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "TailwindCSS 4"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output for lightweight Docker packaging with full SSR",
      "REST API with Drizzle ORM and Neon Serverless PostgreSQL for type-safe data access",
      "Serverless deployment on AWS: ECR → Lambda Web Adapter for Next.js SSR, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "AI Agent automated SOP via Chrome DevTools MCP for end-to-end resume generation",
    ],
  },
  {
    name: "CMS Migration to Next.js (Team Lead)",
    summary:
      "Led a 4-person team migrating LINE Shopping's CMS from PHP to React & Next.js App Router, achieving full frontend-backend separation. One of LINE Taiwan's earliest App Router production deployments.",
    stack: ["React", "Next.js", "App Router", "TypeScript", "iframe micro-frontend"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "iframe-based micro-frontend architecture enabled independent deployment of new and legacy systems with progressive URL-based migration",
      "Early Next.js App Router production adoption — made architectural decisions on routing, data-fetching, and server component boundaries",
    ],
    contributions: [
      "Served as architect and PM simultaneously — technical documentation, task assignment, user communication, and schedule planning alongside hands-on coding",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "LINE's e-commerce affiliate platform — a full-stack project: Vue SSR frontend + Node.js (ExpressJS) BFF integrating dozens of backend microservices via GraphQL and TypeScript.",
    stack: ["Vue SSR", "Node.js", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    contributions: [
      "Independently developed 'Live Shopping' feature — designed a reusable video auto-preview module with a global scheduler, resolving chaotic previews during high-speed scrolling and memory spikes from concurrent live streams",
    ],
    url: "https://buy.line.me",
  },
  {
    name: "AI.Book Photo Book Editor",
    summary:
      "Online photo book editor built from scratch as sole developer — frontend architecture, custom editor core, and backend API design delivered end-to-end in 6 months.",
    stack: ["Vue", "NuxtJS", "OAuth", "REST API", "PWA", "IndexedDB"],
    company: "AI.Book",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Custom Vue editor: add/remove photos, text input, font style/size editing — web and mobile support",
      "Led backend API design: OAuth third-party sign-in, cart and order flow, payment gateway integration — defined API contracts and data models from the consumer perspective",
      "PWA installation support for native-app-like offline experience",
    ],
    contributions: [
      "Single-developer full-slice ownership — 0 to production in 6 months",
    ],
  },
  {
    name: "FundFluent UI Kit + Portals",
    summary:
      "Designed a cross-project internal UI Kit (Stencil.js Web Components, framework-agnostic) and built 2 React/Next.js products — SME Portal and Partner Portal — all from scratch as sole developer.",
    stack: ["React", "Next.js", "TypeScript", "Stencil.js", "TailwindCSS", "Storybook", "Web Components"],
    company: "FundFluent",
    image: [
      "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
      "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
      "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    ],
    highlights: [
      "Web Component UI Kit via Stencil.js — framework-agnostic, published to private NPM",
      "Design system built with TailwindCSS + Semantic UI; Storybook for documentation and designer collaboration",
      "Monorepo separating component library from business code — independently publishable and testable",
    ],
    contributions: [
      "Built all 3 products (UI Kit, SME Portal, Partner Portal) from scratch as sole developer",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Sass / SCSS", "Node.js", "NestJS"],
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
    reverse: true,
  },
  {
    keywords: ["CSS", "CSS variable", "Media query", "Cache Storage", "Workbox", "web-push", "Navigator API", "EJS", "Swagger", "mustache"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:37s]",
  },
  {
    keywords: ["Chrome Extension", "Manifest V3", "Puppeteer", "Vert.x", "Web Extension API"],
    badgeClassName: "border-fuchsia-200 bg-fuchsia-50/50 text-fuchsia-800",
    marqueeClassName: "[--duration:38s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "Years Full Stack Exp.", value: 7 },
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

export default function CapgeminiResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/01a018f0-b3f4-7047-a219-e8391b5346bb/en" },
        { locale: "zh-TW", label: "中文", href: "/01a018f0-b3f4-7047-a219-e8391b5346bb/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/107453(1).jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Full Stack JavaScript Developer - Capgemini"}
        description={"7 years of full-stack JavaScript development across large-scale enterprise systems and greenfield startups. Core stack: React (Next.js), Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, GraphQL, and REST APIs — with end-to-end ownership from frontend architecture to backend API design and cloud deployment.\n\nAt TikTok Singapore, led financial settlement frontend within a million-line monorepo, achieving 98% TBT reduction and 90% UI-blocking time improvement. At LINE Taiwan, built a GraphQL BFF integrating dozens of microservices, migrated a CMS to Next.js App Router as tech lead, and established company-wide frontend standards. At Foxit, designed and built a NestJS + GraphQL backend from scratch for a SaaS office-automation platform. At AI.Book and FundFluent, owned complete greenfield product slices — OAuth flows, REST API contracts, and payment gateway integration end-to-end."}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Full-stack JavaScript Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects across React, Next.js, Node.js, GraphQL, and cloud deployment.`}
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
