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
  title: "John Hsieh | Engineer/Senior Engineer, Frontend @ Sea Ltd",
  description:
    "7 years of frontend engineering experience with a strong web performance optimization track record and hands-on LLM/RAG experimentation — applying for Engineer/Senior Engineer, Frontend at Sea Ltd (Group Data).",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/019fef10-9512-778f-ad2c-496635f3a8c6/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architect the financial settlement platform for ad delivery on the User Growth team using React 17 and TypeScript, inside a Rush monorepo spanning 50+ sub-projects and a million-line codebase",
      "Reduced UI blocking time 90% across large data-entry workflows by offloading CSV validation to a Web Worker + Comlink RPC pipeline with Yup/Regex schemas — later abstracted into a shared internal tool beyond its original scope",
      "Built cache/cacheMany memoization utilities mimicking React's useMemo, cutting Total Blocking Time 98% on a 500-form UI without pagination",
      "Synthesizes daily oncall feedback from advertisers into new technical development tasks, rather than only waiting for requirements to be handed down",
      "Led the team's adoption of Scrum — retrospectives, refinement sessions, and balanced sprint planning — giving PM and engineering clear cross-functional visibility into delivery timelines",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Operated inside a 60-person Agile team where 'every line is reviewed before merge' was the operating norm, independently designing and building a reusable video auto-preview module for LINE Shopping (Vue SSR, GraphQL, TypeScript, ExpressJS) with UI/UX-driven scroll and memory-management logic",
      "Led a 4-person team through the CMS migration from PHP to React/Next.js App Router, coordinating end-to-end with backend and adjacent teams to achieve full frontend-backend separation",
      "Contributed to JSTF, a cross-team initiative setting company-wide frontend engineering standards, and introduced Lighthouse CI to automate performance and quality gating in CI pipelines",
      "Mentored 2 new engineers to positive feedback and led an internal Next.js teaching forum to accelerate onboarding",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Owned the online photo-book editor end-to-end as sole contractor — including backend API design covering OAuth third-party sign-in, cart/order flow, and payment gateway integration — defining the API contract, data model, and error handling from the consumer's perspective, shipping within 6 months",
      "Supported PWA installation and cross-platform (web/mobile) editing for a native-app-like experience",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Built an SME lending platform for the Hong Kong market at FundFluent using React/Next.js and TypeScript, joining at the company's early startup stage",
      "Designed and published a cross-project shared UI component library (Stencil.js Web Components) to private NPM, using a monorepo so the library could be versioned and released independently of business code",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Managed a 2-person frontend team as full-stack engineer at Foxit Software (PDF software solutions), designing and maintaining web application APIs and services (Node.js/Express, MongoDB, Redis) that integrated PDF processing libraries",
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
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth business, covering media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with a million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "High-precision numeric computation for financial and pricing scenarios, solving JavaScript floating-point precision issues at scale",
      "Complex form component development based on JSON Schema dynamic rendering with cascading selects, dynamic fields, and conditional rendering",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread using Comlink for RPC-like communication, with Jest-covered Yup/Regex schemas — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching utilities for rendering optimization: cache/cacheMany tools mimicking React useMemo — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "AI Persona Chatbot",
    summary:
      "A LINE chatbot built on top of a large language model and the n8n workflow automation tool, bringing a pet to life as a personalized AI companion. Features multi-turn context memory, image/voice understanding (multimodal), long-term memory via vector database (RAG), and quick persona switching via structured prompt engineering.",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "n8n Workflow Automation Architecture: orchestrates LINE Webhook events, Gemini API calls, and database storage — eliminating heavy traditional backend development",
      "Long-term Memory (AI Knowledge Base): past memories stored as JSONL, vectorized (embedded) into a semantic search database, exposed to the AI via tool calls for RAG-style retrieval",
      "Structured Prompt Engineering: carefully tuned system prompts to keep conversations aligned with a specific character persona and style",
      "Image & Voice Understanding (Multimodal Agent): understands image and audio content and interacts accordingly",
      "Lightweight Cloud Deployment: containerized with Docker, deployed on a DigitalOcean VPS",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox browser extension that makes the web version of Bilibili load smoother for users in Taiwan and Singapore, dynamically rewriting the video CDN host to the fastest regional node with automatic fallback. Solely designed, built, published, and maintained end-to-end.",
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
      "Real-time per-node speed test tool: benchmarks each CDN node's download speed against the actual current video/quality segment, without affecting the CDN currently in use",
      "Automatic fallback & fault tolerance: monitors segment request status and playback stalls, silently switching to Bilibili's native backup node before ever prompting the user",
      "Forum-driven iteration: actively monitored user feedback across Bilibili community forums, synthesizing recurring pain points into the feature roadmap",
      "Reproducible builds: pure Node.js scripts (jszip + sharp + puppeteer) package the same source into byte-for-byte identical Chrome/Edge/Firefox zips",
    ],
    contributions: [
      "Vibe Coding in a single weekend — architecture, implementation, and store listing assets designed, built, and published solo",
      "10 days after launch: WAU surpassed 1,000 (**near-100% retention**), and **14 five-star reviews with zero below five stars** — 100% organic traffic",
      "GitHub: https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE affiliate shopping service where users earn LINE Points through partner merchants. A full-stack project with a Vue SSR frontend and a BFF (Node.js + GraphQL) integrating dozens of backend microservices.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    contributions: [
      "Independently developed the 'Live Shopping' feature — inspired by YouTube's auto-preview mechanism, designed a **reusable video auto-preview module** with a global scheduler that **resolved chaotic previews during high-speed scrolling** and **memory spikes from too many live streams** on a single page",
    ],
    url: "https://buy.line.me",
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — just provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in just 2 days via Vibe Coding.",
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
      "AI Agent automated SOP via Chrome DevTools MCP for end-to-end resume generation",
      "Serverless deployment on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
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
    ],
    contributions: [
      "Beyond coding, served as architect planning the entire project while also acting as PM — assigning tasks, writing technical documentation, and communicating with users",
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

export default function SeaFrontendResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019fef10-9512-778f-ad2c-496635f3a8c6/en" },
        { locale: "zh-TW", label: "中文", href: "/019fef10-9512-778f-ad2c-496635f3a8c6/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Software Engineer - TikTok\nApply for Engineer/Senior Engineer, Frontend - Sea Ltd"}
        description={`7 years of frontend engineering experience, currently at TikTok Singapore, previously LINE Taiwan, applying for Engineer/Senior Engineer, Frontend on Sea's Group Data team. Deep hands-on web performance optimization background: reduced Total Blocking Time 98% on a 500-form interface via custom memoization utilities, and cut UI blocking time 90% by offloading CSV validation to a Web Worker + Comlink RPC pipeline — both shipped inside a React 17/TypeScript monorepo spanning 50+ sub-projects and a million-line codebase. Core stack is React, TypeScript, HTML, and CSS, with full-stack familiarity across REST APIs, GraphQL, and Express/Node.js from building backend API contracts at AI.Book and FundFluent.

Actively experiments with emerging technology: built an AI persona chatbot integrating LLM prompt engineering, vector-embedded long-term memory (RAG), and multimodal understanding via n8n workflow automation, and independently shipped a Chrome extension (TWSG) from architecture to Chrome Web Store using AI-assisted Vibe Coding in a single weekend — 1,000+ WAU within 10 days, 14 five-star reviews with zero below five stars. UI/UX sensibility developed through building custom CSS design systems per project and leading a video auto-preview module redesign at LINE Shopping. Automated testing/tooling experience with Jest, Cypress, and Puppeteer-driven CI. Mentored 2 engineers and led a 4-person team through a PHP-to-Next.js migration at LINE Taiwan. Fluent in English, Japanese, and Mandarin.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Web Performance & AI-Assisted Engineering"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing web performance optimization, LLM/RAG experimentation, and independent product delivery.`}
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
