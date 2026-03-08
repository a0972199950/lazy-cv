import type { Metadata } from "next";
import Image from "next/image";
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
import { SkillCloud } from "./skill-cloud";
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "./skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | 資深前端工程師",
  description:
    "7 年前端開發經驗，曾任職 TikTok Singapore 與 LINE Taiwan，專精 React / Next.js / TypeScript。",
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
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "隸屬 User Growth 團隊，負責廣告投放財務系統開發。",
      "使用 React 與公司內部框架，處理廣告投放財務流程與數據分析。",
      "參與系統優化，提升廣告營收追蹤的準確性。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "日常開發 LINE 購物，技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS app router 架構。",
      "參與 JSTF 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量。",
      "擔任 Mentor 指導 2 位新人，獲得正向回饋。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自負責開發線上相片書編輯器，支援拖曳、尺寸調整、文字編輯等功能。",
      "從零規劃技術架構，使用 Vue + NuxtJS，6 個月內完成產品上線。",
      "支援 PWA 安裝，提供類原生 APP 的體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構與技術選型。",
      "使用 React / NextJS + TypeScript + TailwindCSS 開發面向香港市場的中小企貸款平台。",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理前端團隊 2 人。",
      "開發整合內部 AI 微服務的 2B 管理平台。",
      "技術棧涵蓋 NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
    ],
  },
  {
    company: "電獺 Aotter",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "專案導向團隊，每項專案配置約 4 人，快速迭代產品。",
      "使用 Nuxt 生態系 + TypeScript + TailwindCSS，搭配 Docker + K8s CI/CD 流程。",
      "開發 SuprLink 縮網址服務、Aotter Trek DSP 廣告平台等自有及外部專案。",
      "注重 UI/UX 設計還原度，為每個專案量身訂做 TailwindCSS 小型 UI 框架。",
    ],
  },
  {
    company: "第三緯度科技",
    role: "Frontend Engineer",
    period: "2019.04 - 2019.06",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "使用 Vue + PHP 前後端分離架構開發。",
      "串接微信支付金流系統。",
    ],
  },
  {
    company: "日商優橋",
    role: "數位廣告優化師 & Frontend Engineer",
    period: "2017.12 - 2019.03",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "初期擔任數位廣告優化師，管理 Facebook / Google Ads，運用 A/B testing 與 Heatmap 優化 UX。",
      "後期轉任前端工程師兼 PM，為代理產品架設官方網站與活動頁面。",
      "管理前端團隊 2 人，使用日文作為主要工作語言。",
      "建立 UI/UX 素養，對前端開發生涯奠定基礎。",
    ],
  },
  {
    company: "亞洲遊",
    role: "日本市場業務及營運",
    period: "2016.09 - 2017.09",
    logo: "https://images.cakeresume.com/JdjNy/john_hsieh/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "負責接洽日本旅宿房源並協助上架到公司平台。",
      "擔任對日翻譯窗口，協助消費者排除旅日中緊急狀況。",
      "2017 年度預約筆數達 8,846，與前年比成長 376%。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋。集結第三方電商的購物入口網站，提供搜尋、比價與分享功能。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/1da75a22-2c28-4bbc-baef-1ec66ee781bb.png",
    url: "https://buy.line.me",
  },
  {
    name: "CMS 重構 NextJS",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS app router 架構，帶領 4 人團隊完成前後端分離。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
  },
  {
    name: "AI.Book 相簿編輯器",
    summary:
      "線上相片書編輯器，支援照片拖曳/尺寸調整/文字編輯，跨平台支援含 PWA 安裝體驗。從零規劃到上線僅 6 個月。",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
  },
  {
    name: "SuprLink 超級連結",
    summary:
      "從 A/B 分流到數據分析，再到廣告投放一氣呵成的縮網址服務。",
    stack: ["NuxtJS", "TypeScript", "TailwindCSS", "Docker", "K8s"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/a14d9a80-45b9-4943-a043-49dacb460bb9.png",
    url: "https://supr.link",
  },
  {
    name: "Aotter Trek DSP 平台",
    summary:
      "結合大數據分析的廣告投放 DSP 平台，使用大量圖表介面為使用者找出最適合的廣告 TA。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
  },
  {
    name: "JavaScript Task Force",
    summary:
      "LINE Taiwan 跨團隊專案小組，負責制定全公司前端開發準則。研究導入 SonarQube、Lighthouse CI、OpenTel 前端監控、React 專案 template 生成器等。",
    stack: ["SonarQube", "Lighthouse CI", "OpenTel", "React"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/9fb60a2e-e59b-4a28-8cd4-08b44b85d210.png",
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台，提供銀行與政府貸款資訊、一站式申請，並透過 OCR 技術整理文件以降低重複提交成本。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
  },
  {
    name: "FundFluent Partner Portal",
    summary:
      "面向銀行等放貸方的管理平台，可上架、整理各項貸款專案，以及審核來自中小企的申請案件。",
    stack: ["React", "NextJS", "TypeScript", "Semantic UI"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    url: "https://partner.fundfluent.io",
  },
  {
    name: "Chrome Extension - SuprLink",
    summary:
      "快速在 SuprLink 超級連結產生縮網址的 Chrome 擴充工具。",
    stack: ["Chrome Extension", "JavaScript"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/7b907335-af65-43cc-9ea2-b9ae4d2c80f0.png",
  },
  {
    name: "資策會 城市儀表板",
    summary:
      "收集分散各地的政府數據於同一平台展示的政府資料數據庫，具備可高度客製化的圖表及資料篩選模組。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "TailwindCSS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/0a002690-85c9-4bcf-bb72-9cebf81788ae.png",
  },
  {
    name: "beanfun! 數據管理中心",
    summary:
      "擁有各種圖表的集中數據 Dashboard，用以顯示企業內部各項指標。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/de995dc8-088c-430b-ba29-33fd2b364ced.png",
  },
  {
    name: "俏樂斯 官方網站",
    summary:
      "日本沖繩保養品俏樂斯的台灣官方網站，負責設計規劃與前端開發。",
    stack: ["PHP", "jQuery", "CSS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/b2a0eaa9-55f5-4482-bd20-c4c574b5d7d7.png",
  },
  {
    name: "髮樂活",
    summary:
      "美髮保養的內容型自媒體網站。",
    stack: ["WordPress", "PHP", "CSS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/2b1c2e88-9b0e-4bf8-98ee-f955391ba10f.png",
  },
  {
    name: "日本嚴選",
    summary:
      "專接業配的日系產品推薦部落格。",
    stack: ["WordPress", "PHP", "CSS"],
    image:
      "https://images.cakeresume.com/JdjNy/john_hsieh/12da9319-3e54-419e-b6c2-1044360f7b7a.png",
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
  { label: "年前端經驗", value: 7 },
  { label: "個完整產品", value: 15 },
  { label: "人團隊管理", value: 4 },
  { label: "種語言能力", value: 3 },
];

/* ────────────────── component ────────────────── */

export default function ExampleResumePage() {
  return (
    <TooltipProvider>
      <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/30 text-slate-900">
        {/* background decorations */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.10),transparent_42%)]" />
        <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-48 h-52 w-52 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-[60%] h-64 w-64 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 md:py-14">

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
                        src="https://images.cakeresume.com/JdjNy/john_hsieh/d2fa98b2-4370-41a2-878a-2b1a741e63d9.png"
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
                    擔任資深軟體工程師。常用技術架構為 React (NextJS)、Vue (NuxtJS) 及
                    TypeScript。具備在資源有限環境下從零規劃到產品上線的能力，也能在大型企業嚴謹環境中開發高品質程式。流利使用英、日、中三種語言。
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
                  {projects.length} 個代表性專案，展示產品影響力與技術棧。
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
                  技術棧可視化
                </CardTitle>
                <CardDescription>
                  核心技術與周邊能力的連結關係圖。
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
                  技能關鍵字
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
                        <TableHead className="text-slate-600">
                          學校
                        </TableHead>
                        <TableHead className="text-slate-600">
                          學位 / 性質
                        </TableHead>
                        <TableHead className="text-right text-slate-600">
                          期間
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">
                          東吳大學
                        </TableCell>
                        <TableCell className="text-slate-600">
                          文學士 (BA) — 日本語文學系
                        </TableCell>
                        <TableCell className="text-right text-slate-500">
                          2013 - 2017
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-slate-200 hover:bg-cyan-50/45">
                        <TableCell className="text-slate-800">
                          京都同志社大學
                        </TableCell>
                        <TableCell className="text-slate-600">
                          交換留學 — 日本語及文化
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
                    證書與認證
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-cyan-200">
                      <Image
                        src="https://images.cakeresume.com/JdjNy/john_hsieh/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png"
                        alt="JLPT N1"
                        width={48}
                        height={48}
                        className="size-12 rounded-md border border-slate-200 object-contain bg-white p-0.5"
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          日文檢定 JLPT N1
                        </p>
                        <p className="text-xs text-slate-500">
                          最高級認證 — 商業會談程度
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-cyan-200">
                      <div className="flex size-12 items-center justify-center rounded-md border border-slate-200 bg-white text-cyan-700">
                        <GraduationCap className="size-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          台大資訊推廣部
                        </p>
                        <p className="text-xs text-slate-500">
                          網頁開發技術課程
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
