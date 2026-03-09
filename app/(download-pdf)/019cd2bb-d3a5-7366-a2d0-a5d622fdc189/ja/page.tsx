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
import { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam } from "../../john-hsieh/skill-beam";

export const metadata: Metadata = {
  title: "John Hsieh | シニアソフトウェアエンジニア — Wise（日本語対応）",
  description:
    "7年以上のソフトウェアエンジニアリング経験。JLPT N1取得。React / Next.js / TypeScript / Vue を専門とし、TikTok Singapore および LINE Taiwan での勤務経験あり。Wise Singapore Senior Software Engineer I - Japanese Speaking に応募。",
};

/* ────────────────── data ────────────────── */

const contacts: ContactItem[] = [
  { href: "mailto:a0972199950@gmail.com", type: "mail", label: "a0972199950@gmail.com" },
  { href: "https://github.com/a0972199950", type: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/john-hsieh/", type: "linkedin", label: "LinkedIn" },
];

const experiences: Experience[] = [
  {
    company: "TikTok Singapore (ByteDance)",
    role: "ソフトウェアエンジニア",
    period: "2024.11 - 現在",
    logo: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
    highlights: [
      "User Growth チームに所属し、TikTok 等のアプリユーザー数を増加させるため、各 DSP プラットフォームへの広告配信を担当。数億ユーザー規模の成長に貢献。",
      "広告配信の財務決済システムのフロントエンド開発を担当。React、monorepo、社内フレームワークによるマイクロサービスアーキテクチャ — 金融システム開発の実務経験を保有。",
      "開発チームに Scrum を導入。Retrospective による自己改善の仕組みを構築し、Refinement でチーム間の連携を改善。作業量の平準化と PM のスケジュール把握精度の向上を実現。",
    ],
  },
  {
    company: "LINE Taiwan",
    role: "ソフトウェアエンジニア & チームリーダー",
    period: "2021.08 - 2024.10",
    logo: "https://cdn.lazy-cv.com/949a981c-e37c-4077-9655-edce8498b6a9.png",
    highlights: [
      "60名規模の開発チームで LINE ショッピングの開発に参画。技術スタック：Vue SSR + GraphQL + TypeScript + ExpressJS。厳格なコードレビュー文化 —「マージ前に必ず他のエンジニアがレビュー」。",
      "4名チームのリーダーとして、CMS を PHP から NextJS App Router アーキテクチャへのリファクタリングを主導。技術選定、スケジュール管理、リソース調整、リスク評価を担当。",
      "JavaScript Task Force (JSTF) に参加し、全社フロントエンド開発ガイドラインを策定。Lighthouse CI による自動パフォーマンス計測を CI パイプラインに導入。",
      "メンターとして新人2名を指導し、ポジティブなフィードバックを獲得。社内 NextJS ハンズオンセミナーを主催し、新人のオンボーディングを加速。",
    ],
  },
  {
    company: "AI.Book",
    role: "フロントエンドエンジニア（業務委託）",
    period: "2021.09 - 2024.10",
    logo: "https://cdn.lazy-cv.com/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png",
    highlights: [
      "ゼロから複雑なオンラインフォトブックエディタを単独開発 — ドラッグ&ドロップ、リサイズ、テキスト編集等の機能を搭載し、クロスプラットフォーム互換性を確保。",
      "Vue + NuxtJS で技術アーキテクチャを設計し、6ヶ月以内にプロダクトをリリース。",
      "PWA インストール機能を実装し、Service Worker と IndexedDB によるオフライン体験を提供。",
    ],
  },
  {
    company: "FundFluent",
    role: "フロントエンドエンジニア（業務委託）",
    period: "2021.01 - 2021.09",
    logo: "https://cdn.lazy-cv.com/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png",
    highlights: [
      "創業初期から参画し、香港市場向けフィンテック企業のフロントエンドアーキテクチャと技術選定をゼロから設計。",
      "React / NextJS + TypeScript + TailwindCSS で中小企業向け融資統合プラットフォームを開発。銀行・政府融資のワンストップ申請と OCR 書類処理に対応。",
      "クロスプロジェクト共有 UI コンポーネントライブラリ（Stencil.js Web Component）を設計し、private NPM にデプロイしてフレームワーク非依存の再利用を実現。",
    ],
  },
  {
    company: "FoxitSoftware",
    role: "フルスタックエンジニア",
    period: "2020.12 - 2021.08",
    logo: "https://cdn.lazy-cv.com/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png",
    highlights: [
      "AI 新規チームのフルスタックエンジニアとして、フロントエンドチーム2名を管理。",
      "社内 AI マイクロサービスを統合した B2B 管理プラットフォームを開発。技術スタック：NuxtJS / NextJS + TypeScript + MongoDB + Redis。",
      "チームの技術選定フェーズで GraphQL と NestJS 等の新技術を調査・導入。",
    ],
  },
  {
    company: "Aotter Inc.",
    role: "フロントエンドエンジニア",
    period: "2019.08 - 2020.11",
    logo: "https://cdn.lazy-cv.com/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png",
    highlights: [
      "プロジェクトベースのチーム（PM、UIデザイナー、フロント/バックエンドエンジニア）で複数の WEB アプリケーションと広告プラットフォームを開発。Nuxt + TypeScript + Sass + TailwindCSS を使用。",
      "各プロジェクトごとに TailwindCSS で小規模 CSS フレームワークを構築し、デザインカンプの高精度な再現を実現。Docker + Kubernetes の CI/CD フローでデプロイ。",
      "複数の並行プロジェクトを同時管理し、タイムマネジメントとコンテキストスイッチのスキルを習得。",
    ],
  },
  {
    company: "第三緯度科技公司",
    role: "フロントエンドエンジニア",
    period: "2019.04 - 2019.06",
    logo: "https://cdn.lazy-cv.com/d8b43549-741e-403c-83d4-6022faa346e9.png",
    highlights: [
      "Vue + PHP で Web アプリケーションを開発し、WeChat Pay 決済を統合。",
    ],
  },
  {
    company: "Asian Bridge Inc.（日系企業）",
    role: "デジタル広告オプティマイザー & フロントエンドエンジニア",
    period: "2017.12 - 2019.03",
    logo: "https://cdn.lazy-cv.com/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png",
    highlights: [
      "日系貿易会社に勤務し、日本語を主要業務言語として使用 — 日本のクライアントとの折衝およびプロジェクトマネジメントを担当。",
      "Facebook Ads Manager および Google Ads のデジタル広告運用を最適化。A/Bテスト、ヒートマップ分析、Google Analytics を活用して UX を改善 — UI/UX の素養を形成。",
      "後期にフロントエンドエンジニアに転身し、公式サイトやキャンペーンランディングページの構築を担当。2名のフロントエンドチームを牽引。",
    ],
  },
  {
    company: "AsiaYo Inc.",
    role: "日本市場 営業・オペレーション",
    period: "2016.09 - 2017.09",
    logo: "https://cdn.lazy-cv.com/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png",
    highlights: [
      "日本の宿泊施設のリスティングを担当し、プラットフォームへの掲載数を 1,682 から 2,616 に増加（達成率 93%）。予約件数は前年比 376% 増。",
      "社内の日本語翻訳窓口を務め、旅行中のお客様が日本で遭遇する緊急事態の解決を支援。",
    ],
  },
];

const projects: Project[] = [
  {
    name: "LINE ショッピング — ライブコマース機能",
    summary:
      "LINE 購買サービスの「ライブコマース」機能を単独開発。YouTube の動画ストリーム自動プレビュー機構を参考に、再利用可能な動画自動プレビューモジュールを設計。グローバルスケジューラにより、高速スクロール時のプレビュー混乱や単一ページ上の過剰なライブソースによるメモリ肥大化を解決 — 数千の同時接続ユーザーに対応する高可用性システム。",
    stack: ["Vue SSR", "GraphQL", "TypeScript", "ExpressJS", "SASS"],
    image: [
      "https://cdn.lazy-cv.com/line-shopping-main-page.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall.png",
      "https://cdn.lazy-cv.com/shopping-live-hall2.jpg",
      "https://cdn.lazy-cv.com/shopping-live-hall3.jpg",
    ],
    url: "https://buy.line.me",
  },
  {
    name: "TikTok 広告財務決済システム",
    summary:
      "世界トップクラスのインターネット企業 TikTok にて、広告配信の財務決済システムを開発。複数の DSP プラットフォームにまたがる複雑な金融オペレーションを処理。React、monorepo アーキテクチャ、専用フロントエンドマイクロサービスフレームワークを使用。数億ユーザーにサービスを提供する金融インフラを直接構築。",
    stack: ["React", "TypeScript", "Monorepo", "Microservices"],
    image: "https://cdn.lazy-cv.com/3f479ad2-15ac-4116-b98e-45c4fee25550.png",
  },
  {
    name: "CMS リファクタリング（NextJS）",
    summary:
      "PHP ベースの LINE ショッピング CMS を React & NextJS App Router アーキテクチャへリファクタリングするプロジェクトを主導。4名チームを率いてフロントエンド・バックエンドの分離を完了。技術選定、社内研修、スケジュール管理、タスク分配、リスク評価を担当。LINE Taiwan で NextJS App Router を早期採用した数少ないプロジェクトの一つ。",
    stack: ["React", "NextJS", "App Router", "TypeScript"],
    image: [
      "https://cdn.lazy-cv.com/41da786b-6237-4ac5-90d0-541fa32f8be4.png",
      "https://cdn.lazy-cv.com/cms-graph.png",
    ],
  },
  {
    name: "FundFluent 中小企業融資プラットフォーム",
    summary:
      "香港の中小企業向け統合融資プラットフォームをゼロから構築。銀行・政府融資情報およびワンストップ申請機能を提供し、OCR 技術で書類管理を簡素化、重複提出コストを削減 — 銀行パートナーとの複雑なプロダクトインテグレーション経験を保有。",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS", "Semantic UI"],
    image: "https://cdn.lazy-cv.com/63c205b8-d3e0-4ad0-bb82-0d0f411b94e5.png",
    url: "https://app.fundfluent.io",
  },
  {
    name: "Lazy CV — AI 駆動型履歴書生成システム",
    summary:
      "AI Agent と Next.js 16 を組み合わせたフルスタックアプリケーション。求人リンクを提供するだけで、システムが自動的に JD を取得・分析し、カスタマイズされた多言語対応の履歴書ウェブページを生成。AWS Lambda + Neon PostgreSQL にデプロイ。ゼロからリリースまで僅か2日間で完了。",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS 4", "Drizzle ORM", "Neon PostgreSQL", "AWS Lambda", "Framer Motion"],
    image: [
      "https://cdn.lazy-cv.com/lazy-cv-main.png",
      "https://cdn.lazy-cv.com/lazy-cv-main-2.png",
      "https://cdn.lazy-cv.com/lazy-cv-auto.jpg",
    ],
    url: "https://lazy-cv.com",
  },
  {
    name: "FundFluent UI Kit Library",
    summary:
      "クロスプロジェクト共有 UI コンポーネントプラットフォーム。Web Component（Stencil.js）でフレームワーク非依存のコンポーネントライブラリを構築し、TailwindCSS + Semantic UI を統合。Storybook でドキュメント化。private NPM にパブリッシュし、プロダクト横断での再利用を実現。",
    stack: ["Stencil.js", "Web Component", "TailwindCSS", "Storybook"],
    image: "https://cdn.lazy-cv.com/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png",
  },
];

const skillKeywordRows: SkillKeywordRow[] = [
  {
    keywords: ["TypeScript", "React", "Next.js", "Vue", "NuxtJS", "GraphQL", "TailwindCSS", "Sass / SCSS", "Node.js", "Express"],
    badgeClassName: "border-slate-300 bg-white text-slate-700",
    marqueeClassName: "[--duration:30s]",
  },
  {
    keywords: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "Jest", "Cypress", "Firebase", "Storybook", "Webpack"],
    badgeClassName: "border-cyan-200 bg-cyan-50/50 text-cyan-800",
    marqueeClassName: "[--duration:35s]",
    reverse: true,
  },
  {
    keywords: ["Web Component", "StencilJS", "PWA", "Socket.io", "i18n", "Git", "REST API", "SEO", "Lighthouse", "Renovate"],
    badgeClassName: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    marqueeClassName: "[--duration:32s]",
  },
];

