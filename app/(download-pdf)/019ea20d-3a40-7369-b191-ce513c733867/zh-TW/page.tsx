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
  title: "Forward Deployed Engineer — OpenAI",
  description:
    "7 年全端工程經驗，深度 LLM 整合與 AI Agent 開發，並具備新創獨立交付實戰經驗。應徵 OpenAI Singapore Forward Deployed Engineer 職位。",
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
      "隸屬 User Growth 團隊，負責在各大 DSP 平台投放廣告以擴大 TikTok 等產品的用戶規模。",
      "主導廣告投放的金融結算系統開發，採用 React、Rush Monorepo 與公司內部微前端框架。",
      "推動團隊導入 Scrum — 透過回顧會議建立自我修正機制，透過 Refinement 打破孤立工作，優化 PM 對專案進度的可見度。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "Software Engineer",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "以 Vue SSR + GraphQL + TypeScript + ExpressJS 日常開發 LINE Shopping 購物平台。",
      "擔任 4 人團隊 Team Leader，主導 CMS 從 PHP 遷移至 NextJS App Router 架構，負責技術決策、排程規劃、跨團隊協調與文件撰寫。",
      "加入公司跨部門 JavaScript Task Force，引入 Lighthouse CI 實現自動化前端效能評量。",
      "帶領 2 位新進工程師，並主持內部 NextJS 教學論壇協助新成員上手。",
    ],
  },
  {
    company: "AI.Book",
    role: "前端工程師（新創獨立承包商）",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "擔任唯一技術承包商 — 直接與創辦人進行所有需求探索，將業務目標轉化為技術規格，並獨立做出所有架構決策。",
      "從零設計並建置功能完整的線上相片書編輯器（Vue + NuxtJS），獨自一人從啟動到上線，歷時 6 個月。",
      "全程與創辦人維持緊密回饋循環，主動調整範圍與排序以保護交付期。",
      "實作完整 PWA 支援（Service Worker、IndexedDB），提供接近原生 App 的跨平台體驗。",
    ],
  },
  {
    company: "FundFluent",
    role: "前端工程師（新創獨立承包商）",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "深度嵌入創辦人團隊 — 主持需求工作坊、規劃每項產品範圍、設計完整前端架構，以唯一前端開發者身份獨立交付三個分開的產品。",
      "獨立從零建置 UI Kit（Stencil.js Web Component）、SME Portal 與 Partner Portal，全程自主掌控時程、技術取捨與交付節奏。",
      "全程與 CTO 及產品利害關係人維持緊密的回饋循環，主動調整範圍與排序以確保交付。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "全端工程師",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "加入新成立的 AI 團隊擔任全端工程師，同時管理 2 人前端小組。",
      "開發整合內部 AI 微服務的 B2B 管理平台，技術棧為 NuxtJS / NextJS + MongoDB + Redis。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "AI Persona Chatbot",
    summary:
      "一個已上線的 LINE 聊天機器人，將寵物化身為個性化 AI 伴侶。我自行設計並實作整套大模型交互層：結構化 System Prompt 確保人格一致性、多輪對話上下文窗口管理、多模態輸入處理（圖片 + 語音）、基於向量資料庫的 RAG 長期記憶，以及 Tool Call 驅動的記憶召回 — 全部運行於自託管 VPS。",
    stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding / RAG", "提示詞工程"],
    image: [
      "https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
      "https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
    ],
    highlights: [
      "System Prompt 工程：設計結構化人格提示詞，對話全程鎖定模型演繹風格，防止長期對話中的人格漂移",
      "Context Window 管理：以 User ID 序列化對話紀錄，並主動截斷以符合模型 Token 限制，用戶可體驗真實連續的對話記憶",
      "Tool Call 架構：將 recall_memory 工具暴露給模型，模型可在對話中主動呼叫以從向量資料庫取回相關記憶，實現真正的長期記憶感",
      "RAG pipeline：過去事件序列化為 JSONL → 經 Gemini Embedding API 向量化 → 存入向量資料庫 → 查詢時以語意相似度取回並注入上下文",
      "多模態輸入：圖片與音訊訊息分別導入 Gemini Vision 與 Audio API，模型回應無縫合併入同一對話線索",
      "n8n 作為 LLM 編排層：每次 Webhook 觸發一個 n8n 工作流，處理 Token 計算、歷史取回、模型呼叫、Tool Call 解析與資料庫寫入，各步驟解耦、可獨立測試",
    ],
  },
  {
    name: "Lazy CV",
    summary:
      "一套全端 AI Agent 系統，將職缺 URL 自動轉化為完整的雙語履歷 — 全程自動化，無需人工介入。系統使用 LLM 解讀抓取到的 JD、提取關鍵需求、與結構化個人資料來源對照，最終生成可直接部署的 Next.js 頁面程式碼。以 Vibe Coding 方式在 2 天內從零到上線 AWS 生產環境。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Chrome DevTools MCP", "Claude API"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
    highlights: [
      "LLM 驅動程式碼生成：模型收到 JD、個人資料來源（Markdown）與詳細的履歷組件 API 規格，一次輸出語法正確的 TSX，可直接渲染為可部署的履歷頁面",
      "嚴格約束的結構化提示詞：提示詞設計強制事實準確性（禁止虛構經歷）、正確 import 路徑、組件使用方式，以及單次輸出雙語內容",
      "MCP Tool Call 整合：將 Chrome DevTools MCP 登錄為模型可呼叫的工具，模型在工作流中自行判斷何時、如何使用它來抓取職位頁面",
      "迭代 Agent 回圈：Agent 可透過讀取編譯錯誤或瀏覽器截圖回饋自我修正，不需人工介入即可補丁生成的程式碼",
      "AWS Serverless 部署：ECR → Lambda Web Adapter、S3 + CloudFront CDN、GitHub Actions CI/CD",
    ],
  },
  {
    name: "UG Overseas Platform (TikTok)",
    summary:
      "服務 TikTok 海外用戶增長業務線的大型企業 Monorepo 前端專案，涵蓋媒體資產管理、金融結算、供應商採購、資料儀表板等，50+ 子專案，百萬行級程式碼庫。",
    stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker"],
    image: [
      "https://cdn.lazy-cv.com/OA.png",
      "https://cdn.lazy-cv.com/web-worker.png",
      "https://cdn.lazy-cv.com/pp-performance.png",
    ],
    highlights: [
      "基於 JSON Schema 動態渲染的複雜表單元件，涵蓋級聯選擇、動態欄位與條件渲染",
      "針對金融結算場景的高精度浮點數運算解決方案",
      "透過公司自研框架實現微前端整合，支援子應用動態載入與獨立部署",
    ],
    contributions: [
      "Web Worker 多執行緒 CSV 驗證（Comlink RPC）— UI 阻塞時間減少 90%，覆蓋 10 項資料錄入場景",
      "cache / cacheMany 函式快取工具（仿 React useMemo）— TBT 降低 98%，在 500 個表單不分頁渲染介面上實測",
    ],
  },
  {
    name: "CMS 遷移至 NextJS（Team Leader）",
    summary:
      "主導 LINE Shopping CMS 從 PHP 架構全面遷移至 NextJS App Router，獨自承擔架構設計、排程規劃、風險評估、跨團隊溝通與文件撰寫，是 LINE Taiwan 最早導入 App Router 的專案之一。",
    stack: ["React", "NextJS", "App Router", "TypeScript", "iframe 微服務"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
    highlights: [
      "iframe 微服務架構實現漸進式遷移 — 新舊專案獨立部署，以 URL 為單位逐步切換",
    ],
    contributions: [
      "獨自擔任架構師 + PM：任務分配、技術文件撰寫、使用者溝通與實際開發同步進行",
    ],
  },
  {
    name: "LINE Shopping",
    summary:
      "LINE 聯盟購物服務，用戶透過合作商家購物賺取 LINE Points，並提供直播購物功能。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
    ],
    url: "https://buy.line.me",
    contributions: [
      "獨立開發「直播購物」功能 — 設計可重用的影片自動預覽模組，以全域排程器解決高速捲動時的混亂預覽問題及多路直播造成的記憶體暴增問題",
    ],
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "以 Stencil.js Web Component 建置的跨專案共用 UI 元件庫，框架無關，整合 TailwindCSS + Semantic UI 設計系統，以 Storybook 作為文件工具，並部署至私有 NPM。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook", "Monorepo", "NPM"],
    image: "https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
    highlights: [
      "Web Component 框架無關，可在 React、Vue 或原生 JS 中使用",
      "Monorepo 架構，元件庫可獨立發布與版本管理，與業務程式碼解耦",
    ],
    contributions: ["獨立從零開發"],
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "Python", "Node.js", "GraphQL", "REST API", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["LLM 整合", "OpenAI API", "Claude API", "Gemini API", "RAG", "Embedding", "Prompt Engineering", "n8n", "AI Agent", "MCP"],
    badgeClassName: "border-amber-200 bg-amber-50/50 text-amber-800",
    marqueeClassName: "[--duration:33s]",
    reverse: true,
  },
  {
    keywords: ["GitHub Copilot", "Cursor", "Vibe Coding", "SDD", "AI 工作流設計", "Tool Call", "Context Window", "向量資料庫", "System Prompt", "多模態"],
    badgeClassName: "border-orange-200 bg-orange-50/50 text-orange-800",
    marqueeClassName: "[--duration:35s]",
  },
  {
    keywords: ["AWS Lambda", "Docker", "GitHub Actions", "Kubernetes", "ECR", "CloudFront", "S3", "Firebase", "VPS", "Neon PostgreSQL"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:34s]",
    reverse: true,
  },
  {
    keywords: ["TailwindCSS", "Framer Motion", "Drizzle ORM", "MongoDB", "Redis", "PostgreSQL", "Mongoose", "ECharts", "Chart.js", "D3.js"],
    badgeClassName: "border-violet-200 bg-violet-50/50 text-violet-800",
    marqueeClassName: "[--duration:32s]",
  },
  {
    keywords: ["Rush Monorepo", "pnpm", "Webpack", "Vite", "Jest", "Cypress", "Storybook", "ESLint", "Lighthouse", "Renovate"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:36s]",
    reverse: true,
  },
  {
    keywords: ["Web Worker", "Comlink", "Service Worker", "IndexedDB", "StencilJS", "Web Component", "Shadow DOM", "PWA", "Socket.io", "Web Socket"],
    badgeClassName: "border-rose-200 bg-rose-50/50 text-rose-800",
    marqueeClassName: "[--duration:31s]",
  },
  {
    keywords: ["Arco Design", "React Hook Form", "Yup", "Axios", "i18n", "Lodash", "MobX", "Vuex", "Bootstrap", "CSS Modules"],
    badgeClassName: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    marqueeClassName: "[--duration:37s]",
    reverse: true,
  },
  {
    keywords: ["HTML", "CSS", "JavaScript", "Sass", "Less", "BEM", "CSS variable", "Media query", "jQuery", "Quill"],
    badgeClassName: "border-teal-200 bg-teal-50/50 text-teal-800",
    marqueeClassName: "[--duration:29s]",
  },
];

