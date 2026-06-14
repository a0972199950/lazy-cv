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
	title: "John Hsieh | Software Engineer — Sticker Mule",
	description:
		"7 年軟體開發經驗，專長 TypeScript、React、GraphQL 與 AI 輔助開發流程，具備電商與平台產品實戰經驗。應徵 Sticker Mule Software Engineer。",
	openGraph: { images: ["/avatar.jpg"] },
};

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
			"隸屬 User Growth 團隊，負責高流量成長與廣告投放相關系統，包含財務結算流程。",
			"在 React + TypeScript Monorepo 架構下開發與維護關鍵產品模組，持續提升交付效率與穩定度。",
			"推動 Scrum 優化與跨職能協作，提升需求拆解品質與專案可預期性。",
		],
	},
	{
		company: "LINE Taiwan",
		role: "Software Engineer",
		period: "2021.08 - 2024.10",
		logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
		highlights: [
			"以 Vue SSR、GraphQL、TypeScript 開發 LINE Shopping 電商產品。",
			"帶領 4 人團隊將 CMS 由 PHP 遷移到 NextJS App Router，採分階段上線策略降低風險。",
			"參與公司前端標準制定，導入 Lighthouse CI 並提升效能品質可視化。",
			"擔任 mentor 並負責新人技術導入與內部分享。",
		],
	},
	{
		company: "AI.Book",
		role: "前端工程師（契約合作）",
		period: "2021.09 - 2024.10",
		logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
		highlights: [
			"以單兵模式從零到一完成線上相片書編輯器並成功上線。",
			"直接與創辦人協作，獨立承擔架構、開發與交付節奏。",
			"實作跨裝置編輯體驗與 PWA 能力，提升行動端可用性。",
		],
	},
	{
		company: "FundFluent",
		role: "前端工程師（契約合作）",
		period: "2021.01 - 2021.09",
		logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
		highlights: [
			"新創早期加入，獨立規劃與開發多個核心產品。",
			"以 React + TypeScript 建置貸款申請與審核流程平台，強調可擴展與一致體驗。",
			"規劃共享元件策略，降低多產品開發成本。",
		],
	},
	{
		company: "FoxitSoftware",
		role: "全端工程師",
		period: "2020.12 - 2021.08",
		logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
		highlights: [
			"開發整合內部服務的 B2B 平台，橫跨前後端實作與系統整合。",
			"於新成立團隊中同時負責技術實作與小型團隊協作管理。",
		],
	},
];

