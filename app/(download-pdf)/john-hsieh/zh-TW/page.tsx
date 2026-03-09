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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../skill-beam";

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
      "隸屬 User Growth 團隊，負責投放公司產品廣告到各大 DSP 平台，以增加 TikTok 等 APP 的用戶數量。",
      "負責廣告投放的財務結算系統開發，技術棧為 React、monorepo 與公司自研框架架設的前端微服務系統。",
      "帶領開發團隊導入 Scrum，利用 retrospective 建立團隊自我糾錯機制，利用 refinement 解決成員各自為政的問題，並平衡工作量與提升 PM 對時程的掌握度。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "日常開發 LINE 購物，技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS app router 架構。",
      "參與 JSTF 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量。",
      "擔任 Mentor 指導 2 位新人，獲得正向回饋。主導內部 NextJS 教學論壇，引導新人上手。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自負責開發線上相片書編輯器，支援拖曳、尺寸調整、文字編輯等功能。",
      "從零規劃技術架構，使用 Vue + NuxtJS，6 個月內完成產品上線。",
      "支援 PWA 安裝，提供類原生 APP 的體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構與技術選型。",
      "使用 React / NextJS + TypeScript + TailwindCSS 開發面向香港市場的中小企貸款平台。",
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
      "技術棧涵蓋 NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
    ],
  },
  {
    company: "電獺 Aotter",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "專案導向團隊，每項專案配置約 4 人，快速迭代產品。",
      "使用 Nuxt 生態系 + TypeScript + TailwindCSS，搭配 Docker + K8s CI/CD 流程。",
      "開發 SuprLink 縮網址服務、Aotter Trek DSP 廣告平台等自有及外部專案。",
      "注重 UI/UX 設計還原度，為每個專案量身訂做 TailwindCSS 小型 UI 框架。",
    ],
  },
  {
    company: "第三緯度科技",
    role: "Frontend Engineer",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "使用 Vue + PHP 前後端分離架構開發。",
      "串接微信支付金流系統。",
    ],
  },
  {
    company: "日商優橋",
    role: "數位廣告優化師 & Frontend Engineer",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "初期擔任數位廣告優化師，管理 Facebook / Google Ads，運用 A/B testing 與 Heatmap 優化 UX。",
      "後期轉任前端工程師兼 PM，為代理產品架設官方網站與活動頁面。",
      "管理前端團隊 2 人，使用日文作為主要工作語言。",
      "建立 UI/UX 素養，對前端開發生涯奠定基礎。",
    ],
  },
  {
    company: "亞洲遊",
    role: "日本市場業務及營運",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "負責接洽日本旅宿房源並協助上架到公司平台。",
      "擔任對日翻譯窗口，協助消費者排除旅日中緊急狀況。",
      "2017 年度預約筆數達 8,846，與前年比成長 376%。",
    ],
  },
];

