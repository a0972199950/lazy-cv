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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam, AIBeam } from "../skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | Senior Frontend Engineer",
  description:
    "7 years of frontend development experience, previously at TikTok Singapore and LINE Taiwan. Specializing in React / Next.js / TypeScript.",
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
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Built frontend advertising-delivery systems for the User Growth team, running campaigns for TikTok and sibling products across major DSP platforms to drive overseas user acquisition",
      "Architected the financial settlement platform for ad delivery within a 50+ sub-project, million-line-codebase monorepo, using React 17, TypeScript, Rush Monorepo, and the company's proprietary micro-frontend framework",
      "Reduced UI blocking time by 90% across 10 data-entry workflows by offloading CSV validation to a Web Worker via Comlink RPC, using Yup and Regex validation schemas",
      "Reduced Total Blocking Time (TBT) by 98% on a 500-form interface by building cache/cacheMany utilities that mimic React's useMemo to cache expensive computation results",
      "Led the team's adoption of Scrum, using retrospectives to build self-correcting feedback loops, refinement sessions to break down siloed work, and balanced sprint planning to give PM clear visibility into delivery timelines",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed and maintained LINE Shopping, LINE's e-commerce affiliate platform, using Vue SSR, GraphQL, TypeScript, and ExpressJS — independently built a reusable video auto-preview module with a global scheduler that eliminated chaotic previews during high-speed scrolling and memory spikes from concurrent live streams",
      "Led a 4-person team through the CMS migration from PHP to a NextJS App Router architecture, achieving full frontend-backend separation",
      "Contributed to JSTF, a cross-team initiative establishing company-wide frontend development standards, and introduced Lighthouse CI for automated performance evaluation",
      "Mentored 2 new engineers to positive feedback and led an internal NextJS teaching forum to accelerate onboarding for new team members",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Built an online photo book editor from scratch as sole developer, implementing drag-and-drop, resizing, and text editing features",
      "Planned the entire technical architecture using Vue + NuxtJS and launched the product within 6 months",
      "Supported PWA installation for a native-app-like experience",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Planned frontend architecture and technology stack from scratch, joining at the company's startup stage",
      "Built an SME loan platform targeting the Hong Kong market using React / NextJS, TypeScript, and TailwindCSS",
      "Designed a cross-project shared UI component library (Stencil.js Web Component), deployed to private NPM",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Managed a 2-person frontend team as full-stack engineer within a newly formed AI team",
      "Developed a B2B management platform integrating internal AI microservices, built with NuxtJS/NextJS, TypeScript, MongoDB, and Redis",
    ],
  },
  {
    company: "Aotter",
    role: "Frontend Engineer",
    period: "Aug 2019 – Nov 2020",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "Delivered rapidly-iterated products within project-based teams of ~4 engineers",
      "Developed SuprLink URL shortener, the Aotter Trek DSP ad platform, and other internal/external projects using the Nuxt ecosystem, TypeScript, TailwindCSS, Docker, and a K8s CI/CD pipeline",
      "Built custom TailwindCSS micro UI frameworks per project to maintain high UI/UX design fidelity",
    ],
  },
  {
    company: "Third Dimension Technology",
    role: "Frontend Engineer",
    period: "Apr 2019 – Jun 2019",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "Built a decoupled Vue + PHP frontend-backend architecture for Shushu Comics, an online comics platform",
      "Integrated the WeChat Pay payment system for online transactions",
    ],
  },
  {
    company: "Asian Bridge (Japanese Company)",
    role: "Digital Ad Optimizer & Frontend Engineer",
    period: "Dec 2017 – Mar 2019",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "Managed Facebook and Google Ads campaigns as a digital ad optimizer, applying A/B testing and heatmap analysis to optimize UX",
      "Transitioned to frontend engineer and PM, building official websites and campaign pages for agency clients including Chorasu (skincare), Hair Life, and Japan Select",
      "Managed a 2-person frontend team with Japanese as the primary working language",
    ],
  },
  {
    company: "AsiaYo",
    role: "Japan Market Operations & Business Development",
    period: "Sep 2016 – Sep 2017",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "Sourced Japanese accommodation properties and listed them on the company platform",
      "Supported customers through Japan-based travel emergencies as the team's Japanese translation liaison",
      "Achieved 8,846 bookings in 2017, a 376% year-over-year increase",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
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
      "MAIN-world injection hooks fetch/XHR and the playinfo JSON setter to rewrite CDN hosts inside the playurl/DASH manifest in real time without disturbing native page behavior",
      "Dual-world bridge architecture: an ISOLATED-world script syncs settings and localized strings with the MAIN world via postMessage/localStorage, since MAIN world lacks access to chrome.storage/chrome.i18n",
      "Automatic fallback & fault tolerance: monitors segment request status and playback stalls, silently switching to Bilibili's native backup node before ever prompting the user",
      "Reproducible builds: pure Node.js scripts (jszip + sharp + puppeteer) package the same source into byte-for-byte identical Chrome/Edge/Firefox zips",
      "Automated store asset generation via Puppeteer, cycling through a trilingual UI to capture store listing screenshots",
    ],
    contributions: [
      "Vibe Coding in a single weekend — architecture, implementation, and store listing assets designed, built, and published solo within one weekend",
      "10 days after launch: 2,000 views, 1,000 installs (**50% conversion rate**), WAU surpassed 1,000 (**near-100% retention**), and **14 five-star reviews with zero below five stars** — 100% organic traffic",
      "GitHub: https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "AI Persona Chatbot",
    summary:
      "A LINE chatbot built on top of a large language model and the n8n workflow automation tool, bringing a pet to life as a personalized AI companion. Features multi-turn context memory, image/voice understanding (multimodal), long-term memory via vector database (RAG), and quick persona switching.",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "n8n Workflow Automation Architecture: uses n8n as the core backend integration platform to orchestrate LINE Webhook events, Gemini API calls, and database storage — eliminating heavy traditional backend development",
      "Multi-turn Context Memory (Context Window): distinguishes sessions by user ID for precise, independent personalized conversation contexts",
      "Image & Voice Understanding (Multimodal Agent): bot understands image and audio content and interacts accordingly",
      "Long-term Memory (AI Knowledge Base): past memories stored as JSONL, vectorized (embedded) into a semantic search database, exposed to the AI via tool calls — making the bot feel genuinely lifelike",
      "Lightweight Cloud Deployment: n8n and related services containerized with Docker, deployed on DigitalOcean VPS",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — just provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in just 2 days via Vibe Coding. This resume was automatically generated using this project.",
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
      "AI Agent automated SOP via Chrome DevTools MCP for end-to-end resume generation",
      "Serverless deployment on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
      "TailwindCSS 4 + Framer Motion for responsive design with smooth animations",
    ],
  },
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
      "Type-safe API communication using Ferry + Thrift IDL for auto-generated strongly-typed service code",
      "Internationalization with runtime-fetched translations via an internally developed online translation platform",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread using Comlink for RPC-like communication, with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching utilities for rendering optimization: created cache/cacheMany tools mimicking React useMemo to cache computation results — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE affiliate shopping service where users earn LINE Points through partner merchants.",
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
    name: "SuprLink",
    summary:
      "A URL shortener service with A/B split testing, data analytics, and ad delivery in a single platform.",
    stack: ["NuxtJS", "TypeScript", "TailwindCSS", "Docker", "K8s"],
    company: "Aotter",
    image:
      "https://cdn.lazy-cv.com/a14d9a80-45b9-4943-a043-49dacb460bb9.png",
    url: "https://supr.link",
  },
  {
    name: "Aotter Trek DSP Platform",
    summary:
      "A big-data-driven DSP (Demand-Side Platform) for ad placement, featuring rich chart interfaces to help users identify optimal advertising audiences.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    company: "Aotter",
    image:
      "https://cdn.lazy-cv.com/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
  },
  {
    name: "JavaScript Task Force",
    summary:
      "A cross-team initiative at LINE Taiwan responsible for establishing company-wide frontend development standards. Research and adoption of SonarQube, Lighthouse CI, OpenTel frontend monitoring, and React project template generators.",
    stack: ["SonarQube", "Lighthouse CI", "OpenTel", "React"],
    company: "LINE Taiwan",
    image:
      "https://cdn.lazy-cv.com/jstf.png",
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
  {
    name: "Chrome Extension - SuprLink",
    summary:
      "A Chrome extension for quickly generating short URLs via the SuprLink service.",
    stack: ["Chrome Extension", "JavaScript"],
    company: "Aotter",
    image:
      "https://cdn.lazy-cv.com/7b907335-af65-43cc-9ea2-b9ae4d2c80f0.png",
  },
  {
    name: "III City Dashboard",
    summary:
      "A government data dashboard aggregating scattered public data into a single platform, featuring highly customizable charts and data filtering modules.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "TailwindCSS"],
    company: "Aotter",
    image:
      "https://cdn.lazy-cv.com/0a002690-85c9-4bcf-bb72-9cebf81788ae.png",
  },
  {
    name: "beanfun! Data Management Center",
    summary:
      "A centralized data dashboard with various charts displaying company-wide KPIs and internal metrics.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    company: "Aotter",
    image:
      "https://cdn.lazy-cv.com/de995dc8-088c-430b-ba29-33fd2b364ced.png",
  },
  {
    name: "Shushu Comics",
    summary:
      "An online comics platform built with Vue + PHP in a decoupled architecture, integrated with WeChat Pay for payments.",
    stack: ["Vue", "PHP", "WeChat Pay"],
    company: "Third Dimension Technology",
    image:
      "https://cdn.lazy-cv.com/f0b11a8f-47c9-4587-9188-e6c93256baa7.png",
  },
  {
    name: "Chorasu Official Website",
    summary:
      "The Taiwan official website for Chorasu, an Okinawa-based skincare brand. Led design planning and frontend development.",
    stack: ["PHP", "jQuery", "CSS"],
    company: "Asian Bridge (Japanese Company)",
    image:
      "https://cdn.lazy-cv.com/b2a0eaa9-55f5-4482-bd20-c4c574b5d7d7.png",
  },
  {
    name: "Hair Life",
    summary:
      "A content-driven media website focused on hair care and beauty products.",
    stack: ["WordPress", "PHP", "CSS"],
    company: "Asian Bridge (Japanese Company)",
    image:
      "https://cdn.lazy-cv.com/2b1c2e88-9b0e-4bf8-98ee-f955391ba10f.png",
  },
  {
    name: "Japan Select",
    summary:
      "A Japanese product review blog specializing in sponsored content.",
    stack: ["WordPress", "PHP", "CSS"],
    company: "Asian Bridge (Japanese Company)",
    image:
      "https://cdn.lazy-cv.com/12da9319-3e54-419e-b6c2-1044360f7b7a.png",
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

export default function ExampleResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/john-hsieh/en" },
        { locale: "zh-TW", label: "中文", href: "/john-hsieh/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Senior Frontend Engineer"
        description="7 years of frontend development experience, most recently as a senior software engineer at TikTok Singapore and LINE Taiwan. Core stack: React (Next.js), Vue (Nuxt.js), and TypeScript, with production experience spanning resource-limited early-stage startups and large enterprise environments — building products from scratch and delivering high-quality code at scale, with a consistent focus on shipping software that is both functionally robust and easy to use. Deeply integrated AI tools into daily workflows, using GitHub Copilot Agent Mode, MCP, and n8n to build end-to-end automation SOPs, with hands-on LLM API integration and vector database (RAG) experience. Fluent in English, Japanese, and Mandarin Chinese. Experienced in Agile development and cross-functional collaboration, translating technical work for non-technical stakeholders."
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