const stats: StatItem[] = [
  { label: "年のエンジニアリング経験", value: 7 },
  { label: "件の完成プロダクト", value: 16 },
  { label: "名のチーム管理", value: 4 },
  { label: "ヶ国語", value: 3 },
];

const educations: EducationItem[] = [
  { institution: "東呉大学（台湾）", degree: "文学士 (BA) — 日本語文学科", period: "2013 - 2017" },
  { institution: "同志社大学（京都）", degree: "交換留学 — 日本語・日本文化", period: "2016.03 - 2016.08" },
];

const certifications: CertificationItem[] = [
  { name: "日本語能力試験 JLPT N1", description: "最高レベル認定 — JD 要件の N2 を上回る。ビジネス商談レベルの日本語力を保有し、日系企業にて日本語を主要業務言語として使用した経験あり", image: "https://cdn.lazy-cv.com/359d98cc-5647-466a-8d9e-9dbd17d6bbf8.png" },
  { name: "台湾大学 情報推進部", description: "Web 開発技術コース" },
];

const languages: LanguageItem[] = [
  { name: "中国語 — 母語", badgeClassName: "bg-cyan-100 text-cyan-800" },
  { name: "日本語 — ビジネスレベル (JLPT N1)", badgeClassName: "bg-rose-100 text-rose-800" },
  { name: "英語 — ビジネスコミュニケーション", badgeClassName: "bg-indigo-100 text-indigo-800" },
];