const projects: Project[] = [
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
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，經由 LINE 購物外連到合作夥伴商家消費可獲 LINE 點數回饋。我獨自開發了購物平台的「直播購物」功能，參考 YouTube 影片流自動預覽機制，設計了一套可覆用影片自動預覽模組，透過全局調度器解決高速捲動下影片預覽混亂及單頁面過多直播源造成記憶體暴增的技術難點。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
  },
  {
    name: "CMS 重構 NextJS",
    summary:
      "主導將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS app router 架構，帶領 4 人團隊完成前後端分離。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
  },
  {
    name: "AI.Book 相簿編輯器",
    summary:
      "線上相片書編輯器，支援照片拖曳/尺寸調整/文字編輯，跨平台支援含 PWA 安裝體驗。從零規劃到上線僅 6 個月。",
    stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Component（Stencil.js）打造不受框架限制的組件庫，整合 TailwindCSS + Semantic UI 並以 Storybook 作文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image:
      "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
  },
  {
    name: "SuprLink 超級連結",
    summary:
      "從 A/B 分流到數據分析，再到廣告投放一氣呵成的縮網址服務。",
    stack: ["NuxtJS", "TypeScript", "TailwindCSS", "Docker", "K8s"],
    image:
      "https://cdn.lazy-cv.com/a14d9a80-45b9-4943-a043-49dacb460bb9.png",
    url: "https://supr.link",
  },
  {
    name: "Aotter Trek DSP 平台",
    summary:
      "結合大數據分析的廣告投放 DSP 平台，使用大量圖表介面為使用者找出最適合的廣告 TA。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    image:
      "https://cdn.lazy-cv.com/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
  },
  {
    name: "JavaScript Task Force",
    summary:
      "LINE Taiwan 跨團隊專案小組，負責制定全公司前端開發準則。研究導入 SonarQube、Lighthouse CI、OpenTel 前端監控、React 專案 template 生成器等。",
    stack: ["SonarQube", "Lighthouse CI", "OpenTel", "React"],
    image:
      "https://cdn.lazy-cv.com/jstf.png",
  },
  {
    name: "FundFluent SME Portal",
    summary:
      "面向香港中小企業的整合貸款平台，提供銀行與政府貸款資訊、一站式申請，並透過 OCR 技術整理文件以降低重複提交成本。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    image:
      "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
  },
  {
    name: "FundFluent Partner Portal",
    summary:
      "面向銀行等放貸方的管理平台，可上架、整理各項貸款專案，以及審核來自中小企的申請案件。",
    stack: ["React", "NextJS", "TypeScript", "Semantic UI"],
    image:
      "https://cdn.lazy-cv.com/882b56c6-5e93-454c-ab5d-d98193795b74.png",
    url: "https://partner.fundfluent.io",
  },
  {
    name: "Chrome Extension - SuprLink",
    summary:
      "快速在 SuprLink 超級連結產生縮網址的 Chrome 擴充工具。",
    stack: ["Chrome Extension", "JavaScript"],
    image:
      "https://cdn.lazy-cv.com/7b907335-af65-43cc-9ea2-b9ae4d2c80f0.png",
  },
  {
    name: "資策會 城市儀表板",
    summary:
      "收集分散各地的政府數據於同一平台展示的政府資料數據庫，具備可高度客製化的圖表及資料篩選模組。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "TailwindCSS"],
    image:
      "https://cdn.lazy-cv.com/0a002690-85c9-4bcf-bb72-9cebf81788ae.png",
  },
  {
    name: "beanfun! 數據管理中心",
    summary:
      "擁有各種圖表的集中數據 Dashboard，用以顯示企業內部各項指標。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    image:
      "https://cdn.lazy-cv.com/de995dc8-088c-430b-ba29-33fd2b364ced.png",
  },
  {
    name: "俏樂斯 官方網站",
    summary:
      "日本沖繩保養品俏樂斯的台灣官方網站，負責設計規劃與前端開發。",
    stack: ["PHP", "jQuery", "CSS"],
    image:
      "https://cdn.lazy-cv.com/b2a0eaa9-55f5-4482-bd20-c4c574b5d7d7.png",
  },
  {
    name: "髮樂活",
    summary:
      "美髮保養的內容型自媒體網站。",
    stack: ["WordPress", "PHP", "CSS"],
    image:
      "https://cdn.lazy-cv.com/2b1c2e88-9b0e-4bf8-98ee-f955391ba10f.png",
  },
  {
    name: "日本嚴選",
    summary:
      "專接業配的日系產品推薦部落格。",
    stack: ["WordPress", "PHP", "CSS"],
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
  { label: "年前端經驗", value: 7 },
  { label: "個完整產品", value: 16 },
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
        description="7 年前端開發經驗，曾任職於 TikTok Singapore 與 LINE Taiwan 擔任資深軟體工程師。常用技術架構為 React (NextJS)、Vue (NuxtJS) 及 TypeScript。我的核心價值觀是「使用者體驗至上」，使命不是做出一個產品，而是做出一個「好用」、「美觀」的軟體產品。具備在資源有限環境下從零規劃到產品上線的能力，也能在大型企業嚴謹環境中開發高品質程式。流利使用英、日、中三種語言。熟悉敏捷開發與可持續的團隊迭代交付模式，擅長與他人合作及與非技術人員溝通。擅長將複雜問題用簡單的方式解釋。"
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
