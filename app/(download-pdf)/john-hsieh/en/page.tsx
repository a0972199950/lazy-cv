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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../skill-beam";

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
    period: "2024.11 - Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Part of the User Growth team, responsible for running advertisements for company products across major DSP platforms to increase the user base for apps such as TikTok.",
      "Responsible for developing the financial settlement systems for ad delivery, using React, monorepo, and the company's proprietary framework to build a frontend microservices system.",
      "Led the development team in adopting Scrum — leveraged retrospectives for self-correcting mechanisms, refinement sessions to break down siloed work, balanced workloads, and improved PM visibility into project schedules.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping daily with Vue SSR + GraphQL + TypeScript + ExpressJS.",
      "Served as Team Leader of a 4-person team, led CMS migration from PHP to NextJS App Router architecture.",
      "Participated in JSTF to establish company-wide frontend development standards; introduced Lighthouse CI for automated performance evaluation.",
      "Mentored 2 new engineers with positive feedback. Led an internal NextJS teaching forum to help onboard new members.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely responsible for building an online photo book editor with drag-and-drop, resizing, and text editing features.",
      "Planned the entire technical architecture from scratch using Vue + NuxtJS; launched the product within 6 months.",
      "Supported PWA installation for a native-app-like experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at the startup stage and planned frontend architecture and tech stack from scratch.",
      "Built an SME loan platform targeting the Hong Kong market using React / NextJS + TypeScript + TailwindCSS.",
      "Designed a cross-project shared UI component library (Stencil.js Web Component), deployed to private NPM.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Served as a full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Developed a B2B management platform integrating internal AI microservices.",
      "Tech stack included NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
    ],
  },
  {
    company: "Aotter",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "Project-based team with ~4 members per project, rapidly iterating products.",
      "Used Nuxt ecosystem + TypeScript + TailwindCSS with Docker + K8s CI/CD pipeline.",
      "Developed SuprLink URL shortener, Aotter Trek DSP ad platform, and other internal/external projects.",
      "Focused on UI/UX design fidelity, building custom TailwindCSS micro UI frameworks per project.",
    ],
  },
  {
    company: "Third Dimension Technology",
    role: "Frontend Engineer",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "Developed with Vue + PHP in a decoupled frontend-backend architecture.",
      "Integrated WeChat Pay payment system.",
    ],
  },
  {
    company: "YouBridge (Japanese Company)",
    role: "Digital Ad Optimizer & Frontend Engineer",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "Initially worked as a digital ad optimizer, managing Facebook / Google Ads with A/B testing and heatmaps to optimize UX.",
      "Later transitioned to frontend engineer & PM, building official websites and campaign pages for agency products.",
      "Managed a 2-person frontend team with Japanese as the primary working language.",
      "Built UI/UX expertise that laid the foundation for a frontend development career.",
    ],
  },
  {
    company: "AsiaYo",
    role: "Japan Market Operations & Business Development",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "Sourced Japanese accommodation properties and listed them on the company platform.",
      "Served as the Japanese translation liaison, assisting customers with travel emergencies in Japan.",
      "Achieved 8,846 bookings in 2017, a 376% year-over-year increase.",
    ],
  },
];

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
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
      "TailwindCSS 4 + Framer Motion for responsive design with smooth animations",
    ],
  },
  {
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth business, covering media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
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
    image:
      "https://cdn.lazy-cv.com/a14d9a80-45b9-4943-a043-49dacb460bb9.png",
    url: "https://supr.link",
  },
  {
    name: "Aotter Trek DSP Platform",
    summary:
      "A big-data-driven DSP (Demand-Side Platform) for ad placement, featuring rich chart interfaces to help users identify optimal advertising audiences.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    image:
      "https://cdn.lazy-cv.com/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
  },
  {
    name: "JavaScript Task Force",
    summary:
      "A cross-team initiative at LINE Taiwan responsible for establishing company-wide frontend development standards. Research and adoption of SonarQube, Lighthouse CI, OpenTel frontend monitoring, and React project template generators.",
    stack: ["SonarQube", "Lighthouse CI", "OpenTel", "React"],
    image:
      "https://cdn.lazy-cv.com/jstf.png",
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "An integrated loan platform for Hong Kong SMEs, providing bank and government loan information with one-stop applications, using OCR to streamline document management and reduce redundant submissions.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
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
    image:
      "https://cdn.lazy-cv.com/7b907335-af65-43cc-9ea2-b9ae4d2c80f0.png",
  },
  {
    name: "III City Dashboard",
    summary:
      "A government data dashboard aggregating scattered public data into a single platform, featuring highly customizable charts and data filtering modules.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "TailwindCSS"],
    image:
      "https://cdn.lazy-cv.com/0a002690-85c9-4bcf-bb72-9cebf81788ae.png",
  },
  {
    name: "beanfun! Data Management Center",
    summary:
      "A centralized data dashboard with various charts displaying company-wide KPIs and internal metrics.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    image:
      "https://cdn.lazy-cv.com/de995dc8-088c-430b-ba29-33fd2b364ced.png",
  },
  {
    name: "Shushu Comics",
    summary:
      "An online comics platform built with Vue + PHP in a decoupled architecture, integrated with WeChat Pay for payments.",
    stack: ["Vue", "PHP", "WeChat Pay"],
    image:
      "https://cdn.lazy-cv.com/f0b11a8f-47c9-4587-9188-e6c93256baa7.png",
  },
  {
    name: "Chorasu Official Website",
    summary:
      "The Taiwan official website for Chorasu, an Okinawa-based skincare brand. Responsible for design planning and frontend development.",
    stack: ["PHP", "jQuery", "CSS"],
    image:
      "https://cdn.lazy-cv.com/b2a0eaa9-55f5-4482-bd20-c4c574b5d7d7.png",
  },
  {
    name: "Hair Life",
    summary:
      "A content-driven media website focused on hair care and beauty products.",
    stack: ["WordPress", "PHP", "CSS"],
    image:
      "https://cdn.lazy-cv.com/2b1c2e88-9b0e-4bf8-98ee-f955391ba10f.png",
  },
  {
    name: "Japan Select",
    summary:
      "A Japanese product review blog specializing in sponsored content.",
    stack: ["WordPress", "PHP", "CSS"],
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
    keywords: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "Jest", "Cypress", "Firebase", "Storybook", "Webpack"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Web Component", "StencilJS", "PWA", "Socket.io", "i18n", "Git", "REST API", "SEO", "Lighthouse", "Renovate"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
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
        description="7 years of frontend development experience, previously at TikTok Singapore and LINE Taiwan as a senior software engineer. Core tech stack includes React (NextJS), Vue (NuxtJS), and TypeScript. My core value is 'User Experience First' — my mission is not just to build a product, but to create software that is 'user-friendly' and 'beautiful.' Capable of building products from scratch in resource-limited environments, as well as delivering high-quality code in large enterprise settings. Fluent in English, Japanese, and Mandarin Chinese. Well-versed in Agile development and sustainable team delivery models, skilled at collaborating with others and communicating with non-technical stakeholders. Excel at explaining complex problems in simple terms."
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
