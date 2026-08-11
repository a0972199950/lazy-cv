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
  title: "John Hsieh | Full Stack Software Engineer I @ Booking.com",
  description:
    "7 years of frontend and full-stack engineering experience with Node.js/React/Vue, independent end-to-end product ownership, and mentoring track record — applying for Full Stack Software Engineer I at Booking.com for Business.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/019fef14-28b6-712d-bf6e-f79342a40967/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architect the financial settlement platform for ad delivery on the User Growth team using React 17 and TypeScript, inside a Rush monorepo spanning 50+ sub-projects and a million-line codebase, impacting a large base of advertisers",
      "Synthesizes daily oncall feedback from advertisers and internal stakeholders into new technical development tasks, rather than only waiting for requirements to be handed down",
      "Reduced UI blocking time 90% across large data-entry workflows by offloading CSV validation to a Web Worker + Comlink RPC pipeline, later abstracted into shared internal tooling",
      "Built cache/cacheMany memoization utilities mimicking React's useMemo, cutting Total Blocking Time 98% on a 500-form UI",
      "Led the team's adoption of Scrum — retrospectives, refinement sessions, and balanced sprint planning — giving PM and engineering clear cross-functional visibility into delivery timelines",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Operated inside a 60-person Agile team where 'every line is reviewed before merge' was the operating norm, independently building a reusable video auto-preview module for LINE Shopping (Vue SSR, GraphQL, TypeScript, ExpressJS)",
      "Led a 4-person team through the CMS migration from PHP to React/Next.js App Router, coordinating end-to-end with backend and adjacent teams to achieve full frontend-backend separation",
      "Mentored 2 new engineers to positive feedback and led an internal Next.js teaching forum, taking a significant role in onboarding new team members",
      "Contributed to JSTF, a cross-team initiative setting company-wide frontend engineering standards, and introduced Lighthouse CI for automated performance gating",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Owned the online photo-book editor end-to-end as sole contractor, working independently and making technical decisions alone — including backend API design covering OAuth third-party sign-in, cart/order flow, and payment gateway integration",
      "Defined the API contract, data model, and error handling from the consumer's perspective, shipping the full product within 6 months",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at the company's early startup stage and independently planned the frontend architecture and technology stack from scratch, building an SME lending platform for the Hong Kong market with React/Next.js and TypeScript",
      "Designed and published a cross-project shared UI component library (Stencil.js Web Components) to private NPM, using a monorepo so the library could be versioned and released independently of business code",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Managed a 2-person frontend team as full-stack engineer within a newly formed AI team, designing and maintaining web application APIs and services (Node.js/Express, MongoDB, Redis) that integrated PDF processing libraries",
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
      "An unofficial Chrome / Edge / Firefox browser extension that makes the web version of Bilibili load smoother for users in Taiwan and Singapore, dynamically rewriting the video CDN host to the fastest regional node with automatic fallback. Solely designed, built, published, and maintained end-to-end — including making all technical decisions independently.",
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
      "Automatic fallback & fault tolerance: monitors segment request status and playback stalls, silently switching to Bilibili's native backup node before ever prompting the user",
      "Reproducible builds: pure Node.js scripts (jszip + sharp + puppeteer) package the same source into byte-for-byte identical Chrome/Edge/Firefox zips",
    ],
    contributions: [
      "Vibe Coding in a single weekend — architecture, implementation, and store listing assets designed, built, and published solo",
      "10 days after launch: WAU surpassed 1,000 (**near-100% retention**), and **14 five-star reviews with zero below five stars** — 100% organic traffic, impacting a large user base",
      "GitHub: https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "A LINE affiliate shopping service where users earn LINE Points through partner merchants. A full-stack project with a Vue SSR frontend and a BFF (Node.js + GraphQL) integrating dozens of backend microservices, serving a large customer base.",
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
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth business, covering media asset management, financial settlement, supplier procurement, and data dashboards across 50+ sub-projects with a million-line codebase, impacting a large base of internal and advertiser users.",
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
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor supporting drag-and-drop, resizing, and text editing with cross-platform PWA support, backed by a payment-gateway-integrated checkout flow designed end to end as sole engineer. Built from scratch to launch in just 6 months.",
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
      "Built entirely from scratch as sole developer, owning the full slice from checkout UX to backend payment API contract, making independent technical decisions throughout",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "An integrated loan platform for Hong Kong SMEs. Provides bank and government loan information, one-stop applications for multiple loans, and uses OCR to organize and categorize documents, reducing redundant submission costs.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "Built entirely from scratch as sole developer for a live fintech lending product impacting a growing SME customer base",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI-powered customized resume generator. Combines AI Agent automation with Next.js 16 full-stack app — just provide a job posting URL to automatically scrape JD and generate tailored bilingual resume web pages, backed by a Neon PostgreSQL database. Built from scratch to production in just 2 days.",
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
      "Neon Serverless PostgreSQL + Drizzle ORM for type-safe relational database access",
      "Serverless deployment on AWS: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
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

export default function BookingComFullStackResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019fef14-28b6-712d-bf6e-f79342a40967/en" },
        { locale: "zh-TW", label: "中文", href: "/019fef14-28b6-712d-bf6e-f79342a40967/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Software Engineer - TikTok\nApply for Full Stack Software Engineer I - Booking.com"}
        description={`7 years of frontend and full-stack engineering experience, currently at TikTok Singapore, previously LINE Taiwan, applying for Full Stack Software Engineer I at Booking.com for Business. Core stack directly matches the role's Node.js/React/Vue/HTML/CSS requirements, with relational database experience via PostgreSQL and backend API design (Express/Node.js) from FoxitSoftware and AI.Book. Sole engineer on two contract engagements — AI.Book and FundFluent — where ownership lines were not drawn: independently scoped requirements and made technical decisions alone, shipping each product end to end. Currently architects the financial settlement platform for ad delivery at TikTok inside a 50+ sub-project, million-line React/TypeScript monorepo impacting a large advertiser base, solving JavaScript floating-point precision issues and cutting Total Blocking Time 98% via custom performance tooling.

Onboarding and mentorship track record: mentored 2 new engineers at LINE Taiwan and led an internal Next.js teaching forum to accelerate ramp-up, inside a 60-person Agile team built on rigorous peer code review. Led a 4-person team through a PHP-to-Next.js migration, coordinating end-to-end with backend and adjacent teams. Comfortable working as an intermediary between technical and non-technical stakeholders — synthesizes daily oncall feedback from advertisers into new development tasks rather than waiting for requirements to be handed down. Fluent in English, Japanese, and Mandarin.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Full-Stack Engineering, Independent Ownership"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing full-stack (Node.js/React/Vue) delivery, independent product ownership, and scale.`}
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
