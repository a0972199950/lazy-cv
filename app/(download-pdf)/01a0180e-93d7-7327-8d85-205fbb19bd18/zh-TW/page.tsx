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
  title: "John Hsieh | 資深前端工程師 — Workato AI Lab",
  description:
    "7 年前端開發經驗，專精 React / Next.js / TypeScript，具備效能優化、可覆用組件系統與大型企業前端交付實績。應徵 Workato Senior Frontend (UI) Software Engineer (AI Lab)。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a0180e-93d7-7327-8d85-205fbb19bd18/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 50+ 子專案、百萬行程式碼規模的企業級 Monorepo 中主導廣告財務結算平台開發，技術棧為 React 17、TypeScript、Rush Monorepo 與自研微前端框架",
      "基於 JSON Schema 動態表單渲染引擎開發大量業務表單元件，涵蓋級聯選擇、動態欄位、條件顯示等複雜互動與校驗場景",
      "建立模仿 React useMemo 的 cache/cacheMany 快取工具，消除 500 個表單頁面的重複 Schema 計算，降低 98% Total Blocking Time (TBT)",
      "透過 Comlink RPC 將 CSV 校驗任務移至 Web Worker 執行，搭配 Yup + Regex Schema，減少 10 筆資料流程的 90% UI 卡頓時間，並抽象為可覆用的共用工具",
      "帶領開發團隊導入 Scrum：以 retrospective 建立自我糾錯機制、以 refinement 打破各自為政，並平衡工作量，提升 PM 對時程的掌握度",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發並維護 LINE 購物（Vue SSR + GraphQL + TypeScript + ExpressJS 全端專案）——獨立設計可覆用影片自動預覽模組，透過全局調度器解決高速捲動下的預覽混亂並消除多直播源並發的記憶體暴增問題",
      "帶領 4 人團隊主導 CMS 從 PHP 遷移至 Next.js App Router，同時兼任架構師與 PM，達成前後端完全分離",
      "投入 JSTF 跨團隊小組制定全公司前端開發準則；導入 Lighthouse CI，讓每次 PR 自動量測前端效能",
      "指導 2 位新進工程師並獲得正向回饋，主導內部 Next.js 教學論壇加速新人上手",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自從零開發線上相片書編輯器，支援拖曳、尺寸調整、文字編輯與字型設定等複雜互動，使用 Vue + NuxtJS，6 個月內完成上線",
      "主導後端 API 設計，涵蓋 OAuth 第三方登入、購物車結帳流程與金流串接，從消費端視角定義 API 契約、資料模型與錯誤處理",
      "整合 Service Worker + Cache Storage 支援 PWA 安裝，提供類原生 APP 的離線體驗",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "設計並開發跨專案共用 UI 組件庫（Stencil.js Web Component），不受框架限制，整合 TailwindCSS + Semantic UI 作為 Design System 基礎，以 Storybook 作文件，部署至 private NPM",
      "獨自從零開發面向香港市場的中小企貸款平台（SME Portal）與 Partner Portal，技術棧為 React / Next.js、TypeScript、TailwindCSS",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "於新成立的 AI 團隊中管理 2 人前端小組，交付整合內部 AI 微服務的 2B 管理平台",
      "前端使用 NuxtJS / Next.js + TypeScript，後端使用 Node.js + MongoDB + Redis",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "UG 海外增長業務平台",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 海外廣告增長業務線，涵蓋財務結算、媒體資產管理、供應商採購與數據看板等多個領域，50+ 子專案、百萬行程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態表單渲染引擎開發複雜業務表單元件：級聯選擇、動態欄位、條件顯示與複雜校驗",
      "針對財務與報價場景的 JavaScript 浮點數精度問題，實作高精度數值計算自訂方案",
      "透過自研框架實現微前端動態子應用載入，支援按需載入與獨立部署",
      "透過自研線上翻譯平台在 runtime 拉取最新翻譯檔，實現多語系動態切換",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：Comlink RPC + Yup + Regex Schema —— 在 10 筆資料中減少 90% UI 卡頓時間",
      "函數快取工具優化渲染效能：cache/cacheMany 模仿 React useMemo —— 在 500 個表單無分頁介面中降低 98% Total Blocking Time (TBT)",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，以 Stencil.js Web Component 打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 構建 Design System，以 Storybook 作文件與設計師溝通。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Semantic UI", "Storybook", "Monorepo"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "以 Stencil.js 打造 Web Component，不受 React / Vue 等框架限制，可在任意環境直接引用",
      "以 TailwindCSS + Semantic UI 建立共用 Design Token 基礎",
      "Storybook 文件讓設計師直接檢視與確認組件樣式，提升溝通效率",
      "Monorepo 將組件庫與業務程式分離，組件庫可獨立發佈至 private NPM 並測試，再批次建置業務模組",
    ],
    contributions: [
      "從零單獨開發，建立了所有 FundFluent 產品的可覆用組件基礎",
    ],
  },
  {
    name: "CMS 重構 Next.js",
    summary:
      "主導將 LINE 購物 CMS 從 PHP 架構遷移至 React & Next.js App Router，帶領 4 人團隊達成前後端完全分離。LINE Taiwan 早期採用 Next.js App Router 的代表性專案之一。",
    stack: ["React", "Next.js", "App Router", "TypeScript", "iframe 微前端"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 微前端模式讓新舊專案獨立部署，透過 URL 漸進式遷移，避免 big-bang 換切",
      "LINE Taiwan 早期採用 Next.js App Router 的代表性專案",
    ],
    contributions: [
      "同時擔任架構師、PM 與開發者：規劃整個專案、分派工作、撰寫技術文件，並直接與使用者溝通需求",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購電商服務，用戶透過 LINE 購物外連至合作商家消費可獲 LINE 點數回饋。全端專案：Vue SSR 前端 + Node.js + GraphQL BFF 整合數十個後端微服務，皆以 TypeScript 撰寫。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨立開發「直播購物」功能：設計可覆用影片自動預覽模組，透過全局調度器解決高速捲動下預覽混亂並消除單頁大量直播源造成的記憶體暴增問題",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "讓台灣／新加坡用戶觀看 Bilibili 更順暢的 Chrome / Edge / Firefox 擴充套件，動態改寫影片 CDN Host 並自動 fallback。從架構到上架全程獨立完成。上線 10 天：1,000 安裝、14 筆五星好評，全數自然流量。",
    stack: ["Chrome Extension", "Manifest V3", "JavaScript", "Puppeteer", "Web Extension API"],
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
      "MAIN world 注入攔截 fetch/XHR 與 playinfo 物件 setter，在 playurl/DASH manifest 中即時改寫 CDN host，且不干擾頁面原生行為",
      "雙 world 橋接架構：ISOLATED world 橋接腳本透過 postMessage/localStorage 與 MAIN world 同步設定與多語系文案",
      "自動容錯 Fallback：持續監控分段請求狀態與播放卡頓，先靜默切換 B 站備援節點，失敗才提示用戶",
      "可重現建置：純 Node.js 腳本打包，相同原始碼跨 Chrome/Edge/Firefox 產出 bytes 完全相同的 zip",
    ],
    contributions: [
      "Vibe Coding：全程 AI 輔助協作，一個週末內完成架構、開發到上架",
      "轉換率 50%（2,000 瀏覽 → 1,000 安裝），WAU 突破 1,000 且留存率近 100%，獲 14 筆五星好評零負評，全自然流量",
      "GitHub：https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統。提供職缺 URL，AI Agent 透過 Chrome DevTools MCP 自動抓取 JD、分析需求，並生成量身定做的中英雙語 Next.js 履歷網頁。從零到上線僅 2 天，全程 Vibe Coding 完成。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output，採用輕量 Docker Image 打包",
      "AI Agent 自動化 SOP：Chrome DevTools MCP 自動爬取 JD，實現端到端履歷生成流程",
      "Serverless 部署：ECR → Lambda Web Adapter，S3 + CloudFront CDN，GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM 實現 type-safe 資料存取",
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
  { label: "年前端經驗", value: 7 },
  { label: "個完整產品", value: 19 },
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

export default function WorkatoResumePageZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/01a0180e-93d7-7327-8d85-205fbb19bd18/en" },
        { locale: "zh-TW", label: "中文", href: "/01a0180e-93d7-7327-8d85-205fbb19bd18/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Senior Frontend (UI) Software Engineer (AI Lab) - Workato"}
        description={"7 年前端開發經驗，近期在 TikTok Singapore 主導廣告財務結算平台開發，於 50+ 子專案、百萬行程式碼規模的 Monorepo 中交付企業級前端系統。核心技術棧 React / Vue / TypeScript，對 JavaScript、DOM 操作與瀏覽器 API 有一線實作深度，涵蓋 Web Worker、Service Worker 至 Extension 腳本注入。\n\n效能優化是有數據佐證的核心強項：快取工具讓 500 個表單頁面 TBT 降低 98%；Web Worker 搭配 Comlink 消除 CSV 驗證流程 90% UI 卡頓——成果來自對瀏覽器渲染原理的系統性掌握。組件設計同樣有深度：以 Stencil.js 設計跨框架 Web Component 組件庫部署至 private NPM；帶領 4 人團隊完成 CMS 從 PHP 遷移至 Next.js App Router；獨自 6 個月從零建構拖曳編輯器並上線。品質工具鏈包含 Lighthouse CI、Jest、Cypress 與 GitHub Actions CI/CD。\n\n具備 LLM API 整合、RAG 架構設計與 n8n Agent 工作流開發實戰，與 Workato AI Lab 方向契合。中英日三語流利，擅長敏捷開發與跨職能協作。"}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，展示組件架構、效能優化與 AI 整合能力。`}
        projects={projects}
        highlightsLabel="技術亮點"
        contributionsLabel="重大貢獻"
        personalProjectsLabel="個人專案"
        companyProjectsLabel="公司專案"
        companyLogos={companyLogos}
      />

      <TechStackVisualization title="技術棧可視化" description="核心技術與周邊能力的連結關係圖。">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <AIBeam />
        <FrontendJSBeam />
        <CSSBeam />
        <PWABeam />
        <WebComponentBeam />
        <BackendBeam />
      </TechStackVisualization>

      <SkillKeywords title="技能" rows={skillKeywordRows} />

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
