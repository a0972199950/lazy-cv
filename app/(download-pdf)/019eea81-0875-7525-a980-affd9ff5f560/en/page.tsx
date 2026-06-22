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
];

const experiences: Experience[] = [
	{
		company: "TikTok Singapore",
		role: "Software Engineer",
		period: "2024.11 - Present",
		logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
		highlights: [
			"Own critical UI and workflow modules for growth and settlement systems in a large React + TypeScript Monorepo.",
			"Deliver across ambiguous business requirements and collaborate closely with PM, design, and operations stakeholders.",
			"Improve delivery quality through Scrum refinement, retrospectives, and cross-team execution alignment.",
		],
	},
	{
		company: "LINE Taiwan",
		role: "Software Engineer",
		period: "2021.08 - 2024.10",
		logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
		highlights: [
			"Built production commerce features with Vue SSR + GraphQL + TypeScript + ExpressJS for LINE Shopping.",
			"Led a 4-person migration project from legacy PHP CMS to NextJS App Router with staged rollout.",
			"Mentored junior engineers and helped standardize engineering quality with Lighthouse CI practices.",
		],
	},
	{
		company: "AI.Book",
		role: "Frontend Engineer (Contract)",
		period: "2021.09 - 2024.10",
		logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
		highlights: [
			"Independently delivered a full online photo-book editor from architecture to production launch.",
			"Designed maintainable UI interactions for drag-drop, text editing, and responsive authoring workflows.",
			"Shipped cross-device editing experience with PWA support and long-term maintainability in mind.",
		],
	},
	{
		company: "FundFluent",
		role: "Frontend Engineer (Contract)",
		period: "2021.01 - 2021.09",
		logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
		highlights: [
			"Joined at startup stage and owned frontend architecture decisions with minimal direction.",
			"Built React + TypeScript interfaces and partner workflows for financial service products.",
			"Created reusable component patterns to improve consistency and delivery speed across products.",
		],
	},
	{
		company: "FoxitSoftware",
		role: "Full-Stack Engineer",
		period: "2020.12 - 2021.08",
		logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
		highlights: [
			"Built full-stack B2B product capabilities across UI and API layers in a fast-moving AI team.",
			"Implemented backend endpoints and integrated multiple internal services into unified product surfaces.",
		],
	},
];

const projects: Project[] = [
	{
		name: "UG Overseas Platform (TikTok)",
		summary:
			"Enterprise Monorepo platform supporting overseas growth operations across procurement, settlement, and data workflows with 50+ sub-projects.",
		stack: ["React 17", "TypeScript", "Rush Monorepo", "Arco Design", "ECharts", "Jest", "Web Worker"],
		image: [
			"https://cdn.lazy-cv.com/OA.png",
			"https://cdn.lazy-cv.com/web-worker.png",
			"https://cdn.lazy-cv.com/pp-performance.png",
		],
		highlights: [
			"Built complex, schema-driven UI flows for ambiguous business domains.",
			"Implemented performant and reliable frontend architecture in a large production codebase.",
			"Partnered across teams to translate technical constraints into product decisions.",
		],
		contributions: [
			"Built Web Worker + Comlink CSV validation and reduced UI blocking by 90%.",
			"Introduced rendering cache utilities and reduced TBT by 98% on heavy forms.",
		],
	},
	{
		name: "LINE Shopping",
		summary:
			"High-traffic commerce platform with point-based affiliate experiences and content-rich shopping flows.",
		stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
		image: [
			"https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall.png",
			"https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
			"https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
		],
		url: "https://buy.line.me",
		contributions: [
			"Independently implemented a reusable live-video preview scheduler to solve high-scroll instability and memory pressure.",
		],
	},
	{
		name: "CMS Migration to NextJS",
		summary:
			"Led migration from PHP-based CMS to React + NextJS App Router with progressive path-based rollout.",
		stack: ["React", "NextJS", "App Router", "TypeScript", "iframe micro-services"],
		image: [
			"https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
			"https://cdn.lazy-cv.com/cms-graph.png",
		],
		highlights: [
			"Owned architecture and delivery planning for a multi-stakeholder migration project.",
			"Enabled minimal-risk transition between old and new systems.",
		],
	},
	{
		name: "Lazy CV",
		summary:
			"AI-driven resume generator that transforms job postings into tailored bilingual resume pages through automation.",
		stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Claude API"],
		image: [
			"https://cdn.lazy-cv.com/lazy-cv-main.png",
			"https://cdn.lazy-cv.com/lazy-cv-main-2.png",
			"https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
		],
		url: "https://lazy-cv.com",
		highlights: [
			"Automated requirement extraction and UI generation from real job descriptions.",
			"Applied strong type-safety and structured workflows for stable output quality.",
		],
	},
	{
		name: "AI.Book Photo Editor",
		summary:
			"Online photo-book editor with drag-and-drop authoring and cross-device editing support.",
		stack: ["Vue", "NuxtJS", "PWA", "IndexedDB"],
		image: [
			"https://cdn.lazy-cv.com/ec9dea67-c5f6-4172-9215-b92b7c248811.png",
			"https://cdn.lazy-cv.com/4d2e19e0-896e-4af7-921d-41bb4831a59c.png",
		],
		highlights: [
			"Delivered full product lifecycle from architecture to launch as a solo engineer.",
			"Built maintainable UI foundations for rich interactions and long-term iteration.",
		],
	},
	{
		name: "FundFluent UI Kit Library",
		summary:
			"Reusable cross-project component system built with Web Components for framework-agnostic adoption.",
		stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
		image: [
			"https://cdn.lazy-cv.com/fundfluent-ui-kit.png",
			"https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
		],
		highlights: [
			"Created shared UI standards and documentation for faster multi-product delivery.",
			"Reduced duplicated engineering effort through a scalable component platform.",
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
				jobTitle="UI Full Stack Engineer"
				description={`I am a UI Full Stack Engineer with 7 years of experience delivering production software across enterprise-scale systems at TikTok and LINE, and as a solo founder-engineer in contract projects. I am proficient in React, TypeScript, Next.js, GraphQL, and Node.js, and I have a proven record of owning complex, ambiguous deliverables end-to-end — from design handoff through to production.

At LINE, I served as Team Leader on a 4-person CMS migration project: I designed the full system architecture, planned milestones, communicated technical tradeoffs to non-technical stakeholders, and coached the team throughout execution. Beyond that project, I formally mentored two junior engineers — both gave positive feedback — and led an internal Next.js teaching forum to accelerate onboarding for new hires. This track record of mentoring and raising the team quality bar maps directly to what Apple ETS is looking for.

On the full-stack side, I have designed and consumed RESTful and GraphQL APIs, built backend endpoints that serve UI data layers, and maintained Express-based server logic in production — giving me the fluency to work across the stack that this role requires.

I have also been applying debugging at scale: at TikTok I identified and resolved rendering bottlenecks that reduced Total Blocking Time by 98% on a 500-form interface, and cut UI thread blocking by 90% through Web Worker offloading.

What I can contribute to Apple ETS: I will own UI features across ambiguous problem spaces, bring accessibility and maintainability discipline to every surface I touch, and actively grow the engineers around me — because building great software and building great teams are inseparable goals.`}
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
