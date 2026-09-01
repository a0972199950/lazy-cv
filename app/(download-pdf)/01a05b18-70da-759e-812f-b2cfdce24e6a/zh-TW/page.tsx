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
  title: "John Hsieh | Staff/Senior Staff Frontend Engineer, Customer Genius & BOSS",
  description:
    "7 年 React / TypeScript / JavaScript 生產環境前端經驗——TikTok Singapore 廣告投放結算平台架構、FundFluent 跨產品共用 Stencil.js 組件庫，以及結合 MCP 與 custom skill 的 AI Agent 工具鏈。熟練使用 Claude Code、Cursor。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a05b18-70da-759e-812f-b2cfdce24e6a/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 50+ 子專案、百萬級程式碼的 Rush + PNPM Workspaces monorepo 中主導廣告投放財務結算系統架構，技術棧為 React 17、TypeScript 與公司自研微前端框架",
      "將 CSV 校驗透過 Comlink RPC 轉移至 Web Worker 執行，搭配 Yup 與 Regex 規則，減少 90% UI 卡頓時間，並抽象為全 codebase 共用的可複用工具",
      "打造模仿 React useMemo 的 cache/cacheMany 快取工具，在一次渲染 500 個表單的介面上降低 98% Total Blocking Time",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "帶領 4 人團隊主導 LINE 購物 CMS 從 PHP 重構至 Next.js App Router 架構，以 iframe 微服務達成前後端完全分離",
      "透過 JSTF 跨團隊小組制定全公司前端開發者體驗準則，導入每個 PR 把關效能的 Lighthouse CI、SonarQube 靜態分析與 React 專案 template 生成器",
      "在每行程式碼 merge 前都須經人審查的 60 人團隊中，以 Vue SSR、GraphQL、TypeScript、ExpressJS 全棧開發並維護 LINE 購物，並獨立打造帶全局調度器的可複用直播影片自動預覽模組",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "以個人之力用 Vue + Nuxt.js 從零打造線上相片書編輯器，6 個月內從零到產品上線",
      "端到端主導後端 API 設計，涵蓋 AWS Cognito OAuth2 登入、購物車與訂單流程、金流結果串接，從消費端視角定義 API 契約、資料模型與錯誤處理",
      "以純 Vue 打造編輯器，支援拖拉排版、文字與字型編輯，並可在網頁與手機瀏覽器從 Google 相簿與 Instagram 匯入相片",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "以個人之力從零打造 FundFluent UI Kit，一套以 Stencil.js Web Component 構建、不受框架限制的組件庫，發布至 private NPM，由 SME 與 Partner portal 各自獨立安裝",
      "以 TailwindCSS 與 Fomantic UI 建立公司 design system，並以 Storybook 撰寫文件供設計師協作",
      "以 React 17、Next.js 12 與 TypeScript 交付面向香港市場的 SME 與 Partner 貸款平台，從零規劃前端架構與技術選型",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [],
  },
  {
    company: "電獺 Aotter",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [],
  },
  {
    company: "第三緯度科技",
    role: "Frontend Engineer",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [],
  },
  {
    company: "日商優橋",
    role: "數位廣告優化師 & Frontend Engineer",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "UG 海外增長業務平台",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域，管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於內部 JSON Schema 動態表單引擎開發複雜業務表單互動元件，涵蓋級聯選擇、動態欄位、條件顯示",
      "針對財務、報價場景實作高精度數值計算方案，解決 JavaScript 浮點數精度問題",
      "透過自研框架實現子應用動態載入的微前端整合，並在 50+ 子專案間於 runtime 獲取最新翻譯檔",
    ],
    contributions: [
      "端到端負責 50+ 子專案、百萬級程式碼的 React 17 + TypeScript monorepo 中的廣告投放結算模組，將 CSV 校驗以 Comlink 移出主執行緒至 Web Worker，於 10 筆資料中**減少 90% UI 卡頓時間**，並以抽象為共用套件的自製快取工具在未分頁、一次渲染 **500** 個表單的介面上**降低 98% Total Blocking Time**",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統。結合 AI Agent 與 Next.js 16，只需提供職缺連結即可自動抓取 JD 並生成量身定做的中英文雙語履歷網頁。整個專案從零到上線僅花費 2 天，全程透過 AI 輔助編碼完成。本履歷就是用此專案自動生成的。",
    stack: ["TypeScript", "Next.js 16 (App Router)", "React 19", "TailwindCSS 4", "Neon Serverless PostgreSQL", "Drizzle ORM", "Zod", "AWS SDK (S3, Lambda)", "AWS Lambda Web Adapter", "Docker", "Playwright", "ESLint", "Prettier"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "執行端到端 AI Agent SOP：由 Chrome DevTools MCP 串接抓取 JD，再以結構化 skill 定義驅動雙語履歷頁生成",
      "AWS Serverless 部署：Docker Image 推送至 ECR，Next.js SSR 透過 Lambda Web Adapter 運行，靜態資產由 S3 + CloudFront 分發，CI/CD 走 GitHub Actions",
      "以 Neon Serverless PostgreSQL 搭配 Drizzle ORM 實現 type-safe 資料層；Next.js 16 App Router 搭配 standalone output 打包輕量 Docker Image",
    ],
    contributions: [
      "以 Claude Code 作為編碼 agent，個人在 **2** 天內設計、開發並上線，撰寫可複用的 custom skill 與結構化 prompt SOP，將單一職缺 URL 轉為已部署的雙語履歷網站",
    ],
  },
  {
    name: "AI 擬人對話機器人",
    summary:
      "以大語言模型與 n8n 工作流自動化為基底，透過 LINE Messaging API 打造寵物擬人化 AI 聊天機器人。具備多輪對話記憶、圖片與語音理解（多模態）、長期記憶（向量資料庫 RAG）等功能，並可根據不同場景快速切換人格設定。",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "以 n8n 作為 agent 後端，調度 LINE Webhook 訊號、Gemini API 呼叫與資料庫儲存，免去繁重的傳統後端開發",
      "以 user ID 為關鍵字支援多輪上下文記憶，並具圖片與語音多模態理解，達成自然的對話式互動",
      "將過往事件存為 JSONL、向量化嵌入語意檢索資料庫，透過 tool call 賦予模型檢索能力，構成長期記憶",
    ],
    contributions: [
      "獨自打造完整對話式 agent——從 n8n 調度、結構化 system prompt 設計到向量化 RAG 記憶庫——並以 Docker 容器化部署於 DigitalOcean VPS",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "一款讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的 Chrome / Edge / Firefox 瀏覽器擴充套件，動態將影片 CDN host 重排為當地最快節點，並具備自動 fallback 機制。從技術架構、開發到上架與維護皆為個人獨立完成。",
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
      "以同一份程式碼與三語系介面支援 Chrome、Edge、Firefox，診斷並解決跨瀏覽器的渲染與播放行為差異",
      "可重現建置：純 Node.js 腳本（JSZip、Sharp、Puppeteer）將同一份原始碼打包成各瀏覽器 bytes 完全相同的 zip",
      "MAIN world 注入 hook fetch/XHR 與 playinfo setter，即時改寫 playurl/DASH manifest 中的 CDN host，並由 ISOLATED world 橋接腳本存取擴充 API",
    ],
    contributions: [
      "以 Claude Code 作為編碼 agent，個人於一個週末完成設計、開發與上架；上架 **10** 天：瀏覽數 **2,000**、安裝數 **1,000**（**轉換率 50%**），WAU 突破 **1,000**（**留存率近 100%**），獲 **14** 筆五星好評、零負評，全數為自然流量",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "Vue", "NuxtJS", "Node.js", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["Claude Code", "Cursor", "GitHub Copilot", "MCP", "AI Agent", "Prompt Engineering", "RAG", "Claude API", "Gemini API", "n8n"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["npm", "pnpm", "Webpack", "Vite", "Git", "GitHub Actions", "ESLint", "Prettier", "Rush Monorepo", "Docker"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Web Components", "StencilJS", "Shadow DOM", "Storybook", "Web Worker", "Comlink", "Radix UI", "shadcn", "Framer Motion"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Redux", "React Query", "Vuex", "Vue Router", "React Hook Form", "Zod", "Yup", "Axios", "REST API"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["GraphQL", "Apollo Client", "PostgreSQL", "MongoDB", "Redis", "Mongoose", "Drizzle ORM", "OAuth2"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
    reverse: true,
  },
  {
    keywords: ["TailwindCSS", "Sass / SCSS", "CSS Modules", "Less", "PostCSS", "BEM", "CSS variable", "Media query"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:31s]",
  },
  {
    keywords: ["Jest", "Cypress", "Playwright", "Testing Library", "Lighthouse", "SonarQube", "AWS", "GCP", "Firebase", "Kubernetes"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
  },
  {
    keywords: ["JWT", "i18n", "Lodash", "ECharts", "PWA", "Service Worker", "Puppeteer", "Chrome Extension", "Manifest V3"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:37s]",
    reverse: true,
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

export default function OKXResumePageZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/01a05b18-70da-759e-812f-b2cfdce24e6a/en" },
        { locale: "zh-TW", label: "中文", href: "/01a05b18-70da-759e-812f-b2cfdce24e6a/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Staff/Senior Staff Frontend Engineer - Customer Genius & BOSS - OKX"}
        description={`7 年 React、TypeScript、JavaScript 生產環境前端經驗，近期任職於 TikTok Singapore 與 LINE Taiwan。獨自打造 AI 擬人對話機器人——一個多輪對話的 LINE conversational agent，親手串接 LLM API、管理對話歷史與 tool-call 流程，並建立長期知識庫：將過往事件向量化嵌入語意檢索庫（RAG），透過 tool call 供模型檢索。

以 Claude Code 作為主要開發 agent：完成 TWSG Bilibili 擴充套件（同一份程式碼支援 Chrome、Edge、Firefox，具可重現的各瀏覽器打包腳本），以及 Lazy CV——一個 Next.js 履歷生成器，其端到端 SOP 透過 custom skill 定義驅動 Chrome DevTools MCP 串接，並可延伸自建 MCP server 與工具。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，展示產品影響力與技術棧。`}
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
