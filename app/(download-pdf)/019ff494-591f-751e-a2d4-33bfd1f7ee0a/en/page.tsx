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
  title: "John Hsieh | Senior Full-Stack Software Engineer",
  description:
    "7 years of full-stack software engineering experience with proven architecture ownership and technical leadership — applying for Senior Full-Stack Software Engineer (Vue 3, TypeScript, Node.js, AWS Serverless) at a mobility & renewable energy technology company in Singapore.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/019ff494-591f-751e-a2d4-33bfd1f7ee0a/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architected the financial settlement platform for ad delivery on the User Growth team using React 17, TypeScript, and the company's proprietary micro-frontend framework, inside a Rush monorepo spanning 50+ sub-projects and a million-line codebase",
      "Reduced UI blocking time 90% across large CSV data-entry workflows by offloading validation to a Web Worker via Comlink RPC, using Yup and Regex validation schemas",
      "Cut Total Blocking Time (TBT) 98% on a 500-form interface by building cache/cacheMany memoization utilities mimicking React's useMemo",
      "Synthesizes daily oncall feedback from advertisers and internal stakeholders into new technical development tasks, rather than only waiting for requirements to be handed down",
      "Led the team's adoption of Scrum — retrospectives, refinement sessions, and balanced sprint planning — improving PM visibility into delivery timelines and cross-team awareness",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Built and maintained LINE Shopping's full-stack service — a Vue SSR frontend and a Node.js/Express + GraphQL BFF integrating dozens of backend microservices — independently designing a reusable video auto-preview module with a global scheduler to resolve scroll-performance and memory issues",
      "Led a 4-person team through the CMS migration from PHP to a React/Next.js App Router architecture, owning technical architecture decisions, project scheduling, and cross-team resource coordination to achieve full frontend-backend separation",
      "Drove company-wide frontend engineering standards as part of JSTF, a cross-team task force, and introduced Lighthouse CI for automated performance evaluation in the CI pipeline",
      "Mentored 2 new engineers to positive feedback and led an internal Next.js teaching forum to accelerate onboarding",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Owned the online photo-book editor end-to-end as sole contractor, including backend API design covering OAuth third-party sign-in, cart/order flow, and payment gateway integration — defining the API contract, data model, and error handling from the consumer's perspective",
      "Planned the entire technical architecture using Vue + NuxtJS and shipped the product within 6 months, from zero to launch",
      "Supported PWA installation and cross-platform (web/mobile) editing for a native-app-like experience",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Planned frontend architecture and technology stack from scratch, joining at the company's pre-launch startup stage",
      "Built an SME loan platform targeting the Hong Kong market using React/Next.js, TypeScript, and TailwindCSS",
      "Designed a cross-project shared UI component library (Stencil.js Web Components, framework-agnostic) and published it to a private NPM registry",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Managed a 2-person frontend team as full-stack engineer within a newly formed AI team",
      "Developed a B2B management platform integrating internal AI microservices, using NuxtJS/NextJS, TypeScript, Node.js/Express, MongoDB, and Redis",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
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
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe SQL data modelling",
      "TailwindCSS 4 + Framer Motion for responsive design with smooth animations",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE affiliate shopping service where users earn LINE Points through partner merchants. Full-stack project with a Vue SSR frontend and a Node.js/Express + GraphQL BFF integrating dozens of backend microservices.",
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
      "An online photo book editor supporting drag-and-drop, resizing, and text editing with cross-platform PWA support. Built from scratch to launch in just 6 months, including full backend API ownership.",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    company: "AI.Book",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Built a custom editor with pure Vue, supporting add/remove photos, text input, and font style/size editing",
      "Editor supports both web and mobile editing",
      "Led backend API design covering OAuth third-party sign-in, cart/order flow, and payment gateway integration, defining API contract, data models, and error handling from the consumer's perspective",
    ],
    contributions: [
      "Built entirely from scratch as sole developer — frontend architecture, editor core, and backend API design, delivering the full slice end-to-end",
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
      "Internationalization with runtime-fetched translations via an internally developed online translation platform",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread using Comlink for RPC-like communication, with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching utilities for rendering optimization: created cache/cacheMany tools mimicking React useMemo to cache computation results — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js) for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
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
  { label: "Years Full-Stack Exp.", value: 7 },
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
        { locale: "en", label: "EN", href: "/019ff494-591f-751e-a2d4-33bfd1f7ee0a/en" },
        { locale: "zh-TW", label: "中文", href: "/019ff494-591f-751e-a2d4-33bfd1f7ee0a/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Senior Full-Stack Software Engineer - Mobility & Renewable Energy Tech Company"}
        description={`7 years of full-stack software engineering experience, currently Senior Software Engineer at TikTok Singapore, applying for a Senior Full-Stack Software Engineer role spanning Vue 3, TypeScript, Node.js, and AWS serverless infrastructure. Proven architecture ownership and technical leadership: led a 4-person team through a PHP-to-Next.js CMS migration achieving full frontend-backend separation, drove company-wide frontend engineering standards through LINE Taiwan's JavaScript Task Force, and mentored 2 engineers to positive feedback. Core stack includes Vue (Vue SSR, NuxtJS) and Node.js/Express on the backend, with hands-on REST/GraphQL API design, including OAuth authentication, payment gateway integration, and full API contract ownership on AI.Book's photo-book editor. Cloud experience covers AWS Lambda, S3, CloudFront, and ECR for serverless deployment, plus Neon Serverless PostgreSQL with Drizzle ORM for type-safe SQL data modelling.

Reduced UI blocking time 90% and Total Blocking Time 98% through Web Worker offloading and custom memoization utilities on a 50+ sub-project monorepo at TikTok. Deeply integrates AI-assisted development, GitHub Copilot Agent Mode and MCP, into daily engineering workflow to accelerate delivery. Experience spans large enterprises (TikTok, LINE) and early-stage startups (AI.Book, FundFluent) where technical architecture and stack decisions were owned end-to-end. Automated testing background with Jest and Cypress, CI/CD via GitHub Actions and Docker.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Full-Stack Architecture & Technical Leadership"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing full-stack ownership, serverless architecture, and technical leadership.`}
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
