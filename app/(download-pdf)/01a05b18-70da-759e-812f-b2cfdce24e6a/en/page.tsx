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
  title: "John Hsieh | Staff/Senior Staff Frontend Engineer, Customer Genius & BOSS",
  description:
    "7 years of production frontend in React, TypeScript, and JavaScript — ad-delivery settlement platform architecture at TikTok Singapore, a Stencil.js component library shared across products at FundFluent, and AI-agent tooling with MCP and custom skills. Hands-on with Claude Code and Cursor.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a05b18-70da-759e-812f-b2cfdce24e6a/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architected the ad-delivery financial settlement platform inside a 50+ sub-project, million-line Rush + PNPM Workspaces monorepo on React 17, TypeScript, and the company's proprietary micro-frontend framework",
      "Cut UI blocking time 90% across data-entry workflows by offloading CSV validation to a Web Worker via Comlink RPC with Yup and Regex schemas, then abstracted it into a reusable shared utility adopted across the codebase",
      "Reduced Total Blocking Time 98% on a 500-form screen by building cache/cacheMany memoization utilities modeled on React's useMemo",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Led a 4-person team migrating LINE Shopping's CMS from PHP to a Next.js App Router architecture, reaching full frontend-backend separation via iframe-based micro-services",
      "Drove company-wide frontend developer-experience standards through the JSTF task force, introducing Lighthouse CI for per-PR performance gating, SonarQube static analysis, and a React project template generator",
      "Developed and maintained LINE Shopping on a full stack of Vue SSR, GraphQL, TypeScript, and ExpressJS in a 60-developer team where every line is reviewed before merging, and independently built a reusable live-video auto-preview module with a global scheduler",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Built an online photo book editor from scratch as the sole engineer with Vue and Nuxt.js, taking it from zero to launch in 6 months",
      "Owned backend API design end-to-end covering AWS Cognito OAuth2 sign-in, cart and order flow, and payment-result integration, defining the API contract, data models, and error handling from the consumer's perspective",
      "Built a pure-Vue editor supporting drag-and-drop layout, text and font editing, and photo import from Google Photos and Instagram across web and mobile browsers",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Built the FundFluent UI Kit from scratch as sole developer, a framework-agnostic component library in Stencil.js Web Components published to a private NPM registry and installed independently by the SME and Partner portals",
      "Established the company design system on TailwindCSS and Fomantic UI with Storybook documentation for designer collaboration",
      "Delivered the SME and Partner loan portals for the Hong Kong market on React 17, Next.js 12, and TypeScript, planning frontend architecture and tech selection from scratch",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [],
  },
  {
    company: "Aotter",
    role: "Frontend Engineer",
    period: "Aug 2019 – Nov 2020",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [],
  },
  {
    company: "Third Dimension Technology",
    role: "Frontend Engineer",
    period: "Apr 2019 – Jun 2019",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [],
  },
  {
    company: "Asian Bridge (Japanese Company)",
    role: "Digital Ad Optimizer & Frontend Engineer",
    period: "Dec 2017 – Mar 2019",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth business, covering media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with a million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Developed complex business form components on an internal JSON Schema dynamic-form engine, covering cascading selects, dynamic fields, and conditional rendering",
      "Implemented high-precision numeric computation for financial and pricing scenarios, resolving JavaScript floating-point issues",
      "Integrated micro-frontends via a proprietary framework with dynamic sub-application loading and runtime-fetched i18n across 50+ sub-projects",
    ],
    contributions: [
      "Owned the ad-delivery settlement modules end-to-end inside a **50+** sub-project, million-line React 17 + TypeScript monorepo, moving CSV validation off the main thread into a Web Worker with Comlink to **reduce UI blocking time by 90%** across **10** data entries, and cutting **Total Blocking Time by 98%** on an unpaginated **500**-form screen via custom memoization utilities abstracted into a shared package",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — provide a job posting URL and the system scrapes the JD and generates tailored bilingual resume pages. Built from scratch to production in 2 days via AI-assisted coding. This resume was generated by this project.",
    stack: ["TypeScript", "Next.js 16 (App Router)", "React 19", "TailwindCSS 4", "Neon Serverless PostgreSQL", "Drizzle ORM", "Zod", "AWS SDK (S3, Lambda)", "AWS Lambda Web Adapter", "Docker", "Playwright", "ESLint", "Prettier"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Runs an end-to-end AI Agent SOP: a Chrome DevTools MCP integration scrapes the JD, then a structured skill definition drives tailored bilingual page generation",
      "Serverless on AWS: Docker image to ECR, Next.js SSR via Lambda Web Adapter, static assets on S3 + CloudFront, CI/CD through GitHub Actions",
      "Type-safe data layer with Neon Serverless PostgreSQL and Drizzle ORM; Next.js 16 App Router with standalone output for lightweight Docker packaging",
    ],
    contributions: [
      "Designed, built, and shipped to production solo in **2** days with Claude Code as the coding agent, authoring the reusable custom skill and structured-prompt SOP that turns a single job-posting URL into a deployed bilingual resume site",
    ],
  },
  {
    name: "AI Persona Chatbot",
    summary:
      "A LINE chatbot built on a large language model and the n8n workflow automation tool, bringing a pet to life as a personalized AI companion. Multi-turn context memory, multimodal image and voice understanding, long-term memory via a vector database (RAG), and quick persona switching.",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "Orchestrates LINE Webhook events, Gemini API calls, and database storage through n8n as the agent backend, removing heavy traditional backend work",
      "Supports multi-turn context memory keyed by user ID and multimodal image and voice understanding for natural conversational interaction",
      "Adds long-term memory by storing past events as JSONL, embedding them into a semantic vector store, and exposing retrieval to the model via tool calls",
    ],
    contributions: [
      "Built the full conversational agent solo — from n8n orchestration and structured system-prompt design to a vectorized RAG memory store — and deployed it containerized on a DigitalOcean VPS",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox browser extension that makes the web version of Bilibili load smoother for users in Taiwan and Singapore, dynamically rewriting the video CDN host to the fastest regional node with automatic fallback. Solely designed, built, published, and maintained end-to-end.",
    stack: ["Chrome Extension Manifest V3", "Vanilla JavaScript (ES6+)", "chrome.storage", "chrome.i18n", "Content Scripts (MAIN world / ISOLATED world)", "fetch / XMLHttpRequest hook", "Node.js", "JSZip", "Puppeteer", "Sharp"],
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
      "Ships a single codebase to Chrome, Edge, and Firefox with a trilingual UI, diagnosing and resolving cross-browser rendering and playback behavior differences",
      "Reproducible builds: pure Node.js scripts (JSZip, Sharp, Puppeteer) package the same source into byte-for-byte identical per-browser zips",
      "MAIN-world injection hooks fetch/XHR and the playinfo setter to rewrite CDN hosts in the playurl/DASH manifest in real time, bridged to an ISOLATED-world script for extension APIs",
    ],
    contributions: [
      "Designed, built, and published solo in a single weekend with Claude Code as the coding agent; **10** days after launch: **2,000** views and **1,000** installs (**50%** conversion), WAU past **1,000** (**~100%** retention), and **14** five-star reviews with zero below five stars on **100%** organic traffic",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "Vue", "NuxtJS", "Node.js", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["Claude Code", "Cursor", "GitHub Copilot", "MCP", "AI Agent", "Prompt Engineering", "RAG", "Claude API", "Gemini API", "n8n"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["npm", "pnpm", "Webpack", "Vite", "Git", "GitHub Actions", "ESLint", "Prettier", "Rush Monorepo", "Docker"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Web Components", "StencilJS", "Shadow DOM", "Storybook", "Web Worker", "Comlink", "Radix UI", "shadcn", "Framer Motion"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Redux", "React Query", "Vuex", "Vue Router", "React Hook Form", "Zod", "Yup", "Axios", "REST API"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["GraphQL", "Apollo Client", "PostgreSQL", "MongoDB", "Redis", "Mongoose", "Drizzle ORM", "OAuth2"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
    reverse: true,
  },
  {
    keywords: ["TailwindCSS", "Sass / SCSS", "CSS Modules", "Less", "PostCSS", "BEM", "CSS variable", "Media query"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:31s]",
  },
  {
    keywords: ["Jest", "Cypress", "Playwright", "Testing Library", "Lighthouse", "SonarQube", "AWS", "GCP", "Firebase", "Kubernetes"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
  },
  {
    keywords: ["JWT", "i18n", "Lodash", "ECharts", "PWA", "Service Worker", "Puppeteer", "Chrome Extension", "Manifest V3"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:37s]",
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

export default function OKXResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/01a05b18-70da-759e-812f-b2cfdce24e6a/en" },
        { locale: "zh-TW", label: "中文", href: "/01a05b18-70da-759e-812f-b2cfdce24e6a/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Staff/Senior Staff Frontend Engineer - Customer Genius & BOSS - OKX"}
        description={`7 years of production frontend engineering in React, TypeScript, JavaScript, HTML, and CSS, most recently at TikTok Singapore and LINE Taiwan. Built the AI Persona Chatbot end-to-end as a multi-turn LINE conversational agent — integrating the LLM API directly, managing conversation history and the tool-call flow by hand, and adding a long-term knowledge base that embeds past events into a semantic vector store (RAG) for model retrieval via tool calls.

Uses Claude Code as the primary build agent: shipped the TWSG Bilibili extension — one codebase to Chrome, Edge, and Firefox with reproducible per-browser build scripts — and Lazy CV, a Next.js resume generator whose end-to-end SOP drives a Chrome DevTools MCP integration through custom skill definitions, extensible to custom MCP servers and tools.`}
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
