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
  title: "John Hsieh | Senior Software Engineer — Google Wallet",
  description:
    "7 years of software engineering experience with expertise in full-stack development, large-scale systems, and payments/fintech. Previously at TikTok Singapore and LINE Taiwan.",
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
      "Part of the User Growth team, responsible for running advertisements across major DSP platforms to increase the user base for TikTok and related apps.",
      "Developing the financial settlement systems for ad delivery — using React, monorepo architecture, and the company's proprietary micro-frontend framework for scalable frontend microservices.",
      "Led the development team in adopting Scrum: introduced retrospectives for self-correcting mechanisms, refinement sessions to break down siloed work, balanced workloads, and improved PM visibility into schedules.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Core developer on LINE Shopping — a user-facing e-commerce platform serving millions of users, built with Vue SSR + GraphQL + TypeScript + ExpressJS.",
      "Served as Team Leader of a 4-person team, leading the CMS migration from PHP to NextJS App Router — one of the early adopters of this architecture within LINE Taiwan.",
      "Participated in the JavaScript Task Force to establish company-wide frontend development standards; introduced Lighthouse CI for automated performance evaluation.",
      "Mentored 2 new engineers with positive feedback. Led an internal NextJS teaching forum to onboard new members.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely built an online photo book editor from scratch with Vue + NuxtJS — supporting drag-and-drop, resizing, text editing, and both web and mobile editing.",
      "Launched the product within 6 months with PWA support for native-app-like experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at the startup stage, planned frontend architecture from scratch for a fintech digital lending platform targeting Hong Kong SMEs.",
      "Built with React / NextJS + TypeScript + TailwindCSS; designed a cross-project UI component library (Stencil.js Web Components) and deployed to private NPM.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Developed a B2B management platform integrating internal AI microservices with NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
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
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy computation to a separate thread using Comlink for RPC-like communication — **reduced UI blocking time by 90%**",
      "Function caching utilities mimicking React useMemo to cache computation results — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE e-commerce platform serving millions of users — enabling online shopping with LINE Points rewards and third-party merchant integrations.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently developed the 'Live Shopping' feature — designed a **reusable video auto-preview module** with a global scheduler that **resolved chaotic previews during high-speed scrolling** and **memory spikes from too many live streams**",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 — provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages. Built from scratch to production in just 2 days via Vibe Coding.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "AI Agent automated SOP via Chrome DevTools MCP for end-to-end resume generation pipeline",
      "Serverless deployment on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
    ],
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led the migration of LINE Shopping CMS from PHP to React & NextJS App Router, managing a 4-person team. One of the early projects within LINE Taiwan to adopt the NextJS App Router.",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "Used iframe for micro-service integration, enabling independent deployment with progressive URL-based migration",
      "One of the early projects to adopt Next APP router within the company",
    ],
    contributions: [
      "Served as architect planning the entire project while acting as PM — assigning tasks, writing technical docs, and communicating with users",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "An integrated fintech loan platform for Hong Kong SMEs. Provides bank and government loan information with one-stop applications, using OCR technology to streamline document management.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image:
      "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "Built entirely from scratch as sole developer — end-to-end ownership from architecture to deployment",
    ],
  },
  {
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor supporting drag-and-drop, resizing, and text editing with cross-platform mobile support and PWA. Built from scratch to launch in 6 months.",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Custom editor built with pure Vue — supports photos, text input, and font styling on both web and mobile",
      "PWA installation for a native app-like experience",
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
  {
    keywords: ["Axios", "ECharts", "D3.js", "Framer Motion", "Drizzle ORM", "Rush Monorepo", "Arco Design", "Web Worker", "React Hook Form", "Yup"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "Years Software Eng.", value: 7 },
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

export default function GoogleResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019d0140-b102-76ee-b6ac-2352a38355e5/en" },
        { locale: "zh-TW", label: "中文", href: "/019d0140-b102-76ee-b6ac-2352a38355e5/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Senior Software Engineer"
        description={`Google Wallet's goal of making digital payments and identity credentials safer and more seamless is closely aligned with the work I've been doing for the past few years.

I'm currently at TikTok Singapore, building financial settlement systems for User Growth — dealing with high-precision numerical computation, complex reconciliation workflows, and engineering governance across a million-line monorepo. Before that, I spent 3+ years at LINE Taiwan, where I led a 4-person team on LINE Shopping (an e-commerce platform serving millions) and drove the CMS migration from PHP to NextJS App Router.

A few reasons I think I'm a strong fit for this role:
• I've shipped real financial payment systems — TikTok's settlement platform and FundFluent's digital lending product. These aren't theoretical; I've dealt with the edge cases firsthand.
• I've built server-side APIs, mobile-responsive applications, and PWA architectures from the ground up.
• Beyond individual contributions, I helped establish company-wide frontend engineering standards through LINE's JavaScript Task Force — so I care about raising the bar for the whole team, not just my own code.

What I'd bring to Google Wallet: end-to-end product delivery from design to production, experience leading cross-functional teams through multi-quarter initiatives, and a consistent high bar for user experience, accessibility, and internationalization.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border Product Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} projects most relevant to Google Wallet, showcasing full-stack, payments/fintech, and large-scale system experience.`}
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
