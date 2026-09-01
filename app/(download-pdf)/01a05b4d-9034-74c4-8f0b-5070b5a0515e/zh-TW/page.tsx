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
  title: "John Hsieh | 前端增長工程師",
  description:
    "7 年 React / TypeScript 前端開發經驗，深度整合 AI coding agent（Claude Code、Cursor）、MCP 與自訂 skill，具備增長領域產品經驗。應徵 OKX Staff/Senior Staff Frontend Engineer - Growth。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a05b4d-9034-74c4-8f0b-5070b5a0515e/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 50+ 子專案、百萬級程式碼的 React 17 + TypeScript monorepo（Rush + PNPM Workspaces、Webpack）中主導 User Growth 團隊的廣告投放財務結算平台，透過各大 DSP 平台推動海外用戶增長",
      "將 CSV 校驗透過 Comlink RPC 移至 Web Worker 執行，並抽象為跨模組共用的可複用工具，在 10 筆資料填寫流程中減少 90% UI 卡頓時間",
      "打造模仿 React useMemo 的 cache/cacheMany 快取工具，在一次渲染 500 個表單的介面上降低 98% Total Blocking Time",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "以 Vue SSR + GraphQL + TypeScript + ExpressJS 開發並維護 LINE 購物（導購回饋電商平台），獨立交付具全局調度器的可複用影片自動預覽模組",
      "帶領 4 人團隊將 CMS 從 PHP 重構至 Next.js App Router 架構，透過 iframe 微前端與漸進式 URL 切換達成前後端完全分離",
      "在 JSTF 跨團隊小組推動全公司前端準則，導入 Lighthouse CI 作為每個 PR 的效能關卡，並打造 React 專案 template 生成器",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "以個人獨立開發者身分用 Vue + NuxtJS 從零打造線上相片書編輯器，6 個月內完成上線",
      "交付跨瀏覽器編輯體驗，同時支援桌面與行動裝置瀏覽器，並可從 Google 相簿／Instagram 匯入相片",
      "主導後端 API 設計，涵蓋 AWS Cognito OAuth2 登入、購物車與訂單流程、金流結果串接",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "於初創期加入，從零規劃前端架構與技術選型，以 React / Next.js + TypeScript + TailwindCSS 建構面向香港市場的中小企貸款平台",
      "以 Stencil.js Web Component 打造不受框架限制的共用 UI 組件庫，發布至 private NPM，由 SME 與 Partner 兩個 portal 各自獨立安裝使用",
      "以 TailwindCSS + Semantic UI 建立 design system，並用 Storybook 撰寫文件以利與設計師協作",
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
    name: "Lazy CV",
    summary:
      "結合 AI Agent 與 Next.js 16 的客製化履歷生成系統。提供職缺連結後，系統自動抓取 JD、分析關鍵需求，並根據個人資料源生成量身定做的中英文雙語履歷網頁。本履歷即由此專案生成。",
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
      "以自訂 Claude Code skill 搭配 Chrome DevTools MCP 寫成端到端 agent SOP，自動抓取 JD 並生成雙語履歷網頁，全程無需手動介入",
      "Next.js 16 App Router 搭配 standalone output 打包為輕量 Docker Image；透過 ECR → Lambda Web Adapter 在 AWS 上 serverless 運行，靜態資產由 S3 + CloudFront 分發",
      "以 GitHub Actions 完成全自動 CI/CD，資料層採用 Neon Postgres + Drizzle ORM 實現 type-safe 存取",
    ],
    contributions: [
      "以 Vibe Coding 從零到上線僅 **2 天**，全程以 Claude Code 作為編碼 agent 開發——架構、AI agent 的抓取與生成 pipeline、以及履歷管理後台皆由個人單獨完成並開源於 GitHub",
    ],
  },
  {
    name: "AI 擬人對話機器人",
    summary:
      "以大語言模型與 n8n 工作流自動化為基底，透過 LINE Messaging API 打造寵物擬人化 AI 聊天機器人。具備多輪對話記憶、圖片／語音理解、以向量儲存實現的長期記憶，以及快速切換人格設定的能力。",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "以 LINE Messaging API 為介面的對話式 agent，以 user ID 為單位維護多輪上下文記憶，實現精準、獨立的個人化對話脈絡",
      "多模態理解圖片與語音輸入；長期記憶存為 JSONL，向量化進語意檢索資料庫，並透過 tool call 提供給模型調用",
      "以 n8n 調度 LINE Webhook 事件、Gemini API 呼叫與資料儲存作為低程式碼後端，並以 Docker 容器化部署於 VPS",
    ],
    contributions: [
      "由個人單獨設計並開發，作為端到端的 LLM 功能——LINE 上的對話式 UX、以 n8n 實現的 agent orchestration、圖片與語音多模態輸入、以及 RAG 支撐的長期記憶——並透過 system prompt 調校，依業務場景快速切換人格與語氣",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "一款讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的 Chrome / Edge / Firefox 瀏覽器擴充套件，動態將影片 CDN host 重排為當地最快節點，並具備自動 fallback 機制。從技術架構、開發到上架與維護皆為個人獨立完成。",
    stack: ["Chrome Extension Manifest V3", "Vanilla JavaScript (ES6+)", "Content Scripts (MAIN world / ISOLATED world)", "fetch / XMLHttpRequest hook", "chrome.storage", "chrome.i18n", "Node.js", "JSZip", "Puppeteer"],
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
      "同一份原始碼依各平台 manifest 產出 Chrome、Edge、Firefox 三版；純 Node.js 的可重現建置（JSZip + Sharp + Puppeteer）產出 byte-for-byte 完全相同的 zip",
      "診斷並排解跨環境的播放差異——即時監控分段請求失敗與卡頓，異常時先靜默切換至原生備援節點，備援也失效才提示使用者",
      "MAIN world 注入攔截 fetch/XHR 與 playinfo setter，即時改寫串流 CDN host；ISOLATED world 橋接腳本透過 postMessage 同步設定與多語系文案",
    ],
    contributions: [
      "從技術架構、開發、上架到維護皆由個人獨立完成，整份程式碼以 Claude Code 作為編碼 agent 於 **1** 個週末寫成——上架 **10** 天：瀏覽數 **2,000**、安裝數 **1,000**（**轉換率 50%**），WAU 突破 **1,000** 且留存率近 **100%**，獲 **14** 筆五星好評、零負評，全數為自然流量",
    ],
  },
  {
    name: "UG 海外增長業務平台",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域，以統一架構管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush v5 + PNPM Workspaces (Monorepo)", "react-router-dom v5/v6", "Arco Design", "Starling（國際化）", "Less + CSS Modules", "Jest + @testing-library/react", "ESLint + commitlint + lint-staged"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於內部 JSON Schema 動態表單渲染引擎開發配置驅動的複雜表單互動元件，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "透過自研框架實現子應用動態載入的微前端整合，支援按需載入業務模組與獨立開發部署",
      "針對財務、報價場景的 JavaScript 浮點數精度問題實作高精度數值計算方案；並於 runtime 獲取最新翻譯檔實現多語系",
    ],
    contributions: [
      "主導採購與結算模組的開發與維護；將 CSV 校驗移出主執行緒至 Web Worker（Comlink RPC、Yup + Regex Schema），解決內部 Armor 框架的 worker 相容性限制並抽象為共用可複用工具——在 10 筆資料中**減少 90% UI 卡頓時間**——並打造 cache/cacheMany 記憶化工具，在未分頁、一次渲染 500 個表單的介面上**降低 98% Total Blocking Time**",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Next.js", "TailwindCSS", "Sass / SCSS", "Vue", "NuxtJS"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["Claude Code", "Cursor", "GitHub Copilot (Agent Mode)", "MCP (Model Context Protocol)", "Custom Skills / Tools", "AI Agent Orchestration", "LLM Integration", "Conversational UX", "RAG", "Prompt Engineering"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["n8n", "Vibe Coding", "SDD", "Claude API", "OpenAI API", "Gemini API", "npm", "pnpm", "Webpack", "Vite"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Git", "GitHub Actions", "Docker", "Kubernetes", "Rush Monorepo", "PNPM Workspaces", "ESLint", "Prettier", "Lighthouse CI", "SonarQube"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Cross-browser Compatibility", "Chrome Extension (Manifest V3)", "Web Worker", "Comlink", "Service Worker", "PWA", "Web Components", "StencilJS", "Storybook", "Web Performance"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
  },
  {
    keywords: ["Redux", "MobX", "React Query", "React Hook Form", "Zod", "Yup", "GraphQL", "Apollo Client", "REST API", "Axios"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:31s]",
    reverse: true,
  },
  {
    keywords: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Drizzle ORM", "AWS", "GCP", "OAuth2", "JWT"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["Jest", "Testing Library", "Playwright", "Cypress", "ECharts", "Chart.js", "D3.js", "Framer Motion", "i18n", "Sentry"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
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
        { locale: "en", label: "EN", href: "/01a05b4d-9034-74c4-8f0b-5070b5a0515e/en" },
        { locale: "zh-TW", label: "中文", href: "/01a05b4d-9034-74c4-8f0b-5070b5a0515e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Staff/Senior Staff Frontend Engineer - Growth - OKX"}
        description={`7 年前端開發經驗。於 TikTok User Growth 團隊，在 50+ 套件的 React 17＋TypeScript monorepo 主導廣告投放財務結算系統；FundFluent 貸款平台與 Lazy CV 皆以 React／Next.js＋TypeScript 從零交付。LINE 購物為導購回饋平台，並有 i18n 多語系在地化經驗。

日常以 Claude Code、Copilot Agent Mode、Cursor 開發：Lazy CV 以自訂 skill＋Chrome DevTools MCP 串成端到端 agent SOP、2 天上線；TWSG Bilibili 擴充套件全程由 Claude Code 撰寫，單一原始碼打包出 Chrome／Edge／Firefox 三版並排解跨瀏覽器差異。AI 擬人聊天機器人整合 LLM、多模態、上下文記憶與 RAG，並具備自建 MCP Server 能力。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個對應職缺的專案：大規模 React/TypeScript、AI coding agent、MCP 與自訂 skill、可複用模組、跨瀏覽器交付。`}
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
