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
  title: "John Hsieh | Full Stack Engineer, Growth — Stripe",
  description:
    "7 years of full-stack engineering experience at TikTok Singapore (User Growth) and LINE Taiwan. Specializing in React / Next.js / TypeScript, growth engineering, A/B experimentation, and high-quality production systems.",
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
    role: "Software Engineer — User Growth",
    period: "2024.11 - Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Part of the User Growth team, responsible for running product advertisements across major DSP platforms to grow the user base for TikTok and related apps — directly aligned with Stripe Growth's mission to acquire and convert merchants globally.",
      "Developed the financial settlement frontend for ad delivery pipelines using React, Monorepo, and an in-house micro-frontend framework, with full unit test coverage per change.",
      "Led the engineering team in adopting Scrum: retrospectives for self-correction, refinement to break down siloed work, balanced workloads, and improved PM visibility into project timelines.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping (high-traffic e-commerce platform) daily using Vue SSR + GraphQL + TypeScript + ExpressJS with high-standard code review culture.",
      "Served as Team Leader for a 4-person team — led CMS migration from PHP to NextJS App Router, achieving frontend-backend separation with gradual rollout via iframe micro-frontend.",
      "Participated in JSTF to establish company-wide frontend standards; introduced Lighthouse CI for automated performance evaluation.",
      "Mentored 2 new engineers with positive feedback; led internal NextJS teaching forum to onboard new members.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely responsible for building an online photo book editor using Vue + NuxtJS; planned entire technical architecture from scratch and launched the product within 6 months.",
      "Supported PWA installation for a native-app-like user experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at founding stage and designed frontend architecture and tech stack from scratch using React / NextJS + TypeScript + TailwindCSS for an SME loan platform targeting Hong Kong.",
      "Designed a cross-project shared UI component library (Stencil.js Web Component), published to private NPM.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Developed a B2B management platform integrating internal AI microservices using NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG Overseas Growth Platform",
    summary:
      "TikTok User Growth core business platform supporting overseas ad growth, covering media asset management, financial settlement, vendor procurement, and data dashboards across 50+ sub-projects at million-line scale — directly analogous to Stripe's Growth engineering mission.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker", "Comlink"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "JSON Schema-driven dynamic form rendering engine supporting cascading selects, dynamic fields, and conditional displays",
      "High-precision numeric computation for financial/quotation scenarios (JavaScript floating-point precision)",
      "Micro-frontend integration via in-house framework for on-demand module loading and independent deployment",
      "Ferry + Thrift IDL for type-safe service code generation ensuring frontend-backend protocol consistency",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: moved validation to a separate thread using Comlink (RPC-like) with Yup + Regex Schema — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching tool for render optimization: cache/cacheMany inspired by React useMemo — **reduced Total Blocking Time (TBT) by 98%** for an interface rendering 500 form UIs without pagination",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered custom resume generation system. Provide a job URL and the system automatically fetches the JD, analyzes requirements, and generates a bilingual resume page. Shipped from zero to production in 2 days via AI-assisted development (Vibe Coding). This very resume was generated by this system.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "CloudFront CDN", "GitHub Actions"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output deployed as a lightweight Docker image",
      "AI Agent automation SOP: Chrome DevTools MCP auto-scrapes JD for end-to-end resume generation",
      "Serverless architecture: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe data access",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "LINE's e-commerce referral platform (high-traffic, user-facing product) — users earn LINE points when purchasing through partner merchants. Core user journeys include search, price comparison, and sharing.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Sole developer of the 'Live Shopping' feature: designed a **reusable video auto-preview module** with a global scheduler to solve video preview chaos during fast scrolling and memory bloat from multiple live sources",
    ],
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led migration of LINE Shopping's PHP-based CMS to React & NextJS App Router with a 4-person team, achieving frontend-backend separation. One of LINE Taiwan's earliest adoptions of the NextJS App Router.",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "iframe-based micro-frontend enabling independent deployments with progressive URL-based migration from old to new system",
      "One of LINE Taiwan's earliest projects to adopt NextJS App Router",
    ],
    contributions: [
      "Acted as both architect and PM — technical decisions, task assignments, technical documentation, and user communication; independently delivered end-to-end",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "Production loan platform for Hong Kong SMEs — integrated bank and government loan information, one-stop application, and OCR-powered document management to reduce redundant submissions. Built from scratch independently.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS", "REST API"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "Independently designed architecture and developed full product — complete user onboarding flow, backend API integration, and frontend UX",
    ],
  },
  {
    name: "AI Chatbot — Personified Pet",
    summary:
      "AI chatbot powered by LLMs and n8n workflow automation that brings a pet to life via LINE. Features multi-turn conversation memory, multimodal (image/voice) understanding, and long-term memory via vector database RAG — demonstrating ML integration and product thinking.",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding", "RAG"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "n8n workflow automation as core orchestration platform — Webhook → Gemini API → Database, dramatically reducing iteration overhead",
      "Per-user conversation context (Context Window) for precise personalized dialogue",
      "Past memories stored as JSONL and vectorized (Embedding) — semantic retrieval via tool call for a truly human-like AI",
      "Dockerized and deployed on DigitalOcean VPS",
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
];

const stats: StatItem[] = [
  { label: "yrs full-stack exp.", value: 7 },
  { label: "products shipped", value: 18 },
  { label: "engineers managed", value: 4 },
  { label: "languages spoken", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "Soochow University", degree: "Bachelor of Arts — Japanese Language & Literature", period: "2013 - 2017" },
  { institution: "Doshisha University, Kyoto", degree: "Exchange Student — Japanese Language & Culture", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "JLPT N1", description: "Japanese Language Proficiency — Business level", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "NTU Extension Program", description: "Web Development Technology" },
];

const languages: LanguageItem[] = [
  { name: "Chinese — Native", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "Japanese — Business (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "English — Professional", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function StripeGrowthResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019ea1b1-d7ac-70fb-a00a-7dd4cb866f05/en" },
        { locale: "zh-TW", label: "中文", href: "/019ea1b1-d7ac-70fb-a00a-7dd4cb866f05/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Full Stack Engineer"
        description={`I am a full-stack engineer with 7 years of experience, currently at TikTok Singapore's User Growth team — building the systems that drive global merchant and user acquisition at scale. This experience maps directly to what Stripe's Growth team does.\n\nWhat I can bring to Stripe: hands-on growth engineering experience translatable to merchant acquisition, onboarding flows, and product-led growth. I have shipped high-traffic, user-facing products at LINE Taiwan (Vue SSR + GraphQL), led complex system migrations (PHP → NextJS), and built production-grade financial settlement infrastructure at TikTok — all environments demanding the same quality bar Stripe holds.\n\nWhy me over other candidates: I combine three strengths that are rare together — direct User Growth engineering background (TikTok), entrepreneurial zero-to-one delivery (AI.Book, FundFluent: sole developer, 6 months to launch), and a deeply held belief that engineering must serve the user experience. My north star is "user experience first," which resonates with Stripe's obsession over developer and merchant experience.\n\nI am based in Singapore, trilingual (English, Japanese N1, Chinese), and ready to contribute immediately to the Growth team's on-call and experimentation cadence.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — cross-regional growth product engineering"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects covering growth engineering, full-stack production systems, and AI integration.`}
        projects={projects}
        highlightsLabel="Technical Highlights"
        contributionsLabel="Key Contributions"
      />

      <TechStackVisualization title="Tech Stack" description="Core technologies and their relationships.">
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
