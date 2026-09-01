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
  title: "John Hsieh | Frontend Growth Engineer",
  description:
    "Frontend engineer with 7 years of React / TypeScript production experience, AI coding agents (Claude Code, Cursor), MCP and custom skill authoring, and growth-domain products. Applying for Staff/Senior Staff Frontend Engineer - Growth at OKX.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a05b4d-9034-74c4-8f0b-5070b5a0515e/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architected the ad-delivery financial settlement platform for the User Growth team inside a 50+ sub-project, million-line React 17 + TypeScript monorepo (Rush + PNPM Workspaces, Webpack), driving overseas user acquisition across major DSP platforms",
      "Cut UI blocking time by 90% across 10 data-entry workflows by moving CSV validation to a Web Worker over Comlink RPC, then abstracting it into a shared reusable utility consumed across modules",
      "Reduced Total Blocking Time by 98% on a 500-form interface with cache/cacheMany utilities that mimic React's useMemo to memoize expensive computation results",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Built and maintained LINE Shopping, an affiliate rewards e-commerce platform, on Vue SSR + GraphQL + TypeScript + ExpressJS, independently shipping a reusable video auto-preview module with a global scheduler",
      "Led a 4-person team migrating the CMS from PHP to a Next.js App Router architecture, reaching full frontend-backend separation via iframe micro-frontends with progressive URL-based cutover",
      "Drove company-wide frontend standards in the JSTF task force — introduced Lighthouse CI as a per-PR performance gate and built a React project template generator for code generation",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Built an online photo book editor from scratch as sole developer with Vue + NuxtJS, taking it to launch in 6 months",
      "Delivered cross-browser editing across desktop and mobile browsers, with photo import from Google Photos / Instagram",
      "Led backend API design covering AWS Cognito OAuth2 sign-in, the cart and order flow, and payment result integration",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Planned frontend architecture and stack from scratch at startup stage, building a Hong Kong SME loan platform on React / Next.js + TypeScript + TailwindCSS",
      "Built a framework-agnostic shared UI component library with Stencil.js Web Components, published to private NPM and consumed independently by the SME and Partner portals",
      "Established a design system on TailwindCSS + Semantic UI with Storybook documentation for designer collaboration",
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
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator combining an AI Agent with Next.js 16. Provide a job posting URL and the system scrapes the JD, analyzes key requirements, and generates tailored bilingual resume web pages from a personal data source. This resume was generated by the project.",
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
      "End-to-end agent SOP authored as a custom Claude Code skill plus Chrome DevTools MCP — scrapes the JD and generates tailored bilingual resume pages with no manual steps",
      "Next.js 16 App Router with standalone output for lightweight Docker packaging; serverless on AWS via ECR to Lambda Web Adapter, with S3 + CloudFront for static assets",
      "Full CI/CD through GitHub Actions and a type-safe data layer on Neon Postgres + Drizzle ORM",
    ],
    contributions: [
      "Built from scratch to production in **2 days** via Vibe Coding, fully developed with Claude Code as the coding agent — architecture, the AI-agent scrape-and-generate pipeline, and the resume management dashboard all owned solo and open-sourced on GitHub",
    ],
  },
  {
    name: "AI Persona Chatbot",
    summary:
      "A LINE chatbot built on a large language model and the n8n workflow automation tool, bringing a pet to life as a personalized AI companion with multi-turn context memory, image/voice understanding, long-term memory via a vector store, and quick persona switching.",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "Conversational agent over the LINE Messaging API with multi-turn context memory keyed by user ID for independent personalized sessions",
      "Multimodal understanding of image and voice input; long-term memory stored as JSONL, embedded into a semantic-search vector store, and exposed to the model through tool calls",
      "n8n orchestrates LINE webhook events, Gemini API calls, and storage as a low-code backend, containerized with Docker on a VPS",
    ],
    contributions: [
      "Designed and built solo as an end-to-end LLM feature — conversational UX over LINE, agent orchestration through n8n, multimodal image and voice input, and RAG-backed long-term memory — with system-prompt tuning that switches persona and tone per business scenario",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox browser extension that makes the web version of Bilibili load smoother for users in Taiwan and Singapore, dynamically rewriting the video CDN host to the fastest regional node with automatic fallback. Solely designed, built, published, and maintained end-to-end.",
    stack: ["Chrome Extension Manifest V3", "Vanilla JavaScript (ES6+)", "Content Scripts (MAIN world / ISOLATED world)", "fetch / XMLHttpRequest hook", "chrome.storage", "chrome.i18n", "Node.js", "JSZip", "Puppeteer"],
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
      "One source ships to Chrome, Edge, and Firefox with per-platform manifests; reproducible pure Node.js builds (JSZip + Sharp + Puppeteer) produce byte-for-byte identical zips",
      "Diagnoses and resolves cross-environment playback differences — monitors segment request failures and stalls, silently failing over to the native backup node before ever prompting the user",
      "MAIN-world injection hooks fetch/XHR and the playinfo setter to rewrite the streaming CDN host in real time; an ISOLATED-world bridge syncs settings and i18n strings via postMessage",
    ],
    contributions: [
      "Solely designed, built, published, and maintained end-to-end, with the entire codebase written using Claude Code as the coding agent over a single weekend — **10** days after launch: **2,000** views and **1,000** installs (a **50%** conversion rate), WAU past **1,000** at near-**100%** retention, and **14** five-star reviews with none below five, all from **100%** organic traffic",
    ],
  },
  {
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth business, covering media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with a million-line codebase on a unified architecture.",
    stack: ["React 17", "TypeScript", "Rush v5 + PNPM Workspaces (Monorepo)", "react-router-dom v5/v6", "Arco Design", "Starling (i18n)", "Less + CSS Modules", "Jest + @testing-library/react", "ESLint + commitlint + lint-staged"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Config-driven complex form components on an internal JSON Schema dynamic renderer, covering cascading selects, dynamic fields, and conditional rendering",
      "Micro-frontend integration through the proprietary framework for on-demand module loading and independent deployment",
      "High-precision numeric computation for financial and pricing scenarios, resolving JavaScript floating-point issues; runtime-fetched translation files for i18n",
    ],
    contributions: [
      "Owned the procurement and settlement modules; moved CSV validation off the main thread into a Web Worker (Comlink RPC, Yup + Regex schemas), solving the internal Armor framework's worker constraints and abstracting it into a shared reusable utility — **reduced UI blocking time by 90%** across 10 data entries — and built cache/cacheMany memoization utilities that **cut Total Blocking Time by 98%** on a non-paginated 500-form interface",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Next.js", "TailwindCSS", "Sass / SCSS", "Vue", "NuxtJS"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["Claude Code", "Cursor", "GitHub Copilot (Agent Mode)", "MCP (Model Context Protocol)", "Custom Skills / Tools", "AI Agent Orchestration", "LLM Integration", "Conversational UX", "RAG", "Prompt Engineering"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["n8n", "Vibe Coding", "SDD", "Claude API", "OpenAI API", "Gemini API", "npm", "pnpm", "Webpack", "Vite"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Git", "GitHub Actions", "Docker", "Kubernetes", "Rush Monorepo", "PNPM Workspaces", "ESLint", "Prettier", "Lighthouse CI", "SonarQube"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Cross-browser Compatibility", "Chrome Extension (Manifest V3)", "Web Worker", "Comlink", "Service Worker", "PWA", "Web Components", "StencilJS", "Storybook", "Web Performance"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
  },
  {
    keywords: ["Redux", "MobX", "React Query", "React Hook Form", "Zod", "Yup", "GraphQL", "Apollo Client", "REST API", "Axios"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:31s]",
    reverse: true,
  },
  {
    keywords: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Drizzle ORM", "AWS", "GCP", "OAuth2", "JWT"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["Jest", "Testing Library", "Playwright", "Cypress", "ECharts", "Chart.js", "D3.js", "Framer Motion", "i18n", "Sentry"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
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
        { locale: "en", label: "EN", href: "/01a05b4d-9034-74c4-8f0b-5070b5a0515e/en" },
        { locale: "zh-TW", label: "中文", href: "/01a05b4d-9034-74c4-8f0b-5070b5a0515e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Staff/Senior Staff Frontend Engineer - Growth - OKX"}
        description={`7 years in frontend development. On TikTok's User Growth team, architected the ad-delivery settlement system in a 50+ package React 17 + TypeScript monorepo driving overseas user acquisition; built FundFluent's SME loan platform and Lazy CV from scratch on React / Next.js + TypeScript. LINE Shopping is an affiliate rewards platform, with i18n localization.

Works daily with Claude Code, Copilot Agent Mode, Cursor. Lazy CV runs an end-to-end agent SOP from a custom Claude Code skill and Chrome DevTools MCP, shipped in 2 days; the TWSG Bilibili extension was built entirely with Claude Code, packaged from one source into identical Chrome/Edge/Firefox builds while resolving cross-browser playback differences. The AI Persona Chatbot pairs an LLM with multimodal input, context memory, RAG, and tool-call orchestration; custom MCP servers are in scope.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border Product Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} projects mapped to the role: React/TypeScript at scale, AI coding agents, MCP & custom skills, reusable modules, and cross-browser delivery.`}
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