/* ────────────────── component ────────────────── */

export default function WiseResumeJA() {
  return (
    <ResumeLayout>
      <LanguageToggle currentLocale="ja" locales={[
        { locale: "en", label: "EN", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/en" },
        { locale: "zh-TW", label: "中文", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/zh-TW" },
        { locale: "ja", label: "日本語", href: "/019cd2bb-d3a5-7366-a2d0-a5d622fdc189/ja" },
      ]} />

      <HeroProfile
        name="John Hsieh"
        avatarUrl="https://cdn.lazy-cv.com/avatar.jpg"
        avatarFallback="JH"
        jobTitle="シニアソフトウェアエンジニア"
        description={`Wise の Senior Software Engineer I - Japanese Speaking ポジションに応募いたします。7年以上のソフトウェアエンジニアリング経験を持ち、TikTok Singapore や LINE Taiwan などのトップテック企業での勤務実績があります。また、JD 要件の N2 を上回る JLPT N1（日本語能力試験最高レベル）を取得しており、ビジネスレベルの英語力と合わせて、Wise の「世界で最も便利な送金・資金管理の実現」というミッションに貢献できる独自の強みを備えています。

Wise に貢献できること：
TikTok での金融決済システム開発や、FundFluent での融資プラットフォーム構築の実務経験があり、いずれも金融パートナーとの複雑なプロダクトインテグレーションを含みます。私のコアバリューである「ユーザー体験最優先」は、複雑さをプロダクトの裏側に隠し、お客様にシームレスな体験を提供するという Wise のミッションと完全に一致しています。
複雑な技術的概念を非技術者のステークホルダーに分かりやすく説明することが得意で、銀行、コンプライアンス、オペレーションなど部門横断的に効果的に連携できます。

他の候補者と比べた私の強み：
React、TypeScript、スケーラブルなシステムアーキテクチャの技術力に加え、LINE Taiwan での4名チームリーダー、TikTok での Scrum 導入推進、エンジニアの成長支援など、実証されたリーダーシップを持っています。
トリリンガル（中国語/日本語/英語）の能力と日系企業（Asian Bridge Inc.）での実務経験により、日本語カウンターパートとの効果的なコミュニケーションや日本語技術文書の管理に必要な文化的素養を備えています。これは全銀システム等の APAC 決済システムの統合において不可欠です。
JLPT N1（最高レベル）を取得しており、本ポジション要件の N2 を上回ります。日本語でのビジネス交渉、技術ディスカッション、ドキュメント作成に自信を持って対応できます。`}
        location="Singapore"
        stats={stats}
        contacts={contacts}
        globeCaption="TikTok Singapore / LINE Taiwan — グローバルスケールのプロダクト開発経験"
      />

      <WorkExperience title="職務経歴" experiences={experiences} />

      <ProjectsGrid
        title="プロジェクト紹介"
        description={`${projects.length} 件の代表的プロジェクト。プロダクトインパクト、金融システム経験、スケーラブルアーキテクチャを紹介。`}
        projects={projects}
      />

      <TechStackVisualization title="技術スタック可視化" description="コア技術と周辺スキルのリレーションマップ。">
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-white to-sky-50/50 p-4">
          <SkillCloud />
        </div>
        <FrontendJSBeam />
        <CSSBeam />
        <PWABeam />
        <WebComponentBeam />
        <BackendBeam />
      </TechStackVisualization>

      <SkillKeywords title="スキルキーワード" rows={skillKeywordRows} />

      <EducationCerts
        sectionTitle="学歴・資格"
        educationLabel="学歴"
        educationHeaders={{ institution: "学校", degree: "学位 / 内容", period: "期間" }}
        educations={educations}
        certLabel="資格・認定"
        certifications={certifications}
        languageLabel="語学力"
        languages={languages}
      />
    </ResumeLayout>
  );
}
