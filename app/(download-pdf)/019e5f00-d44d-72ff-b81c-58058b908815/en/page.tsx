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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../../john-hsieh/skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | Product Engineer — Fun.xyz",
  description:
    "7 years of frontend engineering across fintech, high-traffic e-commerce, and SDK development. Specializing in React / TypeScript / full-stack delivery for payment and developer tooling products.",
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
      "Part of the User Growth team, running advertising campaigns across major DSP platforms to drive app growth.",
      "Built and maintained financial settlement systems for ad delivery using React, monorepo architecture, and the company's proprietary micro-frontend framework.",
      "Implemented high-precision numeric computation for financial and pricing scenarios, resolving JavaScript floating-point precision issues in settlement flows.",
      "Led adoption of Scrum on the development team — introduced retrospectives, refinement sessions, and workload balancing to improve delivery cadence and team coordination.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping with Vue SSR + GraphQL + TypeScript + ExpressJS in a high-code-quality, review-first engineering culture.",
      "Team Lead of a 4-person team — owned technical architecture, scheduling, task allocation, and stakeholder communication for a CMS migration from PHP to NextJS App Router.",
      "Independently shipped the Live Shopping feature — designed a reusable video auto-preview module with a global scheduler to resolve performance and memory issues at scale.",
      "Participated in the JavaScript Task Force (JSTF) to establish company-wide frontend standards; introduced Lighthouse CI for automated performance evaluation in CI pipelines.",
      "Mentored 2 engineers; led an internal NextJS training forum to accelerate new member onboarding.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely responsible for building an online photo book editor from scratch — shipped to production in 6 months.",
      "Designed and implemented all editor interactions: drag-and-drop, resizing, font/text editing, cross-platform support.",
      "Added PWA support for a native app-like install experience on both web and mobile.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at founding stage of a Hong Kong fintech startup — planned and built the entire frontend architecture from scratch.",
      "Built SME and Partner loan platforms using React / NextJS + TypeScript + TailwindCSS, integrating OCR-based document processing.",
      "Designed and published an internal cross-project UI component SDK using Web Components (Stencil.js) — framework-agnostic, deployed to private NPM.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Built a B2B management platform that unified internal AI microservices into a single API-exposed interface.",
      "Tech stack: NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG Overseas Platform — TikTok Financial Settlement",
    summary:
      "Large-scale enterprise Monorepo frontend for TikTok's overseas user growth business. Covers financial settlement, procurement, media asset management, and data dashboards across 50+ sub-projects and a million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Built complex form components based on a JSON Schema dynamic rendering engine — cascading selects, conditional fields, cross-field validation logic",
      "Solved JavaScript floating-point precision for financial settlement and pricing scenarios",
      "Micro-frontend integration via proprietary framework — independent deployment of business modules",
      "Ferry + Thrift IDL for type-safe, auto-generated API code — ensuring frontend-backend protocol consistency",
    ],
    contributions: [
      "**Web Worker multi-threaded CSV validation**: offloaded CPU-intensive validation to a background thread via Comlink (RPC-like API), with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data entries",
      "**Function caching for rendering optimization**: created `cache`/`cacheMany` utilities mimicking React `useMemo` — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component SDK built with Web Components (Stencil.js) for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation. Published to private NPM for internal consumption.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI components built with Stencil as web components — framework-agnostic, works with React, Vue, or vanilla JS",
      "Design system constructed with TailwindCSS + customized Semantic UI",
      "Storybook for component documentation and designer collaboration",
      "Monorepo architecture separating component library and business code — independent publish, test, and batch-build pipeline",
    ],
    contributions: [
      "Designed and built entirely from scratch as sole developer — the library became the foundational UI layer for all FundFluent products",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "A fintech platform for Hong Kong SMEs — aggregating bank and government loan products, one-stop application flow, and OCR-powered document management to reduce redundant filing costs.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    highlights: [
      "Integrated third-party OCR API for document parsing and categorization",
      "Built complex multi-step loan application flows with form validation (React Hook Form + Yup)",
      "Designed reusable UI patterns across SME and Partner portals using shared UI Kit",
    ],
    contributions: ["Built entirely from scratch as sole developer"],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — just provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in 2 days via Vibe Coding.",
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
      "AI Agent automated SOP via Chrome DevTools MCP — end-to-end resume generation pipeline",
      "Serverless on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "LINE's flagship affiliate shopping platform — users earn LINE Points by purchasing through partner merchants. High-traffic e-commerce with a rigorous review-first engineering culture.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently shipped the **Live Shopping** feature — designed a **reusable video auto-preview module** with a global scheduler, resolving chaotic previews during high-speed scrolling and memory spikes from concurrent live streams",
    ],
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led migration of LINE Shopping CMS from PHP to React & NextJS App Router — managing a 4-person team to achieve full frontend-backend separation. One of LINE Taiwan's earliest NextJS App Router adoptions.",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe micro-frontend"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "Used iframe-based micro-frontend for independent deployment of old and new systems with progressive URL migration",
      "One of LINE Taiwan's early adopters of Next.js App Router",
    ],
    contributions: [
      "Served as architect, PM, and engineer simultaneously — wrote technical specs, allocated tasks, and communicated with stakeholders across teams",
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
    keywords: ["SDK Development", "Web Component", "StencilJS", "Monorepo", "Rush", "PNPM Workspaces", "NPM Publishing", "REST API", "Axios", "Thrift IDL"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["State Management", "MobX", "Vuex", "React Hook Form", "Yup", "Zod", "Web Worker", "Comlink", "Performance Optimization", "Lighthouse"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jest", "AWS Lambda", "S3", "CloudFront"],
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

export default function FunXyzResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019e5f00-d44d-72ff-b81c-58058b908815/en" },
        { locale: "zh-TW", label: "中文", href: "/019e5f00-d44d-72ff-b81c-58058b908815/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Product Engineer (Frontend-Led, Full-Stack Capable)"
        description={`I'm a frontend-led, full-stack-capable engineer with 7 years of experience shipping user-facing products at TikTok Singapore and LINE Taiwan. My core stack is React / Next.js / TypeScript, and I have a strong track record of owning features end-to-end — from architecture decisions to production delivery.\n\nI've built and shipped products that sit at the intersection of developer tooling and financial systems. At FundFluent, I designed and published an internal UI component SDK (Stencil.js Web Components, private NPM) used across all company products — the closest analogue to what Fun.xyz's Checkout SDK represents. At TikTok, I built financial settlement systems for ad delivery, where correctness, precision, and reliability under scale are non-negotiable.\n\nI operate like an owner. At AI.Book, I took a photo book editor from zero to launch as the sole developer in 6 months. I built Lazy CV — this very resume's generator — from scratch to production in 2 days. I'm not afraid of unglamorous work: I've debugged Web Worker threading issues, solved floating-point precision bugs in settlement flows, and optimized a 500-form interface to reduce Total Blocking Time by 98%.\n\nWhat I can bring to Fun.xyz: deep React + TypeScript expertise to scale the Checkout SDK; a product-first mindset that treats developer experience and user UX as equally important; the fintech sensibility to reason about correctness in payment flows; and the startup discipline to ship fast, iterate based on feedback, and dive into whatever problem needs solving — whether glamorous or not.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Financial & High-Traffic Product Engineering"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects — SDK development, fintech platforms, and high-traffic product engineering.`}
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
