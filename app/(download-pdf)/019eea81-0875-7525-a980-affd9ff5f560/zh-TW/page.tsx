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
];

const experiences: Experience[] = [
	{
		company: "TikTok Singapore",
		role: "Software Engineer",
		period: "2024.11 - 至今",
		logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
		highlights: [
			"在大型 React + TypeScript Monorepo 中負責高影響力 UI 與流程模組，支援成長與結算場景。",
			"面對高不確定性需求可獨立交付，並與 PM、設計、營運等角色密切協作。",
			"透過 Scrum 改善與需求拆解流程，提升跨團隊執行穩定度與交付品質。",
		],
	},
	{
		company: "LINE Taiwan",
		role: "Software Engineer",
		period: "2021.08 - 2024.10",
		logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
		highlights: [
			"以 Vue SSR + GraphQL + TypeScript + ExpressJS 開發 LINE 購物正式環境功能。",
			"帶領 4 人團隊將 CMS 從 PHP 遷移至 NextJS App Router，採分階段上線策略。",
			"擔任 mentor 並參與公司前端規範制定，導入 Lighthouse CI 強化品質。",
		],
	},
	{
		company: "AI.Book",
		role: "前端工程師（契約合作）",
		period: "2021.09 - 2024.10",
		logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
		highlights: [
			"獨立完成線上相簿編輯器從架構到上線的端到端交付。",
			"打造可維護的拖曳與文字編輯互動，並兼顧跨裝置體驗。",
			"支援 PWA 與長期迭代，確保產品穩定可演進。",
		],
	},
	{
		company: "FundFluent",
		role: "前端工程師（契約合作）",
		period: "2021.01 - 2021.09",
		logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
		highlights: [
			"在新創早期即主導前端架構選型並獨立推進核心功能交付。",
			"使用 React + TypeScript 建置貸款與夥伴流程介面。",
			"設計可重用元件模式，降低跨產品重工成本。",
		],
	},
	{
		company: "FoxitSoftware",
		role: "全端工程師",
		period: "2020.12 - 2021.08",
		logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
		highlights: [
			"於 AI 新團隊開發 B2B 平台，負責前後端整合與產品能力落地。",
			"實作 API 與 UI 串接，將多個內部服務整合成可操作的管理介面。",
		],
	},
];

const projects: Project[] = [
	{
		name: "UG 海外增長業務平台（TikTok）",
		summary:
			"大型企業 Monorepo 平台，支援海外增長業務中的採購、結算與資料流程，涵蓋 50+ 子專案。",
		stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker"],
		image: [
			"https://cdn.lazy-cv.com/OA.png",
			"https://cdn.lazy-cv.com/web-worker.png",
			"https://cdn.lazy-cv.com/pp-performance.png",
		],
		highlights: [
			"在高度模糊業務情境下設計配置驅動 UI 與可維護資料流。",
			"強化前端架構效能與穩定性，支援大規模持續交付。",
			"跨團隊溝通技術取捨，讓產品決策可落地且可擴展。",
		],
		contributions: [
			"導入 Web Worker + Comlink CSV 驗證流程，UI 卡頓下降 90%。",
			"建立渲染快取工具，重表單頁面 TBT 下降 98%。",
		],
	},
	{
		name: "LINE 購物",
		summary:
			"高流量電商導購平台，提供回饋機制與內容導向購物體驗。",
		stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
		image: [
			"https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall.png",
			"https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
		],
		url: "https://buy.line.me",
		contributions: [
			"獨立開發可重用直播預覽排程機制，解決高速捲動與記憶體壓力問題。",
		],
	},
	{
		name: "CMS 遷移至 NextJS",
		summary:
			"主導 PHP CMS 遷移至 React + NextJS App Router，採漸進式路由切換策略。",
		stack: ["React", "NextJS", "App Router", "TypeScript", "iframe 微服務"],
		image: [
			"https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
			"https://cdn.lazy-cv.com/cms-graph.png",
		],
		highlights: [
			"負責架構與交付規劃，管理多角色協作節點。",
			"在維持服務穩定前提下完成新舊系統切換。",
		],
	},
	{
		name: "Lazy CV",
		summary:
			"AI 驅動履歷生成系統，將職缺內容自動轉為客製化中英文履歷頁。",
		stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Claude API"],
		image: [
			"https://cdn.lazy-cv.com/lazy-cv-main.png",
			"https://cdn.lazy-cv.com/lazy-cv-main-2.png",
			"https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
		],
		url: "https://lazy-cv.com",
		highlights: [
			"自動化需求擷取與頁面生成流程，縮短交付時間。",
			"結合型別安全與結構化流程，提升輸出穩定性。",
		],
	},
	{
		name: "AI.Book 相簿編輯器",
		summary:
			"支援拖曳與跨裝置編輯的線上相簿製作工具。",
		stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
		image: [
			"https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
			"https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
		],
		highlights: [
			"以單兵模式完成從架構設計到產品上線。",
			"建立可持續迭代的 UI 基礎與互動能力。",
		],
	},
	{
		name: "FundFluent UI Kit Library",
		summary:
			"以 Web Components 建立跨專案共享元件平台，提升多產品交付效率。",
		stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
		image: [
			"https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
			"https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
		],
		highlights: [
			"建立共享設計與開發標準，減少重複開發。",
			"以文件化與可復用元件提升協作速度與一致性。",
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
				jobTitle="UI Full Stack Engineer"
				description={`我是一名 UI Full Stack Engineer，擁有 7 年軟體開發經驗，曾在 TikTok 與 LINE 等企業級組織負責大規模正式系統，也以單兵模式完整交付過多個契約產品。我熟練使用 React、TypeScript、Next.js、GraphQL 與 Node.js，具備從設計交接到正式上線的端到端 ownership 能力。

Mentor 經歷是我最看重的工程師身份之一。在 LINE 擔任 Team Leader 期間，我正式 mentor 了兩位新進工程師，雙方都給予我正向回饋；同時我主導了公司內部 Next.js 教學論壇，幫助多位成員快速上手新架構。在帶領 CMS 重構團隊時，我不只寫程式，更負責系統架構設計、里程碑規劃、技術取捨說明，以及與非技術夥伴的溝通——這正是 Apple JD 中「mentor early-career engineers」與「communicate technical tradeoffs to non-technical stakeholders」的直接體現。

全端能力方面，我設計並使用過 RESTful 與 GraphQL API，維護過服務於 UI 的 Express 後端端點，能跨越前後端邊界完整承擔需求。在 TikTok 的大型 Monorepo 中，我透過 Web Worker 卸載讓 UI 卡頓降低 90%，並用渲染快取工具讓 500 個表單頁面的 TBT 下降 98%——這是大規模系統中精準定位問題根源的實際案例。

我可以為 Apple ETS 貢獻的是：在複雜、高模糊度的業務場景中可靠交付無障礙且可維護的 UI 功能、以清晰的溝通橋接工程與夥伴端、並持續帶動身邊工程師成長——因為打造好軟體與打造好團隊，對我來說是同一件事。`}
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
