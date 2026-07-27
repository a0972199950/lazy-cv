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
      "Part of the User Growth team, owning the **financial settlement system** for ad delivery — amount computation, supplier procurement and settlement flows. High-trust financial surfaces where a single decimal error is an incident.",
      "Built on React + TypeScript with a Rush monorepo and the company's proprietary micro-frontend framework, serving 50+ sub-projects across a million-line codebase.",
      "Solved performance bottlenecks with Web Worker multithreading and function-caching utilities — **90% less UI blocking time** and a **98% drop in Total Blocking Time** respectively, treating performance as part of the product experience.",
      "Led the team's adoption of Scrum — using retrospectives to build a self-correcting mechanism, refinement to break down siloed work, balancing workload and improving PM visibility into schedules.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer / Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Day-to-day development on LINE Shopping (a high-traffic e-commerce referral platform) with Vue SSR + GraphQL + TypeScript + ExpressJS — the team owned both the client and the API codebase, giving me hands-on experience across the stack.",
      "Served as **Team Leader** of a 4-person team, driving the CMS refactor from PHP to **React + NextJS App Router** — owning tech-stack decisions, architecture, scheduling and risk assessment. One of the earliest App Router adoptions in the company.",
      "Member of the JavaScript Task Force defining company-wide frontend guidelines; introduced **Lighthouse CI** so performance scoring became a standard gate on every PR. The team's core creed: *every single line has to be reviewed before merging*.",
      "Mentored 2 new hires and led an internal NextJS teaching forum — I enjoy breaking complex problems down into language a newcomer can act on.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "**Single-handedly** planned and built an online photo book editor from scratch — a highly interactive editing surface supporting adding/removing photos, text input, and font family/size editing.",
      "Owned every decision from tech selection and architecture through to launch, using Vue + NuxtJS, shipping the product in 6 months.",
      "**Led the backend API design** — OAuth third-party sign-in, the shopping and checkout flow, and payment gateway integration — defining the API contract from the consumer's perspective and seeing it through to production. A full slice, owned end-to-end.",
      "Supported both desktop and mobile editing, plus PWA installation (Service Worker / IndexedDB) for a native-app-like experience.",
    ],
  },
  {
    company: "FundFluent (FinTech)",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "**Fintech startup**: an SME lending marketplace for the Hong Kong market. Joined at founding stage and planned the frontend architecture and tech selection from zero.",
      "Independently delivered two products with React (NextJS) + TypeScript + TailwindCSS: the SME Portal (borrower side) and the Partner Portal (bank/lender side).",
      "Led the creation of a cross-project **design system and component library** — framework-agnostic components built with Stencil.js Web Components, a CSS system combining TailwindCSS + customized Semantic UI, documented in Storybook and published to a private NPM registry.",
      "The product integrated government and bank loan information, online applications and document OCR — a first-hand lesson in how much financial product UX depends on earning trust.",
    ],
  },
  {
    company: "Foxit Software",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "**Full-stack engineer** on a newly formed AI team, building a B2B management platform that unified all of the team's internal AI microservices behind a public API surface.",
      "Frontend in NuxtJS / NextJS + TypeScript; backend in NodeJS + TypeScript + MongoDB + Redis — designing data models and API endpoints myself. Concrete proof of *dropping into the backend when the feature requires it*.",
      "Managed a 2-person frontend team and participated in the technical evaluation for adopting GraphQL and NestJS.",
    ],
  },
  {
    company: "Aotter Inc.",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "Project-oriented teams of roughly four — a PM, a designer, and frontend/backend engineers — which kept communication cheap and iteration fast. Every engineer ran several projects at once, so managing your own time well enough that no product slipped was part of the job.",
      "**Design fidelity and usability came first**: rather than reaching for the same off-the-shelf framework every time, I built a small tailored UI framework per project with TailwindCSS, so each product could keep its own character — with modularity and reuse as the standard on the code side.",
      "Primary stack was the Nuxt ecosystem + TypeScript + Sass / TailwindCSS, with CI/CD running on Docker + Kubernetes.",
      "Shipped SuprLink (a short-link service), Aotter Trek (an advertising DSP platform), the Institute for Information Industry city dashboard, and the beanfun! data center — several **chart-dense dashboard products** that taught me a lot about turning heavy data into something readable.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE Shopping — Live Commerce Module",
    summary:
      "LINE's shopping referral service: users who click through to partner merchants and complete a purchase earn LINE Points, and the platform also acts as an aggregated entry point for third-party e-commerce. **This is a high-traffic consumer product where UI experience is treated as a first-class requirement** — the audience is ordinary shoppers, not internal staff, so design fidelity, scroll smoothness, perceived loading speed and every interaction detail translate directly into conversion. The team held UI quality to the same bar as functionality. I independently built the platform's Live Shopping feature.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    highlights: [
      "**Experience-first interaction design**: designed a **reusable video auto-preview module** inspired by YouTube's video feed, letting users preview live content while browsing without a single click",
      "**Polishing the scroll experience**: introduced a **global scheduler** so that during fast scrolling only the stream the user is actually looking at plays — keeping the visual focus exactly where it belongs instead of a chaotic wall of previews",
      "**Experience without the jank**: solved memory spikes caused by too many live streams on one page, balancing a fluid preview experience against device resources",
      "**SSR and perceived performance**: a Vue SSR architecture keeps above-the-fold content immediately visible, serving both SEO and the shopper's first impression",
      "Maintained both the frontend and the GraphQL API codebase, so I could trace experience issues to their root cause across layers",
    ],
    contributions: [
      "**Independently developed** the entire live commerce feature — from the interaction mechanism and module architecture through to launch",
    ],
  },
  {
    name: "Lazy CV — An Agentic Full-Stack Product",
    summary:
      "An AI-powered tailored resume generator, and my main proving ground for **agentic engineering**. Given only a job posting link, an AI agent autonomously scrapes the JD, analyzes the key requirements, cross-references a personal source-of-truth, then generates and writes bilingual (EN/ZH) resume pages into the project. **The whole thing went from zero to production in 2 days**, developed fully with AI assistance (Vibe Coding) — direct evidence for the JD's premise that AI coding agents let you ship higher-craft work faster than a traditional frontend team. This very resume was generated by it.",
    stack: ["AI Agent", "MCP", "Prompt Engineering", "Vibe Coding", "Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "**Autonomous agent workflow**: an end-to-end SOP where the agent executes *scrape JD → analyze requirements → retrieve source of truth → generate bilingual pages → write files and verify* with no human step in between",
      "**MCP tool integration**: Model Context Protocol gives the agent browser-scraping capability, bringing external tools inside its decision loop (I can also build MCP servers from scratch)",
      "**Structured prompts as code**: copilot-instructions / skill files encode *what a good resume looks like* as a version-controlled, iterable spec — which makes the agent's behavior predictable and regression-testable",
      "**SDD (Spec-Driven Development)**: writing the detailed spec first to drive AI implementation, with explicit constraints (*never fabricate facts, only adjust tone*) that sharply reduce hallucination risk",
      "**Serverless full-stack architecture**: Next.js 16 App Router + Standalone Output, ECR → Lambda Web Adapter running SSR, static assets on S3 + CloudFront CDN, fully automated CI/CD through GitHub Actions",
      "**Owned the data layer**: Neon Serverless PostgreSQL + Drizzle ORM, designing the schema and type-safe data access myself",
    ],
    contributions: [
      "Agent workflow design, frontend, backend, database and cloud deployment **all delivered by one person**, live within 2 days",
    ],
  },
  {
    name: "FundFluent Design System (TailwindCSS UI System)",
    summary:
      "A cross-project **design system** I led personally, shared through a private NPM registry. Its core is a complete **UI design system built on TailwindCSS** — the designers' palette, type scale, spacing, radii and shadows are collapsed into Tailwind theme tokens, and every component may only draw from that token set. That eliminates the *every page is slightly off* drift at the source. The components themselves are implemented as Web Components (Stencil.js), so they are never tied to a single frontend framework.",
    stack: ["TailwindCSS", "Design Tokens", "Stencil.js", "Web Component", "Shadow DOM", "Semantic UI", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "**Design system built on TailwindCSS**: design tokens (color, type scale, spacing, radii) centralized in the Tailwind config as the company's single visual source of truth — a redesign means changing tokens, not hunting CSS page by page",
      "**Tailwind + customized Semantic UI**: Tailwind's utility flexibility layered over Semantic UI's semantic component base, balancing development speed against visual consistency",
      "**Framework-agnostic component library**: Stencil web components with Shadow DOM style isolation, so the same components are reusable in React, Vue or vanilla projects",
      "**Storybook as the design collaboration surface**: every component state exposed in the browser so designers can review interaction and visual detail directly — turning *collaborating with designers as a peer* into an actual process rather than a slogan",
      "**Monorepo layering**: component library separated from business code, published and tested independently before downstream projects are rebuilt",
    ],
    contributions: [
      "**Built entirely from scratch as sole developer** — tech selection, token definition, component development and documentation",
    ],
  },
  {
    name: "AI.Book Online Photo Book Editor",
    summary:
      "An online photo book platform: users design personalized albums in the browser, then have them printed as physical keepsake books. At its heart is a highly interactive editor — adding and removing photos, entering text, adjusting font family and size — working on both desktop and mobile. **I planned and built the entire product alone, from zero to launch in 6 months**, and not only the frontend: **I also led the backend API design**. It is my most complete example of owning a full slice end-to-end.",
    stack: ["Vue", "NuxtJS", "OAuth", "Payment Gateway", "REST API", "PWA", "Service Worker", "IndexedDB"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "**Led the backend API design**: covering **OAuth third-party sign-in**, the **cart and order flow**, and **payment gateway integration** — defining the API contract, data models and error handling from the consumer (frontend) perspective, so the interface received exactly the shape it actually needed",
      "**Editor built from scratch**: a custom editor in pure Vue handling photo add/remove, text input and font sizing — no off-the-shelf editor library underneath",
      "**Cross-device editing**: one editor serving both web and mobile, designing interactions for two fundamentally different input models",
      "**PWA offline experience**: Service Worker + IndexedDB for installation and caching, delivering a native-app-like feel",
      "**Autonomous technical ownership**: the Vue + NuxtJS architecture decision, project planning and schedule were all mine to call",
    ],
    contributions: [
      "**Planned and developed independently from zero** — frontend architecture, the editor core, backend API design and delivery to launch, all by one person",
    ],
  },
  {
    name: "UG Overseas Growth Platform (TikTok Large-Scale Micro-Frontend)",
    summary:
      "An **enterprise-scale micro-frontend platform** serving TikTok's overseas ad user-growth business line — **50+ sub-projects and a million-line codebase** managed with Rush + PNPM Workspaces, covering media asset management, financial settlement, supplier procurement and data dashboards. Business subsystems develop collaboratively and deploy independently under one unified architecture and engineering standard. I focus on the procurement and settlement modules.",
    stack: ["Micro-Frontend", "Rush + PNPM Workspaces", "React 17", "TypeScript", "Arco Design", "Ferry / Thrift IDL", "Web Worker", "Comlink", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "**Micro-frontend architecture**: dynamic sub-application loading through the company's proprietary framework, so business modules load on demand and each team develops and deploys independently — dozens of teams progressing on one platform without blocking each other",
      "**Monorepo engineering governance**: Rush v5 + PNPM Workspaces managing dependencies and builds across 50+ sub-projects, with ESLint + commitlint + lint-staged enforcing one engineering standard platform-wide",
      "**Type-safe cross-service contracts**: Ferry + Thrift IDL generated strongly-typed service code, keeping frontend/backend protocols consistent across a sprawling micro-frontend estate and cutting runtime errors",
      "**Configuration-driven complex forms**: extensive business components built on an in-house JSON Schema dynamic form renderer — cascading selects, dynamic fields, conditional display and cross-field linkage",
      "**High-precision numeric computation**: a dedicated floating-point precision solution for financial and quoting scenarios, eliminating monetary rounding errors",
      "**Internationalization**: multi-language support fetching the latest translation files at runtime through an in-house translation platform",
    ],
    contributions: [
      "**Web Worker multithreaded CSV validation**: offloaded large CSV validation to a dedicated thread with Comlink for RPC-like communication and Yup + Regex schemas — **90% reduction in UI blocking time**, then abstracted into a shared utility reused across the platform",
      "**Function-caching utilities for render performance**: built `cache`/`cacheMany` (modeled on React's `useMemo`) to memoize schema computation — a **98% reduction in Total Blocking Time (TBT)** on an unpaginated screen rendering 500 form UIs at once",
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
  { label: "Years Frontend", value: 7 },
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

const summary = [
  "I'm a frontend engineer with seven years of experience, currently working on the financial settlement system behind ad delivery at TikTok. Before that I spent three years at LINE Taiwan building LINE Shopping, and led a four-person project team along the way. Two things matter most to me: the user experience, and code that stays maintainable.",

  "My background happens to span two kinds of environment. At thousand-person companies like TikTok and LINE, I got used to rigorous code review and engineering standards, and I know how little room a financial domain leaves for a rounding error. On the other side, at startups like FundFluent and AI.Book, I planned and shipped entire projects from zero on my own — which meant wearing several hats at once, and doing a lot of the work upfront just clarifying what was actually being asked for. Between the two, I can settle into a team of almost any size quickly, and still deliver quality work when resources are thin.",

  "A concrete example of what I mean by user experience: at LINE I built the auto-preview for live shopping videos, and spent a good while on which stream should play during a fast scroll, and on keeping memory from blowing up when one page carried too many streams. Users can't name details like these, but they feel them.",

  "What Arta is building is a way to turn complicated investment decisions into an interface that feels easy to use. The hard part isn't the number of features; it's trust and usability — the numbers have to be right, the information hierarchy has to be legible, the interactions have to hold steady, before anyone is willing to put money in. That is exactly where I'm strongest. My project experience covers fintech products, consumer products and design system work, and I can own a full slice end-to-end on my own.",

  "I've been building with AI a lot lately too. The resume you're reading was generated by my own project, Lazy CV — a full-stack app on Next.js, PostgreSQL and AWS Lambda that went from nothing to production in two days. I've also built a real AI product: a chatbot with multi-turn memory that reads images, calls its own tools, and pulls up past conversations through vector search.",
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
        jobTitle="Software Engineer (TypeScript)"
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
        contributionsLabel="Key Contributions"
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
