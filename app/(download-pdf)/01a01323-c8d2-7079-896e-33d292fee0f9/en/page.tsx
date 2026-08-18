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
  title: "John Hsieh | Senior Software Engineer — Google Ads Campaign Automation",
  description:
    "7 years of software engineering experience. TikTok Singapore (ads delivery, User Growth), Aotter Trek DSP platform, native Mandarin speaker. Applying for Senior Software Engineer, Campaign Automation, Google Ads.",
  openGraph: { images: ["https://cdn.lazy-cv.com/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a01323-c8d2-7079-896e-33d292fee0f9/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Architected and maintained the financial settlement, procurement, and media asset management platform for TikTok's overseas ad-delivery User Growth team — serving campaigns across major DSP platforms within a 50+ sub-project, million-line monorepo (React 17, TypeScript, Rush Monorepo, proprietary micro-frontend framework)",
      "Drove measurable performance wins on core ad-delivery workflows: reduced UI blocking time by 90% via Web Worker CSV validation (Comlink + Yup), and cut Total Blocking Time by 98% on a 500-form financial interface via custom caching utilities",
      "Synthesized recurring patterns from oncall reports and advertiser feedback to independently scope technical improvements; led the team's Scrum adoption for structured sprint planning and cross-member collaboration",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed and maintained LINE Shopping (Vue SSR, GraphQL, TypeScript, ExpressJS) — independently built a reusable video auto-preview module with a global scheduler that resolved chaotic previews during high-speed scrolling and memory spikes from concurrent live streams",
      "Led a 4-person team through the CMS migration from PHP to NextJS App Router, achieving full frontend-backend separation while owning architecture, task allocation, and stakeholder communication",
      "Contributed to JSTF (company-wide frontend standards initiative), introduced Lighthouse CI, and mentored 2 new engineers to positive feedback",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Built the core online photo book editor from scratch as sole contractor, delivering to production within 6 months (Vue + NuxtJS)",
      "Led backend API design covering OAuth, cart/order flow, and payment gateway integration — defining contracts and data models from the consumer perspective",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "Jan 2021 – Sep 2021",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Architected frontend tech stack from scratch at startup stage, built an SME loan platform targeting the Hong Kong market end-to-end (React, TypeScript, TailwindCSS)",
      "Designed a cross-project shared UI component library (Stencil.js Web Components) deployed to private NPM",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "Dec 2020 – Aug 2021",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Managed a 2-person frontend team and developed a B2B management platform integrating internal AI microservices (NuxtJS/NextJS, TypeScript, MongoDB, Redis)",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "UG Overseas Platform",
    summary:
      "A large-scale enterprise Monorepo frontend project serving TikTok's overseas user growth advertising business — covering financial settlement, supplier procurement, media asset management, and data dashboards across 50+ sub-projects with million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "Complex form component development based on JSON Schema dynamic rendering with cascading selects, dynamic fields, and conditional rendering for ad delivery workflows",
      "High-precision numeric computation for financial and pricing scenarios, solving JavaScript floating-point precision issues",
      "Micro-frontend integration via proprietary framework with dynamic sub-application loading and independent deployment",
      "Runtime-fetched internationalization via an internally developed translation platform, supporting multi-language ad campaign interfaces",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation: offloaded heavy validation to a separate thread using Comlink RPC, with Yup + Regex schemas — **reduced UI blocking time by 90%** across 10 data entries",
      "Function caching utilities for rendering optimization: created cache/cacheMany tools mimicking React useMemo — **reduced Total Blocking Time (TBT) by 98%** on a 500-form interface without pagination",
    ],
  },
  {
    name: "Aotter Trek DSP Platform",
    summary:
      "A big-data-driven DSP (Demand-Side Platform) for ad placement, featuring rich chart interfaces to help advertisers identify optimal audiences and campaign settings through data analysis.",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    company: "Aotter",
    image:
      "https://cdn.lazy-cv.com/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
  },
  {
    name: "LINE Shopping",
    summary:
      "LINE's e-commerce affiliate platform where users earn LINE Points through partner merchants. A full-stack project consisting of a Vue SSR frontend and a BFF layer (Node.js + GraphQL) integrating dozens of backend microservices.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently developed the 'Live Shopping' feature — designed a **reusable video auto-preview module** with a global scheduler that **resolved chaotic previews during high-speed scrolling** and **memory spikes from concurrent live streams** on a single page",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox browser extension that dynamically rewrites video CDN hosts to the fastest regional node for TW/SG users, with automatic fallback on failure. Solely designed, built, published, and maintained end-to-end.",
    stack: ["Chrome Extension", "Manifest V3", "JavaScript", "Puppeteer", "Web Extension API"],
    image: [
      "https://cdn.lazy-cv.com/promo-cover-1280x800.png",
      "https://cdn.lazy-cv.com/10-days-report.png",
      "https://cdn.lazy-cv.com/screenshot-speedtest-en-1280x800.jpg",
      "https://cdn.lazy-cv.com/5-starts.png",
    ],
    url: "https://chromewebstore.google.com/detail/twsg-%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F-for-bilibili-%E9%9D%9E%E5%AE%98/dfaddcffoondcendifiljhdbdagebgch",
    highlights: [
      "MAIN-world injection hooks fetch/XHR and the playinfo setter to rewrite CDN hosts inside the DASH manifest in real time without disrupting native behavior",
      "Dual-world bridge: ISOLATED-world script syncs settings and i18n strings with the MAIN world via postMessage/localStorage",
      "Automatic fallback: monitors segment request failures and playback stalls, silently switching to backup node before prompting user",
      "Reproducible builds: pure Node.js scripts produce byte-for-byte identical zips across Chrome/Edge/Firefox platforms",
    ],
    contributions: [
      "10 days after launch: 2,000 views, 1,000 installs (**50% conversion rate**), WAU surpassed 1,000 (**near-100% retention**), **14 five-star reviews with zero below five stars** — 100% organic traffic",
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
  { label: "Years of Eng. Exp.", value: 7 },
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

export default function GoogleAdsEnPage() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/01a01323-c8d2-7079-896e-33d292fee0f9/en" },
        { locale: "zh-TW", label: "中文", href: "/01a01323-c8d2-7079-896e-33d292fee0f9/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Senior Software Engineer, Campaign Automation, Google Ads (Mandarin) - Google"}
        description={"Native Mandarin speaker with 7 years of software engineering experience, currently building ad-delivery systems for TikTok's User Growth team in Singapore — running campaigns across major DSP platforms to drive overseas user acquisition at scale.\n\nAt TikTok, developed the financial settlement frontend for a 50+ sub-project, million-line-codebase monorepo and drove measurable performance wins: a Web Worker-based CSV validation system reduced UI blocking by 90%, and custom rendering cache utilities cut Total Blocking Time by 98% on 500-form interfaces. Earlier at Aotter, built the company's own Trek DSP platform from the ground up — a demand-side advertising platform with big-data audience analysis and campaign management. Also led a 4-person team through a major CMS migration at LINE Taiwan. Fluent in Mandarin, English, and Japanese (JLPT N1)."}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border Ads & Product Development"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing ads platform experience, GenAI integration, and product impact.`}
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
