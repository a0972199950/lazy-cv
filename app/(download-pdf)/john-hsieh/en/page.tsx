import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpenText,
  Briefcase,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Tags,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Globe } from "@/components/ui/globe";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Separator } from "@/components/ui/separator";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillCloud } from "../skill-cloud";
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | Senior Frontend Engineer",
  description:
    "7 years of frontend development experience, previously at TikTok Singapore and LINE Taiwan. Specializing in React / Next.js / TypeScript.",
};

/* ────────────────── data ────────────────── */

type Experience = {
  company: string;
  role: string;
  period: string;
  logo: string;
  highlights: string[];
};

type Project = {
  name: string;
  summary: string;
  stack: string[];
  image: string;
  url?: string;
};

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - Present",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "Part of the User Growth team, responsible for ad monetization financial system development.",
      "Use React and internal frameworks to handle ad financial workflows and data analytics.",
      "Participate in system optimization to improve ad revenue tracking accuracy.",
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
      "Mentored 2 new engineers with positive feedback.",
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
    name: "LINE Shopping",
    summary:
      "A LINE affiliate shopping service where users earn LINE Points through partner merchants. An e-commerce portal aggregating third-party stores with search, price comparison, and sharing features.",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image:
      "https://cdn.lazy-cv.com/1da75a22-2c28-4bbc-baef-1ec66ee781bb.png",
    url: "https://buy.line.me",
  },
  {
    name: "CMS Migration to NextJS",
    summary:
      "Led the migration of LINE Shopping CMS from PHP architecture to React & NextJS App Router, managing a 4-person team to achieve full frontend-backend separation.",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image:
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
  },
  {
    name: "AI.Book Photo Editor",
    summary:
      "An online photo book editor supporting drag-and-drop, resizing, and text editing with cross-platform PWA support. Built from scratch to launch in just 6 months.",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    image:
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project shared UI component platform built with Web Components (Stencil.js) for framework-agnostic usage, integrating TailwindCSS + Semantic UI with Storybook documentation.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image:
      "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
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
      "https://cdn.lazy-cv.com/9fb60a2e-e59b-4a28-8cd4-08b44b85d210.png",
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "An integrated loan platform for Hong Kong SMEs, providing bank and government loan information with one-stop applications, using OCR to streamline document management and reduce redundant submissions.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image:
      "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
  },
  {
    name: "FundFluent Partner Portal",
    summary:
      "A management platform for lenders such as banks, enabling them to list and manage loan products and review SME applications.",
    stack: ["React", "NextJS", "TypeScript", "Semantic UI"],
    image:
      "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    url: "https://partner.fundfluent.io",
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

const skillKeywordsRow1 = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "NuxtJS",
  "GraphQL",
  "TailwindCSS",
  "Sass / SCSS",
  "Node.js",
  "Express",
];

const skillKeywordsRow2 = [
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Jest",
  "Cypress",
  "Firebase",
  "Storybook",
  "Webpack",
];

const skillKeywordsRow3 = [
  "Web Component",
  "StencilJS",
  "PWA",
  "Socket.io",
  "i18n",
  "Git",
  "REST API",
  "SEO",
  "Lighthouse",
  "Renovate",
];

