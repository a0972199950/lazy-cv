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
		"Full-stack software engineer with 7 years of experience building high-impact commerce and platform products using TypeScript, React, GraphQL, and AI-assisted workflows. Applying for Software Engineer at Sticker Mule.",
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
		period: "2024.11 - Present",
		logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
		highlights: [
			"Part of the User Growth team responsible for large-scale growth systems and financial settlement workflows tied to ad delivery.",
			"Built and maintained critical React + TypeScript modules in a Monorepo architecture with strict quality standards and rapid iteration cycles.",
			"Led Scrum improvements across retrospectives and refinement, improving execution visibility and cross-functional delivery speed.",
		],
	},
	{
		company: "LINE Taiwan",
		role: "Software Engineer",
		period: "2021.08 - 2024.10",
		logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
		highlights: [
			"Shipped commerce features on LINE Shopping using Vue SSR, GraphQL, and TypeScript in a large production environment.",
			"Led a 4-person team to migrate CMS from PHP to NextJS App Router and delivered progressive rollout with minimal service disruption.",
			"Contributed to company-wide frontend standards through JavaScript Task Force, including Lighthouse CI adoption.",
			"Mentored 2 engineers and ran internal technical onboarding sessions.",
		],
	},
	{
		company: "AI.Book",
		role: "Frontend Engineer (Contract)",
		period: "2021.09 - 2024.10",
		logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
		highlights: [
			"Sole engineer delivering a production online photo-book editor from zero to launch within 6 months.",
			"Owned architecture, implementation, and release cadence while collaborating directly with the founder.",
			"Implemented responsive web + mobile editing experience with PWA capabilities.",
		],
	},
	{
		company: "FundFluent",
		role: "Frontend Engineer (Contract)",
		period: "2021.01 - 2021.09",
		logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
		highlights: [
			"Joined at startup stage and independently built key customer-facing and partner-facing products from scratch.",
			"Delivered scalable React + TypeScript platforms for loan and application workflows in the Hong Kong market.",
			"Designed reusable component architecture and shared UI standards across products.",
		],
	},
	{
		company: "FoxitSoftware",
		role: "Full-Stack Engineer",
		period: "2020.12 - 2021.08",
		logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
		highlights: [
			"Built B2B web products integrating multiple internal services using NuxtJS/NextJS + Node.js + MongoDB.",
			"Worked across frontend and backend while also leading a small frontend team in a fast-moving AI-focused product unit.",
		],
	},
];

