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
  title: "John Hsieh | 資深全端工程師 — BitMEX",
  description:
    "7 年前端與全端工程師經驗，曾任職於 TikTok Singapore 與 LINE Taiwan。精通 React、TypeScript、NodeJS 與高效能即時 Web 應用開發。針對 BitMEX Senior Software Engineer, Web (Full Stack) 職缺量身打造。",
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
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "隸屬 User Growth 團隊，開發廣告投放的財務結算系統，技術棧為 React、Monorepo 與公司自研微服務框架。",
      "基於 JSON Schema 動態表單渲染引擎，建構複雜財務表單元件：級聯選擇、動態欄位、高精度數值計算。",
      "帶領開發團隊導入 Scrum，透過 retrospective 建立自我糾錯機制，refinement 打破成員各自為政問題，平衡工作量。",
      "引入 Web Worker 多線程（搭配 Comlink RPC 通訊）處理 CSV 校驗，在 10 筆資料中減少 90% UI 卡頓時間。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "日常開發 LINE 購物（buy.line.me），技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS，60 人工程師團隊。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS app router 架構。",
      "參與 JSTF 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量，落地至每個 PR。",
      "擔任 Mentor 指導 2 位新人，獲得正向回饋；主導內部 NextJS 教學論壇引導成員上手。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自負責線上相片書編輯器的完整開發，從零規劃技術架構，6 個月內完成產品上線。",
      "以純 Vue 搭建客製化拖曳編輯器引擎，支援照片版面、文字樣式與響應式排版。",
      "支援 PWA 安裝，提供離線編輯的類原生 App 體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，獨自規劃前端架構與技術選型，建立 FinTech 平台完整前端體系。",
      "使用 React / Next.js + TypeScript + TailwindCSS 開發面向香港市場的中小企貸款平台。",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理前端團隊 2 人。",
      "開發整合內部 AI 微服務的 2B 管理平台。",
      "技術棧涵蓋 NuxtJS / NextJS + TypeScript + Node.js + MongoDB + Redis。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG 海外增長業務平台 (TikTok)",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 線上廣告海外增長業務線，涵蓋財務結算、媒體資產管理、供應商採購及數據看板等多個業務領域，管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Thrift IDL"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態表單渲染的複雜表單元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "針對財務、報價等場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "透過自研框架實現子應用動態載入的微前端整合，支援按需載入業務模組與獨立開發部署",
      "採用 Ferry + Thrift IDL 生成強型別 Service 程式碼，保障前後端協議一致性",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：使用 Comlink 實現類 RPC 通訊，搭配 Yup + Regex Schema —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany 工具 —— 在一個一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 的電商導購平台（buy.line.me），用戶透過 LINE 購物消費可獲 LINE 點數回饋，並提供第三方商家的搜尋、比價、分享入口。技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS，60 人工程師團隊協作。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨自開發「直播購物」功能：參考 YouTube 影片流自動預覽機制，設計**可覆用影片自動預覽模組**，透過全局調度器解決高速捲動下影片預覽混亂，以及單頁面過多直播源造成記憶體暴增的技術難點",
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
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台，提供銀行與政府貸款資訊、一站式申請，並透過 OCR 技術整理文件以降低重複提交成本。FinTech 領域完整前端開發實戰。",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: [
      "從零開始單獨開發——涵蓋完整前端架構設計、組件開發到產品上線",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "自主規劃的跨專案共用 UI 組件平台，使用 Stencil.js Web Component 打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 作為 Design System 基礎，以 Storybook 作為組件文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "UI 組件使用 Stencil 搭建 Web Components，可在 React、Vue 或原生 JS 中通用",
      "透過 Tailwind + Semantic UI 構建 Design System；透過 StoryBook 展示組件方便與設計師溝通",
      "Monorepo 架構區分組件庫與業務程式，組件庫可單獨發布測試後批量打包業務模組",
    ],
    contributions: [
      "從零開始單獨開發",
    ],
  },
  {
    name: "CMS 重構 NextJS（Team Leader）",
    summary:
      "帶領 4 人團隊主導將 LINE 購物 CMS 從 PHP 重構為 React & NextJS app router 架構，完成前後端分離。同時擔任架構師與 PM，負責技術決策、任務分配、技術文件撰寫與使用者溝通。",
    stack: ["React", "NextJS", "App Router", "TypeScript", "PHP"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微服務，新老專案可獨立佈署，透過 URL 漸進式切換至新系統",
      "LINE Taiwan 內部早期採用 Next.js App Router 的專案之一",
    ],
    contributions: [
      "同時兼任架構師與 PM：規畫整個專案架構、分派工作、撰寫技術文件、與終端使用者溝通確認需求",
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

/* ────────────────── component ────────────────── */

export default function BitMEXResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019ea1b2-344d-762a-8838-a9965c4cb523/en" },
        { locale: "zh-TW", label: "中文", href: "/019ea1b2-344d-762a-8838-a9965c4cb523/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="資深全端工程師 (Web / Full Stack)"
        description={`擁有 7 年前端工程師經驗，曾任職於 TikTok Singapore 與 LINE Taiwan 擔任資深軟體工程師，精通 React、TypeScript 與 JavaScript 效能優化——這正是 BitMEX 打造世界級即時交易終端所需的核心技術。\n\n我在 JavaScript 效能上有紮實的底層功夫：曾透過 Web Worker 多線程將 UI 卡頓時間降低 90%，以函數快取技術將 Total Blocking Time 降低 98%。我理解 JIT 編譯器如何影響執行時效能，並從架構層面做出對應設計。\n\n全端方面，我在多個專案中同時維護 NodeJS 後端 API 與 React 前端，包含 FinTech 貸款平台（FundFluent）以及 TikTok 的廣告財務結算系統——這些高資料量的金融介面開發經驗，可直接遷移到 BitMEX 交易終端與後端服務的建構。\n\n我能為 BitMEX 帶來的貢獻包括：建構高效能 React 元件以處理即時交易數據流、以強型別 TypeScript 串接前後端 API、以及將 JS 執行時知識實際應用到交易平台的效能優化。選擇我勝於其他候選人，不只因為我會寫 React，更因為我知道它為什麼表現如此，以及出問題時該如何解決。`}
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