const stats = [
  { label: "Years Frontend Exp.", value: 7 },
  { label: "Products Shipped", value: 15 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

/* ────────────────── component ────────────────── */

export default function ExampleResumePageEN() {
  return (
    <TooltipProvider>
      <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/30 text-slate-900">
        {/* background decorations */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.10),transparent_42%)]" />
        <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-48 h-52 w-52 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-[60%] h-64 w-64 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 md:py-14">

          {/* Language Toggle */}
          <div className="flex justify-end">
            <div className="flex gap-2 rounded-lg border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur">
              <span className="rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white">
                EN
              </span>
              <Link href="/example/zh-TW" className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700">
                中文
              </Link>
            </div>
          </div>

          {/* ─────────── Hero / Profile ─────────── */}
          <BlurFade delay={0.1} inView>
            <Card className="relative overflow-hidden border-slate-200 bg-white/90 shadow-sm ring-1 ring-cyan-100/70 backdrop-blur">
              <BorderBeam
                size={120}
                duration={8}
                colorFrom="#06b6d4"
                colorTo="#10b981"
                borderWidth={1.5}
              />
              <CardContent className="grid gap-8 py-8 md:grid-cols-[1.3fr_1fr] md:py-10">
                {/* left */}
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-20 ring-2 ring-cyan-200/80">
                      <AvatarImage
                        src="https://cdn.lazy-cv.com/avatar.jpg"
                        alt="John Hsieh"
                      />
                      <AvatarFallback>JH</AvatarFallback>
                    </Avatar>
                    <div>
                      <TextAnimate
                        as="h1"
                        animation="blurInUp"
                        by="character"
                        className="text-3xl font-bold tracking-tight md:text-5xl"
                      >
                        John Hsieh
                      </TextAnimate>
                      <p className="mt-1 bg-linear-to-r from-cyan-700 via-sky-700 to-emerald-600 bg-clip-text text-lg font-semibold text-transparent md:text-2xl">
                        Senior Frontend Engineer
                      </p>
                    </div>
                  </div>

                  <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                    7 years of frontend development experience, previously at TikTok Singapore
                    and LINE Taiwan as a senior software engineer. Core tech stack includes
                    React (NextJS), Vue (NuxtJS), and TypeScript. Capable of building products
                    from scratch in resource-limited environments, as well as delivering
                    high-quality code in large enterprise settings. Fluent in English, Japanese,
                    and Mandarin Chinese.
                  </p>

                  {/* stats */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-slate-200 bg-linear-to-b from-white to-slate-50 p-3 text-center transition hover:border-cyan-200"
                      >
                        <span className="text-2xl font-bold text-cyan-700 md:text-3xl">
                          <NumberTicker value={s.value} />
                        </span>
                        <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* contact dock */}
                  <div className="flex flex-col items-start gap-2">
                    <p className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="size-4 text-cyan-700" />
                      Singapore
                    </p>
                    <Dock
                      iconSize={36}
                      iconMagnification={52}
                      className="mx-0 mt-1 h-auto border-slate-200 bg-white/80 shadow-sm"
                    >
                      <DockIcon>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href="mailto:a0972199950@gmail.com"
                              className="flex size-full items-center justify-center rounded-full bg-cyan-50 text-cyan-700"
                            >
                              <Mail className="size-5" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>a0972199950@gmail.com</TooltipContent>
                        </Tooltip>
                      </DockIcon>
                      <DockIcon>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href="https://github.com/a0972199950"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex size-full items-center justify-center rounded-full bg-slate-100 text-slate-700"
                            >
                              <Github className="size-5" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>GitHub</TooltipContent>
                        </Tooltip>
                      </DockIcon>
                      <DockIcon>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href="https://www.linkedin.com/in/john-hsieh/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex size-full items-center justify-center rounded-full bg-blue-50 text-blue-700"
                            >
                              <Linkedin className="size-5" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>LinkedIn</TooltipContent>
                        </Tooltip>
                      </DockIcon>
                    </Dock>
                  </div>
                </div>

                {/* right — globe */}
                <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-cyan-50 to-sky-50 md:h-80">
                  <Globe className="top-1/2 -translate-y-1/2" />
                  <div className="absolute inset-x-4 bottom-4 rounded-lg border border-cyan-200 bg-white/85 px-3 py-2 text-center text-xs text-slate-600 backdrop-blur md:text-sm">
                    TikTok Singapore / LINE Taiwan — Cross-border Product Development
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          {/* ─────────── Work Experience ─────────── */}
          <BlurFade delay={0.2} inView>
            <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
                  <Briefcase className="size-5 text-cyan-700" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  {experiences.map((exp, idx) => {
                    const isLeft = idx % 2 === 0;
                    return (
                      <li key={exp.company}>
                        {idx !== 0 && <hr className="bg-cyan-600" />}
                        <div className="timeline-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-cyan-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className={`${isLeft ? "timeline-start md:text-end" : "timeline-end"} mb-10`}>
                          <time className="font-mono text-sm italic text-slate-500">
                            {exp.period}
                          </time>
                          <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm md:p-5 space-y-3">
                            <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                              <Image
                                src={exp.logo}
                                alt={exp.company}
                                width={40}
                                height={40}
                                className="size-10 rounded-lg border border-slate-200 object-contain bg-white p-0.5"
                              />
                              <div>
                                <p className="text-base font-semibold text-slate-900">
                                  {exp.role}
                                </p>
                                <p className="text-sm text-slate-500">
                                  {exp.company}
                                </p>
                              </div>
                            </div>
                            <Separator className="bg-slate-200" />
                            <ul className="grid gap-2 text-start text-sm text-slate-600">
                              {exp.highlights.map((item) => (
                                <li
                                  key={item}
                                  className="inline-flex items-start gap-2"
                                >
                                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {idx !== experiences.length - 1 && <hr className="bg-cyan-600" />}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>

          {/* ─────────── Projects ─────────── */}
          <BlurFade delay={0.3} inView>
            <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
                  <FolderKanban className="size-5 text-cyan-700" />
                  Projects
                </CardTitle>
                <CardDescription>
                  {projects.length} representative projects showcasing product impact and tech stack.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <MagicCard
                    key={project.name}
                    className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                    gradientColor="#e0f2fe"
                    gradientOpacity={0.4}
                    gradientFrom="#06b6d4"
                    gradientTo="#10b981"
                  >
                    {/* project image */}
                    <div className="relative h-36 w-full overflow-hidden bg-linear-to-br from-slate-100 to-sky-50">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-cyan-700 transition-colors"
                            >
                              {project.name} ↗
                            </a>
                          ) : (
                            project.name
                          )}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {project.summary}
                        </p>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <Badge
                            key={`${project.name}-${tech}`}
                            variant="secondary"
                            className="bg-slate-100 text-[11px] text-slate-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </MagicCard>
                ))}
              </CardContent>
            </Card>
          </BlurFade>

          {/* ─────────── Tech Stack Beam ─────────── */}
          <BlurFade delay={0.35} inView>
            <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
                  <Sparkles className="size-5 text-cyan-700" />
                  Tech Stack Visualization
                </CardTitle>
                <CardDescription>
                  Core technologies and their interconnections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
                    <SkillCloud />
                  </div>
                  <FrontendJSBeam />
                  <CSSBeam />
                  <PWABeam />
                  <WebComponentBeam />
                  <BackendBeam />
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          {/* ─────────── Skill Keywords (Marquee) ─────────── */}
          <BlurFade delay={0.4} inView>
            <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
                  <Tags className="size-5 text-cyan-700" />
                  Skill Keywords
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:30s]">
                  {skillKeywordsRow1.map((kw) => (
                    <Badge
                      key={kw}
                      variant="outline"
                      className="border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 whitespace-nowrap"
                    >
                      {kw}
                    </Badge>
                  ))}
                </Marquee>
                <Marquee pauseOnHover reverse className="[--duration:35s]">
                  {skillKeywordsRow2.map((kw) => (
                    <Badge
                      key={kw}
                      variant="outline"
                      className="border-cyan-200 bg-cyan-50/50 px-3 py-1.5 text-sm text-cyan-800 whitespace-nowrap"
                    >
                      {kw}
                    </Badge>
                  ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:32s]">
                  {skillKeywordsRow3.map((kw) => (
                    <Badge
                      key={kw}
                      variant="outline"
                      className="border-emerald-200 bg-emerald-50/50 px-3 py-1.5 text-sm text-emerald-800 whitespace-nowrap"
                    >
                      {kw}
                    </Badge>
                  ))}
                </Marquee>
              </CardContent>
            </Card>
          </BlurFade>

          {/* ─────────── Education & Certs ─────────── */}
          <BlurFade delay={0.45} inView>
            <Card className="relative overflow-hidden border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
              <ShineBorder
                shineColor={["#06b6d4", "#10b981", "#6366f1"]}
                borderWidth={1}
                duration={10}
              />
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
                  <GraduationCap className="size-5 text-cyan-700" />
                  Education & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* education */}
                <div>
                  <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                    <BookOpenText className="size-4 text-cyan-700" />
                    Education
                  </p>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-200 hover:bg-transparent">
                        <TableHead className="text-slate-600">
                          Institution
                        </TableHead>
                        <TableHead className="text-slate-600">
                          Degree / Program
                        </TableHead>
                        <TableHead className="text-right text-slate-600">
                          Period
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">
                          Soochow University
                        </TableCell>
                        <TableCell className="text-slate-600">
                          Bachelor of Arts — Japanese Language & Literature
                        </TableCell>
                        <TableCell className="text-right text-slate-500">
                          2013 - 2017
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">
                          Doshisha University, Kyoto
                        </TableCell>
                        <TableCell className="text-slate-600">
                          Exchange Program — Japanese Language & Culture
                        </TableCell>
                        <TableCell className="text-right text-slate-500">
                          2016.03 - 2016.08
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <Separator className="bg-slate-200" />

                {/* certifications */}
                <div>
                  <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                    <BadgeCheck className="size-4 text-emerald-600" />
                    Certifications
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-cyan-200">
                      <Image
                        src="https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png"
                        alt="JLPT N1"
                        width={48}
                        height={48}
                        className="size-12 rounded-md border border-slate-200 object-contain bg-white p-0.5"
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          JLPT N1 (Japanese)
                        </p>
                        <p className="text-xs text-slate-500">
                          Highest level — Business conversation proficiency
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-cyan-200">
                      <div className="flex size-12 items-center justify-center rounded-md border border-slate-200 bg-white text-cyan-700">
                        <GraduationCap className="size-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          NTU Extension Program
                        </p>
                        <p className="text-xs text-slate-500">
                          Web Development Technology Course
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-200" />

                {/* language */}
                <div>
                  <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                    <Sparkles className="size-4 text-cyan-700" />
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-cyan-100 px-3 py-1.5 text-cyan-800">
                      Mandarin Chinese — Native
                    </Badge>
                    <Badge className="bg-rose-100 px-3 py-1.5 text-rose-800">
                      Japanese — Business (JLPT N1)
                    </Badge>
                    <Badge className="bg-indigo-100 px-3 py-1.5 text-indigo-800">
                      English — Professional Working
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </main>
    </TooltipProvider>
  );
}
