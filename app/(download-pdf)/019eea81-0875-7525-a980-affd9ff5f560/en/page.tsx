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
		"UI Full Stack Engineer candidate with 7 years of frontend and platform engineering experience across TikTok and LINE. Strong in React, TypeScript, API design, and cross-functional delivery.",
	openGraph: { images: ["/avatar.jpg"] },
};

const contacts: ContactItem[] = [
	{ href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
	{ href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
	{ href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
	{ href: "https://lazy-cv.com/019eea81-0875-7525-a980-affd9ff5f560/en", type: "website", label: "Personal Website" },
];

const experiences: Experience[] = [
	{
		company: "TikTok Singapore",
		role: "Software Engineer",
		period: "2024.11 - Present",
		logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
		highlights: [
			"Deliver UI and data-flow modules for the ad settlement system inside a React + TypeScript monorepo spanning 50+ sub-projects and a million-line codebase",
			"Introduced multi-threaded CSV validation with Web Worker and Comlink, cutting UI blocking time by 90% on large files",
			"Drove Scrum adoption across the team, using refinement to break siloed work and remove uneven workload cycles",
		],
	},
	{
		company: "LINE Taiwan",
		role: "Software Engineer",
		period: "2021.08 - 2024.10",
		logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
		highlights: [
			"Maintained both the Vue SSR frontend repo and the BFF (Node.js + GraphQL + TypeScript) fronting dozens of backend microservices, across a 60-engineer team where every line required review before merge",
			"Led 4 engineers refactoring a PHP CMS into Next.js App Router, reaching full frontend-backend separation and cutting backend team load",
			"Mentored 2 new engineers and ran an internal Next.js teaching forum, with positive feedback from both mentees",
		],
	},
	{
		company: "AI.Book",
		role: "Frontend Engineer (Contract)",
		period: "2021.09 - 2024.10",
		logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
		highlights: [
			"Built the core online photo-book editor solo, taking it from zero to production within 6 months",
			"Owned backend API design spanning AWS Cognito OAuth2 sign-in, cart and order flow, and payment result integration",
			"Defined API contracts, data models and error handling from the frontend consumer perspective, then drove them to production with the backend team",
		],
	},
	{
		company: "FundFluent",
		role: "Frontend Engineer (Contract)",
		period: "2021.01 - 2021.09",
		logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
		highlights: [
			"Built 3 frontend systems independently with React and TypeScript: UI Kit, SME Portal and Partner Portal",
			"Created reusable component patterns keeping design and interaction consistent across multiple financial products",
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
		company: "Aotter Inc.",
		role: "Frontend Engineer",
		period: "2019.08 - 2020.11",
		logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
		highlights: [],
	},
	{
		company: "Asian Bridge Inc.",
		role: "Digital Ad Personnel & Frontend Developer",
		period: "2017.12 - 2019.03",
		logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
		highlights: [],
	},
	{
		company: "AsiaYo Inc.",
		role: "Japanese Sales and Operation",
		period: "2016.09 - 2017.09",
		logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
		highlights: [],
	},
];

const projects: Project[] = [
	{
		name: "LINE Shopping",
		summary:
			"High-traffic e-commerce affiliate platform offering cashback and content-driven shopping, built by a 60-engineer frontend org.",
		stack: ["Vue 2", "Vue SSR (vue-server-renderer)", "TypeScript", "Node.js", "Express", "GraphQL (Apollo Server Express)", "DataLoader", "Jest", "Storybook", "Lighthouse CI"],
		image: [
			"https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall.png",
			"https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
		],
		url: "https://buy.line.me",
		contributions: [
			"Built the live-shopping video autoplay module independently with IntersectionObserver, Vuex and HLS.js, delivering smooth scroll-list preview",
		],
	},
	{
		name: "AI.Book Online Photo-Book Editor",
		summary:
			"Online photo-book platform where users lay out personalized albums in the browser and print them as physical keepsake books.",
		stack: ["TypeScript", "Vue 2", "Nuxt 2 (SPA)", "Vuex", "TailwindCSS", "vuedraggable", "cropperjs", "AWS Cognito OAuth2", "GitHub Actions", "Swagger/OpenAPI"],
		image: [
			"https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
			"https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
		],
		highlights: [
			"Delivered tech selection, frontend architecture and the editor core end to end as a solo engineer, launching within 6 months",
			"Integrated vuedraggable, cropperjs and flipbook-vue into a cross-device drag-and-drop layout experience",
		],
	},
	{
		name: "FundFluent SME Portal",
		summary:
			"Integrated lending platform for Hong Kong SMEs, aggregating bank and government loan programs with OCR-assisted document classification.",
		stack: ["TypeScript", "React 17", "Next.js 12", "React Context", "useReducer", "TailwindCSS", "React Hook Form", "Yup", "next-i18next", "Docker", "GCP Artifact Registry", "GKE"],
		image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
		url: "https://app.fundfluent.io",
		highlights: [
			"Aggregated bank and government loan programs so SMEs apply for multiple loans through a single interface",
			"Wired in an OCR document-classification flow, removing repeated paperwork submission across multiple loan applications",
		],
		contributions: [
			"Built from zero single-handed on React 17 + Next.js 12 + TypeScript, owning architecture and tech selection outright",
		],
	},
	{
		name: "TWSG Video Accelerator for Bilibili",
		summary:
			"Browser extension making web Bilibili smoother for Taiwan and Singapore viewers by rerouting the streaming CDN host with automatic failover. One codebase ships to Chrome, Edge and Firefox in 3 locales, designed, built, published and maintained entirely solo.",
		stack: ["Chrome Extension Manifest V3", "Vanilla JavaScript (ES6+)", "chrome.storage", "chrome.i18n", "Content Scripts (MAIN world / ISOLATED world)", "fetch / XMLHttpRequest hook", "Node.js", "JSZip", "Puppeteer", "Sharp"],
		image: [
			"https://cdn.lazy-cv.com/promo-cover-1280x800.png",
			"https://cdn.lazy-cv.com/screenshot-speedtest-en-1280x800.jpg",
			"https://cdn.lazy-cv.com/10-days-report.png",
			"https://cdn.lazy-cv.com/5-starts.png",
		],
		url: "https://chromewebstore.google.com/detail/dfaddcffoondcendifiljhdbdagebgch",
		highlights: [
			"Injected a MAIN-world script hooking fetch/XHR and the playinfo setter to rewrite the DASH manifest CDN host live without disturbing native page behavior",
			"Designed automatic failover monitoring segment request status and playback progress, silently switching to the native backup node after an 8-second stall",
			"Synthesized user feedback across Bilibili forums and communities to prioritize fixes and drive the feature roadmap",
		],
		contributions: [
			"2,000 views and 1,000 installs within 10 days of launch, a 50% conversion rate",
			"Weekly active users passed 1,000 within 10 days of launch, retention near 100%",
			"14 five-star reviews with zero negative reviews among 1,000 users, all from organic traffic",
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
	{ label: "Years Frontend Exp.", value: 7 },
	{ label: "Products Shipped", value: 19 },
	{ label: "Team Members Led", value: 4 },
	{ label: "Languages Spoken", value: 3 },
];

const educations: EducationItem[] = [
	{ institution: "Soochow University", degree: "Bachelor of Arts — Japanese Language & Literature", period: "2013 - 2017" },
	{ institution: "Doshisha University, Kyoto", degree: "Exchange Program — Japanese Language & Culture", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
	{ name: "JLPT N1 (Japanese)", description: "Highest level — Business conversation proficiency", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
	{ name: "NTU Extension Program", description: "Web Development Technology Course" },
];

const languages: LanguageItem[] = [
	{ name: "Mandarin Chinese — Native", badgeClassName: "bg-cyan-100 text-cyan-800" },
	{ name: "Japanese — Business (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
	{ name: "English — Professional Working", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

export default function AppleResumeEN() {
	return (
		<ResumeLayout>
			<LanguageToggle currentLocale="en" locales={[
				{ locale: "en", label: "EN", href: "/019eea81-0875-7525-a980-affd9ff5f560/en" },
				{ locale: "zh-TW", label: "中文", href: "/019eea81-0875-7525-a980-affd9ff5f560/zh-TW" },
			]} />

			<HeroProfile
				name="John Hsieh"
				avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
				avatarFallback="JH"
				jobTitle={"Senior Software Engineer - TikTok\nApply for UI Full Stack Engineer - Apple"}
				description={`7 years of frontend engineering, shipping production systems at TikTok and LINE. AI.Book and FundFluent were both built entirely solo: the AI.Book photo-book editor went zero to launch in 6 months, and FundFluent UI Kit, SME Portal and Partner Portal were each delivered single-handed - architecture and tech selection owned outright, aligned at milestones, not reviewed step by step.

API design and the backend endpoints serving the UI sit in that same scope: at LINE Shopping, maintained the Vue SSR frontend repo alongside the BFF (Node.js + GraphQL + TypeScript) fronting dozens of backend microservices; at AI.Book, owned RESTful API design for AWS Cognito OAuth2 sign-in, cart and order flow. Core stack is React, TypeScript, Next.js and GraphQL.`}
				location="Singapore"
				stats={stats}
				contacts={contacts}
				globeCaption="Applying for UI Full Stack Engineer at Apple"
			/>

			<WorkExperience title="Work Experience" experiences={experiences} />

			<ProjectsGrid
				title="Projects"
				description={`${projects.length} selected projects aligned with Apple ETS requirements in React, TypeScript, API integration, performance, and scalable delivery.`}
				projects={projects}
				highlightsLabel="Technical Highlights"
				contributionsLabel="Key Contributions"
			/>

			<TechStackVisualization title="Tech Stack Visualization" description="Core frontend, platform, and AI-augmented engineering capabilities.">
				<div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
					<SkillCloud />
				</div>
				<AIBeam locale="en" />
				<FrontendJSBeam locale="en" />
				<CSSBeam locale="en" />
				<PWABeam locale="en" />
				<WebComponentBeam locale="en" />
				<BackendBeam locale="en" />
			</TechStackVisualization>

			<SkillKeywords title="Skill Keywords" rows={skillKeywordRows} />

			<EducationCerts
				sectionTitle="Education & Certifications"
				educationLabel="Education"
				educationHeaders={{ institution: "Institution", degree: "Degree / Program", period: "Period" }}
				educations={educations}
				certLabel="Certifications"
				certifications={certifications}
				languageLabel="Languages"
				languages={languages}
			/>
		</ResumeLayout>
	);
}
