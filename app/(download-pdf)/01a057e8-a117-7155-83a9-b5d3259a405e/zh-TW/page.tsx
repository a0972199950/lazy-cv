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
  title: "John Hsieh | Software Engineer III, Google Pay and Wallet",
  description:
    "7 年 JavaScript / TypeScript 網頁開發經驗。LINE 購物大型應用設計與架構、TikTok 廣告投放財務結算系統，以及個人獨立上架、10 天累積 1,000 次安裝的瀏覽器擴充功能。",
  openGraph: { images: ["/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a057e8-a117-7155-83a9-b5d3259a405e/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 50+ 子專案、百萬行規模的 monorepo 中，以 React 17、TypeScript、Rush Monorepo 與自研微前端框架主導廣告投放財務結算系統開發",
      "彙整廣告主與內部團隊每日 oncall 回報的問題，歸納重複模式並主動定義新的開發任務",
      "將 CSV 校驗改以 Web Worker（Comlink RPC）執行，搭配 Yup／Regex 驗證，資料填寫流程 UI 卡頓時間減少 90%",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "在 60 人、每行程式碼合併前皆須審查的團隊中，以 Vue SSR、GraphQL、TypeScript、ExpressJS、Redis 全端技術棧開發並維護 LINE 購物導購平台",
      "帶領 4 人團隊主導 CMS 從 PHP 重構至 NextJS App Router 架構，達成前後端完全分離",
      "加入 JSTF 跨團隊小組制定全公司前端準則，並導入 Lighthouse CI 於每個 PR 自動評量效能",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer (契約合作)",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "主導後端 API 設計，涵蓋 AWS Cognito OAuth2 登入、購物車與訂單、金流串接，並定義 API 契約、資料模型與錯誤處理",
      "獨自開發線上相片書編輯器，6 個月內上線，一人包辦技術選型、前端架構、編輯器核心到後端 API",
      "以 Vue + NuxtJS 實作拖拉排版、縮放與文字編輯，支援桌機與手機瀏覽器",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer (契約合作)",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "以 React／NextJS、TypeScript、TailwindCSS 開發香港市場中小企數位貸款平台，涵蓋借款方入口與放貸機構夥伴後台",
      "從零規劃前端架構與技術選型，於公司初創期加入",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），發布至 private NPM 供兩入口獨立安裝",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [],
  },
  {
    company: "電獺 Aotter",
    role: "Frontend Engineer",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [],
  },
  {
    company: "第三緯度科技",
    role: "Frontend Engineer",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [],
  },
  {
    company: "日商優橋",
    role: "數位廣告優化師 & Frontend Engineer",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [],
  },
  {
    company: "亞洲遊",
    role: "日本市場業務及營運",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，於合作商家消費可獲 LINE 點數回饋。由 60 人團隊以 Vue SSR、GraphQL、ExpressJS、Redis 全端技術棧開發維運的大型線上應用，每行程式碼合併前皆須審查。",
    stack: ["TypeScript", "Vue 2", "Vue SSR (vue-server-renderer)", "Vuex 3", "Node.js", "Express", "GraphQL (Apollo Server Express)", "DataLoader", "Redis (ioredis)", "OAuth2", "Sentry", "Jest", "Storybook", "Docker", "Drone CI", "Lighthouse CI"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨自開發 LINE 購物的「直播購物」功能，設計一套自研全局調度器實現可復用影片自動預覽模組，在高速捲動下帶來順滑的使用者體驗",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "Chrome／Edge／Firefox 瀏覽器擴充套件，為台灣／新加坡使用者將網頁版 Bilibili 的影片 CDN host 動態重排為當地最快節點，並具自動 fallback。架構、開發、上架到維運皆一人獨立完成。",
    stack: ["Chrome Extension Manifest V3", "Vanilla JavaScript (ES6+)", "chrome.storage", "chrome.i18n", "Content Scripts (MAIN world / ISOLATED world)", "fetch / XMLHttpRequest hook", "Node.js", "JSZip", "Puppeteer", "Sharp"],
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
      "自動容錯：監控分段請求與播放卡頓，異常時先靜默切回 B 站原生備援節點，備援再失效才提示使用者",
      "MAIN world 注入攔截 fetch/XHR 與 playinfo setter，即時改寫 playurl/DASH manifest 的 CDN host，不影響頁面原生行為",
      "論壇驅動迭代：追蹤 Bilibili 論壇與社群回饋，歸納重複痛點以排定修復優先序與功能藍圖",
    ],
    contributions: [
      "上架僅 **10 天**內週活躍使用者（WAU）即突破 **1,000**，自然流量達 **2,000**，轉換率高達 **50%**，五星好評率 **100%**",
    ],
  },
  {
    name: "UG 海外增長業務平台",
    summary:
      "企業級 Monorepo 前端專案，服務 TikTok 海外廣告增長業務，涵蓋媒體資產、財務結算、供應商採購、數據看板等領域，50+ 子專案、百萬行規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "為財務、報價場景的 JavaScript 浮點數精度問題實作高精度數值計算方案",
      "基於 JSON Schema 動態渲染的複雜表單元件，涵蓋級聯選擇、動態欄位、條件顯示",
      "以自研框架實現子應用動態載入的微前端整合，支援模組按需載入與獨立部署",
    ],
    contributions: [
      "透過 Web Worker 多線程使大量 CSV 校驗的 UI 卡頓時間減少 **90%**；妥善利用 cache 機制讓大型表單頁 TBT 降低 **98%**",
    ],
  },
  {
    name: "AI.Book 相簿編輯器",
    summary:
      "線上相片書編輯器，支援拖拉排版、相片增刪與文字編輯，可從 Google 相簿／Instagram 匯入相片。後端 API 涵蓋 OAuth2 登入到購物車、訂單、金流的完整流程。從零到上線僅 6 個月。",
    stack: ["TypeScript", "Vue 2", "Nuxt 2 (SPA)", "Vuex", "TailwindCSS", "Element UI", "vee-validate", "Axios", "@nuxtjs/auth-next", "AWS Cognito OAuth2", "Google OAuth", "Instagram Graph API OAuth", "GitHub Actions", "AWS S3", "CloudFront", "Swagger/OpenAPI"],
    company: "AI.Book 愛相簿",
    image: [
      "https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
      "https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
    ],
    highlights: [
      "主導後端 API 設計，涵蓋 AWS Cognito OAuth2 登入、購物車與訂單、金流串接",
      "以純 Vue 搭建客製化編輯器，支援拖拉排版、相片增刪、文字與字型大小編輯",
      "支援桌機與手機瀏覽器編輯，可從 Google 相簿／Instagram 匯入相片",
    ],
    contributions: [
      "從零到上線由一人端到端獨立開發，涵蓋技術選型、前端架構、編輯器核心到後端 API 設計",
    ],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "JavaScript", "HTML", "CSS", "Sass / SCSS", "Node.js"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["React", "Next.js", "Redux", "React Query", "Vue", "NuxtJS", "Vuex", "TailwindCSS"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Express", "GraphQL", "Apollo Server", "Apollo Client", "REST API", "gRPC", "WebSocket", "Socket.io"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["PostgreSQL", "MongoDB", "Mongoose", "Redis", "Docker", "Kubernetes", "GCP", "AWS", "Azure", "Firebase"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["Jest", "Cypress", "Playwright", "Testing Library", "Storybook", "Webpack", "Vite", "Git", "GitHub Actions", "ESLint"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:34s]",
  },
  {
    keywords: ["OAuth2", "JWT", "Web Worker", "Service Worker", "PWA", "Swagger", "Sentry", "Lighthouse", "PM2"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:36s]",
    reverse: true,
  },
];

const stats: StatItem[] = [
  { label: "年前端經驗", value: 7 },
  { label: "交付產品數", value: 19 },
  { label: "帶領團隊人數", value: 4 },
  { label: "使用語言數", value: 3 },
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

export default function ResumePageZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/en" },
        { locale: "zh-TW", label: "中文", href: "/01a057e8-a117-7155-83a9-b5d3259a405e/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Software Engineer III, Google Pay and Wallet - Google"}
        description={"7 年 JavaScript／TypeScript 全端開發經驗。現於 TikTok Singapore 開發廣告投放財務結算系統；前 3 年於 LINE，在 60 人、每行程式碼合併前皆須審查的團隊中，以 Vue SSR、GraphQL、ExpressJS、Redis 全端技術棧開發並維運 LINE 購物大型導購平台，主責大型應用的設計與架構。\n\n重視把產品做到「好用」。曾一人於一個週末完成並上架 Bilibili 影片加速瀏覽器擴充功能，內建靜默自動降級機制，上線 10 天以自然流量累積 1,000 次安裝、14 筆五星好評。"}
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
