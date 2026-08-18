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
  title: "John Hsieh | 資深軟體工程師 — Google Ads Campaign Automation",
  description:
    "7 年軟體工程經驗。TikTok Singapore（廣告投放、用戶增長）、電獺 Trek DSP 廣告平台、中文母語者。應徵 Senior Software Engineer, Campaign Automation, Google Ads。",
  openGraph: { images: ["https://cdn.lazy-cv.com/avatar.jpg"] },
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
  { href: "https://lazy-cv.com/01a01323-c8d2-7079-896e-33d292fee0f9/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore",
    role: "Software Engineer",
    period: "2024.11 - 至今",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "在 50+ 子專案、百萬級程式碼規模的 monorepo 中主導廣告投放財務結算、採購與媒體資產管理平台開發，透過各大 DSP 平台服務 TikTok 海外用戶增長廣告投放（React 17、TypeScript、Rush Monorepo、自研微前端框架）",
      "在核心廣告投放工作流程上交付可量化的效能成果：Web Worker CSV 驗證（Comlink + Yup）減少 90% UI 卡頓，自研快取工具在 500 表單財務介面上降低 98% Total Blocking Time",
      "彙整廣告主 oncall 反饋主動規劃技術任務；帶領團隊導入 Scrum，透過 retrospective 與 refinement 改善跨成員協作與時程透明度",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "開發並維護 LINE 購物（Vue SSR、GraphQL、TypeScript、ExpressJS）——獨立開發「直播購物」影片自動預覽模組，透過全局調度器解決高速捲動時的預覽混亂與多直播源並發造成的記憶體暴增",
      "帶領 4 人團隊主導 CMS 從 PHP 重構至 NextJS App Router，達成前後端完全分離，同時負責架構規劃、任務分配與使用者溝通",
      "投入 JSTF 制定全公司前端開發準則、導入 Lighthouse CI；並指導 2 位新進工程師獲得正向回饋",
    ],
  },
  {
    company: "AI.Book 愛相簿",
    role: "Frontend Engineer（契約合作）",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "獨自從零開發線上相片書編輯器，使用 Vue + NuxtJS，6 個月內完成產品上線",
      "主導後端 API 設計，涵蓋 OAuth 第三方登入、購物車與訂單流程、金流串接，從消費端視角定義 API 契約與資料模型",
    ],
  },
  {
    company: "FundFluent",
    role: "Frontend Engineer（契約合作）",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "於公司初創期從零規劃前端架構，獨自開發面向香港市場的中小企貸款平台，從架構到上線端到端負責（React、TypeScript、TailwindCSS）",
      "規劃跨專案共用 UI 組件庫（Stencil.js Web Component），部署至 private NPM",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "Full-Stack Engineer",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "管理 2 人前端團隊，開發整合內部 AI 微服務的 2B 管理平台（NuxtJS/NextJS、TypeScript、MongoDB、Redis）",
    ],
  },
];

const companyLogos: Record<string, string> = Object.fromEntries(
  experiences.map((e) => [e.company, e.logo])
);

