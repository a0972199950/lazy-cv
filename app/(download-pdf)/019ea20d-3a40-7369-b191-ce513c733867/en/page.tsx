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
  title: "John Hsieh | Forward Deployed Engineer — OpenAI",
  description:
    "7 years of full-stack engineering experience with hands-on LLM integration, AI agent automation, and proven independent delivery from discovery to production. Applying for Forward Deployed Engineer at OpenAI Singapore.",
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
      "Part of the User Growth team running DSP-platform ad campaigns at global scale to grow TikTok's user base.",
      "Led development of financial settlement systems for ad delivery using React, Rush Monorepo, and proprietary micro-frontend framework.",
      "Drove team adoption of Scrum — introduced retrospectives, refinement sessions, and workload balancing to improve PM visibility and cross-member collaboration.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Built LINE Shopping platform features daily with Vue SSR + GraphQL + TypeScript + ExpressJS.",
      "Led a 4-person team to migrate the CMS from PHP to NextJS App Router — handled architecture design, scheduling, cross-team coordination, and documentation.",
      "Introduced Lighthouse CI to the company-wide JavaScript Task Force, establishing automated frontend performance standards.",
      "Mentored 2 junior engineers; led internal NextJS onboarding forum.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Solo Contractor — Startup)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Acted as sole technical contractor — held all discovery sessions directly with the founder, translated business goals into technical specs, and made every architecture decision independently.",
      "Designed and shipped a feature-complete online photo book editor from scratch with Vue + NuxtJS — from kickoff to production in 6 months as sole developer.",
      "Maintained tight feedback loops with the founder throughout; adjusted scope and sequencing proactively to protect delivery dates.",
      "Implemented full PWA support (Service Worker, IndexedDB) for a native app-like cross-platform experience.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Solo Contractor — Startup)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Embedded directly with the founding team — ran requirements workshops, scoped each product, designed the full frontend architecture, and delivered three separate products as the sole frontend developer.",
      "Built UI Kit (Stencil.js Web Component), SME Portal, and Partner Portal independently from zero — owning timeline, technical trade-offs, and delivery.",
      "Maintained close communication with the CTO and product stakeholders; adjusted scope and sequencing proactively to protect delivery.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Full-stack engineer on a new AI team — managed a 2-person frontend team while contributing to backend.",
      "Built a B2B management platform integrating internal AI microservices with NuxtJS / NextJS + MongoDB + Redis.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "AI Persona Chatbot",
    summary:
      "A production LINE chatbot that brings a pet to life as a personalized AI companion. I designed and implemented the entire LLM interaction layer from scratch: structured system prompts for consistent persona, multi-turn context window management, multimodal input handling (image + voice), RAG-based long-term memory via vector DB, and tool-call-driven memory retrieval — all running on a self-hosted VPS.",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding / RAG", "Prompt Engineering"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "System prompt engineering: crafted structured persona prompts that lock the model into a consistent character voice across all conversation turns, preventing drift even over long sessions",
      "Context window management: session history scoped by user ID and trimmed to fit the model's token budget — users experience true continuity without hitting context limits",
      "Tool call architecture: exposed a recall_memory tool to the model so it can proactively fetch relevant past events from the vector DB mid-conversation, enabling genuinely lifelike long-term memory",
      "RAG pipeline: past events serialized as JSONL → embedded via Gemini Embedding API → stored in vector DB → retrieved by semantic similarity at query time and injected into context",
      "Multimodal input: route image and audio messages through Gemini's vision and audio APIs, then feed model responses back into the same conversation thread seamlessly",
      "n8n as LLM orchestration layer: each Webhook event triggers an n8n workflow that handles token counting, history retrieval, model call, tool-call resolution, and DB write — decoupled and independently testable",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "A full-stack AI agent that turns a job posting URL into a tailored bilingual resume — end-to-end, with no human in the loop. The system uses an LLM to read the scraped JD, extract key requirements, compare them against a structured personal data source, and generate production-ready Next.js page code. Built from scratch to AWS production in 2 days via Vibe Coding.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Chrome DevTools MCP", "Claude API"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "LLM-driven code generation: the model receives the JD, personal data source (Markdown), and a detailed component API spec, then outputs syntactically correct TSX that directly renders to a deployable resume page",
      "Structured prompt with strict constraints: prompt design enforces factual accuracy (no hallucination of experience), correct import paths, component usage, and bilingual output in a single pass",
      "MCP tool integration: Chrome DevTools MCP is registered as a tool the agent can call to scrape live job pages — the model decides when and how to invoke it as part of the workflow",
      "Iterative agent loop: agent can self-correct by reading compile errors or visual feedback from the browser screenshot tool, then patching the generated code without human intervention",
      "Serverless AWS deployment: ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
    ],
  },
  {
    name: "UG Overseas Platform (TikTok)",
    summary:
      "Large-scale enterprise Monorepo frontend serving TikTok's overseas user growth business — 50+ sub-projects, million-line codebase, covering financial settlement, supplier procurement, media assets, and dashboards.",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "JSON Schema dynamic form rendering with cascading selects, dynamic fields, and conditional rendering",
      "High-precision floating-point computation for financial settlement scenarios",
      "Micro-frontend integration via proprietary framework with dynamic sub-app loading and independent deployment",
    ],
    contributions: [
      "Web Worker multi-threaded CSV validation with Comlink RPC — reduced UI blocking by 90% across 10 data entries",
      "cache / cacheMany utilities mimicking React useMemo — reduced Total Blocking Time (TBT) by 98% on a 500-form interface",
    ],
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led end-to-end migration of LINE Shopping CMS from PHP to NextJS App Router — owner of architecture, scheduling, risk assessment, cross-team coordination, and documentation. One of LINE Taiwan's first App Router adoptions.",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe micro-services"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "iframe-based micro-service approach for progressive migration — new and legacy projects deploy independently, URL-based rollout",
    ],
    contributions: [
      "Solo architect + PM: task assignment, technical docs, user communication, and hands-on development simultaneously",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "LINE's affiliate e-commerce platform enabling users to earn LINE Points through partner merchants, featuring Live Shopping.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "Independently built the Live Shopping feature — reusable video auto-preview module with a global scheduler solving chaotic previews during high-speed scrolling and memory spikes from multiple concurrent live streams",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "Cross-project shared UI component library built with Stencil.js Web Components for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation and private NPM publishing.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo", "NPM"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "Framework-agnostic Web Components usable across React, Vue, or vanilla JS",
      "Monorepo with independent publish cycle — component library tested and versioned separately from business code",
    ],
    contributions: ["Built entirely from scratch as sole developer"],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "Python", "Node.js", "GraphQL", "REST API", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["LLM Integration", "OpenAI API", "Claude API", "Gemini API", "RAG", "Embedding", "Prompt Engineering", "n8n", "AI Agent", "MCP"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["GitHub Copilot", "Cursor", "Vibe Coding", "SDD", "AI Workflow Design", "Tool Call", "Context Window", "Vector DB", "System Prompt", "Multimodal"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:35s]",
  },
  {
    keywords: ["AWS Lambda", "Docker", "GitHub Actions", "Kubernetes", "ECR", "CloudFront", "S3", "Firebase", "VPS", "Neon PostgreSQL"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:34s]",
    reverse: true,
  },
  {
    keywords: ["TailwindCSS", "Framer Motion", "Drizzle ORM", "MongoDB", "Redis", "PostgreSQL", "Mongoose", "ECharts", "Chart.js", "D3.js"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Rush Monorepo", "pnpm", "Webpack", "Vite", "Jest", "Cypress", "Storybook", "ESLint", "Lighthouse", "Renovate"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:36s]",
    reverse: true,
  },
  {
    keywords: ["Web Worker", "Comlink", "Service Worker", "IndexedDB", "StencilJS", "Web Component", "Shadow DOM", "PWA", "Socket.io", "Web Socket"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:31s]",
  },
  {
    keywords: ["Arco Design", "React Hook Form", "Yup", "Axios", "i18n", "Lodash", "MobX", "Vuex", "Bootstrap", "CSS Modules"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:37s]",
    reverse: true,
  },
  {
    keywords: ["HTML", "CSS", "JavaScript", "Sass", "Less", "BEM", "CSS variable", "Media query", "jQuery", "Quill"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
  },
];

const stats: StatItem[] = [
  { label: "Years Eng. Exp.", value: 7 },
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

export default function OpenAIResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019ea20d-3a40-7369-b191-ce513c733867/en" },
        { locale: "zh-TW", label: "中文", href: "/019ea20d-3a40-7369-b191-ce513c733867/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Forward Deployed Engineer"
        description={`7 years of full-stack engineering experience with a track record of shipping complex systems to production — from a million-line enterprise Monorepo at TikTok Singapore to building AI-powered products from scratch in under 48 hours.\n\nI have direct startup experience as a solo contractor at AI.Book and FundFluent: I embedded with founders, ran requirement discovery, made all architecture decisions, and delivered full products independently. This mirrors exactly what a Forward Deployed Engineer does — understand customer needs, scope the work, build, and drive adoption. At AI.Book I shipped a feature-complete photo editor in 6 months; at FundFluent I designed and built three separate products (UI Kit, SME Portal, Partner Portal) from zero, communicating directly with the CTO throughout.\n\nI bring hands-on LLM integration experience: I've built production systems using OpenAI API, Claude API, and Gemini API — including RAG architectures with vector databases, multimodal agents, tool-call-driven memory retrieval, and structured prompt engineering. My AI Persona Chatbot and Lazy CV projects are deployed, live systems serving real users.\n\nI'm trilingual (English, Mandarin, Japanese — JLPT N1), which positions me well for cross-border enterprise engagements across the APAC region. I thrive in ambiguous, fast-moving environments — I've owned scoping, architecture, delivery, and stakeholder communication simultaneously, often as a solo technical owner.\n\nAt OpenAI, I can help enterprise customers in APAC move from pilot to production with frontier models, contribute field insights that sharpen model roadmaps, and codify deployment patterns into reusable playbooks for the team.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Cross-border AI Product Delivery"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing LLM integration, full-stack delivery, and customer-facing impact.`}
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
