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
  title: "John Hsieh | 資深軟體工程師 — Wise（日語對應）",
  description:
    "7 年以上軟體工程經驗，持有 JLPT N1 日語最高級認證。專精 React / Next.js / TypeScript / Vue。曾任職 TikTok Singapore 與 LINE Taiwan。應徵 Wise Singapore Senior Software Engineer I - Japanese Speaking。",
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
    company: "TikTok Singapore (ByteDance)",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "隸屬 User Growth 團隊，負責投放公司產品廣告到各大 DSP 平台，以增加 TikTok 等 APP 的用戶數量，影響數億用戶的規模化增長。",
      "負責廣告投放的財務結算系統開發，使用 React、monorepo 與公司自研框架架設的前端微服務系統 — 具備直接相關的金融系統開發經驗。",
      "帶領開發團隊導入 Scrum，利用 retrospective 建立團隊自我糾錯機制，利用 refinement 解決成員各自為政的問題，並平衡工作量與提升 PM 對時程的掌握度。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer & Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "在 60 人的開發團隊中參與 LINE 購物日常開發，技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS，嚴格的 code review 文化 —「每一行程式碼 merge 前都要有另一個人看過」。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS App Router 架構，負責技術選型、時程規劃、資源協調與風險評估。",
      "參與 JavaScript Task Force (JSTF) 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量作為 CI 流程的一環。",
      "擔任 Mentor 指導 2 位新人，獲得正向回饋。主導內部 NextJS 教學論壇，加速新人上手。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer（契約合作）",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自負責從零開發複雜的線上相片書編輯器 — 支援拖曳、尺寸調整、文字編輯等功能，具備跨平台相容性。",
      "使用 Vue + NuxtJS 規劃整體技術架構，6 個月內完成產品上線。",
      "實作 PWA 安裝功能，結合 Service Worker 與 IndexedDB 提供離線使用體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer（契約合作）",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃面向香港市場金融科技公司的前端架構與技術選型。",
      "使用 React / NextJS + TypeScript + TailwindCSS 開發中小企貸款整合平台，支援銀行及政府貸款一站式申請並搭配 OCR 文件處理。",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM 實現跨框架複用。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理前端團隊 2 人。",
      "開發整合內部 AI 微服務的 2B 管理平台，技術棧涵蓋 NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
      "在團隊技術選型階段探索並導入 GraphQL 與 NestJS 等新技術。",
    ],
  },
  {
    company: "電獴股份有限公司",
    role: "前端工程師",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "在專案導向的團隊中（PM、UI 設計師、前後端工程師）開發多個 WEB 應用與廣告平台，使用 Nuxt + TypeScript + Sass + TailwindCSS。",
      "為每個專案使用 TailwindCSS 建構小型 CSS 框架，確保設計稿高度還原。使用 Docker + Kubernetes CI/CD 流程部署。",
      "同時管理多個並行專案，锻鍊時間管理與跨專案上下文切換能力。",
    ],
  },
  {
    company: "第三緯度科技公司",
    role: "前端工程師",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "使用 Vue + PHP 開發網頁應用，並串接微信支付金流。",
    ],
  },
  {
    company: "日商優橋 (Asian Bridge Inc.)",
    role: "數位廣告優化師 & 前端工程師",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "任職於日商貿易公司，以日文作為主要工作語言 — 負責與日本客戶溝通並兑任專案經理。",
      "優化 Facebook Ads Manager 與 Google Ads 數位廣告投放成效。運用 A/B Testing、熱圖分析與 Google Analytics 提升 UX — 奠定了寶貴的 UI/UX 素養。",
      "後期轉任前端工程師，負責架設官方網站與活動落地頁，並帶領 2 人前端團隊。",
    ],
  },
  {
    company: "亞洲遊 (AsiaYo Inc.)",
    role: "日本市場業務及營運",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "接洽日本旅宿房源並協助上架到公司平台，房源數從 1,682 增長至 2,616（達成率 93%），預約筆數年增率 376%。",
      "擔任公司對日翻譯窗口，並協助消費者排除旅日中遇到的緊急狀況。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "UG Overseas Platform — 海外增長業務平台",
    summary:
      "TikTok 大型企業級 Monorepo 前端專案，服務於線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域。管理 50+ 子專案，百萬級程式碼規模。我專注於負責採購與結算等相關模組的開發與維護 — 具備直接相關的金融系統開發經驗。",
    stack: ["React 17", "TypeScript", "Rush v5", "PNPM Workspaces", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "複雜表單互動元件開發：基於內部自研 JSON Schema 動態表單渲染方案，開發大量業務表單元件，涵蓋級聯選擇、動態欄位、條件顯示等複雜場景",
      "高精度數值計算處理：針對財務、報價等場景的 JavaScript 浮點數精度問題，實作浮點數精度計算方案",
      "微前端整合：透過公司自研框架實現子應用動態載入，支援按需載入業務模組與獨立開發部署",
      "類型安全的 API 通訊：採用 Ferry + Thrift IDL 生成強型別 Service 程式碼，保障前後端協議一致性",
      "國際化多語系：透過自研線上翻譯平台，在 runtime 獲取最新翻譯文件，實現多語系支援與動態更新",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：導入 Web Worker + Comlink（類 RPC 通訊）將校驗工作轉移到獨立執行緒，使用 Yup + Regex Schema 建構校驗邏輯，並抽象為公共工具供未來複用。**減少了 90% 的 UI 卡頓時間**",
      "函數快取工具優化渲染效能：建立 cache/cacheMany 工具函數，模仿 React useMemo 將計算結果快取進 Map。**Total Blocking Time (TBT) 降低了 98%**（在一次渲染 500 個表單 UI 且無分頁的介面上）",
    ],
  },
  {
    name: "LINE 購物 — 直播購物功能",
    summary:
      "獨自開發 LINE 導購服務的「直播購物」功能 — 一個服務數千併發用戶的高可用性系統。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "參考 YouTube 影片流自動預覽機制，設計了一套可覆用影片自動預覽模組。透過全局調度器，解決了高速捲動下影片預覽混亂的問題，以及**單一頁面過多直播源造成記憶體暴增的技術難點**",
    ],
  },
  {
    name: "CMS 重構至 NextJS",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS App Router 架構，帶領 4 人團隊完成前後端分離。負責技術選型、內訓、時程規劃、工作分配與風險評估。LINE Taiwan 中少數早期採用 NextJS App Router 的專案之一。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
  },
  {
    name: "FundFluent 中小企貸款平台",
    summary:
      "從零建構面向香港中小企業的整合貸款平台，提供銀行與政府貸款資訊及一站式申請功能，並利用 OCR 技術簡化文件管理、減少重複提交成本 — 具備與銀行合作夥伴進行複雜產品整合的直接相關經驗。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS", "Semantic UI"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
  },
  {
    name: "Lazy CV — AI 驅動履歷生成系統",
    summary:
      "結合 AI Agent 與 Next.js 16 的全端應用。只需提供職缺連結，系統即可自動抓取 JD、分析需求並生成量身定做的中英文雙語履歷網頁。部署在 AWS Lambda + Neon PostgreSQL。從零到上線僅花費 2 天，全程透過 Vibe Coding 完成。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Output：採用最新 App Router 架構，搭配 standalone 模式打包為輕量 Docker Image",
      "AI Agent 自動化 SOP：透過 Chrome DevTools MCP 自動爬取 JD，結合結構化 Prompt 實現端到端履歷生成",
      "Serverless 部署架構：ECR + Lambda Web Adapter + S3 + CloudFront CDN，CI/CD 透過 GitHub Actions 全自動化",
      "Neon Serverless PostgreSQL + Drizzle ORM：使用 Neon 無伺服器資料庫搭配 Drizzle ORM 實現 type-safe 資料存取",
      "Vibe Coding 實踐：整個專案從零到上線僅花費 2 天，全程透過 AI 輔助開發完成",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件。發布到 private NPM 實現可擴展的跨產品複用。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Sass / SCSS", "Node.js", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "Jest", "Cypress", "Firebase", "Storybook", "Webpack"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Web Component", "StencilJS", "PWA", "Socket.io", "i18n", "Git", "REST API", "SEO", "Lighthouse", "Renovate"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
];

