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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../../john-hsieh/skill-beam";

export const metadata: Metadata = {
  title: "謝謂中 | Product Engineer — Fun.xyz",
  description:
    "7 年前端工程師經驗，橫跨金融科技、高流量電商與 SDK 開發。專精 React / TypeScript，具備全端交付能力，適合支付基礎設施與開發者工具產品。",
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
    role: "軟體工程師 (Software Engineer)",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "隸屬 User Growth 部門，負責跨主要 DSP 平台的廣告投放以驅動 App 成長。",
      "以 React + Monorepo 架構及公司自研微前端框架，建構並維護廣告交付的**財務結算系統**。",
      "針對財務與定價場景實作**高精度數值計算**，解決 JavaScript 浮點運算精度問題。",
      "在開發團隊中推動 Scrum 落地——建立 Retro、Refinement 等儀式，改善迭代節奏與團隊協作效率。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "軟體工程師 (Software Engineer)",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "以 Vue SSR + GraphQL + TypeScript + ExpressJS 開發 LINE 購物，在高標準 Code Review 文化下穩定交付。",
      "擔任 4 人小組的 Team Lead，主導 CMS 從 PHP 遷移至 NextJS App Router 的技術架構、排程與跨部門溝通。",
      "獨立開發「直播購物」功能——設計具可覆用性的影片自動預覽模組與全局調度器，解決高速捲動下的預覽混亂與記憶體暴增問題。",
      "參與 JavaScript Task Force (JSTF)，制定全公司前端開發規範，導入 Lighthouse CI 於 CI pipeline 中自動化評估效能。",
      "指導 2 位工程師，並主辦 NextJS 內部培訓課程以加速新人上手。",
    ],
  },
  {
    company: "AI.Book",
    role: "前端工程師 (Contract)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨立從零到上線，6 個月內完成線上相片書編輯器的完整開發。",
      "設計並實作所有編輯器互動：拖曳、縮放、字型與文字編輯，支援跨平台。",
      "加入 PWA 支援，提供接近原生 App 的安裝體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "前端工程師 (Contract)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "加入香港金融科技新創的創業初期，從零規劃並建構整個前端架構。",
      "以 React / NextJS + TypeScript + TailwindCSS 開發中小企業與合作夥伴貸款平台，整合 OCR 文件處理功能。",
      "設計並發布**跨專案 UI 組件 SDK**——使用 Web Components (Stencil.js)，不受框架限制，部署至私有 NPM。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "全端工程師 (Full-Stack Engineer)",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "於新成立的 AI 部門擔任全端工程師，負責帶領 2 人前端小組。",
      "開發 B2B 管理平台，將內部 AI 微服務統一整合為單一 API 介面。",
      "技術棧：NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG 海外平台 — TikTok 廣告財務結算",
    summary:
      "TikTok 海外用戶增長業務的大型企業級 Monorepo 前端，涵蓋財務結算、採購、素材管理與數據看板，含 50+ 個子專案與百萬行程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態渲染引擎開發複雜表單組件——含聯動選項、條件欄位、跨欄位驗證邏輯",
      "解決財務結算與定價場景中的 JavaScript 浮點精度問題",
      "透過自研框架實現微前端整合——各業務模組可獨立部署",
      "Ferry + Thrift IDL 自動生成類型安全 API 程式碼，確保前後端協議一致性",
    ],
    contributions: [
      "**Web Worker 多執行緒 CSV 驗證**：使用 Comlink (類 RPC) 將 CPU 密集驗證移至背景執行緒，搭配 Yup + Regex 驗證——**降低 90% UI 阻塞時間**",
      "**函式快取渲染優化**：建立模擬 React `useMemo` 的 `cache`/`cacheMany` 工具——在 500 格表單介面上（無分頁）**降低 98% 總阻塞時間 (TBT)**",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件 SDK，使用 Web Component (Stencil.js) 打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件，發布至私有 NPM。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI 組件以 Stencil 實作為 Web Components——可在 React、Vue 或原生 JS 中無縫使用",
      "以 TailwindCSS + Semantic UI 建構設計系統",
      "透過 Storybook 展示組件，方便與設計師確認驗收",
      "Monorepo 架構隔離組件庫與業務邏輯，組件庫可獨立發布、測試與批量建置",
    ],
    contributions: [
      "獨自從零開發——此組件庫成為 FundFluent 所有產品的基礎 UI 層",
    ],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台，整合銀行與政府貸款資訊、一站式申請流程，並透過 OCR 技術整理文件以降低重複提交成本。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    highlights: [
      "串接第三方 OCR API 實現文件解析與分類",
      "以 React Hook Form + Yup 開發複雜多步驟申請表單並完整處理驗證邏輯",
      "透過共用 UI Kit 在 SME 與 Partner 兩個平台間建立一致的 UI 模式",
    ],
    contributions: ["獨自從零開始建構"],
  },
  {
    name: "Lazy CV",
    summary:
      "AI 驅動的客製化履歷生成器。結合 AI Agent 自動化與 Next.js 16——只需提供職缺連結，即可自動爬取 JD 並生成雙語履歷網頁。透過 Vibe Coding 從零到上線僅 2 天。",
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
      "Next.js 16 App Router + Standalone Output 實現輕量 Docker 打包",
      "透過 Chrome DevTools MCP 的 AI Agent 自動化 SOP——端對端履歷生成管線",
      "Serverless 部署於 AWS：ECR → Lambda Web Adapter + S3 + CloudFront CDN + GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM 實現類型安全的資料庫存取",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 旗艦購物返點平台，使用者透過合作商家消費即可累積 LINE Points。高流量電商產品，具備嚴格的 Code Review 與工程品質文化。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨立開發「**直播購物**」功能：設計**可覆用影片自動預覽模組**搭配全局調度器，解決高速捲動下影片預覽混亂與多直播源造成記憶體暴增的技術難點",
    ],
  },
  {
    name: "CMS 重構 NextJS",
    summary:
      "主導將 LINE 購物 CMS 從 PHP 架構重構為 React & NextJS App Router，帶領 4 人團隊完成前後端分離。這也是 LINE Taiwan 早期實際採用 NextJS App Router 的少數幾個專案之一。",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe 微前端"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微前端，新舊系統可獨立部署上線，透過 URL 漸進式切換",
      "LINE Taiwan 早期採用 Next.js App Router 的專案之一",
    ],
    contributions: [
      "同時擔任架構師、PM 與工程師——撰寫技術文件、分派工作、跨團隊溝通",
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
    keywords: ["SDK 開發", "Web Component", "StencilJS", "Monorepo", "Rush", "PNPM Workspaces", "NPM 發布", "REST API", "Axios", "Thrift IDL"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["狀態管理", "MobX", "Vuex", "React Hook Form", "Yup", "Zod", "Web Worker", "Comlink", "效能優化", "Lighthouse"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jest", "AWS Lambda", "S3", "CloudFront"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
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

/* ────────────────── component ────────────────── */

export default function FunXyzResumePageZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019e5f00-d44d-72ff-b81c-58058b908815/en" },
        { locale: "zh-TW", label: "中文", href: "/019e5f00-d44d-72ff-b81c-58058b908815/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh（謝謂中）"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Product Engineer（前端主導，全端交付能力）"
        description={`7 年前端工程師資歷，曾任職 TikTok Singapore 與 LINE Taiwan，主力技術棧為 React / Next.js / TypeScript，具備從架構決策到上線交付的端對端產品負責能力。\n\n我的背景與 Fun.xyz 的需求高度重疊——在 TikTok，我參與廣告財務結算系統，負責高精度數值計算，深刻理解金融場景對「正確性優先」的嚴苛要求；在 FundFluent，我設計並發布了一套跨專案 UI 組件 SDK（Web Components + 私有 NPM），這與 Fun.xyz Checkout SDK 的性質最為接近。\n\n我是一個「動手解決問題」型的工程師：AI.Book 單人從零到上線 6 個月；Lazy CV（你現在看到的這份履歷的生成器）從零到上線 2 天；優化 500 格表單介面的總阻塞時間 (TBT) 降低 98%。沒有什麼工作「不值得做」——包括調試 Web Worker 執行緒問題、修復浮點運算 bug，或是寫別人不願寫的技術文件。\n\n我能為 Fun.xyz 帶來的貢獻：用精深的 React + TypeScript 能力擴展 Checkout SDK；以金融科技背景確保支付流程中的計算正確性；用產品導向的工程思維同時優化開發者 DX 與終端用戶 UX；以及創業階段的執行力——快速交付、根據回饋迭代、主動承擔所有需要解決的問題。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國金融與高流量產品開發"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案——SDK 開發、金融科技平台與高流量產品工程。`}
        projects={projects}
        highlightsLabel="技術亮點"
        contributionsLabel="重大貢獻"
      />

      <TechStackVisualization title="技術棧可視化" description="核心技術與周邊能力的連結關係圖。">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
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
