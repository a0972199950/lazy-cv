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

export const metadata: Metadata = {
  title: "John Hsieh | Senior Frontend Engineer — SWAG",
  description:
    "7 years of frontend experience specializing in React / Next.js / TypeScript / SSR / PWA / SEO. Previously at TikTok Singapore and LINE Taiwan.",
  openGraph: { images: ["/avatar.jpg"] },
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
      "Part of the User Growth team, developing ad delivery financial systems using React and internal frameworks.",
      "Optimized ad revenue tracking systems, handling large-scale data rendering performance on the frontend.",
      "Collaborated cross-functionally with PM and Design teams on product requirements.",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer / Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "Developed LINE Shopping with Vue SSR + GraphQL + TypeScript + ExpressJS, focusing on performance and SEO optimization.",
      "Led a team of 4 as Team Leader, spearheading CMS refactoring from PHP to NextJS App Router architecture, achieving front-back end separation.",
      "Participated in JSTF to define company-wide frontend development guidelines, integrating Lighthouse CI into CI/CD pipelines for automated performance measurement.",
      "Mentored 2 new engineers, receiving positive feedback.",
      "Enforced strict code review practices, upholding the principle of 'every line must be reviewed before merging.'",
    ],
  },
  {
    company: "AI.Book",
    role: "Frontend Engineer (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "Independently built an online photo book editor supporting drag-and-drop, resizing, text editing, and PWA installation.",
      "Leveraged Service Worker + Cache Storage + IndexedDB to improve page responsiveness and offline experience.",
      "Planned the entire technical architecture from scratch using Vue + NuxtJS, delivering the product within 6 months.",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "Joined at inception, planning frontend architecture and tech stack from scratch with React / NextJS + TypeScript + TailwindCSS.",
      "Designed a cross-project UI component library using Web Components (Stencil.js), framework-agnostic and published to private NPM.",
      "Developed i18n-supported SME Portal and Partner Portal for the Hong Kong market.",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "Served as a full-stack engineer in a new AI team, managing a 2-person frontend team.",
      "Built B2B management platforms using NuxtJS / NextJS + TypeScript + MongoDB + Redis.",
      "Actively explored new technologies, planning integration of GraphQL and NestJS.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE Shopping",
    summary:
      "LINE's affiliate commerce service built with Vue SSR + GraphQL + ExpressJS. The team prioritized performance optimization (Critical Rendering Path, INP) and SEO (og headers, canonical, ld+json).",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SEO"],
    image: "https://cdn.lazy-cv.com/1da75a22-2c28-4bbc-baef-1ec66ee781bb.png",
    url: "https://buy.line.me",
  },
  {
    name: "CMS Refactoring to NextJS (Leader)",
    summary:
      "Led the refactoring of LINE Shopping CMS from PHP to React & NextJS App Router architecture, guiding a team of 4 to achieve front-back end separation. Responsible for tech-stack decisions, scheduling, internal training, and risk assessment.",
    stack: ["React", "NextJS App Router", "TypeScript", "Redux"],
    image: "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
  },
  {
    name: "AI.Book Photo Book Editor",
    summary:
      "Built an online photo book editor from scratch supporting drag-and-drop, text editing, cross-platform use, and PWA installation. Utilized Service Worker + Cache Storage + IndexedDB for offline experience.",
    stack: ["Vue", "NuxtJS", "PWA", "Service Worker", "IndexedDB"],
    image: "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
  },
  {
    name: "JavaScript Task Force",
    summary:
      "A cross-team initiative at LINE Taiwan to establish company-wide frontend development guidelines. Introduced Lighthouse CI for automated performance measurement, SonarQube for static analysis, and OpenTel for frontend monitoring.",
    stack: ["Lighthouse CI", "SonarQube", "OpenTel", "GitHub Actions"],
    image: "https://cdn.lazy-cv.com/9fb60a2e-e59b-4a28-8cd4-08b44b85d210.png",
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "A cross-project UI component platform using Web Components (Stencil.js) to build framework-agnostic components, integrated with TailwindCSS + Semantic UI and documented via Storybook.",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
  },
  {
    name: "SuprLink",
    summary:
      "A URL shortening service featuring A/B testing, data analytics, and ad delivery. Deployed with Docker + K8s CI/CD pipeline and GitHub workflow automation.",
    stack: ["NuxtJS", "TypeScript", "Docker", "K8s", "CI/CD"],
    image: "https://cdn.lazy-cv.com/a14d9a80-45b9-4943-a043-49dacb460bb9.png",
    url: "https://supr.link",
  },
];

