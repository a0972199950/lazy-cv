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
  title: "John Hsieh | Full Stack JavaScript Developer — Capgemini",
  description:
    "7 年全端 JavaScript 開發經驗。React (Next.js)、Node.js、PostgreSQL/MongoDB、REST/GraphQL。TikTok Singapore 資深軟體工程師。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a018f0-b3f4-7047-a219-e8391b5346bb/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 50+ 子專案、百萬級程式碼規模的 monorepo 中主導廣告投放財務結算系統的前端架構與開發，技術棧為 React 17、TypeScript 與公司自研微前端框架",
      "設計複雜的 JSON Schema 驅動表單元件，涵蓋級聯選擇、動態欄位、條件顯示等場景；實作財務報價場景的浮點數精度計算方案",
      "將 CSV 校驗透過 Comlink RPC 轉移至 Web Worker 執行，搭配 Yup 與 Regex 驗證規則，在 10 筆資料填寫流程中**減少 90% UI 卡頓時間**",
      "打造模仿 React useMemo 的 cache/cacheMany 快取工具，在一次渲染 500 個表單的介面上**降低 98% Total Blocking Time (TBT)**",
      "帶領開發團隊導入 Scrum：透過 retrospective 建立自我糾錯機制、以 refinement 解決成員各自為政問題，並平衡工作量、提升 PM 對時程的掌握度",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發並維護 LINE 購物全端系統：Vue SSR 前端 + Node.js (ExpressJS) BFF，整合數十個後端微服務，使用 GraphQL 與 TypeScript",
      "獨立開發「直播購物」功能——設計可覆用的影片自動預覽模組，透過全局調度器解決高速捲動時的預覽混亂與多直播源並發造成的記憶體暴增問題",
      "帶領 4 人團隊主導 CMS 從 PHP 重構至 Next.js App Router 架構，達成前後端完全分離，是 LINE Taiwan 早期採用 App Router 的代表性專案",
      "投入 JSTF 跨團隊小組，制定全公司前端開發準則，並導入 Lighthouse CI 自動化效能評量",
      "指導 2 位新進工程師並獲得正向回饋，主導內部 Next.js 教學論壇加速新人上手",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自從零開發線上相片書編輯器，使用 Vue + NuxtJS，6 個月內完成產品上線，支援拖曳、縮放、文字編輯與 PWA 安裝",
      "主導後端 API 設計端到端：從消費端視角定義 OAuth 第三方登入流程、購物車與訂單 API 契約、資料模型與金流串接",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "於公司初創期從零規劃前端架構與技術選型，獨力建構 3 項產品：SME Portal、Partner Portal 與內部 UI Kit",
      "使用 React、Next.js、TypeScript、TailwindCSS 開發面向香港市場的中小企貸款平台",
      "設計跨專案共用 UI 組件庫（Stencil.js Web Component），不受框架限制，發布到 private NPM 並以 Storybook 撰寫文件",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "從零規劃技術架構並帶領 2 人團隊，開發類 n8n 的辦公流程自動化 SaaS 平台——整合公司內部所有 PDF 服務（轉檔、翻譯、編輯、簽名）與多種觸發器（手動、email 關鍵字、Google Doc 更新），實現端到端文件工作流程自動化",
      "後端使用 Node.js、NestJS、GraphQL、MongoDB、Redis 建構 API 層；前端使用 Next.js、TypeScript、ElementUI",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "UG Overseas Platform",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 海外用戶增長廣告業務線，涵蓋財務結算、供應商採購與數據看板等多個子系統，管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Micro-Frontend", "GraphQL", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態渲染引擎開發複雜業務表單元件，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "針對財務與報價場景的 JavaScript 浮點數精度問題實作精度計算方案",
      "透過公司自研框架實現微前端子應用動態載入，支援按需載入與獨立開發部署",
      "透過自研線上翻譯平台在 runtime 獲取最新翻譯文件，實現多語系支援",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：透過 Comlink RPC 搭配 Yup + Regex Schema——**減少 10 筆資料填寫流程 90% UI 卡頓時間**",
      "cache/cacheMany 快取工具函數：模仿 React useMemo——**讓一次渲染 500 個表單的介面 TBT 降低 98%**",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "結合 AI Agent 與 Next.js 16 的全端應用——只需提供職缺連結，自動抓取 JD、分析需求，生成雙語客製化履歷網頁。從零到上線僅花費 2 天。",
    stack: ["Next.js 16", "TypeScript", "Node.js", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "TailwindCSS 4"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output，輕量 Docker 打包並支援完整 SSR",
      "REST API 搭配 Drizzle ORM 與 Neon Serverless PostgreSQL，型別安全的資料存取",
      "Serverless 部署：ECR → Lambda Web Adapter 運行 Next.js，S3 + CloudFront CDN 分發靜態資產，GitHub Actions 全自動 CI/CD",
      "透過 Chrome DevTools MCP 的 AI Agent 自動化 SOP，實現端到端履歷生成流程",
    ],
  },
  {
    name: "CMS 重構為 Next.js（Team Lead）",
    summary:
      "帶領 4 人團隊將 LINE 購物 CMS 從 PHP 重構至 React & Next.js App Router 架構，達成前後端完全分離，是 LINE Taiwan 早期採用 App Router 的代表性專案。",
    stack: ["React", "Next.js", "App Router", "TypeScript", "iframe 微前端"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "iframe 微前端架構實現新舊系統獨立部署，並支援以 URL 為單位的漸進式切換",
      "公司早期 Next.js App Router 採用——負責路由策略、資料擷取邊界與 Server Component 架構決策",
    ],
    contributions: [
      "同時擔任架構師與 PM——技術文件撰寫、工作分派、使用者溝通與時程規劃，兼顧管理與實際開發",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 電商導購服務，全端架構：Vue SSR 前端 + Node.js (ExpressJS) BFF，透過 GraphQL 整合數十個後端微服務，兩個 repo 皆使用 TypeScript 維護與迭代。",
    stack: ["Vue SSR", "Node.js", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    contributions: [
      "獨立開發「直播購物」功能——設計可覆用影片自動預覽模組，透過全局調度器解決高速捲動下的預覽混亂與多直播源並發的記憶體暴增問題",
    ],
    url: "https://buy.line.me",
  },
  {
    name: "AI.Book 線上相片書編輯器",
    summary:
      "獨自從零開發的線上相片書編輯器——一人完成前端架構規劃、編輯器核心與後端 API 設計，6 個月完成上線。",
    stack: ["Vue", "NuxtJS", "OAuth", "REST API", "PWA", "IndexedDB"],
    company: "AI.Book 愛相簿",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "純 Vue 客製化編輯器：支援加入/移除照片、文字輸入、字型字體大小編輯，支援網頁端與手機端",
      "主導後端 API 設計：OAuth 第三方登入、購物車與訂單流程、金流串接——從消費端視角定義 API 契約與資料模型",
      "支援 PWA 安裝，提供類原生 APP 的離線體驗",
    ],
    contributions: [
      "單人完整 slice 負責——從零到上線歷時 6 個月",
    ],
  },
  {
    name: "FundFluent UI Kit + 產品平台",
    summary:
      "設計跨專案內部 UI Kit（Stencil.js Web Component，不受框架限制），同時獨力建構 2 個 React/Next.js 產品：SME Portal 與 Partner Portal。",
    stack: ["React", "Next.js", "TypeScript", "Stencil.js", "TailwindCSS", "Storybook", "Web Components"],
    company: "FundFluent",
    image: [
      "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
      "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
      "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    ],
    highlights: [
      "Stencil.js Web Component UI Kit——不受框架限制，發布至 private NPM",
      "TailwindCSS + Semantic UI 構建 design system；Storybook 展示組件，利於與設計師確認",
      "Monorepo 區分組件庫與業務程式，組件庫可單獨發布測試",
    ],
    contributions: [
      "3 項產品（UI Kit、SME Portal、Partner Portal）皆從零獨自完成",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Sass / SCSS", "Node.js", "NestJS"],
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
    reverse: true,
  },
  {
    keywords: ["CSS", "CSS variable", "Media query", "Cache Storage", "Workbox", "web-push", "Navigator API", "EJS", "Swagger", "mustache"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:37s]",
  },
  {
    keywords: ["Chrome Extension", "Manifest V3", "Puppeteer", "Vert.x", "Web Extension API"],
    badgeClassName: "border-fuchsia-200 bg-fuchsia-50/50 text-fuchsia-800",
    marqueeClassName: "[--duration:38s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "年全端開發經驗", value: 7 },
  { label: "上線產品數", value: 19 },
  { label: "帶領過的成員數", value: 4 },
  { label: "職場語言數", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "東吳大學", degree: "文學士 — 日本語文學系", period: "2013 – 2017" },
  { institution: "同志社大學（京都）", degree: "交換留學 — 日本語及文化", period: "2016.03 – 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "日文檢定 JLPT N1", description: "最高級認證，具備商業會談程度", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "台大資訊推廣部", description: "網頁開發技術課程結業證明" },
];

const languages: LanguageItem[] = [
  { name: "中文 — 母語", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "日文 — 商務會話（JLPT N1）", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "英文 — 職場溝通流暢", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function CapgeminiResumeZHTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/01a018f0-b3f4-7047-a219-e8391b5346bb/en" },
        { locale: "zh-TW", label: "中文", href: "/01a018f0-b3f4-7047-a219-e8391b5346bb/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/107453(1).jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Full Stack JavaScript Developer - Capgemini"}
        description={"7 年全端 JavaScript 開發經驗，橫跨大型企業系統與新創從零打造產品兩種場景。核心技術棧：React (Next.js)、Node.js、NestJS、TypeScript、PostgreSQL、MongoDB、GraphQL 與 REST API——從前端架構到後端 API 設計、雲端部署皆有完整端到端交付紀錄。\n\n在 TikTok Singapore 主導百萬級 monorepo 財務結算系統，達成 98% TBT 降低與 90% UI 卡頓改善。在 LINE Taiwan 同時擔任全端開發者與技術主管——建構整合數十個後端微服務的 GraphQL BFF、主導 CMS 遷移至 Next.js App Router 並制定全公司前端準則。在 Foxit 從零設計並開發 NestJS + GraphQL 後端，驅動類 n8n 的辦公流程自動化 SaaS 平台。在 AI.Book 與 FundFluent 完整端到端交付 OAuth 流程、API 契約與金流串接。"}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨境全端 JavaScript 開發"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，涵蓋 React、Next.js、Node.js、GraphQL 與雲端部署。`}
        projects={projects}
        highlightsLabel="技術亮點"
        contributionsLabel="重大貢獻"
        personalProjectsLabel="個人專案"
        companyProjectsLabel="公司專案"
        companyLogos={companyLogos}
      />

      <TechStackVisualization title="技術棧可視化" description="核心技術與其相互關聯。">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <AIBeam locale="zh-TW" />
        <FrontendJSBeam locale="zh-TW" />
        <CSSBeam locale="zh-TW" />
        <PWABeam locale="zh-TW" />
        <WebComponentBeam locale="zh-TW" />
        <BackendBeam locale="zh-TW" />
      </TechStackVisualization>

      <SkillKeywords title="技能關鍵字" rows={skillKeywordRows} />

      <EducationCerts
        sectionTitle="學歷與證書"
        educationLabel="學歷"
        educationHeaders={{ institution: "學校", degree: "學位 / 課程", period: "期間" }}
        educations={educations}
        certLabel="證書與認證"
        certifications={certifications}
        languageLabel="語言能力"
        languages={languages}
      />
    </ResumeLayout>
  );
}