const stats: StatItem[] = [
  { label: "年工程經驗", value: 7 },
  { label: "個完整產品", value: 16 },
  { label: "人團隊管理", value: 4 },
  { label: "種語言能力", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "東吳大學", degree: "文學士 (BA) — 日本語文學系", period: "2013 - 2017" },
  { institution: "京都同志社大學", degree: "交換留學 — 日本語及文化", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "日文檢定 JLPT N1", description: "最高級認證 — 超越 JD 要求的 N2。具備商業會談程度，曾於日商公司以日語作為主要工作語言", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "台大資訊推廣部", description: "網頁開發技術課程" },
];

const languages: LanguageItem[] = [
  { name: "中文 — 母語", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "日文 — 商業會談 (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "英文 — 流暢職場溝通", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function WiseResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/en" },
        { locale: "zh-TW", label: "中文", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/zh-TW" },
        { locale: "ja", label: "日本語", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/ja" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="資深軟體工程師"
        description={`我非常期待應徵 Wise 的 Senior Software Engineer I - Japanese Speaking 職位。我擁有 7 年軟體工程經驗，曾任職於 TikTok Singapore 與 LINE Taiwan 等頂級科技公司，並持有超越職缺要求 N2 等級的 JLPT N1 日語最高級認證，加上流利的英語職場溝通能力，我具備獨特的優勢來為 Wise「打造全球最佳資金流動與管理方式」的使命做出貢獻。

我可以為 Wise 做出的貢獻：
我在 TikTok 有開發金融結算系統的直接經驗，也曾在 FundFluent 建構貸款平台 — 兩者都涉及與金融合作夥伴的複雜產品整合。我的核心價值觀「使用者體驗至上」，與 Wise 將複雜性隱藏在產品背後、為客戶打造無縫體驗的使命完美契合。
我擅長向非技術利害關係人解釋複雜的技術概念，能夠跨銀行、合規、營運等團隊有效協作。

選擇我優於其他候選人，是因為：
除了 React、TypeScript 及可擴展系統架構的技術專長外，我具備經過驗證的領導力 — 在 LINE Taiwan 帶領 4 人團隊、在 TikTok 推動 Scrum 導入、積極指導工程師成長。
我的三語能力（中/日/英）以及在日商公司（日商優橋）的實際工作經驗，使我具備與日語對口方有效溝通、管理日文技術文件的文化素養，這對整合 Zengin 等 APAC 支付系統至關重要。
我持有 JLPT N1 日語最高級認證，優於此職位要求的 N2 等級，能自信地應對日語商業談判、技術討論與文件撰寫。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 全球規模的產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，展示產品影響力、金融系統經驗與可擴展架構。`}
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
