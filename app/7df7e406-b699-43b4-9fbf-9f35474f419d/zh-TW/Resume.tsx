'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  GlobeAltIcon,
  LanguageIcon,
  CalendarIcon,
  CodeBracketIcon,
  UserGroupIcon,
  EyeIcon,
  LinkIcon
} from '@heroicons/react/24/outline'

interface ResumeProps {
  locale: 'zh-TW' | 'en'
}

const translations = {
  'zh-TW': {
    // Header
    title: 'John Hsieh',
    subtitle: '資深軟體工程師',
    location: '新加坡',
    switchLang: '切換至英文',
    
    // Navigation sections
    about: '關於我',
    experience: '工作經歷', 
    skills: '技能專長',
    projects: '專案作品',
    
    // About section
    aboutTitle: '關於我',
    aboutDescription: '7年前端開發經驗，曾任職於 TikTok Singapore 與 LINE Taiwan，擔任資深軟體工程師。專精 React/Vue 雙技術棧開發，熟悉 TypeScript、Next.js、GraphQL 等現代前端技術。具備豐富的團隊管理與技術領導經驗，曾帶領團隊完成大型系統重構專案。能流利使用中英日三語，具備優秀的跨文化溝通與協作能力。',
    
    // Experience  
    experienceTitle: '工作經歷',
    current: '至今',
    
    // Projects
    projectsTitle: '專案作品',
    viewProject: '查看專案',
    techStack: '技術棧',
    
    // Skills
    skillsTitle: '核心技能',
    frontend: '前端技術',
    styling: '樣式技術', 
    backend: 'API & 後端',
    tools: '開發工具',
    languages: '語言能力',
    
    // Language levels
    native: '母語',
    business: '商務級', 
    fluent: '流利',
    
    // Footer
    contact: '聯絡我'
  },
  'en': {
    // Header
    title: 'John Hsieh',  
    subtitle: 'Senior Software Engineer',
    location: 'Singapore',
    switchLang: 'Switch to 中文',
    
    // Navigation sections
    about: 'About',
    experience: 'Experience',
    skills: 'Skills', 
    projects: 'Projects',
    
    // About section
    aboutTitle: 'About Me',
    aboutDescription: '7 years of frontend development experience, formerly Senior Software Engineer at TikTok Singapore and LINE Taiwan. Expert in React/Vue dual-stack development, proficient in TypeScript, Next.js, GraphQL and modern frontend technologies. Rich experience in team management and technical leadership, led teams through major system refactoring projects. Fluent in Chinese, English and Japanese with excellent cross-cultural communication and collaboration skills.',
    
    // Experience
    experienceTitle: 'Work Experience', 
    current: 'Present',
    
    // Projects
    projectsTitle: 'Key Projects',
    viewProject: 'View Project',
    techStack: 'Tech Stack',
    
    // Skills
    skillsTitle: 'Core Skills',
    frontend: 'Frontend',
    styling: 'Styling',
    backend: 'API & Backend', 
    tools: 'Dev Tools',
    languages: 'Languages',
    
    // Language levels  
    native: 'Native',
    business: 'Business',
    fluent: 'Fluent',
    
    // Footer
    contact: 'Contact Me'
  }
}

