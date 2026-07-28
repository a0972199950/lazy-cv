import type { Metadata } from "next";
import {
  ResumeLayout,
  LanguageToggle,
  HeroProfile,
  WorkExperience,
  ProjectsGrid,
} from "@/components/resume";
import type {
  Experience,
  Project,
  StatItem,
  ContactItem,
} from "@/components/resume";

export const metadata: Metadata = {
  title: "John Hsieh | Software Engineer (TypeScript) — Arta Finance",
  description:
    "7 years of frontend engineering at TikTok Singapore and LINE Taiwan. React / TypeScript specialist with design-system ownership, fintech product experience, and shipped AI agent / LLM-powered UI — able to own a full slice end-to-end.",
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
      "User Growth team, owning the financial settlement system for ad delivery. Solved performance bottlenecks with Web Worker multithreading and function caching — 90% less UI blocking and 98% drop in TBT. Led Scrum adoption to improve team collaboration.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer / Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Built LINE Shopping (high-traffic e-commerce platform) with Vue SSR + GraphQL + TypeScript. Led a 4-person team as Team Leader, driving CMS refactor from PHP to React + NextJS App Router. Contributed to company-wide frontend guidelines.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Single-handedly planned and built an online photo book editor from scratch, shipping in 6 months. Led backend API design covering OAuth sign-in, shopping flow and payment gateway. Supported both desktop and mobile editing.",
    ],
  },
  {
    company: "FundFluent (FinTech)",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Fintech startup, planned frontend architecture from zero. Independently delivered borrower and bank portals with React + TypeScript + TailwindCSS. Led the cross-project design system and Web Component library.",
    ],
  },
  {
    company: "Foxit Software",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer on an AI team, building a B2B platform unifying internal AI microservices. Frontend in NuxtJS/NextJS, backend in NodeJS + MongoDB + Redis, designing data models and APIs. Managed a 2-person frontend team.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE Shopping — Live Commerce Module",
    summary: "Live shopping feature for LINE's referral platform",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "Node.js", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    highlights: [
      "Video auto-preview module: reusable preview mechanism with a global scheduler to resolve playback chaos during fast scrolling",
      "Memory & performance optimization: solved memory spikes from too many live streams on one page, with Vue SSR for instant above-the-fold rendering",
    ],
  },
  {
    name: "Lazy CV — An Agentic Full-Stack Product",
    summary: "AI-powered tailored resume generator",
    stack: ["AI Agent", "MCP", "Prompt Engineering", "Vibe Coding", "React", "Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "GitHub Actions"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Autonomous agent workflow: end-to-end SOP — scrape JD, analyze requirements, generate bilingual pages — with no human step in between",
      "Serverless full-stack architecture: Next.js 16 App Router + Lambda Web Adapter, Neon PostgreSQL + Drizzle ORM, GitHub Actions CI/CD",
    ],
  },
  {
    name: "FundFluent Design System (TailwindCSS UI System)",
    summary: "Cross-project TailwindCSS design system",
    stack: ["TailwindCSS", "Design Tokens", "Stencil.js", "Web Component", "Shadow DOM", "Semantic UI", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "TailwindCSS design tokens: color, type scale, spacing centralized in Tailwind config as the company's single visual source of truth",
      "Framework-agnostic component library: Stencil Web Components + Shadow DOM reusable across React and Vue, with Storybook for design collaboration",
    ],
  },
  {
    name: "AI.Book Online Photo Book Editor",
    summary: "Online photo book platform, solo full-stack delivery",
    stack: ["Vue", "NuxtJS", "OAuth", "Payment Gateway", "REST API", "PWA", "Service Worker", "IndexedDB"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Led backend API design: OAuth sign-in, cart/order flow, payment gateway — defining API contracts from the frontend perspective",
      "Editor built from scratch: custom Vue editor for photo and text editing, with PWA + Service Worker for native-app-like experience",
    ],
  },
  {
    name: "UG Overseas Growth Platform (TikTok Large-Scale Micro-Frontend)",
    summary: "TikTok ad business micro-frontend settlement platform",
    stack: ["Micro-Frontend", "Rush + PNPM Workspaces", "React 17", "TypeScript", "Arco Design", "Ferry / Thrift IDL", "Web Worker", "Comlink", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Micro-frontend architecture: Rush + PNPM managing 50+ sub-projects with independent dev/deploy, Ferry + Thrift IDL for type-safe contracts",
      "Performance optimization: Web Worker multithreaded CSV validation cut 90% UI blocking; function caching reduced 98% TBT",
    ],
  },
];

const stats: StatItem[] = [
  { label: "Years Frontend", value: 7 },
  { label: "Products Shipped", value: 18 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

const summary = [
  "I'm a frontend engineer with seven years of experience, currently working on the financial settlement system behind ad delivery at TikTok. Before that I spent three years at LINE Taiwan building LINE Shopping, and led a four-person project team along the way. Two things matter most to me: the user experience, and code that stays maintainable.",

  "My background happens to span two kinds of environment. At thousand-person companies like TikTok and LINE, I got used to rigorous code review and engineering standards, and I know how little room a financial domain leaves for a rounding error. On the other side, at startups like FundFluent and AI.Book, I planned and shipped entire projects from zero on my own — which meant wearing several hats at once, and doing a lot of the work upfront just clarifying what was actually being asked for. Between the two, I can settle into a team of almost any size quickly, and still deliver quality work when resources are thin.",
].join("\n\n");

/* ────────────────── component ────────────────── */

export default function ArtaFinanceResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019fa36b-20c8-7196-8acc-981b20700cd5/en" },
        { locale: "zh-TW", label: "中文", href: "/019fa36b-20c8-7196-8acc-981b20700cd5/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Software Engineer (TypeScript)\nApplying for Arta Finance — Full-Stack / Frontend Agentic Engineer"}
        description={summary}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan / FundFluent HK — Cross-border Fintech & Consumer Product Experience"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} projects selected for their relevance to this role — consumer-grade UI craft, agentic AI development, a TailwindCSS design system, 0-to-1 full-stack ownership, and large-scale micro-frontend architecture.`}
        projects={projects}
        highlightsLabel="Technical Highlights"
      />
    </ResumeLayout>
  );
}
