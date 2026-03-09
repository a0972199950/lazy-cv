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
  title: "John Hsieh | Senior Software Engineer — Wise (Japanese Speaking)",
  description:
    "7+ years of software engineering experience with JLPT N1 Japanese proficiency. Specializing in React / Next.js / TypeScript / Vue. Previously at TikTok Singapore and LINE Taiwan. Applying for Senior Software Engineer I - Japanese Speaking at Wise Singapore.",
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore (ByteDance)",
    role: "Software Engineer",
    period: "2024.11 - Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Part of the User Growth team, responsible for running advertisements across major DSP platforms to scale user acquisition for TikTok and related apps — impacting hundreds of millions of customers.",
      "Developing the financial settlement systems for ad delivery using React, monorepo architecture, and a proprietary frontend microservices framework — directly relevant experience in financial system development.",
      "Led the adoption of Scrum methodology for the development team — established retrospectives for self-correcting mechanisms, refinement sessions to break down siloed work, balanced workloads, and improved PM visibility into project schedules.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer & Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping with Vue SSR + GraphQL + TypeScript + ExpressJS in a 60-person team with strict code review culture — 'every single line must be reviewed before merging.'",
      "Led a 4-person team to migrate CMS from PHP to NextJS App Router, handling architecture decisions, project scheduling, resource coordination, and risk assessment.",
      "Participated in the JavaScript Task Force (JSTF) to establish company-wide frontend standards; introduced Lighthouse CI for automated performance evaluation as part of the CI pipeline.",
      "Mentored 2 new engineers with positive feedback. Led an internal NextJS teaching forum to accelerate onboarding.",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Solely responsible for building a complex online photo book editor from scratch — supporting drag-and-drop, resizing, and text editing with cross-platform compatibility.",
      "Planned the entire technical architecture using Vue + NuxtJS; launched the product within 6 months.",
      "Implemented PWA installation for a native-app-like experience, leveraging Service Worker and IndexedDB for offline support.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at startup stage — planned frontend architecture and tech stack from scratch for a financial technology company serving Hong Kong SMEs.",
      "Built an integrated loan platform using React / NextJS + TypeScript + TailwindCSS, enabling one-stop application for bank and government loans with OCR document processing.",
      "Designed a cross-project shared UI component library using Stencil.js Web Components, deployed to private NPM for framework-agnostic reuse.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Served as a full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Developed a B2B management platform integrating internal AI microservices with NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
      "Explored and adopted new technologies including GraphQL and NestJS during the team's tech stack evaluation phase.",
    ],
  },
  {
    company: "Aotter Inc.",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "Developed multiple web applications and advertising platforms in a project-oriented team (PM, UI designer, frontend/backend engineers) using Nuxt + TypeScript + Sass + TailwindCSS.",
      "Built custom CSS frameworks per project using TailwindCSS for pixel-perfect designs. Deployed with Docker + Kubernetes CI/CD pipelines.",
      "Managed multiple concurrent projects simultaneously, honing time management and cross-project context switching skills.",
    ],
  },
  {
    company: "第三緯度 Inc.",
    role: "Frontend Developer",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "Developed web applications using Vue + PHP with WeChat Pay integration.",
    ],
  },
  {
    company: "Asian Bridge Inc. (日商優橋)",
    role: "Digital Ad Personnel & Frontend Developer",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "Worked at a Japanese trading company where Japanese was the primary working language — managed communication with Japanese clients and served as project manager leveraging fluent Japanese.",
      "Optimized digital advertising on Facebook Ads Manager and Google Ads. Applied A/B testing, heatmap analysis, and Google Analytics to improve UX — building foundational UI/UX expertise.",
      "Transitioned to frontend developer, building official websites and campaign landing pages. Led a 2-person frontend team.",
    ],
  },
  {
    company: "AsiaYo Inc.",
    role: "Japanese Sales & Operations",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "Managed Japanese accommodation host onboarding, growing listings from 1,682 to 2,616 (93% target achievement) with 376% year-over-year booking growth.",
      "Served as primary Japanese liaison and emergency customer service contact for Japanese-market operations.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE Shopping — Live Shopping Feature",
    summary:
      "Independently developed the 'Live Shopping' feature for LINE's affiliate shopping platform. Designed a reusable video auto-preview module inspired by YouTube's auto-preview mechanism, with a global scheduler that resolved chaotic previews during high-speed scrolling and memory spikes from too many concurrent live streams — a highly available system handling thousands of concurrent users.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
  },
  {
    name: "TikTok Ad Financial Settlement System",
    summary:
      "Developing the financial settlement systems for ad delivery at TikTok, one of the world's largest internet companies. The system handles complex financial operations across multiple DSP platforms using React, monorepo architecture, and a proprietary frontend microservices framework. Directly building financial infrastructure that scales to serve hundreds of millions of users.",
    stack: ["React", "TypeScript", "Monorepo", "Microservices"],
    image: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led the migration of LINE Shopping CMS from PHP to React & NextJS App Router architecture, managing a 4-person team. Handled tech-stack decision-making, internal training, schedule planning, task allocation, and risk assessment — achieving full frontend-backend separation. One of the early adopters of NextJS App Router within LINE Taiwan.",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
  },
  {
    name: "FundFluent SME Loan Platform",
    summary:
      "Built an integrated loan platform for Hong Kong SMEs from scratch, providing bank and government loan information with one-stop applications. Leveraged OCR technology to streamline document management and reduce redundant submissions — directly relevant experience in financial systems and product integrations with banking partners.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS", "Semantic UI"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
  },
  {
    name: "Lazy CV — AI-Powered Resume Generator",
    summary:
      "Full-stack application combining AI Agent automation with Next.js 16. Provide a job posting URL and the system automatically scrapes JD, analyzes requirements, and generates tailored bilingual resume web pages. Deployed on AWS Lambda with Neon PostgreSQL. Built from scratch to production in 2 days via Vibe Coding.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js) for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation. Published to private NPM for scalable reuse across multiple products.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
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
  { label: "Years Engineering Exp.", value: 7 },
  { label: "Products Shipped", value: 16 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "Soochow University", degree: "Bachelor of Arts — Japanese Language & Literature", period: "2013 - 2017" },
  { institution: "Doshisha University, Kyoto", degree: "Exchange Program — Japanese Language & Culture", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "JLPT N1 (Japanese)", description: "Highest level — exceeds the N2 requirement. Business conversation proficiency with experience using Japanese as primary working language", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "NTU Extension Program", description: "Web Development Technology Course" },
];