const projects: Project[] = [
	{
		name: "AI Persona Chatbot",
		summary:
			"A LINE-based AI companion bot with context memory, multimodal understanding, and RAG-backed long-term memory.",
		stack: ["n8n", "Gemini API", "LINE Messaging API", "Docker", "VPS", "Embedding", "RAG"],
		image: [
			"https://cdn.lazy-cv.com/00bf8b7292f2f0e10ca191b8ff74f4f2e9826cbcea8725825561d653b5363253.png",
			"https://cdn.lazy-cv.com/1b07b662e7aa1ee44fe51102609d4151cc967f65f8aeaa9f89a4e8ec2ac0d592.png",
		],
		highlights: [
			"Designed structured prompt + tool-call architecture for stable persona and controllable behavior.",
			"Implemented session memory management with vector search retrieval for long-term personalization.",
			"Connected multimodal image/audio pipelines in production workflow.",
		],
	},
	{
		name: "Lazy CV",
		summary:
			"AI-driven resume generation system that converts a job URL into tailored bilingual resume pages through an end-to-end automated workflow.",
		stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Claude API"],
		image: [
			"https://cdn.lazy-cv.com/lazy-cv-main.png",
			"https://cdn.lazy-cv.com/lazy-cv-main-2.png",
			"https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
		],
		url: "https://lazy-cv.com",
		highlights: [
			"Uses browser automation + structured prompts to extract JD requirements and generate deployment-ready TSX pages.",
			"Implements iterative self-correction loop with compile feedback and visual checks.",
			"Delivered full product from zero to production in 2 days via AI-assisted development.",
		],
	},
	{
		name: "Foxit AI Microservice Integration Platform",
		summary:
			"Built a B2B management platform in Foxit's newly formed AI team to unify internal AI microservices and expose API-oriented capabilities.",
		stack: ["NextJS", "NuxtJS", "TypeScript", "Node.js", "MongoDB", "Redis"],
		image: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
		highlights: [
			"Owned frontend-backend integration surfaces to make multiple AI capabilities manageable through a single product console.",
			"Delivered production-ready iterations quickly during early-stage technical exploration.",
		],
	},
	{
		name: "UG Overseas Platform (TikTok)",
		summary:
			"Large-scale enterprise Monorepo platform supporting overseas growth operations, procurement, and financial workflows across 50+ sub-projects.",
		stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker"],
		image: [
			"https://cdn.lazy-cv.com/OA.png",
			"https://cdn.lazy-cv.com/web-worker.png",
			"https://cdn.lazy-cv.com/pp-performance.png",
		],
		highlights: [
			"Built complex schema-driven business forms with dynamic fields and conditional logic.",
			"Implemented high-precision financial calculations for settlement and pricing scenarios.",
			"Integrated micro-frontend modules with independent loading and deployment support.",
		],
		contributions: [
			"Built CSV validation with Web Worker + Comlink and reduced UI blocking by 90%.",
			"Created cache/cacheMany rendering utilities and reduced TBT by 98% on large-form pages.",
		],
	},
	{
		name: "LINE Shopping",
		summary:
			"LINE's commerce platform where users discover products and earn LINE points through partner merchants.",
		stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
		image: [
			"https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall.png",
			"https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
		],
		url: "https://buy.line.me",
		contributions: [
			"Independently implemented the Live Shopping feature with a reusable video auto-preview scheduler for high-scroll scenarios.",
		],
	},
	{
		name: "CMS Migration to NextJS",
		summary:
			"Led migration of LINE Shopping CMS from legacy PHP to React + NextJS App Router with phased rollout.",
		stack: ["React", "NextJS", "App Router", "TypeScript", "iframe micro-services"],
		image: [
			"https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
			"https://cdn.lazy-cv.com/cms-graph.png",
		],
		highlights: [
			"Enabled independent deployment between old and new stacks with URL-based progressive migration.",
		],
		contributions: [
			"Owned architecture decisions, execution planning, stakeholder communication, and hands-on implementation.",
		],
	},
	{
		name: "FundFluent SME Portal",
		summary:
			"Integrated digital lending portal for SMEs with one-stop loan application and document workflow support.",
		stack: ["React", "NextJS", "TypeScript", "TailwindCSS"],
		image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
		url: "https://app.fundfluent.io",
		contributions: [
			"Built from scratch as sole frontend engineer in a startup environment.",
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
	{ label: "Years Frontend Exp.", value: 7 },
	{ label: "Products Shipped", value: 18 },
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

export default function StickerMuleResumeEN() {
	return (
		<ResumeLayout>
			<LanguageToggle currentLocale="en" locales={[
				{ locale: "en", label: "EN", href: "/019ec4da-d518-77e0-ba6c-86029a67c851/en" },
				{ locale: "zh-TW", label: "中文", href: "/019ec4da-d518-77e0-ba6c-86029a67c851/zh-TW" },
			]} />

			<HeroProfile
				name="John Hsieh"
				avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
				avatarFallback="JH"
				jobTitle="Software Engineer"
				description={`I am a full-stack software engineer with 7 years of frontend-heavy product development experience across enterprise and startup environments, currently based in Singapore.

At TikTok and LINE, I shipped production systems for high-traffic commerce and growth businesses using TypeScript, React/Vue, GraphQL, and scalable Monorepo workflows. I am comfortable owning complex product areas end-to-end, from architecture to delivery.

I also use AI aggressively in engineering workflows, including agent-based automation, prompt engineering, and LLM-integrated tooling, which aligns with Sticker Mule's builder culture and speed expectations.

I can contribute to Sticker Mule Pro by building fast, pragmatic product experiences across web and mobile-oriented surfaces, while keeping engineering quality high in a remote-first autonomous team.

Why choose me: I combine execution speed, product intuition, and real-world ownership history in both large-scale systems and lean startup contexts, with strong written communication and cross-functional collaboration.`}
				location="Singapore"
				stats={stats}
				contacts={contacts}
				globeCaption="Applying for Software Engineer at Sticker Mule"
			/>

			<WorkExperience title="Work Experience" experiences={experiences} />

			<ProjectsGrid
				title="Projects"
				description={`${projects.length} selected projects aligned with commerce platforms, AI tooling, and high-velocity product delivery.`}
				projects={projects}
				highlightsLabel="Technical Highlights"
				contributionsLabel="Key Contributions"
			/>

			<TechStackVisualization title="Tech Stack Visualization" description="Core technologies and their interconnections.">
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
