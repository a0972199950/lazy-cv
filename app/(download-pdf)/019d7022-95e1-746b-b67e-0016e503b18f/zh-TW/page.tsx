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
  title: "John Hsieh | 前端工程師 — Meta Manus",
  description:
    "7 年前端開發經驗 | TikTok Singapore & LINE Taiwan | React / TypeScript / Next.js 專精 — 應徵 Meta Front End Engineer, Manus",
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
      "隸屬 User Growth 團隊，負責廣告投放的財務結算系統開發——涵蓋帳單、發票與對帳功能，使用 React、monorepo 與公司自研框架架設前端微服務系統。",
      "建立 Web Worker 多執行緒 CSV 校驗系統，使用 Comlink (RPC 通訊)，大規模數據處理中 UI 卡頓時間減少 90%。",
      "建立函數快取工具 (cache/cacheMany)，模仿 React useMemo 的設計，在一個一次渲染 500 個表單的介面中，Total Blocking Time 降低 98%。",
      "帶領開發團隊導入 Scrum：利用 retrospective 建立團隊自我糾錯機制，利用 refinement 解決成員各自為政的問題，並平衡工作量與提升 PM 對時程的掌握度。",
      "積極參與 Code Review，並協助建立團隊級的前端編碼規範，確保程式碼品質。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發 LINE 購物——服務數百萬用戶的大型電商平台，技術棧 Vue SSR + GraphQL + TypeScript + ExpressJS。",
      "擔任 Team Leader 帶領 4 人團隊，主導 CMS 從 PHP 重構至 NextJS App Router 架構，透過 iframe 微前端方式進行漸進式 URL 遷移。",
      "參與 JavaScript Task Force 制定全公司前端開發準則，導入 Lighthouse CI 自動化效能評量。",
      "擔任 Mentor 指導 2 位新人，獲得正向回饋。主導內部 NextJS 教學論壇，引導新人上手。",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自開發線上相片書編輯器，支援拖曳、尺寸調整、文字編輯等功能，使用 Vue + NuxtJS。",
      "從零規劃技術架構，6 個月內完成產品上線。",
      "支援 PWA 安裝，提供類原生 APP 的體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "公司初創期即加入，從零規劃前端架構，為面向香港中小企的金融科技借貸平台做技術選型。",
      "使用 React / NextJS + TypeScript + TailwindCSS 開發 SME Portal 與 Partner Portal，包含 OCR 文件處理功能。",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署到 private NPM，實現跨框架複用。",
    ],
  },
  {
    company: "電獺股份有限公司 (Aotter)",
    role: "前端工程師",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "在數位廣告與媒體科技公司中參與多元接案開發——包括 SuprLink 短網址服務（含 A/B 測試與數據分析）、Aotter Trek 廣告分析平台，以及政府與企業級數據儀表板。",
      "專案導向的小型團隊（PM + UI + 前後端，約 4 人），執行快速 Scrum 迭代，同時管理多個並行專案。",
      "使用 TailwindCSS 為每個專案量身打造 CSS 框架，確保 UI 還原度；強調程式碼的可複用性與可擴展性。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Lazy CV — AI 驅動履歷生成器",
    summary:
      "AI 驅動的客製化履歷生成器。結合 AI Agent 自動化與 Next.js 16——提供職缺 URL 後自動抓取 JD 並生成客製化雙語履歷網頁。透過 AI 輔助開發（Vibe Coding），從零到上線僅花 2 天。本份履歷即由此專案產生。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "透過 Chrome DevTools MCP 實現 AI Agent 自動化 SOP，端到端履歷生成管線",
      "Next.js 16 App Router + Standalone Output 輕量 Docker 打包",
      "AWS 無伺服器部署：ECR → Lambda Web Adapter, S3 + CloudFront CDN, GitHub Actions CI/CD",
      "Neon Serverless PostgreSQL + Drizzle ORM 實現型別安全的資料庫操作",
    ],
  },
  {
    name: "UG 海外增長業務平台",
    summary:
      "TikTok 大型企業級 Monorepo 前端專案，服務線上廣告海外增長業務線，涵蓋媒體資產管理、財務結算、供應商採購、數據看板等領域，管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態渲染的複雜表單組件，包含級聯選擇、動態欄位、條件渲染",
      "透過公司自研框架實現微前端整合，支援動態子應用載入與獨立部署",
      "使用 Ferry + Thrift IDL 自動生成強型別服務代碼，確保前後端協議一致性",
    ],
    contributions: [
      "Web Worker 多執行緒 CSV 校驗：將重運算移至獨立執行緒——UI 卡頓時間減少 90%",
      "函數快取工具 (cache/cacheMany)——在 500 個表單渲染介面中 Total Blocking Time 降低 98%",
    ],
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 的聯盟行銷電商平台，用戶透過合作商家購物可獲得 LINE Points。服務數百萬用戶，技術棧為 Vue SSR + GraphQL + TypeScript。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨立開發「直播購物」功能——設計可複用的影片自動預覽模組，透過全域排程器解決了高速滑動時預覽錯亂及單頁過多直播串流的記憶體暴漲問題",
    ],
  },
  {
    name: "CMS 重構至 NextJS",
    summary:
      "主導 LINE 購物 CMS 從 PHP 重構至 React & NextJS App Router 架構。帶領 4 人團隊，負責技術選型、排程與跨團隊協調。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "使用 iframe 實現微服務，支援新舊專案的獨立部署與漸進式 URL 遷移",
      "公司內部早期採用 Next App Router 的專案之一",
    ],
    contributions: [
      "兼任架構師與 PM——規劃專案、分配任務、撰寫技術文件、與利害關係人溝通",
    ],
  },
  {
    name: "AI.Book 線上相片書編輯器",
    summary:
      "線上相片書編輯平台，讓用戶在網頁上設計個人化相冊，並可印刷為精裝實體相簿。獨立從零打造客製編輯器，支援拖曳、尺寸調整與文字編輯。",
    stack: ["Vue", "NuxtJS", "Canvas", "PWA"],
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    url: "https://aibook.com.tw",
    highlights: [
      "以純 Vue 打造客製編輯器，支援照片、文字、字型與版面編輯，同時相容桌面與行動裝置",
      "支援 PWA 安裝，提供類原生 APP 的使用體驗",
    ],
    contributions: [
      "作為唯一開發者從零打造——從架構規劃到產品上線歷時 6 個月",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "跨專案共用 UI 組件平台，使用 Web Components (Stencil.js) 打造，框架無關。整合 TailwindCSS + Semantic UI，並以 Storybook 建立文件。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "以 Web Component 打造 UI 組件——框架無關，可在 React/Vue 專案中複用",
      "以 Tailwind + Semantic UI 建構設計系統，透過 Storybook 建立文件",
      "Monorepo 分離組件庫與業務代碼，支援獨立發布與測試",
    ],
    contributions: [
      "作為唯一開發者從零打造",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "Node.js", "Express", "REST API", "AI Agent"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Microservices", "Monorepo"],
    badgeClassName: "border-blue-200 bg-blue-50/50 text-blue-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Web Worker", "Jest", "Cypress", "Storybook", "Webpack", "Vite", "TailwindCSS", "Sass", "ECharts", "D3.js"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Scrum", "Agile", "Micro-Frontend", "Web Component", "PWA", "i18n", "Lighthouse", "Prompt Engineering", "Drizzle ORM", "Framer Motion"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "年資", value: 7 },
  { label: "產品交付數", value: 18 },
  { label: "帶領人數", value: 4 },
  { label: "語言能力", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "東吳大學", degree: "學士 — 日文系", period: "2013 - 2017" },
  { institution: "同志社大學（京都）", degree: "交換留學 — 日語與文化", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "JLPT N1", description: "最高級認證 — 商務級日語能力", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "台大資訊推廣部", description: "網頁開發技術課程" },
];

const languages: LanguageItem[] = [
  { name: "中文 — 母語", badgeClassName: "bg-blue-100 text-blue-800" },
  { name: "日文 — 商務級 (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "英文 — 流利專業溝通", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function MetaManusResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019d7022-95e1-746b-b67e-0016e503b18f/en" },
        { locale: "zh-TW", label: "中文", href: "/019d7022-95e1-746b-b67e-0016e503b18f/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="前端工程師"
        description={`7 年前端開發經驗，目前任職於 TikTok Singapore，此前在 LINE Taiwan 任職 3 年。我精通 React、TypeScript、Next.js 及現代前端生態系，並在前端效能優化方面有實績——透過 Web Worker 減少 90% UI 卡頓、透過自研快取工具降低 98% Total Blocking Time。我積極參與 Code Review，並在 LINE 與 TikTok 協助建立前端編碼規範。

我對 AI 產品有強烈熱情，並具備將 AI 工具整合到實際工作流程的實戰經驗。我建立了 Lazy CV——一個 AI Agent 驅動的履歷生成器，透過 Chrome DevTools MCP 自動抓取 JD 並產生客製化雙語履歷，從零到上線僅花 2 天（AI 輔助開發）。這個專案展示了我運用 AI 工具帶來可量化生產力提升的能力。

除了技術交付之外，我同樣重視團隊成長與跨職能協作。在 LINE Taiwan 期間，我擔任 Mentor 帶領 2 位新進工程師，並主導內部 Next.js 教學論壇；在 TikTok，我主導團隊導入 Scrum 敏捷流程。我擅長在多元化的協作環境中發揮，相信優秀的團隊才能打造優秀的產品。

我也具備獨立開發者的豐富經驗。作為外包工程師，我獨立從零開發 AI.Book 的線上相簿編輯器，6 個月內完成產品上線；同時為金融科技新創 FundFluent 打造完整前端平台。這些經歷鍛鍊了我端到端獨立交付的能力。

作為中文母語者，同時具備流利英語與商務級日語（JLPT N1），我能無縫主持與中文團隊的技術同步會議、翻譯與審閱技術規格文件，並在 Meta 的全球與亞太夥伴之間搭建溝通橋樑。我很期待能加入 Manus 團隊——打造將先進 AI 轉化為可靠實用成果的前沿 AI Agent 產品，服務全球數十億用戶。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個精選專案，展示產品影響力與技術深度。`}
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