const languages: LanguageItem[] = [
  { name: "Mandarin Chinese — Native", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "Japanese — Business (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "English — Professional Working", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function WiseResumeEN() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="en" locales={[
        { locale: "en", label: "EN", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/en" },
        { locale: "zh-TW", label: "中文", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/zh-TW" },
        { locale: "ja", label: "日本語", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/ja" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Senior Software Engineer"
        description={`I am excited to apply for the Senior Software Engineer I - Japanese Speaking position at Wise. With 7 years of software engineering experience at leading tech companies including TikTok Singapore and LINE Taiwan, combined with JLPT N1 Japanese proficiency (exceeding the N2 requirement) and professional English communication, I am uniquely positioned to contribute to Wise's mission of building the best way to move and manage the world's money.

What I can bring to Wise:
I have direct experience building financial settlement systems at TikTok and developing a loan platform at FundFluent — both involving complex product integrations with financial partners. My core value of "User Experience First" aligns perfectly with Wise's mission to hide complexity under the hood and build seamless customer experiences.
I excel at explaining complex technical concepts to non-technical stakeholders, collaborating across banking, compliance, and operations teams.

What sets me apart:
Beyond technical expertise in React, TypeScript, and scalable system architecture, I bring proven leadership — leading a 4-person team at LINE Taiwan, driving Scrum adoption at TikTok, and actively mentoring engineers.
My trilingual ability (Mandarin/Japanese/English) and hands-on experience at a Japanese trading company (Asian Bridge Inc.) give me the cultural fluency to effectively liaise with Japanese-speaking counterparts and manage technical documentation in Japanese, which is critical for integrating with Zengin and other APAC payment schemes.
I hold the JLPT N1 certification — the highest level of Japanese proficiency — which exceeds the N2 requirement listed in this role, ensuring I can handle business negotiations, technical discussions, and documentation in Japanese with confidence.`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — Building products at global scale"
      />

      <WorkExperience title="Work Experience" experiences={experiences} />

      <ProjectsGrid
        title="Projects"
        description={`${projects.length} representative projects showcasing product impact, financial system experience, and scalable architecture.`}
        projects={projects}
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
