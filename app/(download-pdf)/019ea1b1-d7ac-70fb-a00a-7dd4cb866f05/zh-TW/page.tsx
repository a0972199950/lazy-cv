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
  title: "John Hsieh | Full Stack Engineer, Growth — Stripe",
  description:
    "7 年全端開發經驗，曾任職 TikTok Singapore User Growth 團隊與 LINE Taiwan，專精 React / Next.js / TypeScript，擅長增長工程、A/B 實驗、產品漏斗優化，適合 Stripe Full Stack Engineer, Growth 職位。",
  openGraph: { images: ["https://cdn.lazy-cv.com/avatar.jpg"] },
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
    role: "Software Engineer — User Growth",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "隸屬 User Growth 團隊，負責投放公司產品廣告到各大 DSP 平台以增加 TikTok 等 APP 的用戶數量——與 Stripe Growth 的 acquire & convert merchants 使命高度一致。",
      "負責廣告投放財務結算系統的前端開發，技術棧為 React、Monorepo 與公司自研微前端框架，每次變更皆覆蓋完整單元測試。",
      "帶領開發團隊導入 Scrum：透過 retrospective 建立自我糾錯機制、refinement 解決孤島開發問題、平衡工作量，提升 PM 對時程的掌握度。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "負責 LINE 購物（高流量電商導購平台）的日常開發，技術棧為 Vue SSR + GraphQL + TypeScript + ExpressJS，全程高標準 code review。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS App Router，實現前後端分離與漸進式上線。",
      "參與 JSTF 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量，為工程文化奠定基礎。",
      "擔任 Mentor 指導 2 位新人；主導內部 NextJS 教學論壇，降低新人上手成本。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自負責線上相片書編輯器的全端開發，從零規劃技術架構，使用 Vue + NuxtJS，6 個月內完成產品上線。",
      "支援 PWA 安裝，提供類原生 APP 的使用者體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構與技術選型；使用 React / NextJS + TypeScript + TailwindCSS 開發面向香港市場的中小企貸款平台。",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM，提升開發效率與設計一致性。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理前端團隊 2 人。",
      "開發整合內部 AI 微服務的 2B 管理平台；技術棧涵蓋 NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG 海外增長業務平台",
    summary:
      "TikTok User Growth 核心業務平台，服務海外廣告增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多業務領域，管理 50+ 子專案，百萬級程式碼規模——與 Stripe Growth 工程在商業目標上高度一致。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker", "Comlink"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 的動態表單渲染引擎，支援級聯選擇、動態欄位、條件顯示等複雜場景",
      "針對財務場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "透過自研微前端框架實現子應用動態載入，支援按需載入與獨立部署",
      "Ferry + Thrift IDL 生成強型別 Service 程式碼，保障前後端協議一致性",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：以 Comlink（類 RPC）將校驗工作移至獨立執行緒，搭配 Yup + Regex Schema——**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany——讓一次渲染 500 個表單 UI 的介面 **TBT 降低 98%**",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成系統。提供職缺連結即可自動抓取 JD、分析需求並生成雙語履歷網頁。以 UUID 為獨立路由，整個專案從零到上線僅花費 2 天，全程 AI 輔助開發（Vibe Coding）。本履歷就是用此專案自動生成的。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "CloudFront CDN", "GitHub Actions"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output，輕量 Docker Image 部署",
      "AI Agent 自動化 SOP：Chrome DevTools MCP 自動爬取 JD，端到端履歷生成流程",
      "Serverless 部署架構：ECR → Lambda Web Adapter，S3 + CloudFront CDN，GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM 實現 type-safe 資料存取",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務（高流量使用者端產品），凡經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋。核心使用者旅程涵蓋搜尋、比價、分享。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨自開發「直播購物」功能：設計**可覆用影片自動預覽模組**，透過全局調度器解決高速捲動下影片混亂及多直播源記憶體暴增的難題",
    ],
  },
  {
    name: "CMS 重構 NextJS",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS App Router，帶領 4 人團隊完成前後端分離。公司早期採用 NextJS App Router 的先行專案。",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微前端，新老專案可獨立部署，透過 URL 漸進式切換",
      "公司早期採用 NextJS App Router 的專案之一",
    ],
    contributions: [
      "兼任架構師與 PM——技術決策、工作分派、撰寫技術文件、與使用者溝通，獨立端到端交付",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台（production service），提供銀行與政府貸款資訊、一站式申請，並透過 OCR 技術整理文件以降低重複提交成本。從零獨立開發並上線。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS", "REST API"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "從零開始獨立規劃架構並完成開發——完整使用者 onboarding 流程，後端 API 串接與前端體驗並重",
    ],
  },
  {
    name: "AI 擬人對話機器人",
    summary:
      "以大語言模型與 n8n 工作流自動化為基底，打造寵物擬人化 AI 聊天機器人。具備多輪對話記憶、圖片/語音理解（多模態）、長期記憶（向量資料庫 RAG）——展現 ML 整合與 product-led 思維。",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding", "RAG"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "n8n 工作流自動化架構：靈活調度 LINE Webhook、Gemini API 與資料庫，大幅提升迭代效率",
      "以 user ID 為單位實現精準個人化連續對話脈絡（Context Window）",
      "過往記憶存成 JSONL 並向量化（Embedding），透過 tool call 賦予 AI 語意檢索能力",
      "以 Docker 容器化打包，部署於 DigitalOcean VPS",
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
  { label: "年全端經驗", value: 7 },
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

export default function StripeGrowthResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019ea1b1-d7ac-70fb-a00a-7dd4cb866f05/en" },
        { locale: "zh-TW", label: "中文", href: "/019ea1b1-d7ac-70fb-a00a-7dd4cb866f05/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Full Stack Engineer"
        description={`我在前端與全端開發領域擁有 7 年經驗，現任職於 TikTok Singapore User Growth 團隊，專注於廣告投放與用戶增長系統開發——這與 Stripe Growth 的核心使命高度吻合。\n\n我可以為 Stripe 做出的貢獻是：將使用者增長工程的實戰經驗直接轉化為 Stripe 的 merchant acquisition 與 onboarding 產品。我熟悉 A/B 實驗思維與漏斗優化邏輯，在 LINE Taiwan 主導了高流量電商產品的日常開發與使用者端 feature 交付，也在 TikTok 負責過財務結算等涉及精確性、可靠性要求極高的生產系統。\n\n選擇我優於其他候選人，是因為我具備三個核心強項：一是在 TikTok User Growth 的直接增長工程背景，二是在資源有限的新創（AI.Book、FundFluent）獨立從零到上線的創業精神與端到端交付能力，三是對使用者體驗的高度在意——我的核心價值觀是「使用者體驗至上」，這與 Stripe 對 developer / merchant experience 的執著一致。\n\n此外，我流利使用英、日、中三種語言，熟悉新加坡跨國工作環境，可即刻在 Singapore 辦公室投入工作。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國增長產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個與 Stripe Growth 高度相關的代表性專案，涵蓋增長工程、全端生產系統與 AI 整合。`}
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
