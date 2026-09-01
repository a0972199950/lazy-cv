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
	title: "John Hsieh | UI Full Stack Engineer — Apple",
	description:
		"7 年前端與平台開發經驗，專長 React、TypeScript、API 整合與跨團隊協作交付。應徵 Apple UI Full Stack Engineer。",
	openGraph: { images: ["/avatar.jpg"] },
};

const contacts: ContactItem[] = [
	{ href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
	{ href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
	{ href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
	{ href: "https://lazy-cv.com/019eea81-0875-7525-a980-affd9ff5f560/zh-TW", type: "website", label: "個人網站" },
];

const experiences: Experience[] = [
	{
		company: "TikTok Singapore",
		role: "Software Engineer",
		period: "2024.11 - 至今",
		logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
		highlights: [
			"在管理 **50+ 子專案**、**百萬級**程式碼規模的 React + TypeScript Monorepo 中交付廣告投放結算系統的 UI 與資料流模組",
			"導入 Web Worker + Comlink 多線程 CSV 校驗，將大型檔案造成的 **UI 卡頓降低 90%**",
			"**主導**團隊導入 Scrum，以 refinement 打破工作孤島並消除忙閒不均的排程落差",
		],
	},
	{
		company: "LINE Taiwan",
		role: "Software Engineer",
		period: "2021.08 - 2024.10",
		logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
		highlights: [
			"維護 LINE 購物的 Vue SSR 前端倉庫與整合**數十個**後端微服務的 BFF（Node.js + GraphQL + TypeScript），於 **60 人團隊**中每行程式碼皆需 review 才可合併",
			"**帶領 4 人團隊**將 PHP CMS 重構為 Next.js App Router，達成**前後端完全分離**並降低後端團隊負擔",
			"擔任 mentor **帶領 2 位**新進工程師並主持內部 Next.js 教學論壇，兩位皆給予正向回饋",
		],
	},
	{
		company: "AI.Book",
		role: "前端工程師（契約合作）",
		period: "2021.09 - 2024.10",
		logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
		highlights: [
			"**獨立開發**線上相簿編輯器核心，**6 個月內從零打造**並推上正式環境",
			"**主導**後端 API 設計，涵蓋 AWS Cognito OAuth2 登入、購物車與訂單流程及金流結果串接",
			"以前端消費端視角定義 API 合約、資料模型與錯誤處理，並與後端協作落地",
		],
	},
	{
		company: "FundFluent",
		role: "前端工程師（契約合作）",
		period: "2021.01 - 2021.09",
		logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
		highlights: [
			"以 React + TypeScript **獨立建置** UI Kit、SME Portal 與 Partner Portal **三套前端系統**",
			"建立可重用元件模式，讓多個金融產品維持一致的設計與互動規範",
		],
	},
	{
		company: "FoxitSoftware",
		role: "全端工程師",
		period: "2020.12 - 2021.08",
		logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
		highlights: [],
	},
	{
		company: "電獺股份有限公司",
		role: "前端工程師",
		period: "2019.08 - 2020.11",
		logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
		highlights: [],
	},
	{
		company: "日商優橋",
		role: "數位廣告優化師 & 前端工程師",
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
	experiences.map((e) => [e.company, e.logo]),
);

const projects: Project[] = [
	{
		name: "LINE 購物",
		company: "LINE Taiwan",
		summary:
			"高流量電商導購平台，提供回饋機制與內容導向購物體驗，前端團隊 60 人。",
		stack: ["Vue 2", "Vue SSR (vue-server-renderer)", "TypeScript", "Node.js", "Express", "GraphQL (Apollo Server Express)", "DataLoader", "Jest", "Storybook", "Lighthouse CI"],
		image: [
			"https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall.png",
			"https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
		],
		url: "https://buy.line.me",
		contributions: [
			"**獨立打造**直播影片自動播放模組，以 IntersectionObserver、Vuex 與 HLS.js 實現捲動列表的流暢預覽體驗",
		],
	},
	{
		name: "AI.Book 線上相片書編輯器",
		company: "AI.Book",
		summary:
			"線上相片書編輯平台，使用者可於網頁直接排版個人化相簿並印製成實體書販售。",
		stack: ["TypeScript", "Vue 2", "Nuxt 2 (SPA)", "Vuex", "TailwindCSS", "vuedraggable", "cropperjs", "AWS Cognito OAuth2", "GitHub Actions", "Swagger/OpenAPI"],
		image: [
			"https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
			"https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
		],
		highlights: [
			"以**單兵模式**完成技術選型、前端架構到編輯器核心的端到端交付，**6 個月內上線**",
			"整合 vuedraggable、cropperjs 與 flipbook-vue 打造跨裝置拖曳排版體驗",
		],
	},
	{
		name: "FundFluent SME Portal",
		company: "FundFluent",
		summary:
			"面向香港中小企業的整合貸款平台，彙整銀行與政府各式貸款資訊，並以 OCR 協助歸類申請文件。",
		stack: ["TypeScript", "React 17", "Next.js 12", "React Context", "useReducer", "TailwindCSS", "React Hook Form", "Yup", "next-i18next", "Docker", "GCP Artifact Registry", "GKE"],
		image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
		url: "https://app.fundfluent.io",
		highlights: [
			"整合銀行與政府貸款資訊，讓中小企業於單一介面完成多筆貸款申請",
			"串接 OCR 文件歸類流程，消除申請多筆貸款時的重複提交成本",
		],
		contributions: [
			"以 React 17 + Next.js 12 + TypeScript **從 0 單獨開發**，架構與技術選型皆由個人決定",
		],
	},
	{
		name: "TWSG 視頻加速 for Bilibili",
		summary:
			"讓台灣／新加坡使用者觀看網頁版 Bilibili 更順暢的瀏覽器擴充套件，動態重排取流 CDN 節點並自動容錯。同一份原始碼支援 Chrome / Edge / Firefox 三平台與三語系，從架構、開發到上架維護皆個人獨立完成。",
		stack: ["Chrome Extension Manifest V3", "Vanilla JavaScript (ES6+)", "chrome.storage", "chrome.i18n", "Content Scripts (MAIN world / ISOLATED world)", "fetch / XMLHttpRequest hook", "Node.js", "JSZip", "Puppeteer", "Sharp"],
		image: [
			"https://cdn.lazy-cv.com/promo-cover-1280x800.png",
			"https://cdn.lazy-cv.com/screenshot-speedtest-en-1280x800.jpg",
			"https://cdn.lazy-cv.com/10-days-report.png",
			"https://cdn.lazy-cv.com/5-starts.png",
		],
		url: "https://chromewebstore.google.com/detail/dfaddcffoondcendifiljhdbdagebgch",
		highlights: [
			"以 MAIN world 注入 hook fetch/XHR 與 playinfo setter，即時改寫 DASH manifest 的 CDN host 且不影響頁面原生行為",
			"設計自動容錯機制，監控分段請求狀態與播放進度，**卡頓 8 秒內**靜默切換至原生備援節點",
			"歸納 Bilibili 論壇與社群的使用者反饋，排定修復優先順序並驅動功能迭代方向",
		],
		contributions: [
			"上架僅 **10 天**內週活躍使用者（WAU）即突破 **1,000**，自然流量 **2,000**、轉換率 **50%**、留存率近 **100%**，並在 **1,000** 名使用者中獲得 **14** 筆五星好評、零負評，全數為自然流量",
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
	{
		keywords: ["Redux", "React Query"],
		badgeClassName: "border-sky-200 bg-sky-50/50 text-sky-800",
		marqueeClassName: "[--duration:33s]",
		reverse: true,
	},
	{
		keywords: ["Apollo Client", "Apollo Server", "DataLoader", "Zod", "Neon PostgreSQL", "GCP", "Azure", "gRPC"],
		badgeClassName: "border-lime-200 bg-lime-50/50 text-lime-800",
		marqueeClassName: "[--duration:34s]",
	},
	{
		keywords: ["Playwright", "TestCafe", "Karma", "Jasmine", "Testing Library", "Drone CI", "SonarQube", "Bitbucket Pipelines", "Azure Pipelines", "PM2"],
		badgeClassName: "border-pink-200 bg-pink-50/50 text-pink-800",
		marqueeClassName: "[--duration:39s]",
		reverse: true,
	},
	{
		keywords: ["Husky", "lint-staged", "Stylelint", "Sentry", "Radix UI", "shadcn", "daisyUI", "Fomantic UI", "PostCSS", "Stylus"],
		badgeClassName: "border-blue-200 bg-blue-50/50 text-blue-800",
		marqueeClassName: "[--duration:35s]",
	},
	{
		keywords: ["Gulp", "Lit-html", "OAuth2", "JWT", "AWS Cognito", "bcryptjs", "Google Charts", "Handsontable", "GitHub"],
		badgeClassName: "border-stone-200 bg-stone-50/50 text-stone-800",
		marqueeClassName: "[--duration:31s]",
		reverse: true,
	},
];

const stats: StatItem[] = [
	{ label: "年前端經驗", value: 7 },
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

export default function AppleResumeZhTW() {
	return (
		<ResumeLayout>
			<LanguageToggle currentLocale="zh-TW" locales={[
				{ locale: "en", label: "EN", href: "/019eea81-0875-7525-a980-affd9ff5f560/en" },
				{ locale: "zh-TW", label: "中文", href: "/019eea81-0875-7525-a980-affd9ff5f560/zh-TW" },
			]} />

			<HeroProfile
				name="John Hsieh"
				avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
				avatarFallback="JH"
				jobTitle={"資深軟體工程師 - TikTok\n應徵 UI Full Stack Engineer - Apple"}
				description={`**7 年**前端開發經驗，於 TikTok 與 LINE 交付企業級正式系統。AI.Book 與 FundFluent 兩份契約案為**完全獨立開發**：AI.Book 的線上相片書編輯器 **6 個月內從零打造上線**，FundFluent 的 UI Kit、SME Portal 與 Partner Portal **三套系統亦由個人單獨完成**；技術選型與架構皆自行決定，僅於里程碑節點對齊，而非逐步審核。

API 設計與服務於 UI 的後端端點同屬自身守備範圍：在 LINE 購物同時維護 Vue SSR 前端倉庫與整合**數十個**後端微服務的 BFF（Node.js + GraphQL + TypeScript），在 AI.Book 則**主導** RESTful API 設計，涵蓋 AWS Cognito OAuth2 登入與購物車訂單流程。核心技術棧為 React、TypeScript、Next.js 與 GraphQL。`}
				location="Singapore"
				stats={stats}
				contacts={contacts}
				globeCaption="應徵 Apple UI Full Stack Engineer"
			/>

			<WorkExperience title="工作經歷" experiences={experiences} />

			<ProjectsGrid
				title="專案介紹"
				description={`${projects.length} 個對齊 Apple ETS 職缺需求的代表專案，涵蓋 React、TypeScript、API 整合、效能與可維護交付。`}
				projects={projects}
				highlightsLabel="技術亮點"
				contributionsLabel="主要貢獻"
				personalProjectsLabel="個人專案"
				companyProjectsLabel="公司專案"
				companyLogos={companyLogos}
			/>

			<TechStackVisualization title="技術棧可視化" description="前端、平台與 AI 輔助工程能力圖譜。">
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
