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
  title: "John Hsieh | Software Engineer (TypeScript) — Arta Finance",
  description:
    "7 年前端經驗，TikTok Singapore 與 LINE Taiwan 資深工程師。React / TypeScript 主力，具 Design System、金融科技產品與 AI Agent / LLM UI 開發實績，能獨立 end-to-end 交付完整功能切片。",
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
      "隸屬 User Growth 團隊，負責廣告投放的**財務結算系統**開發 —— 金額計算、供應商採購與結算流程等高信任度金融介面，任何一個小數點的誤差都是事故。",
      "技術棧為 React + TypeScript、Rush monorepo 與公司自研框架架設的前端微服務系統，服務 50+ 子專案、百萬級程式碼規模。",
      "以 Web Worker 多線程與函數快取工具解決效能瓶頸，分別**減少 90% UI 卡頓時間**與**降低 98% Total Blocking Time**，實踐「效能是產品體驗的一部分」的 craft bar。",
      "帶領開發團隊導入 Scrum，利用 retrospective 建立自我糾錯機制、refinement 打破成員各自為政，並平衡工作量與提升 PM 對時程的掌握度。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer / Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "日常開發 LINE 購物（大流量電商導購平台），技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS —— 前端與 API 兩個 code base 皆由團隊自行維護，具備跨前後端的實作經驗。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 **React + NextJS App Router** 架構，負責技術選型、架構設計、時程規劃與風險評估，是公司最早採用 App Router 的專案之一。",
      "參與 JavaScript Task Force 制定全公司前端開發準則，導入 **Lighthouse CI** 讓效能評量成為每個 PR 的標準關卡；團隊核心信條是「每一行程式碼 merge 前都要有另一個人看過」。",
      "擔任 Mentor 指導 2 位新人並主導內部 NextJS 教學論壇，擅長把複雜問題拆解成新人能懂的語言。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "**獨自一人**從零規劃並開發線上相片書編輯器 —— 高互動性的圖文編輯介面，支援加入/移除照片、文字輸入與字型字級調整。",
      "從技術選型、架構規劃到上線全程自主決策，使用 Vue + NuxtJS，6 個月內完成產品交付。",
      "**主導後端 API 設計**：涵蓋 OAuth 第三方登入、購物流程與金流串接，從消費端視角定義 API 契約並落地 —— 完整 own 了一條 full slice。",
      "同時支援桌機與行動端編輯，並以 PWA（Service Worker / IndexedDB）提供類原生 APP 體驗。",
    ],
  },
  {
    company: "FundFluent (FinTech)",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "**金融科技新創**：面向香港市場的中小企業貸款媒合平台，公司初創期即加入，從零規劃前端架構與技術選型。",
      "使用 React (NextJS) + TypeScript + TailwindCSS 獨立交付 SME Portal（借款方）與 Partner Portal（銀行放貸方）兩套產品。",
      "主導建立跨專案共用的 **Design System 與元件庫**：以 Stencil.js Web Component 打造不受框架限制的組件，整合 TailwindCSS + 客製化 Semantic UI，透過 Storybook 與設計師對齊，發布至 private NPM。",
      "產品涉及政府與銀行貸款資訊整合、線上申請與文件 OCR，深刻理解金融產品 UX 對「可信任感」的要求。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在新成立的 AI 團隊中擔任**全端工程師**，開發整合團隊內部所有 AI 微服務、對外提供 API 接口的 2B 管理平台。",
      "前端 NuxtJS / NextJS + TypeScript，後端 NodeJS + TypeScript + MongoDB + Redis —— 自行設計 data model 與 API endpoint，是「需要時就下沉到後端」的實際證明。",
      "管理 2 人前端團隊，並參與 GraphQL / NestJS 導入的技術評估。",
    ],
  },
  {
    company: "電獺 Aotter",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "專案導向的小型團隊，每個專案約 4 人（PM、UI、前後端各一），溝通成本低、產品迭代快；每位工程師同時橫跨多個專案，必須自己安排時間資源，確保每條產品線都不 delay。",
      "**注重設計稿還原度與易用性**：以 TailwindCSS 為每個專案量身訂做小型 UI 框架，而非套用同一套現成框架，讓設計在每個產品上都能有各自的個性；程式碼則強調模組化與可複用性。",
      "主架構為 Nuxt 生態系 + TypeScript + Sass / TailwindCSS，CI/CD 以 Docker + K8s 執行。",
      "交付 SuprLink 縮網址服務、Aotter Trek 廣告投放 DSP 平台、資策會城市儀表板與 beanfun! 數據中心等多個**圖表密集的 dashboard 產品**，累積了把大量數據整理成可讀介面的經驗。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE 購物 — 直播購物模組",
    summary:
      "LINE 導購服務，凡經由 LINE 購物外連到合作夥伴商家完成消費即可獲得 LINE 點數回饋，同時也是集結第三方電商的購物入口網站。**這是一個對 UI 體驗要求極高的大流量消費性產品** —— 面對的是一般消費者而非內部員工，設計稿還原度、捲動流暢度、載入感受與每一個互動細節都會直接反映在轉換率上，因此團隊把 UI 品質視為與功能同等重要的驗收標準。我獨自開發了平台的「直播購物」功能。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    highlights: [
      "**體驗優先的互動設計**：參考 YouTube 影片流自動預覽機制，設計一套**可覆用的影片自動預覽模組**，讓使用者在瀏覽時無需點擊就能預覽直播內容",
      "**捲動體驗的細節打磨**：透過**全局調度器**解決高速捲動下影片預覽混亂的問題，確保任何時刻只有使用者真正在看的那一則被播放，視覺焦點始終符合預期",
      "**不讓體驗換來卡頓**：解決單一頁面過多直播源造成**記憶體暴增**的技術難點，在流暢的預覽體驗與裝置資源之間取得平衡",
      "**SSR 與載入感受**：以 Vue SSR 架構確保首屏內容即時可見，兼顧 SEO 與消費者的第一印象",
      "同時維護前端與 GraphQL API 兩個 code base，可跨層排查體驗問題的根因",
    ],
    contributions: [
      "**獨自開發**整個直播購物功能，從互動機制設計、模組架構到上線",
    ],
  },
  {
    name: "Lazy CV — AI Agentic 全端產品",
    summary:
      "AI 驅動的客製化履歷生成系統，也是我實踐 **Agentic Engineering** 的主戰場。只需提供一個職缺連結，AI Agent 即自動抓取 JD、分析關鍵需求、比對個人資料源，最後自主生成中英文雙語履歷網頁並寫入專案。**整個專案從零到上線僅花費 2 天**，全程以 AI 輔助開發（Vibe Coding）完成 —— 這正是 JD 所描述「用 AI coding agents 比傳統前端團隊更快交付更高品質作品」的直接證據。本份履歷就是由此系統生成的。",
    stack: ["AI Agent", "MCP", "Prompt Engineering", "Vibe Coding", "Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "**Agent 自主工作流**：定義一條端到端的 SOP —— Agent 依序執行「抓取 JD → 分析需求 → 檢索事實來源 → 生成雙語頁面 → 寫檔驗證」，中途無需人為介入",
      "**MCP 工具整合**：透過 Model Context Protocol 讓 Agent 具備瀏覽器爬取能力，把外部工具接進 Agent 的決策迴圈（我也具備自行開發 MCP Server 的能力）",
      "**結構化 Prompt 即程式**：以 copilot-instructions / skill 檔案把「履歷該長什麼樣」寫成可版控、可迭代的規格，Agent 的行為因此可預測、可回歸測試",
      "**SDD（Spec-Driven Development）**：先寫詳細規格再驅動 AI 實作，明確約束「禁止虛構事實、只能調整語氣」，大幅降低 hallucination 風險",
      "**Serverless 全端架構**：Next.js 16 App Router + Standalone Output，ECR → Lambda Web Adapter 運行 SSR，S3 + CloudFront CDN 分發靜態資產，GitHub Actions 全自動 CI/CD",
      "**資料層自建**：Neon Serverless PostgreSQL + Drizzle ORM，自行設計 schema 與 type-safe 資料存取",
    ],
    contributions: [
      "Agent 工作流設計、前端、後端、資料庫與雲端部署**全部由一人完成**，2 天內上線",
    ],
  },
  {
    name: "FundFluent Design System（TailwindCSS UI System）",
    summary:
      "個人主導的跨專案共用 **Design System**，共享於 private NPM。核心是以 **TailwindCSS 為基底建立一套完整的 UI design system** —— 把設計師的色票、字級、間距、圓角與陰影收斂成 Tailwind 的 theme token，讓所有元件都只能從這組 token 取值，從源頭杜絕「每個頁面顏色都差一點」的設計偏移。元件本身以 Web Component（Stencil.js）實作，因此不被任何前端框架綁死。",
    stack: ["TailwindCSS", "Design Tokens", "Stencil.js", "Web Component", "Shadow DOM", "Semantic UI", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "**以 TailwindCSS 建構 design system**：將 design token（色彩、字級、間距、圓角）集中定義於 Tailwind 設定檔，成為整間公司唯一的視覺真實來源，設計改版時只需改 token 而非逐頁修 CSS",
      "**Tailwind + 客製化 Semantic UI**：以 Tailwind 的 utility 彈性搭配 Semantic UI 的語意化元件基礎，兼顧開發速度與設計一致性",
      "**框架無關的元件庫**：以 Stencil 建構 web components + Shadow DOM 隔離樣式，使同一套元件可在 React、Vue 或原生專案中複用",
      "**Storybook 作為設計協作介面**：展示每個元件的所有狀態，讓設計師能直接在瀏覽器逐一驗收互動與視覺細節，把「與設計師平等協作」變成制度而非口號",
      "**Monorepo 分層**：區分元件庫與業務程式，元件庫可單獨發布測試，通過後再批量構建業務專案",
    ],
    contributions: [
      "從技術選型、token 制定、元件開發到文件撰寫**從零開始單獨完成**",
    ],
  },
  {
    name: "AI.Book 線上相片書編輯器",
    summary:
      "線上相片書編輯平台：使用者可在網頁上製作客製化相簿，完成後印製成實體紀念冊出售。核心是一個高互動性的線上編輯器 —— 支援加入/移除照片、輸入文字、調整字型與字級，並同時支援桌機與行動端。**整個產品由我一人從零規劃到上線，只花 6 個月**，而且不只前端：**我同時主導了後端 API 的設計**，是我在「end-to-end own 一條完整功能切片」上最完整的一次實踐。",
    stack: ["Vue", "NuxtJS", "OAuth", "金流串接", "REST API", "PWA", "Service Worker", "IndexedDB"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "**主導後端 API 設計**：涵蓋 **OAuth 第三方登入**、**購物車與訂單流程**、**金流串接**等關鍵路徑，從消費端（前端）視角定義 API 契約、資料模型與錯誤處理，確保介面拿到的就是它真正需要的形狀",
      "**從零打造編輯器**：以純 Vue 自建客製化編輯器，處理照片增刪、文字輸入與字型字級調整等高互動場景，沒有依賴現成的編輯器套件",
      "**跨裝置編輯體驗**：同一套編輯器同時支援網頁端與手機端操作，需為兩種截然不同的輸入方式設計互動",
      "**PWA 離線體驗**：以 Service Worker + IndexedDB 支援安裝與快取，達到類原生 APP 的使用感受",
      "**技術選型自主**：Vue + NuxtJS 的架構決策、專案規劃與時程掌控皆由我負責",
    ],
    contributions: [
      "**從 0 開始獨立規劃並開發**，一人完成前端架構、編輯器核心、後端 API 設計與上線交付",
    ],
  },
  {
    name: "UG 海外增長業務平台（TikTok 大型微前端架構）",
    summary:
      "服務 TikTok 線上廣告海外增長業務線的**企業級微前端平台** —— 以 Rush + PNPM Workspaces 管理 **50+ 子專案、百萬級程式碼規模**，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域。各業務子系統在統一的技術架構與工程規範下協同開發、獨立部署。我專注於採購與結算模組的開發與維護。",
    stack: ["微前端 Micro-Frontend", "Rush + PNPM Workspaces", "React 17", "TypeScript", "Arco Design", "Ferry / Thrift IDL", "Web Worker", "Comlink", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "**微前端架構**：透過公司自研框架實現子應用動態載入，各業務模組可按需載入、獨立開發與獨立部署，讓數十個團隊能在同一個平台上並行推進而不互相阻塞",
      "**Monorepo 工程治理**：Rush v5 + PNPM Workspaces 管理 50+ 子專案的依賴與建置，搭配 ESLint + commitlint + lint-staged 統一全平台的工程規範",
      "**型別安全的跨服務協議**：採用 Ferry + Thrift IDL 生成強型別 Service 程式碼，在龐大的微前端體系中保障前後端協議一致性，減少執行時錯誤",
      "**配置驅動的複雜表單**：基於自研 JSON Schema 動態表單渲染方案開發大量業務元件，涵蓋級聯選擇、動態欄位、條件顯示與欄位聯動",
      "**高精度數值計算**：針對財務、報價場景的 JavaScript 浮點數精度問題實作專屬方案，杜絕金額誤差",
      "**國際化多語系**：透過自研線上翻譯平台於 runtime 取得最新翻譯檔，支援多語系與動態更新",
    ],
    contributions: [
      "**Web Worker 多線程 CSV 校驗**：將大型 CSV 校驗移轉到獨立執行緒，以 Comlink 實現類 RPC 通訊，搭配 Yup + Regex Schema —— **減少 90% UI 卡頓時間**，並抽象為公共工具供全平台複用",
      "**函數快取工具優化渲染效能**：模仿 React useMemo 建立 cache/cacheMany 工具快取計算結果 —— 在一個沒有做分頁、一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
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
];

const stats: StatItem[] = [
  { label: "年前端經驗", value: 7 },
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

const summary = [
  "我是有 7 年經驗的前端工程師，目前在 TikTok 負責廣告投放的財務結算系統。在那之前我在 LINE Taiwan 待了三年，日常開發 LINE 購物，同時帶領過四人的專案小組。對我來說最重要的東西有兩個: 使用者體驗與程式碼可維護性",

  "我的經歷剛好橫跨兩種環境。在 TikTok 和 LINE 這種千人規模的公司，我習慣了嚴謹的 code review 與工程規範，也很清楚金融場景容不下一個小數點的誤差；另一方面也在 FundFluent，AI.Book 等新創公司從零開始獨立完成專案規劃上線。在後者會更需要一人多工，以及需求釐清等溝通工作。這兩種經驗讓我能在不同規模的團隊中都能快速上手，並且在有限資源下交付高品質產品。",

  "使用者體驗的具體例子:在 LINE 我做直播購物的影片自動預覽，花了不少時間處理快速捲動時該播哪一則、以及同一頁太多直播源導致記憶體爆掉的問題。這類細節使用者講不出來，但感覺得到。",

  "Arta 在做的事，是把複雜的投資決策變成一個用起來輕鬆的介面。難的不是功能多寡，是信任和易用：數字要對、資訊層級要清楚、互動要穩，使用者才敢把錢放進來——這正是我最擅長的領域。我的專案經驗涵蓋了金融科技產品、消費性產品、以及 design system 開發，能夠獨立 end-to-end 交付完整功能切片。",

  "近年也常用 AI 來開發。你現在看到的這份履歷，就是我的個人專案 Lazy CV 自動生成的，那是一個 Next.js, PostgreSQL & AWS Lambda 的全端應用，從零到上線花了兩天。我也做過真正的 AI 產品：一個有多輪對話記憶、看得懂圖片、會自己調用工具、並用向量檢索找回過往記憶的聊天機器人。",
].join("\n\n");

/* ────────────────── component ────────────────── */

export default function ArtaFinanceResumePageZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019fa36b-20c8-7196-8acc-981b20700cd5/en" },
        { locale: "zh-TW", label: "中文", href: "/019fa36b-20c8-7196-8acc-981b20700cd5/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Software Engineer (TypeScript)"
        description={summary}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan / FundFluent HK — 跨國金融與消費性產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`精選 ${projects.length} 個與 Arta Finance 職缺最相關的專案 —— 涵蓋高標準 UI 體驗、AI Agentic 開發、TailwindCSS Design System、0 到 1 全端獨立交付與大型微前端架構。`}
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
