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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam, AIBeam } from "../skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | 資深前端工程師",
  description:
    "7 年前端開發經驗，曾任職 TikTok Singapore 與 LINE Taiwan，專精 React / Next.js / TypeScript。",
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
      "為 User Growth 團隊打造廣告投放前端系統，透過各大 DSP 平台為 TikTok 及旗下產品推動海外用戶增長",
      "在 50+ 子專案、百萬級程式碼規模的 monorepo 中主導廣告投放財務結算系統開發，技術棧為 React 17、TypeScript、Rush Monorepo 與公司自研微前端框架",
      "將 CSV 校驗邏輯透過 Comlink RPC 轉移至 Web Worker 執行，搭配 Yup 與 Regex 驗證規則，在 10 筆資料的填寫流程中減少 90% UI 卡頓時間",
      "打造模仿 React useMemo 的 cache/cacheMany 快取工具，在一次渲染 500 個表單的介面上降低 98% Total Blocking Time (TBT)",
      "帶領開發團隊導入 Scrum，透過 retrospective 建立團隊自我糾錯機制、以 refinement 解決成員各自為政問題，並平衡工作量、提升 PM 對時程的掌握度",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發並維護 LINE 購物（LINE 電商導購平台），技術棧為 Vue SSR、GraphQL、TypeScript 與 ExpressJS——獨立開發「直播購物」影片自動預覽模組，透過全局調度器解決高速捲動時的預覽混亂與多直播源並發造成的記憶體暴增問題",
      "帶領 4 人團隊主導 CMS 從 PHP 重構至 NextJS App Router 架構，達成前後端完全分離",
      "投入 JSTF 跨團隊小組，制定全公司前端開發準則，並導入 Lighthouse CI 自動化效能評量",
      "指導 2 位新進工程師並獲得正向回饋，同時主導內部 NextJS 教學論壇，加速新人上手",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自開發線上相片書編輯器，支援拖曳、尺寸調整、文字編輯等功能",
      "從零規劃技術架構，使用 Vue + NuxtJS，6 個月內完成產品上線",
      "支援 PWA 安裝，提供類原生 APP 的體驗",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "從零規劃前端架構與技術選型，於公司初創期加入",
      "使用 React / NextJS、TypeScript、TailwindCSS 開發面向香港市場的中小企貸款平台",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "管理 2 人前端團隊，於新成立的 AI 團隊中擔任全端工程師",
      "開發整合內部 AI 微服務的 2B 管理平台，技術棧涵蓋 NuxtJS/NextJS、TypeScript、MongoDB 與 Redis",
    ],
  },
  {
    company: "電獺 Aotter",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "於約 4 人的專案導向團隊中快速迭代產品交付",
      "開發 SuprLink 縮網址服務、Aotter Trek DSP 廣告平台等自有及外部專案，技術棧為 Nuxt 生態系、TypeScript、TailwindCSS，搭配 Docker 與 K8s CI/CD 流程",
      "為每個專案量身訂做 TailwindCSS 小型 UI 框架，維持高度 UI/UX 設計還原度",
    ],
  },
  {
    company: "第三緯度科技",
    role: "Frontend Engineer",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "為咻咻漫畫（線上漫畫平台）建構 Vue + PHP 前後端分離架構",
      "串接微信支付金流系統，支援線上交易",
    ],
  },
  {
    company: "日商優橋",
    role: "數位廣告優化師 & Frontend Engineer",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "管理 Facebook / Google Ads 廣告投放，運用 A/B Testing 與 Heatmap 分析優化 UX，擔任數位廣告優化師",
      "轉任前端工程師兼 PM，為代理品牌架設官方網站與活動頁面，包含俏樂斯（保養品牌）、髮樂活與日本嚴選",
      "管理前端團隊 2 人，使用日文作為主要工作語言",
    ],
  },
  {
    company: "亞洲遊",
    role: "日本市場業務及營運",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "接洽日本旅宿房源並協助上架至公司平台",
      "協助消費者排除旅日緊急狀況，擔任對日翻譯窗口",
      "2017 年度預約筆數達 8,846，與前年比成長 376%",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "一款讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的 Chrome / Edge / Firefox 瀏覽器擴充套件，動態將影片 CDN host 重排為當地最快節點，並具備自動 fallback 機制。從技術架構、開發到上架與維護皆為個人獨立完成。",
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
      "MAIN world 注入攔截 fetch/XHR 與 playinfo 物件的 setter，即時改寫 playurl/DASH manifest 中的 CDN host，且不影響頁面原生行為",
      "雙 world 橋接架構：MAIN world 無法存取 chrome.storage/chrome.i18n 等擴充 API，因此由 ISOLATED world 橋接腳本透過 postMessage/localStorage 與 MAIN world 溝通，同步設定與多語系文案",
      "自動容錯 Fallback 機制：即時監控分段請求狀態與播放卡頓，偵測異常時先靜默切換至 B 站原生備援節點，備援也失效才提示使用者",
      "可重現建置（Reproducible Build）：純 Node.js 腳本（jszip + sharp + puppeteer）打包，只要原始碼不變，跨平台每次產出的 zip bytes 完全相同",
      "以 Puppeteer 自動化開啟 Bilibili 影片頁並依序切換三語系，自動截取商店上架素材",
    ],
    contributions: [
      "Vibe Coding 實踐：全程透過 AI 輔助協作開發，從技術架構、程式碼撰寫到商店上架素材，僅耗時 1 個週末即完成並上線",
      "上架 10 天：瀏覽數 2,000、安裝數 1,000（**轉換率達 50%**），WAU 突破 1,000（**留存率近 100%**），獲得 **14 筆五星好評、零負評**，全數為自然流量",
      "GitHub：https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "AI 擬人對話機器人",
    summary:
      "以大語言模型與 n8n 工作流自動化為基底，透過 LINE Messaging API 打造寵物擬人化 AI 聊天機器人。具備多輪對話記憶、圖片/語音理解（多模態）、長期記憶（向量資料庫 RAG）等功能，並可根據不同場景快速切換人格設定。",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "n8n 工作流自動化架構：以 n8n 為核心後端整合平台，靈活調度 LINE Webhook、Gemini API 與資料庫，免去繁重的傳統後端開發，大幅提升迭代效率",
      "多輪連續對話記憶（Context Window）：以 user ID 為單位實現精準、獨立的個人化對話脈絡",
      "圖片與語音理解（多模態 Agent）：機器人可理解圖片與聲音內容並進行互動",
      "長期記憶（AI 知識庫）：過往記憶存成 JSONL 並向量化（Embedding），透過 tool call 賦予 AI 語意檢索能力，更加擬人化",
      "輕量化雲端部署：以 Docker 容器化打包，部署於 DigitalOcean VPS",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統。結合 AI Agent 與 Next.js 16，只需提供職缺連結即可自動抓取 JD 並生成量身定做的中英文雙語履歷網頁。整個專案從零到上線僅花費 2 天，全程透過 Vibe Coding 完成。本履歷就是用此專案自動生成的。",
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
      "AI Agent 自動化 SOP：透過 Chrome DevTools MCP 自動爬取 JD，實現端到端履歷生成流程",
      "Serverless 部署架構：ECR → Lambda Web Adapter，S3 + CloudFront CDN，GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM 實現 type-safe 資料存取",
      "TailwindCSS 4 + Framer Motion 響應式設計搭配流暢動畫",
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
      "針對財務、報價等場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "透過自研框架實現子應用動態載入的微前端整合，支援按需載入業務模組與獨立開發部署",
      "透過自研線上翻譯平台在 runtime 獲取最新翻譯檔，實現多語系支援與動態更新",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊，搭配 Yup + Regex Schema —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany 工具快取計算結果 —— 在一個沒有做分頁、一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋。",
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
      "公司早期採用 Next APP router 的專案之一",
    ],
    contributions: [
      "除了寫程式外，還擔任架構師規畫整個專案，同時兼任 PM 角色——分派工作、撰寫技術文件、與使用者溝通",
    ],
  },
  {
    name: "AI.Book 相簿編輯器",
    summary:
      "線上相片書編輯器，支援照片拖曳/尺寸調整/文字編輯，跨平台支援含 PWA 安裝體驗。從零規劃到上線僅 6 個月。",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    company: "AI.Book 愛相簿",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "用純 Vue 搭建客製化編輯器，支援加入/移除照片、文字輸入及字型字體大小編輯",
      "編輯器支援網頁端與手機端編輯",
      "支援安裝 PWA 達到類原生 APP 的體驗",
    ],
    contributions: [
      "從零開始單獨開發",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    company: "FundFluent",
    image:
      "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI 組件使用 Stencil 搭建 web components，不受前端框架限制",
      "透過 Tailwind + Semantic UI 構建 design system",
      "透過 StoryBook 展示組件，方便與設計師溝通確認",
      "使用 monorepo 區分組件庫與業務程式，組件庫可單獨發布測試",
    ],
    contributions: [
      "從零開始單獨開發",
    ],
  },
  {
    name: "SuprLink 超級連結",
    summary:
      "從 A/B 分流到數據分析，再到廣告投放一氣呵成的縮網址服務。",
    stack: ["NuxtJS", "TypeScript", "TailwindCSS", "Docker", "K8s"],
    company: "電獺 Aotter",
    image:
      "https://cdn.lazy-cv.com/a14d9a80-45b9-4943-a043-49dacb460bb9.png",
    url: "https://supr.link",
  },
  {
    name: "Aotter Trek DSP 平台",
    summary:
      "結合大數據分析的廣告投放 DSP 平台，使用大量圖表介面為使用者找出最適合的廣告 TA。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    company: "電獺 Aotter",
    image:
      "https://cdn.lazy-cv.com/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
  },
  {
    name: "JavaScript Task Force",
    summary:
      "LINE Taiwan 跨團隊專案小組，制定全公司前端開發準則，研究導入 SonarQube、Lighthouse CI、OpenTel 前端監控、React 專案 template 生成器等。",
    stack: ["SonarQube", "Lighthouse CI", "OpenTel", "React"],
    company: "LINE Taiwan",
    image:
      "https://cdn.lazy-cv.com/jstf.png",
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台，提供銀行與政府貸款資訊、一站式申請，並透過 OCR 技術整理文件以降低重複提交成本。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    company: "FundFluent",
    image:
      "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "從零開始單獨開發",
    ],
  },
  {
    name: "FundFluent Partner Portal",
    summary:
      "面向銀行等放貸方的管理平台，可上架、整理各項貸款專案，以及審核來自中小企的申請案件。",
    stack: ["React", "NextJS", "TypeScript", "Semantic UI"],
    company: "FundFluent",
    image:
      "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    url: "https://partner.fundfluent.io",
    contributions: [
      "從零開始單獨開發",
    ],
  },
  {
    name: "Chrome Extension - SuprLink",
    summary:
      "快速在 SuprLink 超級連結產生縮網址的 Chrome 擴充工具。",
    stack: ["Chrome Extension", "JavaScript"],
    company: "電獺 Aotter",
    image:
      "https://cdn.lazy-cv.com/7b907335-af65-43cc-9ea2-b9ae4d2c80f0.png",
  },
  {
    name: "資策會 城市儀表板",
    summary:
      "收集分散各地的政府數據於同一平台展示的政府資料數據庫，具備可高度客製化的圖表及資料篩選模組。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "TailwindCSS"],
    company: "電獺 Aotter",
    image:
      "https://cdn.lazy-cv.com/0a002690-85c9-4bcf-bb72-9cebf81788ae.png",
  },
  {
    name: "beanfun! 數據管理中心",
    summary:
      "擁有各種圖表的集中數據 Dashboard，用以顯示企業內部各項指標。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    company: "電獺 Aotter",
    image:
      "https://cdn.lazy-cv.com/de995dc8-088c-430b-ba29-33fd2b364ced.png",
  },
  {
    name: "咻咻漫畫",
    summary:
      "使用 Vue + PHP 前後端分離架構開發的線上漫畫平台，串接微信支付金流系統。",
    stack: ["Vue", "PHP", "WeChat Pay"],
    company: "第三緯度科技",
    image:
      "https://cdn.lazy-cv.com/f0b11a8f-47c9-4587-9188-e6c93256baa7.png",
  },
  {
    name: "俏樂斯 官方網站",
    summary:
      "日本沖繩保養品俏樂斯的台灣官方網站，主導設計規劃與前端開發。",
    stack: ["PHP", "jQuery", "CSS"],
    company: "日商優橋",
    image:
      "https://cdn.lazy-cv.com/b2a0eaa9-55f5-4482-bd20-c4c574b5d7d7.png",
  },
  {
    name: "髮樂活",
    summary:
      "美髮保養的內容型自媒體網站。",
    stack: ["WordPress", "PHP", "CSS"],
    company: "日商優橋",
    image:
      "https://cdn.lazy-cv.com/2b1c2e88-9b0e-4bf8-98ee-f955391ba10f.png",
  },
  {
    name: "日本嚴選",
    summary:
      "專接業配的日系產品推薦部落格。",
    stack: ["WordPress", "PHP", "CSS"],
    company: "日商優橋",
    image:
      "https://cdn.lazy-cv.com/12da9319-3e54-419e-b6c2-1044360f7b7a.png",
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

export default function ExampleResumePageZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/john-hsieh/en" },
        { locale: "zh-TW", label: "中文", href: "/john-hsieh/zh-TW" },
      ]} />


      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="資深前端工程師"
        description="7 年前端開發經驗，曾任職於 TikTok Singapore 與 LINE Taiwan，擔任資深軟體工程師。核心技術棧為 React (Next.js)、Vue (Nuxt.js) 與 TypeScript，橫跨資源有限的早期新創與嚴謹的大型企業環境：能從零規劃產品架構，也能在大型團隊中交付高品質程式碼，並始終在意軟體是否好用、體驗是否流暢。已將 AI 工具深度整合進日常開發流程，運用 GitHub Copilot Agent Mode、MCP 與 n8n 建立端到端的自動化 SOP，並具備 LLM API 串接與向量資料庫（RAG）開發經驗。流利使用英、日、中三種語言，熟悉敏捷開發與跨職能協作，能有效與非技術利害關係人溝通。"
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
