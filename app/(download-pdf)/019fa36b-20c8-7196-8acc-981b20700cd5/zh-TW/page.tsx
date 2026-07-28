import type { Metadata } from "next";
import {
  ResumeLayout,
  LanguageToggle,
  HeroProfile,
  WorkExperience,
  ProjectsGrid,
} from "@/components/resume";
import type {
  Experience,
  Project,
  StatItem,
  ContactItem,
} from "@/components/resume";

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
      "隸屬 User Growth 團隊，負責廣告投放財務結算系統。以 Web Worker 與函數快取解決效能瓶頸，減少 90% UI 卡頓與降低 98% TBT。帶領團隊導入 Scrum 提升協作效率。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer / Team Leader",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發 LINE 購物（大流量電商平台），技術棧 Vue SSR + GraphQL + TypeScript。擔任 Team Leader 帶領 4 人團隊，主導 CMS 重構至 React + NextJS App Router。參與制定全公司前端開發準則。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自從零規劃並開發線上相片書編輯器，支援照片增刪與文字編輯，6 個月內完成交付。主導後端 API 設計，涵蓋 OAuth 登入、購物流程與金流串接，同時支援桌機與行動端。",
    ],
  },
  {
    company: "FundFluent (FinTech)",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "金融科技新創，從零規劃前端架構。以 React + TypeScript + TailwindCSS 獨立交付借款方與銀行端兩套產品。主導建立跨專案共用的 Design System 與 Web Component 元件庫。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "在 AI 團隊擔任全端工程師，開發整合內部 AI 微服務的 2B 管理平台。前端 NuxtJS/NextJS，後端 NodeJS + MongoDB + Redis，自行設計 data model 與 API。管理 2 人前端團隊。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE 購物 — 直播購物模組",
    summary: "LINE 導購平台的直播購物功能開發",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "Node.js", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    highlights: [
      "影片自動預覽模組：參考 YouTube 設計可覆用的預覽機制，搭配全局調度器解決高速捲動下的播放混亂問題",
      "記憶體與效能優化：解決單頁過多直播源造成記憶體暴增的問題，以 Vue SSR 確保首屏即時可見",
    ],
  },
  {
    name: "Lazy CV — AI Agentic 全端產品",
    summary: "AI 驅動的客製化履歷生成系統",
    stack: ["AI Agent", "MCP", "Prompt Engineering", "Vibe Coding", "React", "Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "GitHub Actions"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto2.jpg",
      "https://cdn.lazy-cv.com/lazy-cv-auto3.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "Agent 自主工作流：端到端 SOP，Agent 依序執行抓取 JD、分析需求、生成雙語頁面，全程無需人為介入",
      "Serverless 全端架構：Next.js 16 App Router + Lambda Web Adapter，Neon PostgreSQL + Drizzle ORM，GitHub Actions CI/CD",
    ],
  },
  {
    name: "FundFluent Design System（TailwindCSS UI System）",
    summary: "跨專案共用的 TailwindCSS 設計系統",
    stack: ["TailwindCSS", "Design Tokens", "Stencil.js", "Web Component", "Shadow DOM", "Semantic UI", "Storybook", "Monorepo"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "TailwindCSS Design Token：將色彩、字級、間距集中定義於 Tailwind 設定檔，成為公司唯一視覺真實來源",
      "框架無關元件庫：以 Stencil Web Component + Shadow DOM 打造可在 React、Vue 中複用的元件，搭配 Storybook 協作",
    ],
  },
  {
    name: "AI.Book 線上相片書編輯器",
    summary: "線上相片書編輯平台，一人全端交付",
    stack: ["Vue", "NuxtJS", "OAuth", "金流串接", "REST API", "PWA", "Service Worker", "IndexedDB"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "主導後端 API 設計：涵蓋 OAuth 登入、購物車與訂單流程、金流串接，從前端視角定義 API 契約",
      "從零打造編輯器：純 Vue 自建，支援照片增刪與文字編輯，以 PWA + Service Worker 提供類原生體驗",
    ],
  },
  {
    name: "UG 海外增長業務平台（TikTok 大型微前端架構）",
    summary: "TikTok 廣告業務微前端財務結算平台",
    stack: ["微前端 Micro-Frontend", "Rush + PNPM Workspaces", "React 17", "TypeScript", "Arco Design", "Ferry / Thrift IDL", "Web Worker", "Comlink", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "微前端架構：Rush + PNPM 管理 50+ 子專案，各業務模組獨立開發部署，Ferry + Thrift IDL 保障型別安全",
      "效能優化：Web Worker 多線程 CSV 校驗減少 90% UI 卡頓，函數快取工具降低 98% TBT",
    ],
  },
];

const stats: StatItem[] = [
  { label: "年前端經驗", value: 7 },
  { label: "個完整產品", value: 18 },
  { label: "人團隊管理", value: 4 },
  { label: "種語言能力", value: 3 },
];

const summary = [
  "我是有 7 年經驗的前端工程師，目前在 TikTok 負責廣告投放的財務結算系統。在那之前我在 LINE Taiwan 待了三年，日常開發 LINE 購物，同時帶領過四人的專案小組。對我來說最重要的東西有兩個: 使用者體驗與程式碼可維護性",

  "我的經歷剛好橫跨兩種環境。在 TikTok 和 LINE 這種千人規模的公司，我習慣了嚴謹的 code review 與工程規範，也很清楚金融場景容不下一個小數點的誤差；另一方面也在 FundFluent，AI.Book 等新創公司從零開始獨立完成專案規劃上線。在後者會更需要一人多工，以及需求釐清等溝通工作。這兩種經驗讓我能在不同規模的團隊中都能快速上手，並且在有限資源下交付高品質產品。",
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
        jobTitle={"Software Engineer (TypeScript)\nApplying for Arta Finance — Full-Stack / Frontend Agentic Engineer"}
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
      />
    </ResumeLayout>
  );
}
