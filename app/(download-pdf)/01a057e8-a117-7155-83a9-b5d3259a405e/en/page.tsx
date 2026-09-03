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
      "Owned the procurement and financial settlement modules for ad delivery in a 50+ sub-project, million-line enterprise monorepo, on React 17, TypeScript, and the company's internal closed-source micro-frontend framework",
      "Led the development team in adopting Scrum, using retrospectives and refinement to build a self-correcting mechanism, align schedules across members, and balance workloads",
      "Drove two performance wins: offloading bulk CSV validation to a Web Worker cut UI blocking time by 90%, and custom cache/cacheMany memoization cut Total Blocking Time by 98% on a page rendering 500 forms at once",
      "Synthesized recurring patterns from advertisers' and internal users' daily on-call reports to scope and drive new technical development tasks, rather than waiting for requirements to be handed down",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "Aug 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed and maintained LINE Shopping — a Vue SSR frontend plus a GraphQL BFF integrating dozens of microservices — across Vue SSR, GraphQL, TypeScript, ExpressJS, and Redis in a 60-developer team where every line is reviewed before merging, and contributed to the CMS refactor and the cross-team JSTF frontend-standards group",
      "Led a 4-person team through the CMS refactor from PHP to a NextJS App Router architecture, achieving full frontend-backend separation, owning tech selection, scheduling, task allocation, and internal training while mentoring 2 new hires",
      "Independently researched, designed, built, and validated the Live Shopping video auto-preview module, using dual IntersectionObservers, a Vuex global scheduler, and HLS.js to fix chaotic previews during high-speed scrolling and memory spikes from many live streams on one page",
      "Introduced Lighthouse CI through the cross-team JSTF group as a company-wide standard step on every PR, and contributed to LINE Taiwan's frontend development guidelines",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "Sep 2021 – Oct 2024",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "As a contract frontend engineer, was solely responsible for the platform's core online photo book editor, building it from scratch to launch in 6 months on Vue + NuxtJS",
      "Owned the entire product slice end to end as one person — from tech selection and frontend architecture through the editor core to backend API design",
      "Built a custom editor core in pure Vue — drag-and-drop layout, photo add/remove, and text/font-size editing — across desktop and mobile browsers, with photo import from Google Photos / Instagram",
      "Led backend API design covering AWS Cognito OAuth2 sign-in, the cart and order flow, and payment-result integration, defining API contracts, data models, and error handling from the consumer side",
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
      "LINE's e-commerce affiliate platform, where users earn LINE Points at partner merchants. A large-scale production app built and maintained by a 60-developer team on a full stack of Vue SSR, GraphQL, ExpressJS and Redis, with every line reviewed before merging.",
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
      "Solo-built LINE Shopping's Live Shopping feature, implementing a reusable video auto-preview module powered by a custom-built global scheduler that keeps scrolling smooth even at high speed",
    ],
  },
  {
    name: "TWSG Bilibili CDN Accelerator",
    summary:
      "An unofficial Chrome / Edge / Firefox extension that makes web Bilibili load smoother for users in Taiwan and Singapore, dynamically rewriting the video CDN host to the fastest regional node with automatic fallback. Designed, built, published, and maintained solo end-to-end.",
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
      "Automatic fault tolerance: monitors segment requests and playback stalls, silently switching to Bilibili's native backup node first, prompting the user only if that also fails",
      "MAIN-world injection hooks fetch/XHR and the playinfo setter to rewrite CDN hosts in the playurl/DASH manifest in real time without disturbing native page behavior",
      "Forum-driven iteration: tracked feedback across Bilibili forums and communities, synthesizing recurring pain points to prioritize fixes and shape the roadmap",
    ],
    contributions: [
      "Within **10 days** of launch, weekly active users (WAU) passed **1,000** on **2,000** organic visits — a **50%** conversion rate — with a **100%** five-star rating",
    ],
  },
  {
    name: "UG Overseas Platform",
    summary:
      "An enterprise Monorepo frontend project serving TikTok's overseas growth business — media asset management, financial settlement, supplier procurement, and data dashboards — across 50+ sub-projects and a million-line codebase.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "High-precision numeric computation for financial settlement, resolving JavaScript floating-point precision issues",
      "Complex form components on JSON Schema dynamic rendering — cascading selects, dynamic fields, conditional rendering",
      "Micro-frontend integration via a proprietary framework with dynamic sub-app loading and independent deployment",
    ],
    contributions: [
      "Cut UI blocking time on bulk CSV validation by **90%** with Web Worker multithreading, and cut Total Blocking Time on large-form pages by **98%** with an effective caching mechanism",
    ],
  },
  {
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor with drag-and-drop layout, photo add/remove, and text editing, plus photo import from Google Photos / Instagram. Backend API covered OAuth2 sign-in through the cart, order, and payment flow. From scratch to launch in 6 months.",
    stack: ["TypeScript", "Vue 2", "Nuxt 2 (SPA)", "Vuex", "TailwindCSS", "Element UI", "vee-validate", "Axios", "@nuxtjs/auth-next", "AWS Cognito OAuth2", "Google OAuth", "Instagram Graph API OAuth", "GitHub Actions", "AWS S3", "CloudFront", "Swagger/OpenAPI"],
    company: "AI.Book",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "Led backend API design covering AWS Cognito OAuth2 sign-in, the cart and order flow, and payment integration",
      "Built a custom editor in pure Vue — drag-and-drop layout, photo add/remove, text input, and font style/size editing",
      "Supports web and mobile browser editing, with photo import from Google Photos / Instagram",
    ],
    contributions: [
      "Built the entire product from scratch as the sole developer, owning tech selection, frontend architecture and the editor core through to backend API design end to end",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "JavaScript", "HTML", "CSS", "Sass / SCSS", "Node.js"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["React", "Next.js", "Redux", "React Query", "Vue", "NuxtJS", "Vuex", "TailwindCSS"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Express", "GraphQL", "Apollo Server", "Apollo Client", "REST API", "gRPC", "WebSocket", "Socket.io"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["PostgreSQL", "MongoDB", "Mongoose", "Redis", "Docker", "Kubernetes", "GCP", "AWS", "Azure", "Firebase"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Jest", "Cypress", "Playwright", "Testing Library", "Storybook", "Webpack", "Vite", "Git", "GitHub Actions", "ESLint"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["OAuth2", "JWT", "Web Worker", "Service Worker", "PWA", "Swagger", "Sentry", "Lighthouse", "PM2"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
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
    <ResumeLayout includeProjectsInPlainResume={false}>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/en" },
        { locale: "zh-TW", label: "中文", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"Senior Software Engineer - TikTok\nApply for Software Engineer III, Google Pay and Wallet - Google"}
        description={"Full-stack engineer, 7 years in JavaScript and TypeScript. Currently building ad-delivery financial settlement systems at TikTok Singapore; before that, three years on LINE Shopping — LINE's e-commerce affiliate platform — owning large-scale application design and architecture across Vue SSR, GraphQL, ExpressJS and Redis in a 60-developer team where every line is reviewed before merging.\n\nFocused on products that are genuinely good to use. Shipped a Bilibili CDN accelerator extension solo in one weekend, with silent automatic fallback so viewers never hit an error screen — 1,000 installs and 14 five-star reviews in 10 days on organic traffic alone."}
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
