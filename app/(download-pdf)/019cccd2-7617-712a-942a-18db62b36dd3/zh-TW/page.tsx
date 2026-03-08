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
  title: "John Hsieh | 資深前端工程師 — SWAG",
  description:
    "7 年前端開發經驗，精通 React / Next.js / TypeScript / SSR / PWA / SEO，曾任職 TikTok Singapore 與 LINE Taiwan。",
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
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "隸屬 User Growth 團隊，負責廣告投放財務系統開發，使用 React 與公司內部框架。",
      "優化廣告營收追蹤系統，處理大規模數據的前端渲染效能。",
      "參與跨團隊協作，與 PM 及 Design 團隊緊密溝通產品需求。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer / Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發 LINE 購物，技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS，注重效能與 SEO 優化。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS App Router 架構，實現前後端分離。",
      "參與 JSTF 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量至 CI/CD 流程。",
      "擔任 Mentor 指導 2 位新進工程師，獲得正向回饋。",
      "嚴格執行內部程式碼審核，落實「每一行程式碼 merge 前都要有另一個人看過」的核心理念。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨立開發線上相片書編輯器，支援拖曳、尺寸調整、文字編輯及 PWA 安裝體驗。",
      "活用 Service Worker + Cache Storage + IndexedDB 提升頁面回應速度與離線體驗。",
      "從零規劃技術架構，使用 Vue + NuxtJS，6 個月內完成產品上線。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構與技術選型，使用 React / NextJS + TypeScript + TailwindCSS。",
      "規劃跨專案共用 UI 組件庫，使用 Web Component (Stencil.js) 打造不受框架限制的元件，部署到 private NPM。",
      "開發支援 i18n 的 SME Portal 及 Partner Portal，面向香港市場。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理 2 人前端團隊。",
      "使用 NuxtJS / NextJS + TypeScript + MongoDB + Redis 開發 2B 管理平台。",
      "積極探索新技術選型，規劃導入 GraphQL 及 NestJS。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，使用 Vue SSR + GraphQL + ExpressJS 開發。團隊高度注重效能優化（Critical Rendering Path、INP）與 SEO（og headers、canonical、ld+json）。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SEO"],
    image: "https://cdn.lazy-cv.com/1da75a22-2c28-4bbc-baef-1ec66ee781bb.png",
    url: "https://buy.line.me",
  },
  {
    name: "CMS 重構 NextJS (Leader)",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS App Router 架構，帶領 4 人團隊完成前後端分離。負責技術選型、時程規劃、內訓及風險評估。",
    stack: ["React", "NextJS App Router", "TypeScript", "Redux"],
    image: "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
  },
  {
    name: "AI.Book 相簿編輯器",
    summary:
      "從零打造線上相片書編輯器，支援拖曳調整、文字編輯、跨平台及 PWA 安裝。活用 Service Worker + Cache Storage + IndexedDB 實現離線體驗。",
    stack: ["Vue", "NuxtJS", "PWA", "Service Worker", "IndexedDB"],
    image: "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
  },
  {
    name: "JavaScript Task Force",
    summary:
      "LINE Taiwan 跨團隊專案小組，負責制定全公司前端開發準則。導入 Lighthouse CI 自動化效能評量、SonarQube 靜態分析、OpenTel 前端監控。",
    stack: ["Lighthouse CI", "SonarQube", "OpenTel", "GitHub Actions"],
    image: "https://cdn.lazy-cv.com/9fb60a2e-e59b-4a28-8cd4-08b44b85d210.png",
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
  },
  {
    name: "SuprLink 超級連結",
    summary:
      "從 A/B 分流到數據分析，再到廣告投放一氣呵成的縮網址服務。搭配 Docker + K8s CI/CD 流程及 GitHub workflow 自動化部署。",
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
  { label: "年前端經驗", value: 7 },
  { label: "個完整產品", value: 15 },
  { label: "人團隊管理", value: 4 },
  { label: "種語言能力", value: 3 },
];

/* ────────────────── component ────────────────── */

export default function SwagResumePageZhTW() {
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
              <Link href="/019cccd2-7617-712a-942a-18db62b36dd3/en" className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700">
                EN
              </Link>
              <span className="rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white">
                中文
              </span>
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
                        資深前端工程師
                      </p>
                    </div>
                  </div>

                  <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                    7 年前端開發經驗，曾任職於 TikTok Singapore 與 LINE Taiwan
                    擔任資深軟體工程師。精通 React (NextJS App Router)、Vue (NuxtJS) 及
                    TypeScript，具備豐富的 SSR、效能優化（Critical Rendering Path、INP、Intersection Observer）、
                    PWA（Service Worker、Push Notification）及 SEO（og headers、canonical、ld+json）實戰經驗。
                    擅長在快速迭代的環境中獨立開發新功能與除錯，並有帶領團隊及指導新人的經驗。
                    流利使用英、日、中三種語言。
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
                    TikTok Singapore / LINE Taiwan — 跨國產品開發經驗
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
                  工作經歷
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
                  專案介紹
                </CardTitle>
                <CardDescription>
                  精選 {projects.length} 個與職缺高度相關的代表性專案。
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
                  技能關鍵字
                </CardTitle>
                <CardDescription>
                  針對 ATS 篩選優化的技術關鍵字，涵蓋 Frameworks、Languages 與 Tools。
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
                  學歷與證書
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* education */}
                <div>
                  <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                    <BookOpenText className="size-4 text-cyan-700" />
                    學歷
                  </p>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-200 hover:bg-transparent">
                        <TableHead className="text-slate-600">學校</TableHead>
                        <TableHead className="text-slate-600">學位 / 性質</TableHead>
                        <TableHead className="text-right text-slate-600">期間</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">東吳大學</TableCell>
                        <TableCell className="text-slate-600">文學士 (BA) — 日本語文學系</TableCell>
                        <TableCell className="text-right text-slate-500">2013 - 2017</TableCell>
                      </TableRow>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">京都同志社大學</TableCell>
                        <TableCell className="text-slate-600">交換留學 — 日本語及文化</TableCell>
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
                    證書與認證
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
                        <p className="text-sm font-medium text-slate-800">日文檢定 JLPT N1</p>
                        <p className="text-xs text-slate-500">最高級認證 — 商業會談程度</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-cyan-200">
                      <div className="flex size-12 items-center justify-center rounded-md border border-slate-200 bg-white text-cyan-700">
                        <GraduationCap className="size-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">台大資訊推廣部</p>
                        <p className="text-xs text-slate-500">網頁開發技術課程</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-200" />

                {/* language */}
                <div>
                  <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                    <Sparkles className="size-4 text-cyan-700" />
                    語言能力
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-cyan-100 px-3 py-1.5 text-cyan-800">
                      中文 — 母語
                    </Badge>
                    <Badge className="bg-rose-100 px-3 py-1.5 text-rose-800">
                      日文 — 商業會談 (JLPT N1)
                    </Badge>
                    <Badge className="bg-indigo-100 px-3 py-1.5 text-indigo-800">
                      英文 — 流暢職場溝通
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
