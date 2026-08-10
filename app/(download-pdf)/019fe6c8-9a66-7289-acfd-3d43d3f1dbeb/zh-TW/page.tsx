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
  title: "John Hsieh | 應徵 Software Engineer, Payments @ Stripe",
  description:
    "7 年全端工程經驗，具備實際金融科技/金流相關背景——中小企貸款平台、金流串接、廣告財務結算——應徵 Stripe Software Engineer, Payments 職缺。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/019fe6c8-9a66-7289-acfd-3d43d3f1dbeb/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "主導 User Growth 團隊的廣告投放財務結算平台，在 50+ 子專案、百萬級程式碼規模的 Rush monorepo 中解決財務計算場景的 JavaScript 浮點數精度問題（React 17、TypeScript）",
      "將 CSV 校驗邏輯透過 Comlink RPC 轉移至 Web Worker 執行，搭配 Yup 與 Regex 驗證規則，減少 90% UI 卡頓時間，並抽象為超越原始用途的共用內部工具",
      "打造模仿 React useMemo 的 cache/cacheMany 快取工具，降低 98% Total Blocking Time (TBT)，在高吞吐量的財務工作流程中維持工程標準",
      "帶領開發團隊導入 Scrum，協調工程與 PM 跨職能利害關係人——透過 retrospective、refinement 與平衡排程，建立跨團隊對交付時程的清楚掌握度",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "在 60 人規模、「每一行程式碼 merge 前都要有另一人審查」為準則的 Agile 團隊中，獨立開發 LINE 購物「直播購物」可覆用影片自動預覽模組（Vue SSR、GraphQL、TypeScript、ExpressJS）",
      "帶領 4 人團隊主導 CMS 從 PHP 重構至 NextJS App Router 架構，端到端與後端及相鄰團隊協調，達成前後端完全分離",
      "投入 JSTF 跨團隊小組（橫跨多個產品團隊），制定全公司前端開發準則，並導入 Lighthouse CI 自動化把關程式碼品質與效能",
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
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "在 FundFluent（一間透過數位市集媒合香港中小企與資金來源的金融科技公司）使用 React / NextJS、TypeScript 開發面向香港市場的中小企貸款平台",
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
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台。提供銀行與政府的各式貸款資訊、一站式申請各項貸款，並利用 OCR 技術協助中小企業整理歸類文件，降低重複提交成本。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "作為金融科技放貸產品的唯一開發者，從零開始獨立完成",
    ],
  },
  {
    name: "FundFluent Partner Portal",
    summary:
      "面向銀行等放貸方的管理平台，可用來上架、整理各項貸款專案，以及端到端審核來自中小企的申請案件。",
    stack: ["React", "NextJS", "TypeScript", "Semantic UI"],
    company: "FundFluent",
    image: "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    url: "https://partner.fundfluent.io",
    contributions: [
      "從零開始單獨開發，直接負責貸款產品的放貸方（Lender）端",
    ],
  },
  {
    name: "AI.Book 相簿編輯器",
    summary:
      "線上相片書編輯器，支援照片拖曳/尺寸調整/文字編輯，跨平台支援含 PWA 安裝體驗，背後由端到端設計的金流串接結帳流程支撐。從零規劃到上線僅 6 個月。",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    company: "AI.Book 愛相簿",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "主導涵蓋 OAuth 第三方登入、購物車訂單流程、金流串接的後端 API 設計，從消費端視角定義 API 契約與錯誤處理",
      "用純 Vue 搭建客製化編輯器，支援加入/移除照片、文字輸入及字型字體大小編輯，涵蓋網頁端與手機端",
    ],
    contributions: [
      "從零開始單獨開發，端到端擁有從結帳體驗到後端金流 API 契約的完整切片",
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
      "針對財務、報價等場景的 JavaScript 浮點數精度問題，實作大規模場景下的高精度數值計算方案",
      "基於 JSON Schema 動態表單渲染的複雜表單互動元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊 —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：cache/cacheMany 工具模仿 React useMemo —— 在一個沒有分頁、一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "一款讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的 Chrome / Edge / Firefox 瀏覽器擴充套件，動態將影片 CDN host 重排為當地最快節點，具備自動 fallback 機制與持續可靠性監控。從技術架構、開發到上架與維護皆為個人獨立完成。",
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
      "論壇反饋驅動迭代：大量蒐集並追蹤 Bilibili 相關論壇的使用者反饋，歸納常見痛點以排定修復優先順序、驅動功能迭代方向",
      "自動容錯 Fallback 機制：持續監控分段請求狀態與播放卡頓，偵測異常時先靜默切換至 B 站原生備援節點，備援也失效才提示使用者",
      "Vibe Coding 實踐：架構、開發到商店上架素材，全程透過 AI 輔助協作，僅耗時 1 個週末即完成並上線",
      "即時節點測速工具：針對「當前影片、當前畫質」的實際分段即時測試各 CDN 節點下載速度，不影響使用者當下實際使用的 CDN",
    ],
    contributions: [
      "上架 10 天內，週活躍使用者（WAU）即突破 1,000，獲得 **14 筆五星好評、零負評**，全數為自然流量",
      "原始碼已開源：https://github.com/a0972199950/bilibili-cdn-switcher",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統，結合端到端 AI Agent 流程與 Next.js 16，橫跨多個系統與技術——職缺抓取、資料庫、Serverless 運算與 CDN——只需提供職缺連結即可自動產出成品履歷。",
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
      "Serverless 部署架構：ECR → Lambda Web Adapter，S3 + CloudFront CDN，GitHub Actions CI/CD——端到端橫跨建置、運算、儲存與分發系統",
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
  { label: "年軟體工程經驗", value: 7 },
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

export default function StripePaymentsResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019fe6c8-9a66-7289-acfd-3d43d3f1dbeb/en" },
        { locale: "zh-TW", label: "中文", href: "/019fe6c8-9a66-7289-acfd-3d43d3f1dbeb/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Software Engineer, Payments - Stripe"}
        description={`7 年全端工程經驗，現於 TikTok，先前於 LINE Taiwan。在 AI.Book、FundFluent 兩段契約中擔任唯一工程師，spec 未定義、權責邊界不清，獨立釐清需求並推進下一步，端到端交付，僅於里程碑檢核。金融領域經歷：AI.Book 金流 API、FundFluent 貸款平台，現於 TikTok 主導財務結算平台。

在 LINE 60 人 Agile 團隊維持嚴謹 code review 文化，投入 JSTF 制定前端標準、導入 Lighthouse CI，並指導新人。熱衷解決真實使用者問題：TikTok 每日 oncall 反饋歸納為開發任務；獨立經營 Chrome 擴充套件 TWSG，蒐集論壇反饋驅動迭代，上架 10 天 WAU 破千、14 則五星好評零負評。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 金融科技與金流相關工程經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，展示金融科技產品交付、金流/API 整合，以及跨系統工程能力。`}
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
