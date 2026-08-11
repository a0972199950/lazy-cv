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
  title: "John Hsieh | 應徵 Engineer/Senior Engineer, Frontend @ Sea Ltd",
  description:
    "7 年前端工程經驗，具備扎實的網頁效能優化實績與 LLM/RAG 實驗經驗——應徵 Sea Ltd（Group Data 團隊）Engineer/Senior Engineer, Frontend 職缺。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/019fef10-9512-778f-ad2c-496635f3a8c6/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "以 React 17、TypeScript 於 User Growth 團隊主導廣告投放財務結算平台，架構橫跨 50+ 子專案、百萬行程式碼規模的 Rush monorepo",
      "將 CSV 校驗邏輯透過 Comlink RPC 轉移至 Web Worker 執行，搭配 Yup 與 Regex 驗證規則，減少 90% UI 卡頓時間，並抽象為超越原始用途的共用內部工具",
      "打造模仿 React useMemo 的 cache/cacheMany 快取工具，在沒有分頁、一次渲染 500 個表單 UI 的介面中降低 98% Total Blocking Time (TBT)",
      "整理廣告主與內部使用者每日透過 oncall 反饋的問題與需求，主動發起對應的技術型開發任務，而非只被動等待需求指派",
      "帶領開發團隊導入 Scrum——透過 retrospective、refinement 與平衡排程，讓 PM 與工程團隊都能掌握交付時程",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "在 60 人規模、「每一行程式碼 merge 前都要有另一人審查」為準則的 Agile 團隊中，獨立設計並開發 LINE 購物「直播購物」可覆用影片自動預覽模組，兼顧捲動與記憶體管理的 UI/UX 細節（Vue SSR、GraphQL、TypeScript、ExpressJS）",
      "帶領 4 人團隊主導 CMS 從 PHP 重構至 React/NextJS App Router 架構，端到端與後端及相鄰團隊協調，達成前後端完全分離",
      "投入 JSTF 跨團隊小組，制定全公司前端開發準則，並導入 Lighthouse CI 於 CI pipeline 中自動化把關效能與品質",
      "指導 2 位新進工程師並獲得正向回饋，同時主導內部 NextJS 教學論壇，加速新人上手",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "以獨立契約工程師身分端到端主導線上相片書編輯器——包含涵蓋 OAuth 第三方登入、購物車訂單流程、金流串接的後端 API 設計——從消費端視角獨立定義 API 契約、資料模型與錯誤處理，6 個月內完成產品上線",
      "支援 PWA 安裝與跨平台（網頁/手機）編輯體驗",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "從公司成立初期加入，使用 React / NextJS、TypeScript 開發面向香港市場的中小企貸款平台",
      "規劃並發佈跨專案共用 UI 組件庫（Stencil.js Web Component）到 private NPM，透過 monorepo 使組件庫可獨立於業務程式碼進行版本管理與發佈",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "於 Foxit Software（PDF 軟體解決方案公司）擔任全端工程師並管理 2 人前端團隊，設計並維護整合 PDF 處理程式庫的 Web 應用 API 與服務（Node.js/Express、MongoDB、Redis）",
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
      "大型企業級 Monorepo 前端專案，服務 TikTok 線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域，管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "針對財務、報價等場景的 JavaScript 浮點數精度問題，實作大規模場景下的高精度數值計算方案",
      "基於 JSON Schema 動態表單渲染的複雜表單互動元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊，並以 Jest 覆蓋 Yup/Regex 驗證規則 —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：cache/cacheMany 工具模仿 React useMemo —— 在一個沒有分頁、一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "AI 擬人對話機器人",
    summary:
      "一款將寵物擬人化、以 LINE 互動的聊天機器人，以大模型和工作流自動化工具 n8n 為基底。具備多輪連續對話記憶、圖片與語音理解（多模態）、透過向量資料庫實現的長期記憶（RAG），並可透過結構化 Prompt 快速切換人物性格。",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "n8n 工作流自動化架構：調度 LINE Webhook 訊號、Gemini API 與資料庫儲存，免去繁重的傳統後端開發",
      "長期記憶（AI 知識庫）：過往記憶儲存成 JSONL 並向量化（Embedding），轉化為 AI 可透過 tool call 高速語意檢索的 RAG 資料庫",
      "結構化 Prompt Engineering：精心調校 system prompt 以確保對話符合特定人物設定與交談風格",
      "圖片與語音理解（多模態 Agent）：可理解圖片與聲音內容並進行互動",
      "輕量化雲端部署：以 Docker 容器化，部署於 DigitalOcean VPS",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "一款讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的 Chrome / Edge / Firefox 瀏覽器擴充套件，動態將影片 CDN host 重排為當地最快節點，具備自動 fallback 機制。從技術架構、開發到上架與維護皆為個人獨立完成。",
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
      "即時節點測速工具：針對「當前影片、當前畫質」的實際分段即時測試各 CDN 節點下載速度，不影響使用者當下實際使用的 CDN",
      "自動容錯 Fallback 機制：持續監控分段請求狀態與播放卡頓，偵測異常時先靜默切換至 B 站原生備援節點",
      "論壇反饋驅動迭代：大量蒐集並追蹤 Bilibili 相關論壇的使用者反饋，歸納常見痛點以排定修復優先順序",
      "可重現建置：純 Node.js 腳本（jszip + sharp + puppeteer）將同一份原始碼打包成跨平台位元組完全相同的 zip",
    ],
    contributions: [
      "Vibe Coding 實踐：架構、開發到商店上架素材，全程獨立完成，僅耗時 1 個週末",
      "上架 10 天內，週活躍使用者（WAU）即突破 1,000（**留存率近 100%**），獲得 **14 筆五星好評、零負評**，全數為自然流量",
      "原始碼已開源：https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，凡經由 LINE 購物外連到合作夥伴商家完成消費後即可獲得點數回饋。全端項目，包含 Vue SSR 前端倉庫與整合數十個後端微服務的 BFF（NodeJS + GraphQL）。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    contributions: [
      "獨自開發「直播購物」功能——參考 YouTube 影片流自動預覽機制，設計**可覆用影片自動預覽模組**，透過全局調度器**解決高速捲動下影片預覽混亂**與**單一頁面過多直播源造成的記憶體暴增**問題",
    ],
    url: "https://buy.line.me",
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統，結合 AI Agent 自動化與 Next.js 16——只需提供職缺連結，即可自動抓取 JD 並生成量身定做的雙語履歷網頁。從零到上線僅花費 2 天，透過 Vibe Coding 完成。",
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
      "AI Agent 自動化 SOP：透過 Chrome DevTools MCP 自動爬取 JD，實現端到端的履歷生成流程",
      "Serverless 部署架構：ECR → Lambda Web Adapter，S3 + CloudFront CDN，GitHub Actions CI/CD",
    ],
  },
  {
    name: "CMS 重構為 NextJS",
    summary:
      "主導 LINE 購物 CMS 從 PHP 架構重構為 React & NextJS App Router，帶領 4 人團隊達成前後端完全分離。公司內部早期採用 NextJS App Router 的專案之一。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微服務架構，讓新舊專案可獨立部署，並可依 URL 漸進式將舊專案遷移至新架構",
    ],
    contributions: [
      "除了寫程式外，同時擔任架構師規劃整個專案，並兼任 PM 角色——分派工作、撰寫技術文件、與使用者溝通",
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
  { label: "年前端工程經驗", value: 7 },
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

export default function SeaFrontendResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019fef10-9512-778f-ad2c-496635f3a8c6/en" },
        { locale: "zh-TW", label: "中文", href: "/019fef10-9512-778f-ad2c-496635f3a8c6/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"軟體工程師 - TikTok\n應徵 Engineer/Senior Engineer, Frontend - Sea Ltd"}
        description={`7 年前端經驗，現於 TikTok，先前 LINE Taiwan，應徵 Sea Frontend 工程師。網頁效能優化經驗豐富：快取工具降低 98% TBT，Web Worker 方案減少 90% UI 卡頓，皆於百萬行 React monorepo 完成。核心技術 React、TypeScript、HTML、CSS，具 REST、GraphQL、Node.js 全端經驗。

積極實驗新技術：打造整合 LLM 與向量記憶（RAG）的 AI 聊天機器人，並獨立開發 Chrome 擴充套件 TWSG，上架 10 天 WAU 破千、14 則五星好評。具 UI/UX 素養，主導 LINE 購物直播預覽模組設計。熟悉 Jest、Cypress 自動化測試。指導 2 位新人，帶領 4 人團隊完成架構遷移。中英日三語流利。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 網頁效能優化與 AI 輔助工程"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，展示網頁效能優化、LLM/RAG 實驗經驗，以及獨立產品交付能力。`}
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