const stats: StatItem[] = [
  { label: "年全端 / 前端經驗", value: 7 },
  { label: "總專案數量", value: 18 },
  { label: "帶領團隊成員", value: 4 },
  { label: "流利語言數", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "東吳大學", degree: "日本語文學系 學士", period: "2013 - 2017" },
  { institution: "同志社大學（京都）", degree: "交換留學 — 日語語言與文化", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "日語能力測驗 JLPT N1", description: "最高級 — 商務對話等級", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "台大推廣教育部課程", description: "網頁開發技術課程結業" },
];

const languages: LanguageItem[] = [
  { name: "中文 — 母語", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "日語 — 商務等級（JLPT N1）", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "英語 — 專業工作", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function OpenAIResumeZhTW() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="zh-TW" locales={[
        { locale: "en", label: "EN", href: "/019ea20d-3a40-7369-b191-ce513c733867/en" },
        { locale: "zh-TW", label: "中文", href: "/019ea20d-3a40-7369-b191-ce513c733867/zh-TW" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="Forward Deployed Engineer"
        description={`7 年全端工程經驗，擁有將複雜系統推向生產的實績 — 從 TikTok Singapore 的百萬行企業 Monorepo，到以 48 小時 Vibe Coding 方式獨立交付 AI 產品。\n\n我具備直接的新創獨立交付經驗：在 AI.Book 與 FundFluent 擔任獨立承包商期間，我深入嵌入創辦人團隊，主持需求探索、制定技術規格、做所有架構決策，並獨立完成產品交付 — 這與 FDE 的核心工作模式完全一致：理解客戶需求、規劃範圍、建置系統、推動落地。AI.Book 的相片書編輯器在 6 個月內從零到上線；FundFluent 則獨立設計並交付三個分開的產品（UI Kit、SME Portal、Partner Portal），全程與 CTO 直接溝通。\n\n我具備深度 LLM 整合實戰經驗：以 OpenAI API、Claude API、Gemini API 建置生產系統，包含 RAG 向量資料庫架構、多模態 Agent、Tool Call 驅動的記憶召回，以及結構化提示詞工程。AI Persona Chatbot 與 Lazy CV 皆為已上線、有真實用戶的系統。\n\n我擁有三語溝通能力（中、英、日語 JLPT N1），能有效對接 APAC 跨境企業客戶。我擅長在模糊、快節奏的環境中獨立作業 — 曾同時承擔技術架構設計、排程規劃、交付執行與利害關係人溝通。\n\n在 OpenAI，我將協助 APAC 企業客戶從 PoC 快速推進至生產，貢獻來自第一線的模型優化洞察，並將部署模式沉澱為可複用的工具與 Playbook。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — 跨境 AI 產品交付"
      />

      <WorkExperience title="工作經歷" experiences={experiences} />

      <ProjectsGrid
        title="專案作品"
        description={`${projects.length} 個代表性專案，展示 LLM 整合、全端交付與客戶端影響力。`}
        projects={projects}
        highlightsLabel="技術亮點"
        contributionsLabel="主要貢獻"
      />

      <TechStackVisualization title="技術棧可視化" description="核心技術與其相互關聯。">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <AIBeam locale="zh-TW" />
        <FrontendJSBeam locale="zh-TW" />
        <CSSBeam locale="zh-TW" />
        <PWABeam locale="zh-TW" />
        <WebComponentBeam locale="zh-TW" />
        <BackendBeam locale="zh-TW" />
      </TechStackVisualization>

      <SkillKeywords title="技能關鍵字" rows={skillKeywordRows} />

      <EducationCerts
        sectionTitle="學歷與證書"
        educationLabel="學歷"
        educationHeaders={{ institution: "學校 / 機構", degree: "學位 / 課程", period: "期間" }}
        educations={educations}
        certLabel="證書"
        certifications={certifications}
        languageLabel="語言能力"
        languages={languages}
      />
    </ResumeLayout>
  );
}
