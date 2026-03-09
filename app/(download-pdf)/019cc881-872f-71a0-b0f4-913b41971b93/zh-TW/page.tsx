import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'John Hsieh - 資深前端工程師 | Meta Manus 團隊應徵',
  description: '擁有 7 年以上 React、TypeScript 及現代網頁開發經驗的前端工程師。目前任職於 ByteDance，曾任職於 LINE Taiwan。期待加入 Meta Manus 團隊開發前沿 AI 驅動產品。',
  keywords: '前端工程師, React, TypeScript, JavaScript, AI 工具, Meta, Manus, ByteDance, TikTok, LINE, Next.js, Vue.js, 國際團隊, 中文, 英文',
  openGraph: { images: ['/avatar.jpg'] },
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2 bg-white rounded-lg shadow-sm p-1">
            <Link href="/019cc881-872f-71a0-b0f4-913b41971b93/en" className="text-gray-600 hover:text-blue-500 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
              EN
            </Link>
            <span className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium">中文</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.lazy-cv.com/avatar.jpg" 
                alt="John Hsieh" 
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">John Hsieh</h1>
              <p className="text-xl text-blue-600 font-medium mb-4">資深前端工程師</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                7 年前端開發經驗，專精於 React（Next.js）、Vue（Nuxt.js）和 TypeScript。
                目前任職於 ByteDance 新加坡，曾任職於 LINE Taiwan。對 AI 驅動的開發工具充滿熱忱，
                專注於為全球用戶打造可擴展的網頁應用程式。
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  新加坡
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
            核心技術能力
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Technologies */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                前端開發技術
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
                AI 與開發工具
              </h3>
              <div className="space-y-3">
                {[
                  { skill: 'AI 輔助開發', level: 85 },
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
                語言能力
              </h3>
              <div className="space-y-3">
                {[
                  { skill: '中文（母語）', level: 100 },
                  { skill: '英文（流利）', level: 85 },
                  { skill: '日文（商務）', level: 80 }
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
            工作經歷
          </h2>

          {/* ByteDance */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">軟體工程師</h3>
                <p className="text-lg text-blue-600 font-medium">ByteDance Ltd.（TikTok）</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                2024年11月 - 至今
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">新加坡</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                隸屬於用戶增長團隊，開發 TikTok 廣告投放平台的財務系統。
                使用 React 和內部框架構建可擴展的應用程式，支援各大平台的廣告投放，
                直接貢獻於用戶獲取增長目標的實現。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', '財務系統', '廣告技術', '用戶增長', '內部框架'].map((tech, index) => (
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
                <h3 className="text-xl font-bold text-gray-900">軟體工程師暨技術主管</h3>
                <p className="text-lg text-green-600 font-medium">LINE Taiwan</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                2021年8月 - 2024年10月（3年）
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">台北，台灣</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>前端開發（50%）：</strong>使用 Vue SSR、GraphQL 和 TypeScript 開發服務數百萬用戶的 LINE 購物平台。
                維持高程式碼品質標準，每項變更皆須經過強制程式碼審查。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>技術領導（40%）：</strong>帶領 4 人團隊將 CMS 系統從 PHP 重構至 React & Next.js，
                實現前後端分離並減輕後端團隊工作負擔。指導 2 位新進團隊成員並獲得正面回饋。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>標準制定（10%）：</strong>參與 JavaScript Task Force 制定公司前端開發準則，
                導入 Lighthouse CI 進行跨團隊效能監控。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'React', 'Next.js', 'TypeScript', 'GraphQL', '團隊領導', '指導培訓', '程式碼審查', '效能優化'].map((tech, index) => (
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
                <h3 className="text-xl font-bold text-gray-900">前端工程師（顧問）</h3>
                <p className="text-lg text-purple-600 font-medium">AI.Book</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                2021年9月 - 2024年10月（3年）
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">遠端工作</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                獨立開發完整的線上相片書編輯器，從零開始於 6 個月內成功上線。
                建構支援相片操作、文字編輯、跨平台相容性的網頁設計工具，
                並提供 PWA 安裝功能實現類原生應用體驗。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'Nuxt.js', 'PWA', '相片編輯器', '跨平台', '獨立開發'].map((tech, index) => (
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
                <h3 className="text-xl font-bold text-gray-900">前端工程師（顧問）</h3>
                <p className="text-lg text-orange-600 font-medium">FundFluent</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                2021年1月 - 2021年9月
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">遠端工作</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                為金融科技平台建構全面的前端系統，包括 UI Kit、中小企業入口和合作夥伴入口。
                使用 TypeScript 創建可重複使用的 React 元件，
                建立跨多個金融產品的一致設計模式。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'UI Kit', '金融科技', '元件庫', '設計系統'].map((tech, index) => (
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
                <h3 className="text-xl font-bold text-gray-900">全端工程師</h3>
                <p className="text-lg text-red-600 font-medium">Foxit Software</p>
              </div>
              <div className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                2020年2月 - 2021年7月（1年5個月）
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">台北，台灣</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 leading-relaxed">
                開發全端網頁應用程式和 PDF 處理工具，同時領導小型開發團隊。
                致力於文件管理解決方案和協作工具，
                累積前端和後端開發的豐富經驗。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'Node.js', 'Express', 'MongoDB', 'PDF 處理', '團隊領導'].map((tech, index) => (
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
            重點專案經歷
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
              <h3 className="font-bold text-gray-900 mb-2">TikTok 財務系統</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                開發支援 TikTok 廣告平台的可擴展財務系統，
                支持全球市場用戶獲取增長策略的實現。
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">廣告技術</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">金融科技</span>
              </div>
            </div>

            {/* LINE Shopping CMS */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V9zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0v-4zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0v-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">LINE 購物 CMS 重構</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                帶領團隊從 PHP 遷移至 React & Next.js 架構，
                成為 LINE Taiwan 早期採用 Next.js app router 的專案之一。
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">團隊領導</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">系統遷移</span>
              </div>
            </div>

            {/* AI.Book Editor */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI.Book 相片編輯器</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                從零開始建構功能完整的線上相片書編輯器，
                支援拖放操作、文字編輯和跨平台 PWA 體驗。
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Vue.js</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">PWA</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">編輯器</span>
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
            成就與資格認證
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">主要成就</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">成功領導 LINE 購物 CMS 遷移至 Next.js 架構</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">在 LINE Taiwan 前端團隊導入 Lighthouse CI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">在 AI.Book 建構服務數千用戶的相片編輯器</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">在 LINE Taiwan 成功指導 2 位初級開發者</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">專業資格</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">7 年以上專業前端開發經驗</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">日本語能力測驗 N1 認證</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">AI 輔助開發工具與工作流程經驗</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">國際化分散式團隊合作實績</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
