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
import { SkillCloud } from "../skill-cloud";
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | 軟體工程師 — Stripe Money as a Service",
  description:
    "7 年軟體工程經驗，曾任職 TikTok Singapore 與 LINE Taiwan，專精 React / TypeScript / Node.js — 應徵 Stripe Software Engineer, Money as a Service",
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
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "隸屬 User Growth 團隊，負責投放公司產品廣告到各大 DSP 平台，以增加 TikTok 等 APP 的用戶數量。",
      "負責廣告投放的財務結算系統開發——涵蓋帳單、發票與對帳功能，使用 React、monorepo 與公司自研框架架設前端微服務系統。",
      "帶領開發團隊導入 Scrum：利用 retrospective 建立團隊自我糾錯機制，利用 refinement 解決成員各自為政的問題，並平衡工作量與提升 PM 對時程的掌握度。",
      "建立 Web Worker 多執行緒 CSV 校驗系統，使用 Comlink (RPC 通訊)，大規模數據處理中 UI 卡頓時間減少 90%。",
      "建立函數快取工具 (cache/cacheMany)，模仿 React useMemo 的設計，在一個一次渲染 500 個表單的介面中，Total Blocking Time 降低 98%。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發 LINE 購物——服務數百萬用戶的大型電商平台，技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS App Router 架構，透過 iframe 微前端方式進行漸進式 URL 遷移。",
      "參與 JavaScript Task Force 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量。",
      "擔任 Mentor 指導 2 位新人，獲得正向回饋。主導內部 NextJS 教學論壇，引導新人上手。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自開發線上相片書編輯器，支援拖曳、尺寸調整、文字編輯等功能，使用 Vue + NuxtJS。",
      "從零規劃技術架構，6 個月內完成產品上線。",
      "支援 PWA 安裝，提供類原生 APP 的體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構，為面向香港中小企的金融科技借貸平台做技術選型。",
      "使用 React / NextJS + TypeScript + TailwindCSS 開發 SME Portal 與 Partner Portal，包含 OCR 文件處理功能。",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM，實現跨框架複用。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理前端團隊 2 人。",
      "開發整合內部 AI 微服務的 2B 管理平台。",
      "技術棧涵蓋 NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
    ],
  },
  {
    company: "電獺股份有限公司 (Aotter)",
    role: "前端工程師",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "在數位廣告與媒體科技公司中參與多元接案開發——包括 SuprLink 短網址服務（含 A/B 測試與數據分析）、Aotter Trek 廣告分析平台，以及政府與企業級數據儀表板。",
      "專案導向的小型團隊（PM + UI + 前後端，約 4 人），執行快速 Scrum 迭代，同時管理多個並行專案。",
      "使用 TailwindCSS 為每個專案量身打造 CSS 框架，確保 UI 還原度；強調程式碼的可複用性與可擴展性。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG 海外增長業務平台",
    summary:
      "TikTok 大型企業級 Monorepo 前端專案，服務線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域，管理 50+ 子專案，百萬級程式碼規模。我專注於採購與結算相關模組的開發與維護。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態表單渲染的複雜表單互動元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "針對財務報價等場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "透過自研框架實現子應用動態載入的微前端整合，支援按需載入業務模組與獨立開發部署",
      "採用 Ferry + Thrift IDL 生成強型別 Service 程式碼，保障前後端協議一致性",
    ],
    contributions: [
      "Web Worker 多執行緒 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊——減少 90% UI 卡頓時間",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany 工具——在一次渲染 500 個表單 UI 的介面中降低 98% Total Blocking Time (TBT)",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統。結合 AI Agent 與 Next.js 16，只需提供職缺連結即可自動抓取 JD 並生成量身定做的中英文雙語履歷網頁。整個專案從零到上線僅花費 2 天。本履歷就是用此專案自動生成的。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output，採用輕量 Docker Image 打包",
      "AI Agent 自動化 SOP：透過 Chrome DevTools MCP 自動爬取 JD，實現端到端履歷生成流程",
      "Serverless 部署架構：ECR → Lambda Web Adapter，S3 + CloudFront CDN，GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM 實現 type-safe 資料存取",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，服務數百萬用戶，經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋。技術棧 Vue SSR + GraphQL + TypeScript。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨自開發「直播購物」功能：參考 YouTube 影片流自動預覽機制，設計了一套可覆用影片自動預覽模組，透過全局調度器解決高速捲動下影片預覽混亂及單頁面過多直播源造成記憶體暴增的技術難點",
    ],
  },
  {
    name: "CMS 重構 NextJS",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS App Router 架構，帶領 4 人團隊完成前後端分離。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微服務，新老專案可獨立佈署與上線，透過 URL 漸進式遷移",
      "公司早期採用 Next App Router 的專案之一",
    ],
    contributions: [
      "除了寫程式外，還擔任架構師規畫整個專案，同時兼任 PM——分派工作、撰寫技術文件、與使用者溝通",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台，提供銀行與政府貸款資訊、一站式申請，並透過 OCR 技術整理文件以降低重複提交成本。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "從零開始獨立開發金融科技借貸平台",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI 組件使用 Stencil 搭建 web components，不受前端框架限制，可跨 React/Vue 專案複用",
      "透過 Tailwind + Semantic UI 構建 design system，透過 Storybook 展示組件",
      "使用 monorepo 區分組件庫與業務程式，組件庫可單獨發布測試",
    ],
    contributions: [
      "從零開始單獨開發",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "Node.js", "Express", "REST API", "gRPC"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Microservices", "Monorepo"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Web Worker", "Jest", "Cypress", "Storybook", "Webpack", "Vite", "TailwindCSS", "Sass", "ECharts", "D3.js"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Scrum", "Agile", "微前端", "Web Component", "PWA", "i18n", "Lighthouse", "SEO", "Drizzle ORM", "Framer Motion"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "年軟體工程經驗", value: 7 },
  { label: "個完整產品", value: 18 },
  { label: "人團隊管理", value: 4 },
  { label: "種語言能力", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "東吳大學", degree: "文學士 (BA) — 日本語文學系", period: "2013 - 2017" },
  { institution: "京都同志社大學", degree: "交換留學 — 日本語及文化", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "日文檢定 JLPT N1", description: "最高級認證 — 商業會談程度", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "台大資訊推廣部", description: "網頁開發技術課程" },
];

