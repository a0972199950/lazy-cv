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
  title: "John Hsieh | Staff Software Engineer — Visa",
  description:
    "7 年全端開發經驗，曾任職 TikTok Singapore 與 LINE Taiwan，專精分散式系統、React / Next.js / TypeScript、CI/CD 與 GenAI 工程實踐，適合 Visa Staff Software Engineer 職位。",
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
      "隸屬 User Growth 團隊，負責廣告投放財務結算系統開發，技術棧為 React、monorepo 與公司自研前端微服務框架。",
      "在大規模分散式前端架構（50+ 子專案、百萬行程式碼）中，解決高精度數值計算、微前端動態載入與 Web Worker 多線程效能優化等複雜工程挑戰。",
      "帶領開發團隊導入 Scrum，建立自我糾錯機制、平衡工作量，提升 PM 對時程的掌握度。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "日常開發 LINE 購物（Vue SSR + GraphQL + TypeScript + ExpressJS），嚴謹執行 code review 文化，確保每行程式碼都有第二人審查。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS App Router 架構，使用 iframe 微服務實現新舊系統漸進式遷移。",
      "參與 JSTF 制定全公司前端準則，導入 Lighthouse CI 自動化效能評量工具。",
      "擔任 Mentor 指導 2 位新人，獲得正向回饋；主導內部 NextJS 教學論壇。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自負責開發線上相片書編輯器，從零規劃技術架構，使用 Vue + NuxtJS，6 個月內完成產品上線。",
      "支援 PWA 安裝，提供類原生 APP 的體驗；支援 Web 與 Mobile 雙平台編輯。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構與技術選型，使用 React / NextJS + TypeScript + TailwindCSS。",
      "設計跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM，適用於非 React 專案。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 新團隊中擔任全端工程師，管理前端團隊 2 人，開發整合內部 AI 微服務的 2B 管理平台。",
      "技術棧涵蓋 NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Lazy CV — AI 驅動履歷生成系統",
    summary:
      "結合 AI Agent 自動化 SOP 與 Next.js 16 的全端應用，只需提供職缺連結即可透過 Chrome DevTools MCP 自動爬取 JD，生成量身定做的中英文雙語履歷。整個專案從零到上線僅花費 2 天，全程透過 Vibe Coding（AI 輔助開發）完成。本履歷就是用此專案自動生成的。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Docker", "GitHub Actions"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Next.js 16 App Router + Standalone Docker 打包，部署到 AWS Lambda Web Adapter + S3 + CloudFront CDN",
      "AI Agent 自動化 SOP：Chrome DevTools MCP 爬取 JD → Copilot 分析 → 生成端到端履歷流程",
      "Neon Serverless PostgreSQL + Drizzle ORM 實現 type-safe 資料存取",
      "GitHub Actions CI/CD 全自動化部署流程",
    ],
  },
  {
    name: "UG 海外增長業務平台（TikTok）",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等多個業務領域，管理 50+ 子專案，百萬行級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker", "Thrift IDL"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態表單渲染引擎，開發複雜業務表單（級聯選擇、動態欄位、條件顯示）",
      "針對財務場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "微前端整合：透過自研框架實現子應用動態載入，支援按需模組載入與獨立部署",
      "Ferry + Thrift IDL 生成強型別 Service 程式碼，保障前後端協議一致性",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗 + Comlink RPC 通訊 —— **降低 90% UI 卡頓時間**",
      "cache/cacheMany 函數快取工具 —— 在 500 個表單 UI 無分頁介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，提供購買商品即可獲得 LINE 點數回饋的電商平台，同時整合第三方商家比價與分享功能。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨自開發「直播購物」功能：參考 YouTube 影片流自動預覽機制，設計**可覆用影片自動預覽模組**，透過全局調度器解決高速捲動下影片預覽混亂及記憶體暴增問題",
    ],
  },
  {
    name: "CMS 重構 NextJS（Team Leader）",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS App Router，帶領 4 人團隊完成前後端分離，為 LINE Taiwan 早期採用 Next App Router 的代表性專案。",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe 微服務"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 微服務實現新舊系統獨立部署，透過 URL 漸進式遷移",
      "公司早期採用 Next APP Router 的專案之一",
    ],
    contributions: [
      "身兼架構師 + PM：制定技術架構、分派任務、撰寫技術文件、與使用者溝通",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI，並以 Storybook 作為設計文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo", "private NPM"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "Web Component 架構不受 React/Vue 框架限制，可跨專案複用",
      "Monorepo 架構隔離組件庫與業務程式，獨立發布與測試",
    ],
    contributions: ["從零開始單獨開發"],
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台，提供政府與銀行貸款資訊整合、一站式申請、OCR 文件組織功能。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
    contributions: ["從零開始單獨開發"],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Node.js", "Express", "REST API"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS Lambda", "CloudFront", "S3", "ECR", "Monorepo", "Microservices"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["PostgreSQL", "MongoDB", "Redis", "Drizzle ORM", "Distributed Systems", "Web Worker", "Performance Optimization", "Thrift IDL", "Jest", "Lighthouse CI"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["GenAI", "AI Agent", "Prompt Engineering", "Chrome DevTools MCP", "Vibe Coding", "Scrum", "Agile", "Code Review", "Mentoring", "JLPT N1"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "年開發經驗", value: 7 },
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

export default function VisaResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019dba9c-3cd8-749d-b266-52683034cb2e/en" },
        { locale: "zh-TW", label: "中文", href: "/019dba9c-3cd8-749d-b266-52683034cb2e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Staff Software Engineer"
        description={`7 年全端開發經驗，曾任職於 TikTok Singapore 與 LINE Taiwan 擔任資深軟體工程師，具備在全球頂級科技公司中解決大規模分散式系統工程挑戰的實戰能力。\n\n在工程影響力方面，我曾帶領 LINE Taiwan 前端標準化建設（JSTF），也獨立解決 TikTok 大規模 Monorepo 中 Web Worker 效能優化，使 UI 卡頓降低 90%，TBT 降低 98%。這種對效能與可擴展性的極致追求，與 Visa 全球支付系統對高可用性和穩定性的要求高度契合。\n\n在團隊協作與 Mentor 方面，我在 LINE Taiwan 擔任 Team Leader，帶領 4 人團隊主導 CMS 重構，同時 Mentor 2 名新工程師並獲正向回饋；在 TikTok 導入 Scrum 機制，改善跨成員協作效能。這種培育工程文化的經驗，正是 Visa Staff Engineer 角色所需要的跨團隊影響力。\n\n在 GenAI 工程實踐方面，我獨自建立了一套結合 Chrome DevTools MCP 與 AI Agent 的全自動履歷生成系統（Lazy CV），2 天內從零上線，展現了將 GenAI 融入工程交付流程的第一手能力。\n\n我相信能為 Visa 的下一代支付技術做出貢獻——從 Real-Time Payments 到 B2C 全球平台，以工程影響力觸及全球 40% 人口，是我追求的使命。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國大規模系統開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description="6 個與 Visa JD 最相關的代表性專案，展示分散式系統、效能優化與 GenAI 工程實踐。"
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

      <SkillKeywords title="技能關鍵字 (ATS 優化)" rows={skillKeywordRows} />

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
