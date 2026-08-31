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
  title: "John Hsieh | Software Engineer III, Google Pay and Wallet",
  description:
    "Full-stack engineer with 7 years in JavaScript/TypeScript. Large-scale application design and architecture on LINE Shopping, ad-delivery financial settlement at TikTok, and a self-shipped browser extension with 1,000 installs in 10 days.",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a057e8-a117-7155-83a9-b5d3259a405e/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architected the financial settlement platform for ad delivery within a 50+ sub-project, million-line-codebase monorepo, using React 17, TypeScript, Rush Monorepo, and the company's proprietary micro-frontend framework",
      "Scoped and drove new development tasks by synthesizing recurring patterns across issues and feature requests raised daily by advertisers and internal stakeholders through on-call channels",
      "Reduced UI blocking time by 90% across 10 data-entry workflows by offloading CSV validation to a Web Worker via Comlink RPC, using Yup and Regex validation schemas",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed and maintained LINE Shopping, LINE's e-commerce affiliate platform, across a full stack of Vue SSR, GraphQL, TypeScript, ExpressJS, and Redis in a 60-developer team where every line is reviewed before merging",
      "Led a 4-person team through the CMS migration from PHP to a NextJS App Router architecture, achieving full frontend-backend separation",
      "Contributed to JSTF, a cross-team initiative establishing company-wide frontend development standards, and introduced Lighthouse CI for automated performance evaluation in every PR",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Led backend API design covering AWS Cognito OAuth2 sign-in, the cart and order flow, and payment result integration, defining API contracts, data models, and error handling from the consumer side",
      "Built an online photo book editor from scratch as sole developer and launched it within 6 months, owning tech selection, frontend architecture, editor core, and backend API design end to end",
      "Implemented drag-and-drop layout, resizing, and text editing on Vue + NuxtJS, supporting both desktop and mobile browsers",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Built an SME digital lending platform for the Hong Kong market using React / NextJS, TypeScript, and TailwindCSS, covering both the borrower portal and the lender-facing partner portal",
      "Planned frontend architecture and technology stack from scratch, joining at the company's startup stage",
      "Designed a cross-project shared UI component library on Stencil.js Web Components, published to a private NPM registry and consumed independently by both portals",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [],
  },
  {
    company: "Aotter",
    role: "Frontend Engineer",
    period: "Aug 2019 – Nov 2020",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [],
  },
  {
    company: "Third Dimension Technology",
    role: "Frontend Engineer",
    period: "Apr 2019 – Jun 2019",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [],
  },
  {
    company: "Asian Bridge (Japanese Company)",
    role: "Digital Ad Optimizer & Frontend Engineer",
    period: "Dec 2017 – Mar 2019",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [],
  },
  {
    company: "AsiaYo",
    role: "Japan Market Operations & Business Development",
    period: "Sep 2016 – Sep 2017",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "LINE Shopping",
    summary:
      "LINE's e-commerce affiliate platform, where users earn LINE Points through partner merchants. A large-scale production application built and maintained by a 60-developer team across a full stack of Vue SSR, GraphQL, ExpressJS and Redis, with every line reviewed before merging.",
    stack: ["TypeScript", "Vue 2", "Vue SSR (vue-server-renderer)", "Vuex 3", "Node.js", "Express", "GraphQL (Apollo Server Express)", "DataLoader", "Redis (ioredis)", "OAuth2", "Sentry", "Jest", "Storybook", "Docker", "Drone CI", "Lighthouse CI"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently developed the 'Live Shopping' feature — inspired by YouTube's auto-preview mechanism, designed a **reusable video auto-preview module** with a global scheduler that **resolved chaotic previews during high-speed scrolling** and **memory spikes from too many live streams** on a single page",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox browser extension that makes the web version of Bilibili load smoother for users in Taiwan and Singapore, dynamically rewriting the video CDN host to the fastest regional node with automatic fallback. Solely designed, built, published, and maintained end-to-end.",
    stack: ["Chrome Extension Manifest V3", "Vanilla JavaScript (ES6+)", "chrome.storage", "chrome.i18n", "Content Scripts (MAIN world / ISOLATED world)", "fetch / XMLHttpRequest hook", "Node.js", "JSZip", "Puppeteer", "Sharp"],
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
      "Automatic fallback & fault tolerance: monitors segment request status and playback stalls, silently switching to Bilibili's native backup node first, and only surfacing a prompt to the user if that also fails",
      "MAIN-world injection hooks fetch/XHR and the playinfo JSON setter to rewrite CDN hosts inside the playurl/DASH manifest in real time without disturbing native page behavior",
      "Forum-driven iteration: monitored user feedback and discussions across Bilibili-related forums and communities, synthesizing recurring pain points to prioritize fixes and drive the feature roadmap",
    ],
    contributions: [
      "Vibe Coding in a single weekend — architecture, implementation, and store listing assets designed, built, and published solo within one weekend",
      "10 days after launch: 2,000 views, 1,000 installs (**50% conversion rate**), WAU surpassed 1,000 (**near-100% retention**), and **14 five-star reviews with zero below five stars** — 100% organic traffic",
      "GitHub: https://github.com/a0972199950/bilibili-cdn-switcher",
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
      "High-precision numeric computation for financial settlement scenarios, solving JavaScript floating-point precision issues",
      "Complex form component development based on JSON Schema dynamic rendering with cascading selects, dynamic fields, and conditional rendering",
      "Micro-frontend integration via proprietary framework with dynamic sub-application loading",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread using Comlink for RPC-like communication, with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching utilities for rendering optimization: created cache/cacheMany tools mimicking React useMemo to cache computation results — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor supporting drag-and-drop layout for adding/removing photos and text editing, with photo import from Google Photos / Instagram. Backend API design covered OAuth2 sign-in through to the cart, order, and payment result flow. Built from scratch to launch in just 6 months.",
    stack: ["TypeScript", "Vue 2", "Nuxt 2 (SPA)", "Vuex", "TailwindCSS", "Element UI", "vee-validate", "Axios", "@nuxtjs/auth-next", "AWS Cognito OAuth2", "Google OAuth", "Instagram Graph API OAuth", "GitHub Actions", "AWS S3", "CloudFront", "Swagger/OpenAPI"],
    company: "AI.Book",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Led backend API design covering AWS Cognito OAuth2 sign-in, the cart and order flow, and payment result integration",
      "Built a custom editor with pure Vue, supporting drag-and-drop layout for adding/removing photos, text input, and font style/size editing",
      "Editor supports both web and mobile browser editing, with photo import from Google Photos / Instagram",
    ],
    contributions: [
      "Built entirely from scratch as sole developer — tech selection, frontend architecture, editor core, and backend API design owned end to end",
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
  {
    keywords: ["Redux", "React Query"],
    badgeClassName: "border-sky-200 bg-sky-50/50 text-sky-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Apollo Client", "Apollo Server", "DataLoader", "Zod", "Neon PostgreSQL", "GCP", "Azure", "gRPC"],
    badgeClassName: "border-lime-200 bg-lime-50/50 text-lime-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["Playwright", "TestCafe", "Karma", "Jasmine", "Testing Library", "Drone CI", "SonarQube", "Bitbucket Pipelines", "Azure Pipelines", "PM2"],
    badgeClassName: "border-pink-200 bg-pink-50/50 text-pink-800",
    marqueeClassName: "[--duration:39s]",
    reverse: true,
  },
  {
    keywords: ["Husky", "lint-staged", "Stylelint", "Sentry", "Radix UI", "shadcn", "daisyUI", "Fomantic UI", "PostCSS", "Stylus"],
    badgeClassName: "border-blue-200 bg-blue-50/50 text-blue-800",
    marqueeClassName: "[--duration:35s]",
  },
  {
    keywords: ["Gulp", "Lit-html", "OAuth2", "JWT", "AWS Cognito", "bcryptjs", "Google Charts", "Handsontable", "GitHub"],
    badgeClassName: "border-stone-200 bg-stone-50/50 text-stone-800",
    marqueeClassName: "[--duration:31s]",
    reverse: true,
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

export default function ResumePageEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/en" },
        { locale: "zh-TW", label: "中文", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Software Engineer III, Google Pay and Wallet - Google"}
        description={"Full-stack engineer with 7 years in JavaScript and TypeScript, currently building ad-delivery financial settlement systems at TikTok Singapore. Spent the three years before that on LINE Shopping, LINE's e-commerce affiliate platform, inside a 60-developer team where every line is reviewed before merging — owning large-scale application design and architecture across Vue SSR, GraphQL, ExpressJS and Redis, and independently building a reusable video auto-preview module whose global scheduler resolved preview chaos during high-speed scrolling and memory spikes from concurrent live streams.\n\nDriven by products that are genuinely good to use, not merely functional. Shipped a Bilibili CDN accelerator extension solo in one weekend, with silent automatic fallback so viewers never hit an error screen — 1,000 installs and 14 five-star reviews in 10 days on organic traffic alone."}
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
