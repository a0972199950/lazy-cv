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
  title: "John Hsieh | Software Engineer III, Google Pay and Wallet",
  description:
    "7 年 JavaScript / TypeScript 網頁開發經驗。LINE 購物大型應用設計與架構、TikTok 廣告投放財務結算系統，以及個人獨立上架、10 天累積 1,000 次安裝的瀏覽器擴充功能。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a057e8-a117-7155-83a9-b5d3259a405e/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 50+ 子專案、百萬級程式碼規模的 monorepo 中主導廣告投放財務結算系統開發，技術棧為 React 17、TypeScript、Rush Monorepo 與公司自研微前端框架",
      "彙整廣告主與內部利害關係人每日透過 oncall 管道回報的問題與需求，歸納重複出現的模式並主動定義新的技術開發任務",
      "將 CSV 校驗邏輯透過 Comlink RPC 轉移至 Web Worker 執行，搭配 Yup 與 Regex 驗證規則，在 10 筆資料的填寫流程中減少 90% UI 卡頓時間",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "在 60 人、每行程式碼合併前都須經審查的團隊中，以 Vue SSR、GraphQL、TypeScript、ExpressJS 與 Redis 的全端技術棧開發並維護 LINE 購物電商導購平台",
      "帶領 4 人團隊主導 CMS 從 PHP 重構至 NextJS App Router 架構，達成前後端完全分離",
      "投入 JSTF 跨團隊小組，制定全公司前端開發準則，並導入 Lighthouse CI 在每個 PR 自動化評量效能",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "主導後端 API 設計，涵蓋 AWS Cognito OAuth2 登入、購物車與訂單流程、金流結果串接，並從前端消費端角度定義 API 契約、資料模型與錯誤處理",
      "獨自開發線上相片書編輯器，6 個月內完成產品上線，一人包辦技術選型、前端架構、編輯器核心到後端 API 設計",
      "以 Vue + NuxtJS 實作拖拉排版、尺寸調整與文字編輯，並同時支援網頁端與手機端瀏覽器",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "使用 React / NextJS、TypeScript、TailwindCSS 開發面向香港市場的中小企數位貸款平台，涵蓋借款方入口與面向放貸機構的夥伴後台",
      "從零規劃前端架構與技術選型，於公司初創期加入",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），發布至 private NPM 供兩個入口各自獨立安裝使用",
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
  {
    company: "亞洲遊",
    role: "日本市場業務及營運",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋。由 60 人團隊以 Vue SSR、GraphQL、ExpressJS 與 Redis 全端技術棧開發維護的大型線上應用，每行程式碼合併前都須經過審查。",
    stack: ["TypeScript", "Vue 2", "Vue SSR (vue-server-renderer)", "Vuex 3", "Node.js", "Express", "GraphQL (Apollo Server Express)", "DataLoader", "Redis (ioredis)", "OAuth2", "Sentry", "Jest", "Storybook", "Docker", "Drone CI", "Lighthouse CI"],
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
      "自動容錯 Fallback 機制：即時監控分段請求狀態與播放卡頓，偵測異常時先靜默切換至 B 站原生備援節點，備援也失效才提示使用者",
      "MAIN world 注入攔截 fetch/XHR 與 playinfo 物件的 setter，即時改寫 playurl/DASH manifest 中的 CDN host，且不影響頁面原生行為",
      "論壇驅動迭代：持續追蹤 Bilibili 相關論壇與社群的使用者回饋與討論，歸納重複出現的痛點以排定修復優先序並推動功能藍圖",
    ],
    contributions: [
      "Vibe Coding 實踐：全程透過 AI 輔助協作開發，從技術架構、程式碼撰寫到商店上架素材，僅耗時 1 個週末即完成並上線",
      "上架 10 天：瀏覽數 2,000、安裝數 1,000（**轉換率達 50%**），WAU 突破 1,000（**留存率近 100%**），獲得 **14 筆五星好評、零負評**，全數為自然流量",
      "GitHub：https://github.com/a0972199950/bilibili-cdn-switcher",
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
      "針對財務、報價等場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "基於 JSON Schema 動態表單渲染的複雜表單互動元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "透過自研框架實現子應用動態載入的微前端整合，支援按需載入業務模組與獨立開發部署",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊，搭配 Yup + Regex Schema —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany 工具快取計算結果 —— 在一個沒有做分頁、一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "AI.Book 相簿編輯器",
    summary:
      "線上相片書編輯器，支援拖拉排版加入/移除照片、文字編輯，並可從 Google 相簿／Instagram 匯入相片。後端 API 設計涵蓋 OAuth2 登入到購物車、訂單與金流結果的完整流程。從零規劃到上線僅 6 個月。",
    stack: ["TypeScript", "Vue 2", "Nuxt 2 (SPA)", "Vuex", "TailwindCSS", "Element UI", "vee-validate", "Axios", "@nuxtjs/auth-next", "AWS Cognito OAuth2", "Google OAuth", "Instagram Graph API OAuth", "GitHub Actions", "AWS S3", "CloudFront", "Swagger/OpenAPI"],
    company: "AI.Book 愛相簿",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "主導後端 API 設計，涵蓋 AWS Cognito OAuth2 登入、購物車與訂單流程、金流結果串接",
      "用純 Vue 搭建客製化編輯器，支援拖拉排版加入/移除照片、文字輸入及字型字體大小編輯",
      "編輯器支援網頁端與手機端瀏覽器編輯，並可從 Google 相簿／Instagram 匯入相片",
    ],
    contributions: [
      "從零開始單獨開發——技術選型、前端架構、編輯器核心到後端 API 設計皆一人端到端負責",
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
  {
    keywords: ["Redux", "React Query"],
    badgeClassName: "border-sky-200 bg-sky-50/50 text-sky-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Apollo Client", "Apollo Server", "DataLoader", "Zod", "Neon PostgreSQL", "GCP", "Azure", "gRPC"],
    badgeClassName: "border-lime-200 bg-lime-50/50 text-lime-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["Playwright", "TestCafe", "Karma", "Jasmine", "Testing Library", "Drone CI", "SonarQube", "Bitbucket Pipelines", "Azure Pipelines", "PM2"],
    badgeClassName: "border-pink-200 bg-pink-50/50 text-pink-800",
    marqueeClassName: "[--duration:39s]",
    reverse: true,
  },
  {
    keywords: ["Husky", "lint-staged", "Stylelint", "Sentry", "Radix UI", "shadcn", "daisyUI", "Fomantic UI", "PostCSS", "Stylus"],
    badgeClassName: "border-blue-200 bg-blue-50/50 text-blue-800",
    marqueeClassName: "[--duration:35s]",
  },
  {
    keywords: ["Gulp", "Lit-html", "OAuth2", "JWT", "AWS Cognito", "bcryptjs", "Google Charts", "Handsontable", "GitHub"],
    badgeClassName: "border-stone-200 bg-stone-50/50 text-stone-800",
    marqueeClassName: "[--duration:31s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "年前端經驗", value: 7 },
  { label: "交付產品數", value: 19 },
  { label: "帶領團隊人數", value: 4 },
  { label: "使用語言數", value: 3 },
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

export default function ResumePageZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/en" },
        { locale: "zh-TW", label: "中文", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Software Engineer III, Google Pay and Wallet - Google"}
        description={"7 年 JavaScript 與 TypeScript 網頁開發經驗，現於 TikTok Singapore 開發廣告投放財務結算系統。在此之前於 LINE 投入 3 年開發 LINE 購物電商導購平台，在 60 人、每行程式碼合併前都須經過審查的團隊中，以 Vue SSR、GraphQL、ExpressJS 與 Redis 全端技術棧完成大型線上應用的設計與架構；獨立設計可覆用的影片自動預覽模組，以全局調度器解決高速捲動下的預覽混亂與多直播源並發造成的記憶體暴增。\n\n對於做出「好用」而不只是「能用」的產品充滿熱情。曾以一個週末獨自完成並上架 Bilibili 影片加速瀏覽器擴充功能，設計靜默自動降級機制讓觀眾不會看到錯誤畫面，上線 10 天累積 1,000 次安裝與 14 筆五星好評，全數為自然流量。"}
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