export default function Resume({ locale }: ResumeProps) {
  const t = translations[locale]
  const otherLocale = locale === 'zh-TW' ? 'en' : 'zh-TW'
  
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Vue', 'Nuxt.js', 'GraphQL'],
    styling: ['TailwindCSS', 'Sass/SCSS', 'CSS Variables', 'RWD'],  
    backend: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'REST APIs'],
    tools: ['Git', 'Webpack', 'Docker', 'Jest', 'Cypress', 'Storybook'],
    languages: [
      { name: '中文 (Mandarin)', level: t.native },
      { name: '日文 (Japanese)', level: t.business + ' (JLPT N1)' },
      { name: '英文 (English)', level: t.fluent }
    ]
  }
  
  const experiences = [
    {
      company: 'TikTok Singapore', 
      role: locale === 'zh-TW' ? 'TikTok Singapore - 軟體工程師' : 'TikTok Singapore - Software Engineer',
      period: '2024.11 - ' + t.current,
      description: locale === 'zh-TW' ? 'User Growth 團隊，負責 AI 廣告投放財務系統開發，使用 React 與內部框架' : 'User Growth team, responsible for AI advertising financial system development using React and internal frameworks',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/3f479ad2-15ac-4116-b98e-45c4fee25550.png',
      highlights: [
        locale === 'zh-TW' ? 'User Growth 團隊' : 'User Growth Team',
        'React + Internal Frameworks',
        locale === 'zh-TW' ? 'AI 廣告系統' : 'AI Ad Systems'
      ]
    },
    {
      company: 'LINE Taiwan',
      role: locale === 'zh-TW' ? 'LINE Taiwan - 軟體工程師 & 團隊主管' : 'LINE Taiwan - Software Engineer & Team Lead', 
      period: '2021.08 - 2024.10',
      description: locale === 'zh-TW' ? '電商團隊核心開發、技術標準制定、團隊管理與新人指導，Vue SSR + GraphQL + TypeScript' : 'E-commerce team core development, technical standards, team management and mentoring, Vue SSR + GraphQL + TypeScript',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/949a981c-e37c-4077-9655-edce8498b6a9.png',
      highlights: [
        locale === 'zh-TW' ? '團隊管理 (4人)' : 'Team Lead (4 members)',
        'Vue SSR + GraphQL + TypeScript',
        locale === 'zh-TW' ? 'Mentor 職責' : 'Mentoring Role'
      ]
    },
    {
      company: 'AI.Book',
      role: locale === 'zh-TW' ? 'AI.Book - 前端工程師 (契約)' : 'AI.Book - Frontend Engineer (Contract)',
      period: '2021.09 - 2024.10', 
      description: locale === 'zh-TW' ? '獨立開發線上相片編輯器，從零到產品上線，Vue + NuxtJS' : 'Independently developed online photo editor from scratch to launch, Vue + NuxtJS',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/82e004b0-4f43-4ad4-bec7-14f0ae9c6465.png',
      highlights: [
        locale === 'zh-TW' ? '從零開發編輯器' : 'Built Editor from Scratch',
        'Vue + NuxtJS + PWA',
        locale === 'zh-TW' ? '6個月交付' : '6-month Delivery'
      ]
    },
    {
      company: 'FundFluent',
      role: locale === 'zh-TW' ? 'FundFluent - 前端工程師 (契約)' : 'FundFluent - Frontend Engineer (Contract)',
      period: '2021.01 - 2021.09',
      description: locale === 'zh-TW' ? '香港市場新創公司，專為中小型企業提供貸款媒合與資訊整合平台。從公司成立初期擔任前端核心成員，從0開始規劃前端架構及技術選型。React(NextJS) + TypeScript + TailwindCSS' : 'Hong Kong fintech startup providing SME lending solutions. Core frontend engineer from company inception, responsible for frontend architecture design and tech stack decisions. Built with React(NextJS) + TypeScript + TailwindCSS',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/32c57cb1-aee3-40de-bda5-2c6c37d9c6cb.png',
      highlights: [
        locale === 'zh-TW' ? 'UI Kit 組件庫' : 'UI Kit Library',
        'Web Components (Stencil.js)',
        locale === 'zh-TW' ? '多平台支援' : 'Multi-platform Support'
      ]
    },
    {
      company: 'Foxit Software',
      role: locale === 'zh-TW' ? 'Foxit Software - 全端工程師' : 'Foxit Software - Fullstack Engineer',
      period: '2020.12 - 2021.08',
      description: locale === 'zh-TW' ? '上市軟體公司，PDF 解決方案提供商。在 AI 團隊擔任全端工程師，管理前端團隊 (2人)，開發整合 AI 微服務的 2B 管理平台。NuxtJS/NextJS + TypeScript + MongoDB + Redis' : 'Public software company specializing in PDF solutions. Fullstack engineer in AI team, managing frontend team (2 members), developing 2B management platform integrating AI microservices. NuxtJS/NextJS + TypeScript + MongoDB + Redis',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/75d1d563-32a1-4b4a-a742-8c6b32f6f09c.png',
      highlights: [
        locale === 'zh-TW' ? 'AI 團隊核心' : 'AI Team Core',
        locale === 'zh-TW' ? '前端團隊管理' : 'Frontend Team Management',
        'NuxtJS + NextJS'
      ]
    },
    {
      company: locale === 'zh-TW' ? '電獺股份有限公司' : 'Aotter Inc.',
      role: locale === 'zh-TW' ? '電獺 - 前端工程師' : 'Aotter - Frontend Engineer',
      period: '2019.08 - 2020.11',
      description: locale === 'zh-TW' ? '多元化科技公司，擁有 Youtuber 自媒體、廣告生態系與接案開發三種面向。專案導向團隊，每項專案包括 PM、UI 及前/後端約4名人員。Nuxt + TypeScript + TailwindCSS' : 'Multi-faceted tech company with YouTuber media, advertising ecosystem and development services. Project-oriented teams with PM, UI and frontend/backend developers (4 members). Nuxt + TypeScript + TailwindCSS',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/1ad1ff53-a1a0-4d15-8cb0-e1724400d7af.png',
      highlights: [
        locale === 'zh-TW' ? '多專案管理' : 'Multi-project Management',
        locale === 'zh-TW' ? '廣告技術平台' : 'Ad Tech Platforms',
        'Nuxt + TailwindCSS'
      ]
    },
    {
      company: locale === 'zh-TW' ? '第三緯度科技公司' : '第三緯度 Inc.',
      role: locale === 'zh-TW' ? '第三緯度 - 前端工程師' : '第三緯度 - Frontend Engineer',
      period: '2019.04 - 2019.06',
      description: locale === 'zh-TW' ? '陸資企業台灣分公司，在台主營業務是韓國成人漫畫網站與 APP。使用 Vue + PHP，串接微信支付。由於一些複雜原因，在此職位短期任職' : 'Chinese company Taiwan branch, main business was Korean adult comics website and app. Used Vue + PHP with WeChat payment integration. Short tenure due to complex circumstances',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/d8b43549-741e-403c-83d4-6022faa346e9.png',
      highlights: [
        'Vue + PHP',
        locale === 'zh-TW' ? '微信支付整合' : 'WeChat Pay Integration',
        locale === 'zh-TW' ? '短期任職' : 'Short-term Position'
      ]
    },
    {
      company: locale === 'zh-TW' ? '日商優橋' : 'Asian Bridge Inc.',
      role: locale === 'zh-TW' ? '日商優橋 - 數位廣告優化師 & 前端工程師' : 'Asian Bridge - Digital Ad Specialist & Frontend Developer',
      period: '2017.12 - 2019.03',
      description: locale === 'zh-TW' ? '日商貿易公司，代理日系化妝保養品。先後擔任數位廣告優化師與前端工程師，管理前端團隊(2人)。使用日文作為工作主要溝通語言。PHP MPA + 原生 JS + jQuery' : 'Japanese trading company dealing with Japanese cosmetic brands. Served as digital ad specialist and frontend developer, managing frontend team (2 members). Used Japanese as primary working language. PHP MPA + vanilla JS + jQuery',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/63b9fb91-0467-4bfd-ae30-ffacda3d4ea9.png',
      highlights: [
        locale === 'zh-TW' ? '日文工作環境' : 'Japanese Working Environment',
        locale === 'zh-TW' ? 'UI/UX 研究' : 'UI/UX Research',
        locale === 'zh-TW' ? '團隊管理 + PM' : 'Team Management + PM'
      ]
    },
    {
      company: locale === 'zh-TW' ? '亞洲遊' : 'AsiaYo Inc.',
      role: locale === 'zh-TW' ? '亞洲遊 - 日本市場業務及營運' : 'AsiaYo - Japanese Market Operations',
      period: '2016.09 - 2017.09',
      description: locale === 'zh-TW' ? '旅宿平台業務，接洽日本旅宿房源並協助上架到平台。擔任對日翻譯窗口及緊急狀況處理。達成房源成長目標，2017年較前年成長376%' : 'Accommodation platform operations, connecting Japanese lodging sources and assisting platform listing. Served as Japanese translation liaison and emergency situation handler. Achieved accommodation growth targets with 376% growth in 2017 vs previous year',
      logo: 'https://images.cakeresume.com/JdjNy/john_hsieh/e83f7c62-e839-4d21-bdd2-decd9ed39bf1.png',
      highlights: [
        locale === 'zh-TW' ? '日本市場開發' : 'Japanese Market Development',
        locale === 'zh-TW' ? '376% 業績成長' : '376% Performance Growth',
        locale === 'zh-TW' ? '翻譯與客服' : 'Translation & Customer Service'
      ]
    }
  ]
  
  const projects = [
    {
      name: locale === 'zh-TW' ? 'LINE 購物' : 'LINE Shopping',
      company: 'LINE Taiwan',
      period: '2021 - 2024',
      description: locale === 'zh-TW' ? 'LINE 導購服務，凡經由 LINE 購物外連到合作夥伴商家完成消費後，即可獲得 LINE 點數回饋。平台為集結合作第三方電商的購物入口' : 'LINE e-commerce service providing LINE Points rewards for purchases made through partner merchants. Platform serves as shopping portal aggregating third-party e-commerce partners',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/1da75a22-2c28-4bbc-baef-1ec66ee781bb.png',
      tech: ['Vue SSR', 'GraphQL', 'TypeScript', 'SASS', 'ExpressJS'],
      url: 'https://buy.line.me'
    },
    {
      name: locale === 'zh-TW' ? 'CMS 系統重構 (Team Leader)' : 'CMS System Refactoring (Team Leader)',
      company: 'LINE Taiwan',
      period: '2023 - 2024',
      description: locale === 'zh-TW' ? '帶領四人團隊將 PHP 架構的 LINE 購物 CMS 重構為 React & NextJS app router 架構。負責技術選型、內訓、時程規劃及風險評估' : 'Led 4-member team to refactor LINE Shopping CMS from PHP to React & NextJS app router. Responsible for tech stack decisions, training, scheduling and risk assessment',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/41da786b-6237-4ac5-90d0-541fa32f8be4.png',
      tech: ['React', 'NextJS App Router', 'TypeScript', 'Team Leadership'],
      url: null
    },
    {
      name: 'JavaScript Task Force',
      company: 'LINE Taiwan', 
      period: '2022 - 2024',
      description: locale === 'zh-TW' ? '跨團隊專案小組，為整個 LINE Taiwan 制定前端開發準則。研究 SonarQube 靜態程式碼分析、CI 中加入 Lighthouse 評分、OpenTel 監控工具等' : 'Cross-team project group establishing frontend development standards for entire LINE Taiwan. Researched SonarQube static analysis, Lighthouse CI integration, OpenTel monitoring tools',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/9fb60a2e-e59b-4a28-8cd4-08b44b85d210.png',
      tech: ['SonarQube', 'Lighthouse CI', 'OpenTel', 'Standards Definition'],
      url: null
    },
    {
      name: locale === 'zh-TW' ? 'AI.Book 線上相簿編輯器' : 'AI.Book Online Photo Editor',
      company: 'AI.Book',
      period: '2021 - 2024',
      description: locale === 'zh-TW' ? '獨立開發的線上相簿編輯平台，支援加入/移除照片、拖動調整、文字編輯、字型定製。支援 PWA 安裝，達到類原生 APP 體驗' : 'Independently developed online photo editing platform supporting photo add/remove, drag adjustment, text editing, font customization. PWA support for native app-like experience',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/ec9dea67-c5f6-4172-9215-b92b7c248811.png',
      tech: ['Vue', 'NuxtJS', 'PWA', 'Canvas API', 'Touch Events'],
      url: null
    },
    {
      name: 'FundFluent UI Kit Library',
      company: 'FundFluent',
      period: '2021',
      description: locale === 'zh-TW' ? '跨專案共用的 UI 組件平台，使用 Web Component (Stencil.js)，不受前端框架限制。整合 TailwindCSS + Semantic UI 實現 design system' : 'Cross-project shared UI component platform using Web Components (Stencil.js) without frontend framework limitations. Integrated TailwindCSS + Semantic UI for design system',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/5971a706-d4bc-4e96-b154-8d09d4ad03eb.png',
      tech: ['Stencil.js', 'Web Components', 'TailwindCSS', 'Storybook', 'NPM'],
      url: null
    },
    {
      name: 'SuprLink 超級連結',
      company: locale === 'zh-TW' ? '電獺股份有限公司' : 'Aotter Inc.',
      period: '2019 - 2020',
      description: locale === 'zh-TW' ? '從 A/B 分流到數據分析，再到廣告投放一氣呵成的縮網址服務。支援組織管理、自定網域等進階功能' : 'Complete URL shortening service from A/B testing to data analysis and advertising. Supports organization management, custom domains and advanced features',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/a14d9a80-45b9-4943-a043-49dacb460bb9.png',
      tech: ['Nuxt.js', 'Vue.js', 'TailwindCSS', 'Analytics'],
      url: 'https://supr.link'
    },
    {
      name: 'Aotter Trek DSP 平台',
      company: locale === 'zh-TW' ? '電獺股份有限公司' : 'Aotter Inc.',
      period: '2019 - 2020',
      description: locale === 'zh-TW' ? '結合大數據分析的廣告投放 DSP 平台，使用大量圖表介面為使用者找出最適合的廣告 TA' : 'DSP advertising platform with big data analysis, using extensive charts interface to help users find optimal advertising target audiences',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/4812639f-ea04-470c-b931-a954464678fd.png',
      tech: ['Vue.js', 'Chart.js', 'Data Visualization', 'Analytics API'],
      url: 'https://trek.aotter.net'
    },
    {
      name: locale === 'zh-TW' ? '資策會城市儀表板' : 'III City Dashboard',
      company: locale === 'zh-TW' ? '電獺股份有限公司' : 'Aotter Inc.',
      period: '2019 - 2020',
      description: locale === 'zh-TW' ? '政府委託專案，收集分散各地的政府數據於同一地展示的政府資料數據庫。高度客製化的圖表及資料篩選模組' : 'Government commissioned project, collecting distributed government data into unified display platform. Highly customizable charts and data filtering modules',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/0a002690-85c9-4bcf-bb72-9cebf81788ae.png',
      tech: ['Vue.js', 'D3.js', 'Government APIs', 'Data Processing'],
      url: null
    },
    {
      name: locale === 'zh-TW' ? '俏樂斯官方網站' : 'Churacos Official Website',
      company: locale === 'zh-TW' ? '日商優橋' : 'Asian Bridge Inc.',
      period: '2018 - 2019',
      description: locale === 'zh-TW' ? '日本沖繩保養品俏樂斯的台灣官方網站，包含產品介紹、品牌故事及線上購物功能' : 'Taiwan official website for Churacos, an Okinawan skincare brand, featuring product showcases, brand story and e-commerce functionality',
      image: 'https://images.cakeresume.com/JdjNy/john_hsieh/b2a0eaa9-55f5-4482-bd20-c4c574b5d7d7.png',
      tech: ['PHP', 'jQuery', 'WordPress', 'E-commerce'],
      url: 'https://supr.link/9j9Ny'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Language Switch */}
      <div className="fixed top-4 right-4 z-50">
        <Link 
          href={`/7df7e406-b699-43b4-9fbf-9f35474f419d/${otherLocale}`}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-indigo-600"
        >
          <LanguageIcon className="w-4 h-4" />
          <span className="text-sm font-medium">{t.switchLang}</span>
        </Link>
      </div>

      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src="https://images.cakeresume.com/JdjNy/john_hsieh/d2fa98b2-4370-41a2-878a-2b1a741e63d9.png"
                  alt="John Hsieh"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                {t.title}
              </h1>
              <p className="text-2xl mb-6 text-blue-100">{t.subtitle}</p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPinIcon className="w-5 h-5" />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>a0972199950@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <GlobeAltIcon className="w-5 h-5" />
                  <span>github.com/a0972199950</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-800">{t.aboutTitle}</h2>
            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg">
              <p className="text-lg leading-relaxed text-slate-700">
                {t.aboutDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div>
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">{t.experienceTitle}</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-1">{exp.company}</h3>
                          <p className="text-lg text-indigo-600 font-medium">{exp.role}</p>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 mt-2 lg:mt-0">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-700 mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">{t.projectsTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video bg-slate-200 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                          <EyeIcon className="w-4 h-4" />
                          <span className="text-sm">{t.viewProject}</span>
                        </a>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <span>{project.company}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div>
                      <div className="text-xs text-slate-500 mb-2 font-medium">{t.techStack}:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div>
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">{t.skillsTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <CodeBracketIcon className="w-8 h-8 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-800">{t.frontend}</h3>
                </div>
                <div className="space-y-3">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Styling */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-sm">CSS</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{t.styling}</h3>
                </div>
                <div className="space-y-3">
                  {skills.styling.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">API</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{t.backend}</h3>
                </div>
                <div className="space-y-3">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">DEV</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{t.tools}</h3>  
                </div>
                <div className="space-y-3">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Languages */}
              <div className="bg-white rounded-2xl p-8 shadow-lg md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <LanguageIcon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800">{t.languages}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skills.languages.map((lang, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">
                          {lang.name.charAt(0)}
                        </span>  
                      </div>
                      <h4 className="font-medium text-slate-800 mb-1">{lang.name}</h4>
                      <p className="text-sm text-slate-600">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 text-slate-300 mb-6">
            <a 
              href="mailto:a0972199950@gmail.com" 
              className="hover:text-white transition-colors duration-200"
            >
              <EnvelopeIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/a0972199950" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <GlobeAltIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/john-hsieh/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <UserGroupIcon className="w-6 h-6" />
            </a>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">{t.contact}</h3>
          <p className="text-slate-400 text-sm">
            © 2026 John Hsieh. {locale === 'zh-TW' ? '使用 Next.js 14 + TailwindCSS 製作' : 'Built with Next.js 14 + TailwindCSS'}
          </p>
        </div>
      </footer>
    </div>
  )
}