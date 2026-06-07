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
  title: "John Hsieh | Senior Software Engineer, Web (Full Stack) — BitMEX",
  description:
    "7 years of frontend & full-stack engineering experience at TikTok Singapore and LINE Taiwan. Expert in React, TypeScript, NodeJS, and high-performance real-time web applications. Tailored for BitMEX Senior Software Engineer, Web (Full Stack).",
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
    role: "Software Engineer",
    period: "2024.11 - Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Part of the User Growth team, developing financial settlement systems for ad delivery using React, Monorepo, and internal microservices framework.",
      "Built complex form components with JSON Schema–driven dynamic rendering, handling cascading selects, conditional fields, and high-precision numeric computation for financial data.",
      "Led the team in adopting Scrum — introduced retrospectives for continuous improvement, refinement sessions to eliminate siloed work, and balanced workload distribution.",
      "Integrated Web Worker multi-threading (via Comlink) for CSV validation, reducing UI blocking time by 90% across 10 data entries.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping (buy.line.me) daily with Vue SSR + GraphQL + TypeScript + ExpressJS in a 60-person engineering team.",
      "Served as Team Leader for 4-person team, led CMS migration from PHP to Next.js App Router architecture.",
      "Introduced Lighthouse CI to the JavaScript Task Force for automated performance monitoring in every PR.",
      "Mentored 2 junior engineers; led internal Next.js teaching forum for onboarding new members.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Sole developer for the online photo book editor — built from scratch with Vue + NuxtJS, shipped to production in 6 months.",
      "Built a custom drag-and-drop editor engine supporting photo placement, text styling, and responsive layouts.",
      "Supported PWA installation for a native app-like offline editing experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at the startup stage and independently designed the frontend architecture and tech selection for a fintech platform.",
      "Built an SME loan platform for Hong Kong market using React / Next.js + TypeScript + TailwindCSS from scratch.",
      "Designed a cross-project shared UI component library using Stencil.js Web Components, published to private NPM.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Developed a B2B management platform integrating internal AI microservices.",
      "Tech stack: NuxtJS / NextJS + TypeScript + Node.js + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG Overseas Platform (TikTok)",
    summary:
      "Large-scale enterprise Monorepo frontend serving TikTok's overseas user growth business line — covering financial settlement, media asset management, supplier procurement, and data dashboards. 50+ sub-projects, million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Thrift IDL"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Built complex JSON Schema–driven dynamic form components: cascading selects, dynamic fields, conditional rendering",
      "Implemented high-precision floating-point calculation for financial and pricing scenarios",
      "Micro-frontend integration via proprietary framework: dynamic sub-app loading with independent deployment",
      "Type-safe API communication via Ferry + Thrift IDL code generation",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation with Comlink (RPC-like) + Yup/Regex schemas — reduced UI blocking time by 90% across 10 data entries",
      "Function caching utilities (cache/cacheMany) mimicking React useMemo — reduced Total Blocking Time (TBT) by 98% on a 500-form interface without pagination",
    ],
  },
  {
    name: "LINE Shopping Platform",
    summary:
      "LINE's e-commerce platform (buy.line.me) — allows users to earn LINE Points by shopping through linked partner stores. Built with Vue SSR + GraphQL + TypeScript + ExpressJS in a 60-person engineering team.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Built 'Live Shopping' feature: designed a reusable auto-preview video module inspired by YouTube's preview mechanism — solved chaotic previews during fast scrolling and memory spikes from multiple live streams on one page via a global scheduler",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — scrapes JD via Chrome DevTools MCP, generates tailored bilingual resumes with UUID-based routing. Entire project shipped from zero to production in 2 days via Vibe Coding.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output for lightweight Docker packaging",
      "AI Agent automated SOP: Chrome DevTools MCP + structured copilot-instructions for end-to-end resume generation",
      "Serverless on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "An integrated loan platform for Hong Kong SMEs. Provides bank and government loan information, one-stop application flow, and uses OCR technology to help businesses manage documents and reduce redundant submissions across multiple applications.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "Built entirely from scratch as sole developer — full frontend architecture, component design, and delivery",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "Internally-led cross-project shared UI component platform published to private NPM. Built with Stencil.js Web Components for framework-agnostic usage, integrating TailwindCSS + Semantic UI as the design system foundation with Storybook for documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI components built with Stencil as Web Components — usable in React, Vue, or vanilla JS",
      "Design system with Tailwind + Semantic UI; components showcased via Storybook",
      "Monorepo separating component library and business code for independent publishing and testing",
    ],
    contributions: [
      "Built entirely from scratch as sole developer",
    ],
  },
  {
    name: "CMS Refactoring to Next.js (Team Leader)",
    summary:
      "Led a 4-person team to migrate the LINE Shopping CMS from PHP to React & Next.js App Router architecture — one of the earliest Next.js App Router adoptions at LINE Taiwan. Handled architecture planning, task assignment, technical documentation, and stakeholder communication.",
    stack: ["React", "Next.js", "App Router", "TypeScript", "PHP"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "Used iframe-based micro-service architecture for independent deployment — progressive URL-based migration from legacy to new system",
      "One of the earliest Next.js App Router adoptions within LINE Taiwan",
    ],
    contributions: [
      "Served as both architect and PM: planned entire project, assigned tasks, wrote technical documentation, and communicated with end users",
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
  { label: "Years Frontend Exp", value: 7 },
  { label: "Full Products Built", value: 18 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "Soochow University", degree: "Bachelor of Arts — Japanese Language & Literature", period: "2013 - 2017" },
  { institution: "Doshisha University (Kyoto)", degree: "Exchange Student — Japanese Language & Culture", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "JLPT N1 (Japanese Language Proficiency)", description: "Highest level — Business-level Japanese", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "NTU Extension Department", description: "Web Development Technical Courses" },
];

const languages: LanguageItem[] = [
  { name: "Chinese — Native", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "Japanese — Business Level (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "English — Fluent Professional Communication", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function BitMEXResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019ea1b2-344d-762a-8838-a9965c4cb523/en" },
        { locale: "zh-TW", label: "中文", href: "/019ea1b2-344d-762a-8838-a9965c4cb523/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Senior Software Engineer, Web (Full Stack)"
        description={`With 7 years of frontend engineering experience at TikTok Singapore and LINE Taiwan, I bring deep expertise in React, TypeScript, and JavaScript performance — precisely the skill set BitMEX needs for building a world-class real-time trading terminal.\n\nI have a proven track record of tackling JavaScript performance at the engine level: I've resolved UI blocking through Web Worker multi-threading (reducing blocking time by 90%) and function caching techniques that cut Total Blocking Time by 98% on a 500-form interface. I understand how JIT compilers affect runtime behavior and design accordingly.\n\nOn the full-stack side, I've built and maintained NodeJS backend APIs alongside React frontends across multiple products — including a fintech loan platform (FundFluent) and a financial settlement system at TikTok. This direct experience with data-heavy financial interfaces translates directly to building BitMEX's trading terminal and backend services.\n\nBeyond individual contribution, I've mentored junior engineers, led a 4-person team as Tech Lead, and helped establish company-wide frontend development standards at LINE Taiwan — making me a contributor to both code quality and team growth.\n\nI can contribute to BitMEX by engineering high-performance React components for real-time trading data, building robust TypeScript API layers between the frontend and backend, and applying deep JS runtime knowledge to keep the platform responsive under intensive market data loads. Choosing me over other candidates means getting an engineer who not only writes clean React, but also understands why it performs the way it does — and knows how to fix it when it doesn't.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border product engineering experience"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Featured Projects"
        description={`${projects.length} representative projects showcasing product impact and technical depth.`}
        projects={projects}
        highlightsLabel="Technical Highlights"
        contributionsLabel="Key Contributions"
      />

      <TechStackVisualization title="Tech Stack Visualization" description="Core technologies and their relationships across my skill domains.">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <AIBeam />
        <FrontendJSBeam />
        <CSSBeam />
        <PWABeam />
        <WebComponentBeam />
        <BackendBeam />
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