const projects: Project[] = [
  {
    name: "UG 海外增長業務平台",
    summary:
      "大型企業級 Monorepo 前端專案，服務 TikTok 線上廣告海外增長業務線，涵蓋財務結算、供應商採購、媒體資產管理、數據看板等多業務領域，管理 50+ 子專案，百萬級程式碼規模。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest"],
    company: "TikTok Singapore",
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態表單渲染的複雜廣告投放表單元件開發，涵蓋級聯選擇、動態欄位、條件顯示等場景",
      "針對財務、報價等場景的 JavaScript 浮點數精度問題，實作高精度數值計算方案",
      "透過自研框架實現子應用動態載入的微前端整合，支援按需載入業務模組與獨立部署",
      "透過自研線上翻譯平台在 runtime 獲取最新翻譯檔，支援多語系廣告活動介面動態更新",
    ],
    contributions: [
      "Web Worker 多線程 CSV 校驗：將校驗工作轉移到單獨執行緒，使用 Comlink 實現類 RPC 通訊，搭配 Yup + Regex Schema —— 在 10 筆資料中**減少 90% UI 卡頓時間**",
      "函數快取工具優化渲染效能：模仿 React useMemo 建立 cache/cacheMany 工具快取計算結果 —— 在一個沒有做分頁、一次渲染 500 個表單 UI 的介面中**降低 98% Total Blocking Time (TBT)**",
    ],
  },
  {
    name: "Aotter Trek DSP 廣告平台",
    summary:
      "結合大數據分析的廣告投放 DSP（需求方平台）平台，使用大量圖表介面協助廣告主透過數據分析找出最佳廣告受眾與活動設定。",
    stack: ["NuxtJS", "TypeScript", "Chart.js", "SASS"],
    company: "電獺 Aotter",
    image:
      "https://cdn.lazy-cv.com/4812639f-ea04-470c-b931-a954464678fd.png",
    url: "https://trek.aotter.net",
  },
  {
    name: "LINE 購物",
    summary:
      "LINE 導購服務，透過合作商家消費可獲 LINE 點數回饋。全端專案包含 Vue SSR 前端與整合數十個後端微服務的 BFF 層（Node.js + GraphQL）。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    company: "LINE Taiwan",
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨自開發「直播購物」功能：設計**可覆用影片自動預覽模組**，透過全局調度器**解決高速捲動下影片預覽混亂**及**單頁面過多直播源造成記憶體暴增**的技術難點",
    ],
  },
  {
    name: "TWSG 視頻加速 for Bilibili（非官方）",
    summary:
      "讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的 Chrome / Edge / Firefox 瀏覽器擴充套件，動態將影片 CDN host 重排為當地最快節點，並具備自動 fallback 機制。從技術架構、開發到上架與維護皆為個人獨立完成。",
    stack: ["Chrome Extension", "Manifest V3", "JavaScript", "Puppeteer", "Web Extension API"],
    image: [
      "https://cdn.lazy-cv.com/promo-cover-1280x800.png",
      "https://cdn.lazy-cv.com/10-days-report.png",
      "https://cdn.lazy-cv.com/screenshot-speedtest-en-1280x800.jpg",
      "https://cdn.lazy-cv.com/5-starts.png",
    ],
    url: "https://chromewebstore.google.com/detail/twsg-%E8%A7%86%E9%A2%91%E5%8A%A0%E9%80%9F-for-bilibili-%E9%9D%9E%E5%AE%98/dfaddcffoondcendifiljhdbdagebgch",
    highlights: [
      "MAIN world 注入攔截 fetch/XHR 與 playinfo setter，即時改寫 playurl/DASH manifest 中的 CDN host，且不影響頁面原生行為",
      "雙 world 橋接架構：ISOLATED world 橋接腳本透過 postMessage/localStorage 與 MAIN world 溝通，同步設定與多語系文案",
      "自動容錯 Fallback：監控分段請求失敗與播放卡頓，偵測異常時先靜默切換至備援節點",
      "可重現建置：純 Node.js 腳本打包，只要原始碼不變，跨平台每次產出的 zip bytes 完全相同",
    ],
    contributions: [
      "上架 10 天：瀏覽數 2,000、安裝數 1,000（**轉換率達 50%**），WAU 突破 1,000（**留存率近 100%**），獲得 **14 筆五星好評、零負評**，全數為自然流量",
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

export default function GoogleAdsZhTWPage() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/01a01323-c8d2-7079-896e-33d292fee0f9/en" },
        { locale: "zh-TW", label: "中文", href: "/01a01323-c8d2-7079-896e-33d292fee0f9/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle={"資深軟體工程師 - TikTok\n應徵 Senior Software Engineer, Campaign Automation, Google Ads (Mandarin) - Google"}
        description={"具備 7 年軟體工程經驗的中文母語者，目前在 TikTok Singapore 擔任資深軟體工程師，負責透過各大 DSP 平台推動海外用戶增長廣告投放。\n\n在 TikTok 開發廣告投放財務結算前端系統，針對百萬級程式碼的 monorepo 專案交付可量化的效能成果：Web Worker CSV 驗證減少 90% UI 卡頓，自研快取工具在 500 表單介面上降低 98% TBT。任職電獺期間從零開發公司自家的 Trek DSP 廣告投放平台——一套結合大數據受眾分析的需求方廣告平台，協助廣告主優化活動設定。曾帶領 4 人團隊完成 CMS 重構專案。中英日三語流利（JLPT N1）。"}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨國廣告投放與產品開發經驗"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案介紹"
        description={`${projects.length} 個代表性專案，展示廣告平台開發、GenAI 整合與產品影響力。`}
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
