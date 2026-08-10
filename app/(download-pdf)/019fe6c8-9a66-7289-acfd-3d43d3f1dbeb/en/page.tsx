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
  title: "John Hsieh | Software Engineer, Payments @ Stripe",
  description:
    "7 years of full-stack engineering experience with hands-on fintech/payments work — SME lending platforms, payment gateway integration, and ads financial settlement — applying for Software Engineer, Payments at Stripe.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/019fe6c8-9a66-7289-acfd-3d43d3f1dbeb/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Own the financial settlement platform for ad delivery on the User Growth team, solving JavaScript floating-point precision issues for pricing/financial calculations inside a Rush monorepo spanning 50+ sub-projects and a million-line codebase (React 17, TypeScript)",
      "Reduced UI blocking time 90% across large data-entry workflows by offloading CSV validation to a Web Worker + Comlink RPC pipeline with Yup/Regex schemas, then abstracted it into shared internal tooling beyond its original use case",
      "Built cache/cacheMany memoization utilities mimicking React's useMemo, cutting Total Blocking Time 98% on a 500-form interface, upholding engineering standards for a high-throughput financial workflow",
      "Led the team's adoption of Scrum, coordinating across engineering and PM stakeholders — retrospectives, refinement sessions, and balanced sprint planning — to give cross-functional visibility into delivery timelines",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Operated inside a 60-person Agile team where 'every line is reviewed before merge' was the operating norm, independently building a reusable video auto-preview module for LINE Shopping (Vue SSR, GraphQL, TypeScript, ExpressJS)",
      "Led a 4-person team through the CMS migration from PHP to Next.js App Router, coordinating with backend and adjacent teams end-to-end to achieve full frontend-backend separation",
      "Contributed to JSTF, a cross-team initiative spanning multiple product teams to set company-wide frontend engineering standards, and introduced Lighthouse CI to automate code-quality and performance gating",
      "Mentored 2 new engineers to positive feedback and led an internal Next.js teaching forum to accelerate onboarding",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Owned the online photo-book editor end-to-end as sole contractor — including backend API design covering OAuth third-party sign-in, cart/order flow, and payment gateway integration — defining the API contract, data model, and error handling from the consumer's perspective independently, shipping within 6 months",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Built an SME lending platform for the Hong Kong market at FundFluent, a fintech company connecting SMEs with funding opportunities through a digital marketplace, using React/Next.js and TypeScript",
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
    name: "FundFluent SME Portal",
    summary:
      "An integrated loan platform for Hong Kong SMEs. Provides bank and government loan information, one-stop applications for multiple loans, and uses OCR to organize and categorize documents, reducing redundant submission costs.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "Built entirely from scratch as sole developer for a live fintech lending product",
    ],
  },
  {
    name: "FundFluent Partner Portal",
    summary:
      "A management platform for lenders such as banks — used to list and manage loan products and review SME loan applications end to end.",
    stack: ["React", "NextJS", "TypeScript", "Semantic UI"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    url: "https://partner.fundfluent.io",
    contributions: [
      "Built entirely from scratch as sole developer, working directly across the lender-facing side of the lending product",
    ],
  },
  {
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor supporting drag-and-drop, resizing, and text editing with cross-platform PWA support, backed by a payment-gateway-integrated checkout flow designed end to end. Built from scratch to launch in just 6 months.",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    company: "AI.Book",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Led backend API design covering OAuth third-party sign-in, cart/order flow, and payment gateway integration, defining the API contract and error handling from the consumer's perspective",
      "Built a custom editor with pure Vue, supporting add/remove photos, text input, and font style/size editing across web and mobile",
    ],
    contributions: [
      "Built entirely from scratch as sole developer, owning the full slice from checkout UX to backend payment API contract",
    ],
  },
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
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread using Comlink for RPC-like communication — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching utilities for rendering optimization: cache/cacheMany tools mimicking React useMemo — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox browser extension that makes the web version of Bilibili load smoother for users in Taiwan and Singapore, dynamically rewriting the video CDN host to the fastest regional node with automatic fallback and continuous reliability monitoring. Solely designed, built, published, and maintained end-to-end.",
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
      "Forum-driven iteration: actively monitored user feedback across Bilibili community forums, synthesizing recurring pain points into the feature roadmap and fix priorities",
      "Automatic fallback & fault tolerance: continuously monitors segment request status and playback stalls, silently switching to Bilibili's native backup node before ever prompting the user",
      "Vibe Coding in a single weekend: architecture, implementation, and store listing assets entirely designed, built, and published through AI-assisted collaboration",
      "Real-time per-node speed test tool: benchmarks each CDN node's download speed against the actual current video/quality segment, without affecting the CDN currently in use",
    ],
    contributions: [
      "Within 10 days of launch, Weekly Active Users surpassed 1,000, with **14 five-star reviews and zero reviews below five stars**, 100% organic traffic",
      "Open-sourced the entire codebase: https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator combining an end-to-end AI Agent pipeline with Next.js 16, working across multiple systems and technologies — job-posting scraping, database, serverless compute, and CDN — to go from a URL to a finished resume automatically.",
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
      "Serverless deployment on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD — spanning build, compute, storage, and delivery systems end to end",
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe database access",
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
  { label: "Years Software Eng. Exp.", value: 7 },
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

export default function StripePaymentsResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019fe6c8-9a66-7289-acfd-3d43d3f1dbeb/en" },
        { locale: "zh-TW", label: "中文", href: "/019fe6c8-9a66-7289-acfd-3d43d3f1dbeb/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Software Engineer, Payments - Stripe"}
        description={`7 years of full-stack engineering experience, most recently at TikTok, previously LINE Taiwan. Sole engineer on two contract engagements — AI.Book and FundFluent — where specs were never fully defined and ownership lines weren't drawn: independently scoped requirements and drove next steps alone, shipping each product end to end, reviewed only at delivery milestones. Financial-domain experience throughout: payment API design at AI.Book, lending platforms at FundFluent, and currently the financial settlement platform at TikTok.

Held high code-quality standards inside LINE Taiwan's 60-person Agile team — "every line is reviewed before merge" — contributing to JSTF's company-wide frontend standards, introducing Lighthouse CI, and mentoring new engineers. Energized by solving real problems for real users: synthesizes daily oncall feedback from advertisers into new technical development tasks at TikTok, and independently monitors Bilibili community forums for TWSG, a personal Chrome extension, translating recurring pain points into the roadmap — within 10 days of launch, weekly active users surpassed 1,000, with 14 five-star reviews and zero negative.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Fintech & Payments-Adjacent Engineering"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing fintech product delivery, payment/API integration, and multi-system engineering.`}
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
