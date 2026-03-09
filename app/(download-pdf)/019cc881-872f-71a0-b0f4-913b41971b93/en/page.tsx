import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'John Hsieh - Senior Frontend Engineer | Meta Manus Team Application',
  description: 'Experienced Frontend Engineer with 7+ years in React, TypeScript, and modern web development. Currently at ByteDance, previously at LINE Taiwan. Seeking opportunities with Meta Manus team to build cutting-edge AI-powered products.',
  keywords: 'Frontend Engineer, React, TypeScript, JavaScript, AI tools, Meta, Manus, ByteDance, TikTok, LINE, Next.js, Vue.js, International team, Mandarin, English',
  openGraph: { images: ['/avatar.jpg'] },
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2 bg-white rounded-lg shadow-sm p-1">
            <span className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium">EN</span>
            <Link href="/019cc881-872f-71a0-b0f4-913b41971b93/zh-TW" className="text-gray-600 hover:text-blue-500 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
              中文
            </Link>
          </div>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="https://images.cakeresume.com/krYgP/john_hsieh_en/d8711a91-565c-4b67-9fde-7a4a2dc99db6.png" 
                alt="John Hsieh" 
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">John Hsieh</h1>
              <p className="text-xl text-blue-600 font-medium mb-4">Senior Frontend Engineer</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                7+ years of frontend development experience with expertise in React (Next.js), Vue (Nuxt.js), and TypeScript. 
                Currently at ByteDance Singapore, previously at LINE Taiwan. Passionate about AI-powered development tools and 
                building scalable web applications for global audiences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Singapore
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  a0972199950@gmail.com
                </div>
                <a href="https://github.com/a0972199950" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            Core Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Technologies */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Frontend Technologies
              </h3>
              <div className="space-y-3">
                {[
                  { skill: 'React & Next.js', level: 95 },
                  { skill: 'TypeScript', level: 90 },
                  { skill: 'Vue & Nuxt.js', level: 85 },
                  { skill: 'JavaScript (ES6+)', level: 95 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-gray-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Modern Tools */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                AI & Development Tools
              </h3>
              <div className="space-y-3">
                {[
                  { skill: 'AI-powered Development', level: 85 },
                  { skill: 'GraphQL', level: 80 },
                  { skill: 'TailwindCSS', level: 90 },
                  { skill: 'Webpack & Vite', level: 75 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-gray-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Languages
              </h3>
              <div className="space-y-3">
                {[
                  { skill: 'Mandarin (Native)', level: 100 },
                  { skill: 'English (Fluent)', level: 85 },
                  { skill: 'Japanese (Business)', level: 80 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-gray-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            Professional Experience
          </h2>

          {/* ByteDance */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
                <p className="text-lg text-blue-600 font-medium">ByteDance Ltd. (TikTok)</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                Nov 2024 - Present
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Singapore</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                Part of the User Growth team developing financial systems for TikTok's advertising platform. 
                Building scalable React applications using internal frameworks to support ad delivery across major platforms, 
                directly contributing to user acquisition growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Financial Systems', 'Ad Tech', 'User Growth', 'Internal Frameworks'].map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LINE Taiwan */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Software Engineer & Tech Lead</h3>
                <p className="text-lg text-green-600 font-medium">LINE Taiwan</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                Aug 2021 - Oct 2024 (3 years)
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Taipei, Taiwan</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Frontend Development (50%): </strong>Developed LINE Shopping platform serving millions of users using Vue SSR, GraphQL, and TypeScript. 
                Maintained high code quality standards with mandatory code reviews for every change.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Technical Leadership (40%): </strong>Led a 4-person team to refactor the CMS system from PHP to React & Next.js, 
                achieving frontend-backend separation and reducing backend team workload. Mentored 2 new team members with positive feedback.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Standards Development (10%): </strong>Contributed to JavaScript Task Force establishing company-wide frontend guidelines, 
                introduced Lighthouse CI for performance monitoring across all teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'React', 'Next.js', 'TypeScript', 'GraphQL', 'Team Leadership', 'Mentoring', 'Code Reviews', 'Performance Optimization'].map((tech, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* AI.Book */}
          <div className="mb-8 border-l-4 border-purple-500 pl-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Frontend Engineer (Consultant)</h3>
                <p className="text-lg text-purple-600 font-medium">AI.Book</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                Sep 2021 - Oct 2024 (3 years)
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Remote</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                Independently developed a comprehensive online photo book editor from scratch, launching within 6 months. 
                Built a web-based design tool supporting photo manipulation, text editing, cross-platform compatibility, 
                and PWA installation for native app-like experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'Nuxt.js', 'PWA', 'Photo Editor', 'Cross-platform', 'Independent Development'].map((tech, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* FundFluent */}
          <div className="mb-8 border-l-4 border-orange-500 pl-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Frontend Engineer (Consultant)</h3>
                <p className="text-lg text-orange-600 font-medium">FundFluent</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                Jan 2021 - Sep 2021
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Remote</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                Built comprehensive frontend systems for a fintech platform including UI Kit, SME Portal, and Partner Portal. 
                Created reusable React components with TypeScript, establishing consistent design patterns across multiple financial products.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'UI Kit', 'FinTech', 'Component Library', 'Design Systems'].map((tech, index) => (
                <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Foxit */}
          <div className="border-l-4 border-red-500 pl-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Full Stack Engineer</h3>
                <p className="text-lg text-red-600 font-medium">Foxit Software</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                Feb 2020 - Jul 2021 (1 year 5 months)
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Taipei, Taiwan</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                Developed full-stack web applications and PDF processing tools while leading a small development team. 
                Worked with document management solutions and collaboration tools, gaining experience in both frontend and backend development.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'Node.js', 'Express', 'MongoDB', 'PDF Processing', 'Team Leadership'].map((tech, index) => (
                <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Projects Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TikTok User Growth */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 7.859c0-.255.07-.481.433-.441z" />
                  <path fillRule="evenodd" d="M11 14L5 11V5l6-3 6 3v6l-6 3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">TikTok Financial Systems</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Developing scalable financial systems for TikTok's advertising platform, supporting user acquisition growth across global markets.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Ad Tech</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">FinTech</span>
              </div>
            </div>

            {/* LINE Shopping CMS */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V9zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0v-4zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0v-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">LINE Shopping CMS Refactor</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Led team migration from PHP to React & Next.js architecture, one of LINE Taiwan's early Next.js app router implementations.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Leadership</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Migration</span>
              </div>
            </div>

            {/* AI.Book Editor */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI.Book Photo Editor</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Built comprehensive online photo book editor with drag-and-drop, text editing, and cross-platform PWA support from scratch.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Vue.js</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">PWA</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Editor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            Achievements & Qualifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Led successful migration of LINE Shopping CMS to Next.js architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Introduced Lighthouse CI across LINE Taiwan frontend teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Built photo editor serving thousands of users at AI.Book</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Successful mentorship of 2 junior developers at LINE Taiwan</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Professional Qualifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">7+ years of professional frontend development experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">JLPT N1 Japanese Language Proficiency Certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Experience with AI-powered development tools and workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Proven track record in international, distributed teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}