const skillKeywordsRow1 = [
  "React",
  "Redux",
  "Next.js App Router",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Vue",
  "SSR",
  "Express",
];

const skillKeywordsRow2 = [
  "PWA",
  "Service Worker",
  "SEO",
  "i18n",
  "IndexedDB",
  "Cookie",
  "localStorage",
  "Cache Control",
  "CDN Cache",
  "Performance",
];

const skillKeywordsRow3 = [
  "Webpack",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "Socket.io",
  "GraphQL",
  "Node.js",
  "TailwindCSS",
  "Lighthouse",
  "Push Notification",
];

const stats = [
  { label: "Years Frontend Exp.", value: 7 },
  { label: "Products Shipped", value: 15 },
  { label: "Team Members Led", value: 4 },
  { label: "Languages Spoken", value: 3 },
];

/* ────────────────── component ────────────────── */

export default function SwagResumePageEN() {
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
              <Link href="/019cccd2-7617-712a-942a-18db62b36dd3/zh-TW" className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700">
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
                        src="https://cdn.lazy-cv.com/107453(1).jpg"
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
                    7 years of frontend development experience, previously served as a Senior Software Engineer
                    at TikTok Singapore and LINE Taiwan. Proficient in React (NextJS App Router), Vue (NuxtJS),
                    and TypeScript, with extensive hands-on experience in SSR, performance optimization
                    (Critical Rendering Path, INP, Intersection Observer), PWA (Service Worker, Push Notification),
                    and SEO (og headers, canonical, ld+json). Skilled at independently developing features
                    and debugging in fast-paced environments, with experience leading teams and mentoring junior engineers.
                    Fluent in English, Japanese, and Mandarin.
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
                  {projects.length} selected projects highly relevant to the position.
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

          {/* ─────────── Skill Keywords (Marquee) ─────────── */}
          <BlurFade delay={0.4} inView>
            <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
                  <Tags className="size-5 text-cyan-700" />
                  Skills & Keywords
                </CardTitle>
                <CardDescription>
                  ATS-optimized technical keywords covering Frameworks, Languages, and Tools.
                </CardDescription>
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
                        <TableHead className="text-slate-600">School</TableHead>
                        <TableHead className="text-slate-600">Degree / Type</TableHead>
                        <TableHead className="text-right text-slate-600">Period</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">Soochow University</TableCell>
                        <TableCell className="text-slate-600">B.A. — Japanese Language & Literature</TableCell>
                        <TableCell className="text-right text-slate-500">2013 - 2017</TableCell>
                      </TableRow>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">Doshisha University, Kyoto</TableCell>
                        <TableCell className="text-slate-600">Exchange Student — Japanese Language & Culture</TableCell>
                        <TableCell className="text-right text-slate-500">2016.03 - 2016.08</TableCell>
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
                        <p className="text-sm font-medium text-slate-800">JLPT N1 — Japanese Language</p>
                        <p className="text-xs text-slate-500">Highest level — Business-level proficiency</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-cyan-200">
                      <div className="flex size-12 items-center justify-center rounded-md border border-slate-200 bg-white text-cyan-700">
                        <GraduationCap className="size-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">NTU Extension Education</p>
                        <p className="text-xs text-slate-500">Web Development Technologies</p>
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
                      Mandarin — Native
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