const projects: Project[] = [
	{
		name: "AI Persona Chatbot",
		summary:
			"以 LINE 為入口的 AI 擬人對話機器人，支援上下文記憶、多模態理解與 RAG 長期記憶。",
		stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding", "RAG"],
		image: [
			"https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
			"https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
		],
		highlights: [
			"設計可控的 Prompt + Tool Call 架構，維持人格一致與對話品質。",
			"實作向量檢索記憶機制，提供長期個人化互動能力。",
			"串接圖片與語音多模態流程，形成可上線使用的完整體驗。",
		],
	},
	{
		name: "Lazy CV",
		summary:
			"AI 驅動的履歷生成系統，可將職缺連結自動轉換為客製化中英文履歷頁面。",
		stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Claude API"],
		image: [
			"https://cdn.lazy-cv.com/lazy-cv-main.png",
			"https://cdn.lazy-cv.com/lazy-cv-main-2.png",
			"https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
		],
		url: "https://lazy-cv.com",
		highlights: [
			"整合瀏覽器自動化與結構化提示詞，完成 JD 解析與 TSX 頁面生成。",
			"建立可自我修正的生成流程，透過編譯與畫面回饋迭代輸出品質。",
			"2 天內由零到上線，驗證高效率 AI 輔助開發模式。",
		],
	},
	{
		name: "Foxit AI 微服務整合平台",
		summary:
			"於 Foxit 新成立的 AI 團隊中，建置對外提供 API 的 B2B 管理平台，整合團隊內部多個 AI 微服務。",
		stack: ["NextJS", "NuxtJS", "TypeScript", "Node.js", "MongoDB", "Redis"],
		image: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
		highlights: [
			"負責前後端整合與管理介面開發，讓多個 AI 能力可被統一管理與對外調用。",
			"在新團隊技術選型階段快速完成可運作版本，支援產品驗證與後續擴展。",
		],
	},
	{
		name: "UG Overseas Platform (TikTok)",
		summary:
			"支援 TikTok 海外增長業務的大型 Monorepo 平台，涵蓋採購、財務、報表等多域場景與 50+ 子專案。",
		stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker"],
		image: [
			"https://cdn.lazy-cv.com/OA.png",
			"https://cdn.lazy-cv.com/web-worker.png",
			"https://cdn.lazy-cv.com/pp-performance.png",
		],
		highlights: [
			"建置配置驅動的複雜表單系統，支援條件渲染與大量欄位聯動。",
			"處理金融情境下的高精度數值運算，避免浮點誤差。",
			"實作微前端模組載入與獨立部署，提升大型專案迭代效率。",
		],
		contributions: [
			"導入 Web Worker + Comlink CSV 驗證流程，UI 阻塞下降 90%。",
			"開發 cache/cacheMany 工具，500 表單渲染場景 TBT 下降 98%。",
		],
	},
	{
		name: "LINE Shopping",
		summary:
			"LINE 電商導購平台，提供商品探索、回饋機制與直播購物體驗。",
		stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
		image: [
			"https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall.png",
			"https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
		],
		url: "https://buy.line.me",
		contributions: [
			"獨立開發直播購物模組與影片預覽排程機制，解決高速捲動與多直播流效能問題。",
		],
	},
	{
		name: "CMS 遷移至 NextJS",
		summary:
			"主導 LINE Shopping CMS 從 PHP 遷移至 React + NextJS App Router，採漸進式遷移策略。",
		stack: ["React", "NextJS", "App Router", "TypeScript", "iframe 微服務"],
		image: [
			"https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
			"https://cdn.lazy-cv.com/cms-graph.png",
		],
		highlights: [
			"以 URL 分流實現新舊系統並存與逐步切換，降低遷移風險。",
		],
		contributions: [
			"同時承擔架構規劃、排程管理、跨團隊溝通與核心程式實作。",
		],
	},
	{
		name: "FundFluent SME Portal",
		summary:
			"面向中小企業的整合貸款平台，提供貸款資訊整合與申請流程數位化。",
		stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
		image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
		url: "https://app.fundfluent.io",
		contributions: [
			"在新創環境中以單兵模式從零建置並交付。",
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

export default function StickerMuleResumeZhTW() {
	return (
		<ResumeLayout>
			<LanguageToggle currentLocale="zh-TW" locales={[
				{ locale: "en", label: "EN", href: "/019ec4da-d518-77e0-ba6c-86029a67c851/en" },
				{ locale: "zh-TW", label: "中文", href: "/019ec4da-d518-77e0-ba6c-86029a67c851/zh-TW" },
			]} />

			<HeroProfile
				name="John Hsieh"
				avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
				avatarFallback="JH"
				jobTitle="Software Engineer"
				description={`我有 7 年前端為主、兼具全端協作的軟體開發經驗，熟悉大型平台與新創產品兩種節奏，現職於新加坡。

在 TikTok 與 LINE 期間，我長期參與高流量成長與電商產品，使用 TypeScript、React/Vue、GraphQL 與 Monorepo 架構交付可擴展且穩定的功能，並具備端到端 ownership 的實務經驗。

我也已將 AI 工具深度整合到日常工程流程，包含 agent workflow、prompt engineering 與 LLM 串接，這與 Sticker Mule 強調「aggressive AI usage」與高速度迭代的文化高度一致。

我可以為 Sticker Mule Pro 貢獻的是：以務實且高效的方式持續交付 web 與行動情境導向的產品功能，兼顧速度、可維護性與團隊協作效率。

選擇我的優勢在於：我同時具備大型系統經驗與新創單兵交付能力，能快速落地、清楚溝通，並在 remote 自主團隊中穩定產生可衡量的產品價值。`}
				location="Singapore"
				stats={stats}
				contacts={contacts}
				globeCaption="應徵 Sticker Mule Software Engineer"
			/>

			<WorkExperience title="工作經歷" experiences={experiences} />

			<ProjectsGrid
				title="專案介紹"
				description={`${projects.length} 個與電商平台、AI 工程與高速產品交付相關的代表專案。`}
				projects={projects}
				highlightsLabel="技術亮點"
				contributionsLabel="主要貢獻"
			/>

			<TechStackVisualization title="技術棧可視化" description="核心技術與周邊能力的連結關係圖。">
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
