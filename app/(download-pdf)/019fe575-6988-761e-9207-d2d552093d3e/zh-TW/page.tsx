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
  title: "John Hsieh | Supabase SDK Engineer - JavaScript 應徵履歷",
  description:
    "7 年 TypeScript/JavaScript 工程經驗，具備打造共用組件庫、型別安全 API 層與公開發布開發者工具的實績 — 應徵 Supabase SDK Engineer - JavaScript。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/019fe575-6988-761e-9207-d2d552093d3e/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 User Growth 團隊中主導廣告投放結算系統的前端開發，技術棧為 React 17、TypeScript，及橫跨 50+ 子專案、百萬級程式碼規模的 Rush monorepo",
      "將 Web Worker + Comlink 校驗流水線（Yup/Regex Schema）抽象為超出原始 CSV 場景的共用內部工具，在大量資料填寫流程中減少 90% UI 卡頓時間",
      "設計模仿 React useMemo 的 cache/cacheMany 快取工具並發布為可重用的內部工具，在 500 表單介面上降低 98% Total Blocking Time",
      "帶領團隊導入 Scrum，透過 retrospective 與 refinement 讓 PM 與工程師能以非同步、書面的方式清楚掌握跨團隊交付時程",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "獨立為 LINE 購物「直播購物」功能開發可覆用的影片自動預覽模組（Vue SSR、GraphQL、TypeScript、ExpressJS），透過全局調度器解決高速捲動時的預覽混亂與多直播源並發造成的記憶體暴增",
      "為 4 人團隊的 CMS 從 PHP 重構至 Next.js App Router 專案撰寫技術架構文件與時程規劃，達成前後端完全分離",
      "在 JSTF（跨團隊前端準則制定小組）中導入 Lighthouse CI，讓效能回歸在進入使用者手中前就在 CI 被攔截",
      "指導 2 位新進工程師並主導內部 Next.js 教學論壇，身處於一個「每一行程式碼 merge 前都要有人 review」為運作準則的 60 人敏捷團隊中",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "作為唯一開發者，將線上相片書編輯器從一張空白畫布做到正式上線產品，6 個月內完成上線，並依真實使用情況持續迭代拖曳、尺寸調整與文字編輯功能",
      "從前端消費者視角定義 OAuth 登入、購物車與訂單流程、金流串接的 API 契約、資料模型與錯誤處理，再交由後端落地實作",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "設計並發布跨專案共用 UI 組件庫（Stencil.js Web Component，不受框架限制）到 private NPM，使用 monorepo 讓組件庫能獨立於業務程式碼進行版本控管、測試與發布",
      "以 Storybook 撰寫 design system 文件，讓非 React 專案與設計師無需閱讀原始碼即可評估組件 API",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "於新成立的 AI 團隊中管理 2 人前端團隊並擔任全端工程師，交付整合內部 AI 微服務的 2B 管理平台（NuxtJS/NextJS、TypeScript、MongoDB、Redis）",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，發布至 private NPM，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI 組件使用 Stencil 搭建 Web Components —— 可在 React 生態系以外的環境使用，不受單一框架的型別系統綁定",
      "使用 monorepo 區分組件庫與業務程式，讓組件庫可獨立版本控管、測試與發布",
      "透過 Storybook 記錄公開組件 API，讓設計師與非 React 專案無需閱讀原始碼即可評估",
    ],
    contributions: [
      "從零開始單獨開發並發布",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "一款讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的 Chrome / Edge / Firefox 瀏覽器擴充套件，動態將影片 CDN host 重排為當地最快節點，並具備自動 fallback 機制。從技術架構、開發到上架與維護皆為個人獨立完成 —— 公開發布並依真實使用者回饋持續迭代。",
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
      "天生跨執行環境：同一份原始碼同時支援 Chrome、Edge、Firefox 三種擴充平台，並提供三語系介面，精神上類似於在多個 JS 執行環境發布同一套 SDK",
      "自動容錯 Fallback 機制：即時監控分段請求狀態與播放卡頓，偵測異常時先靜默切換至原生備援節點，備援也失效才提示使用者 —— 一次抓到的錯誤，永遠被守住",
      "可重現建置（Reproducible Build）：純 Node.js 腳本（jszip + sharp + puppeteer）打包，只要原始碼不變，跨平台每次產出的 zip bytes 完全相同 —— 對公開發布產物的 release 紀律",
      "已於 GitHub 開源；根據真實使用者的播放失敗訊號而非規格書持續強化 fallback 與重試邏輯",
    ],
    contributions: [
      "上架 10 天：瀏覽數 2,000、安裝數 1,000（**轉換率達 50%**），WAU 突破 1,000（**留存率近 100%**），獲得 **14 筆五星好評、零負評**，全數為自然流量",
      "GitHub：https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統。結合 AI Agent 與 Next.js 16，只需提供職缺連結即可自動抓取 JD 並生成量身定做的中英文雙語履歷網頁。整個專案從零到上線僅花費 2 天，全程透過 Vibe Coding 完成。本履歷就是用此專案生成的。",
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
      "Neon Serverless PostgreSQL + Drizzle ORM 實現端到端 type-safe 資料存取",
      "AI Agent 自動化 SOP：透過 Chrome DevTools MCP 自動爬取 JD，打造為 AI coding agent 可讀、可驅動的流程",
      "Serverless 部署架構：ECR → Lambda Web Adapter，S3 + CloudFront CDN，GitHub Actions CI/CD",
    ],
  },
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
      "基於 JSON Schema 動態表單渲染的複雜表單互動元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "透過自研框架實現子應用動態載入的微前端整合",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊，搭配 Yup + Regex Schema —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany 工具 —— 在一個沒有做分頁、一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "CMS 重構 NextJS",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS app router 架構，帶領 4 人團隊完成前後端分離。這也是少數幾個在 LINE Taiwan 中實際採用 NextJS app router 的早期專案之一。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微服務，新老專案可獨立佈署與上線，可透過 URL 漸進式將老專案切換至新專案",
      "公司早期採用 Next.js App Router 的專案之一",
    ],
    contributions: [
      "除了寫程式外，還擔任架構師規畫整個專案，同時兼任 PM 角色——分派工作、撰寫技術文件、與利害關係人溝通",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋，服務數百萬使用者的正式線上產品。",
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
      "獨自開發「直播購物」功能：參考 YouTube 影片流自動預覽機制，設計了一套**可覆用影片自動預覽模組**，透過全局調度器**解決高速捲動下影片預覽混亂**及**單頁面過多直播源造成記憶體暴增**的技術難點",
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

export default function SupabaseSDKEngineerResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019fe575-6988-761e-9207-d2d552093d3e/en" },
        { locale: "zh-TW", label: "中文", href: "/019fe575-6988-761e-9207-d2d552093d3e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師\n應徵 SDK Engineer - JavaScript"}
        description={`7 年前端工程經驗，目前於 TikTok Singapore User Growth 團隊擔任軟體工程師，先前於 LINE Taiwan 擔任資深工程師。核心技術棧為 React、Vue 與 Expert 等級的 TypeScript，橫跨百萬級程式碼規模的 monorepo 與一人獨立完成的函式庫/工具開發。

習慣設計並交付可重用、型別安全的基礎建設，而非一次性的功能：在 FundFluent 打造不受框架限制的 UI 組件庫（Stencil.js Web Component）並發布至 private NPM，透過 monorepo 讓組件庫能獨立於業務程式碼進行版本控管、測試與發布；在 TikTok 將 Web Worker 校驗流水線抽象為超出原始用途的共用內部工具，並打造模仿 React useMemo 的 cache/cacheMany 快取工具供團隊重用。

將測試與文件視為交付的一部分，而非附加項目：在 LINE Taiwan 的全公司前端準則中導入 Lighthouse CI，讓回歸問題在觸及使用者前就在 CI 被攔截；以 Storybook 為 FundFluent UI Kit 的公開 API 撰寫文件，方便非 React 專案使用；也為一次公司級 CMS 重構撰寫架構文件與規劃。

習慣自主、非同步地工作：在 LINE Taiwan 指導 2 位工程師並主導內部教學論壇，在 AI.Book 與 FundFluent 以遠端契約工程師身分協作，並能流利使用英文、日文與中文溝通 —— 對於一個非同步優先的團隊而言是實用的優勢。

對 Supabase 的 SDK 團隊來說，這代表能把「把內部工具打造成共用工具、把一個週末的專案變成使用者真正依賴的擴充套件」的同一種本能，帶到多數開發者與其 AI coding agent 用來與 Supabase 溝通的 JS/TS SDK 上。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 為分散式團隊打造型別安全 API 與共用函式庫"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，展現函式庫開發、型別安全 API 設計與公開發布開發者工具的能力。`}
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
