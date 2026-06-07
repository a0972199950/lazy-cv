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
  title: "John Hsieh | Senior Full-Stack JavaScript Engineer — Zühlke",
  description:
    "7 年全端 JavaScript 開發經驗，熟練 React / Next.js / Vue / NuxtJS / TypeScript / Node.js，曾任職 TikTok Singapore 與 LINE Taiwan，具備 Team Lead 與 Agile 交付經驗，申請 Zühlke Singapore Senior Full-Stack JavaScript Engineer 職位。",
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
      "負責廣告投放的財務結算系統開發，技術棧為 React、monorepo 與公司自研框架架設的前端微服務系統。",
      "帶領開發團隊導入 Scrum，利用 retrospective 建立自我糾錯機制，利用 refinement 解決成員各自為政問題，平衡工作量並提升 PM 對時程的掌握度。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "日常開發 LINE 購物，技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS；獨自開發「直播購物」功能，解決高速捲動下的記憶體與效能難點。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS app router，實現前後端分離並提前無縫上線。",
      "參與 JavaScript Task Force（JSTF）制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量。",
      "擔任 Mentor 指導 2 位新人，主導內部 NextJS 教學論壇，獲得一致正向回饋。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自負責開發線上相片書編輯器核心功能，支援拖曳、尺寸調整、文字編輯。",
      "從零規劃技術架構，使用 Vue + NuxtJS，6 個月內完成產品上線。",
      "支援 PWA 安裝，提供類原生 APP 的跨平台體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構與技術選型。",
      "使用 React / NextJS + TypeScript + TailwindCSS 開發面向香港市場的中小企貸款平台。",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component + Storybook），部署到 private NPM。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理前端團隊 2 人。",
      "開發整合內部 AI 微服務的 2B 管理平台，技術棧涵蓋 NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Lazy CV — AI 驅動客製化履歷生成系統",
    summary:
      "結合 AI Agent 與 Next.js 16 全端應用，只需提供職缺連結，系統便能自動抓取 JD、分析關鍵需求，生成量身定做的中英文雙語履歷網頁。從零到上線僅花費 2 天，全程透過 Vibe Coding 完成。本履歷即由此系統自動生成。",
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
    name: "UG 海外增長業務平台 (TikTok)",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域，管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態表單渲染的複雜表單互動元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "針對財務、報價等場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "透過自研框架實現子應用動態載入的微前端整合，支援按需載入業務模組與獨立開發部署",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊 —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany 工具 —— 在一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋。平台為 LINE 台灣核心 E-Commerce 產品，60 人規模敏捷開發團隊。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨自開發「直播購物」功能：設計可覆用影片自動預覽模組，透過全局調度器解決高速捲動下影片預覽混亂及單頁面多直播源造成記憶體暴增的技術難點",
    ],
  },
  {
    name: "CMS 重構 NextJS (Team Leader)",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS app router 架構，帶領 4 人團隊完成前後端分離。這是 LINE Taiwan 中早期採用 NextJS app router 的先驅專案之一。",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe Micro-frontend"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微服務，新老專案可獨立佈署，可透過 URL 漸進式切換至新專案",
      "LINE Taiwan 中早期採用 Next APP router 的先驅專案之一",
    ],
    contributions: [
      "兼任架構師與 PM：規畫整個專案架構、技術選型、工作分派、時程管理與技術文件撰寫",
    ],
  },
  {
    name: "AI 擬人對話機器人",
    summary:
      "以大語言模型與 n8n 工作流自動化為基底，透過 LINE Messaging API 打造寵物擬人化 AI 聊天機器人。具備多輪對話記憶、多模態（圖片/語音）理解、長期記憶（向量資料庫 RAG）等功能。",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "RAG / Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "n8n 工作流自動化架構：以 n8n 為核心後端整合平台，靈活調度 LINE Webhook、Gemini API 與資料庫",
      "長期記憶（AI 知識庫）：過往記憶存成 JSONL 並向量化（Embedding），透過 tool call 賦予 AI 語意檢索能力",
      "輕量化雲端部署：以 Docker 容器化打包，部署於 DigitalOcean VPS",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 構建 design system，以 Storybook 作文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI 組件使用 Stencil 搭建 web components，框架無關，適用任何前端環境",
      "透過 Tailwind + Semantic UI 構建統一 design system",
      "使用 monorepo 區分組件庫與業務程式，組件庫可單獨發布測試",
    ],
    contributions: ["從零開始單獨開發"],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "Node.js", "Express", "GraphQL", "MongoDB", "PostgreSQL"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["TailwindCSS", "Sass / SCSS", "REST API", "Docker", "Kubernetes", "AWS", "GitHub Actions", "Drizzle ORM", "Redis", "Firebase"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Jest", "Cypress", "Storybook", "Webpack", "Vite", "Git", "Lighthouse", "pnpm", "ESLint", "Renovate"],
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
    keywords: ["Web Worker", "Comlink", "Service Worker", "IndexedDB", "StencilJS", "Shadow DOM", "Socket.io", "PWA", "Web Socket", "CSS Modules"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
    reverse: true,
  },
  {
    keywords: ["Bootstrap", "ElementUI", "Buefy", "Vuetify", "Less", "BEM", "Vuex", "Vue Router", "MobX", "D3.js"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:31s]",
  },
  {
    keywords: ["HTML", "JavaScript", "jQuery", "npm", "SDD", "OpenAI API", "Vuelidate", "VeeValidate", "Quill", "EJS"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
  },
  {
    keywords: ["CSS", "CSS variable", "Media query", "Cache Storage", "Workbox", "web-push", "Navigator API", "Swagger", "Mongoose", "mustache"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:37s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "年全端開發經驗", value: 7 },
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

export default function ZuhlkeResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019ea1b1-a82f-757b-9e1a-bfc5a81525e1/en" },
        { locale: "zh-TW", label: "中文", href: "/019ea1b1-a82f-757b-9e1a-bfc5a81525e1/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Senior Full-Stack JavaScript Engineer"
        description={`7 年全端 JavaScript 開發經驗，曾任職於 TikTok Singapore 與 LINE Taiwan 擔任資深軟體工程師，熟練 React (Next.js)、Vue (NuxtJS) 與 TypeScript 雙刀流，並具備 Node.js / Express / MongoDB / PostgreSQL 後端開發能力，完全覆蓋 MERN 全棧技術要求。\n\n具備豐富的 Team Lead 與 Agile 交付經驗：在 LINE Taiwan 帶領 4 人團隊將 CMS 從 PHP 重構至 NextJS app router，同時擔任 Mentor 指導 2 位新人；在 TikTok 主導導入 Scrum 流程，解決跨團隊協作痛點。善於在業務方與技術方之間橋接溝通，能從整體架構角度制定技術決策。\n\n我的核心工程理念是「使用者體驗至上」，不僅完成功能，更追求軟體的易用性與效能。曾透過 Web Worker 多線程方案減少 90% UI 卡頓，以函數快取技術降低 98% TBT。同時深度整合 AI 工具（GitHub Copilot Agent Mode、MCP、n8n）提升個人開發效率，並具備 LLM API 串接與 RAG 向量資料庫等 AI 應用能力。\n\n我能以英、日、中三語流暢溝通，在 TikTok 與 LINE 等跨國環境中皆有實際應用。我相信我能為 Zühlke 帶來：深厚的全端 JS 技術底蘊、以使用者為核心的工程思維、以及在複雜大型專案中有效交付的實戰能力。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`精選 ${projects.length} 個與 Zühlke Full-Stack JavaScript 職位最相關的代表性專案。`}
        projects={projects}
        highlightsLabel="技術亮點"
        contributionsLabel="重大貢獻"
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