const languages: LanguageItem[] = [
  { name: "中文 — 母語", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "日文 — 商業會談 (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "英文 — 流暢職場溝通", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function StripeResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019d7001-14fb-77ac-bf30-85d84434cb79/en" },
        { locale: "zh-TW", label: "中文", href: "/019d7001-14fb-77ac-bf30-85d84434cb79/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="軟體工程師"
        description={`7 年軟體工程經驗，目前任職於 TikTok Singapore，負責開發 User Growth 業務線的財務結算系統——涵蓋帳單、發票與對帳功能，處理全球規模的廣告投放金流。此前在 LINE Taiwan 任職 3 年，開發服務數百萬用戶的大型電商平台。我具備 React、TypeScript、Node.js 及微服務架構的深厚經驗，並有實績優化系統效能（UI 卡頓減少 90%、TBT 降低 98%）。

除了個人交付之外，我同樣重視團隊成長。在 LINE Taiwan 期間，我擔任 Mentor 帶領 2 位新進工程師，均獲得正面回饋；在 TikTok，我主導團隊導入 Scrum 敏捷流程。我擅長跨職能協作，相信優秀的團隊才能打造優秀的產品。

我也具備高度自主與創業精神的實戰經驗。作為外包工程師，我獨立從零開發 AI.Book 的線上相簿編輯器，6 個月內完成產品上線；同時為金融科技新創 FundFluent 打造完整前端平台——包含 UI Kit、SME Portal 與 Partner Portal。這些經歷鍛鍊了我端到端獨立交付的能力。

驅動我的核心動力是打造真正讓使用者感到愉悅的系統——無論是面向開發者的 API，還是面向消費者的編輯器，我都在「將複雜流程變得簡單直覺」中獲得最大的成就感。我相信這與 Stripe「提升網際網路 GDP」的使命高度契合。

我能為 Stripe 的 Money as a Service 團隊帶來的價值包括：金融結算平台的實戰經驗、獨立規劃並交付複雜功能的能力，以及三語溝通能力（英語、日語、中文）——這對於拓展 Stripe 在亞太區的 Global Payouts 及 Treasury Network 尤為關鍵。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個精選專案，展示產品影響力與技術深度。`}
        projects={projects}
        highlightsLabel="技術亮點"
        contributionsLabel="重大貢獻"
      />

      <TechStackVisualization title="技術棧可視化" description="核心技術與周邊能力的連結關係圖。">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <FrontendJSBeam />
        <CSSBeam />
        <PWABeam />
        <WebComponentBeam />
        <BackendBeam />
      </TechStackVisualization>

      <SkillKeywords title="技能關鍵字" rows={skillKeywordRows} />

      <EducationCerts
        sectionTitle="學歷與證書"
        educationLabel="學歷"
        educationHeaders={{ institution: "學校", degree: "學位 / 性質", period: "期間" }}
        educations={educations}
        certLabel="證書與認證"
        certifications={certifications}
        languageLabel="語言能力"
        languages={languages}
      />
    </ResumeLayout>
  );
}
