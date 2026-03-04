import Image from "next/image";
import Link from "next/link";
import { 
  LanguageIcon,
  UserIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <UserIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            John Hsieh
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            資深軟體工程師 | Senior Software Engineer
          </p>
          <p className="text-lg text-slate-500">
            TikTok Singapore • LINE Taiwan • 7年前端開發經驗
          </p>
        </div>

        {/* Resume Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-16">
          
          {/* Chinese Resume */}
          <Link 
            href="/7df7e406-b699-43b4-9fbf-9f35474f419d/zh-TW"
            className="group relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <LanguageIcon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">中文履歷</h2>
                  <p className="text-slate-500">Traditional Chinese</p>
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>針對台灣市場優化</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>完整工作經歷與專案展示</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>技術技能詳細說明</span>
              </div>
            </div>
            
            <div className="mt-6 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium inline-block">
              適合台灣企業
            </div>
          </Link>

          {/* English Resume */}
          <Link 
            href="/7df7e406-b699-43b4-9fbf-9f35474f419d/en"
            className="group relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <GlobeAltIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">English Resume</h2>
                  <p className="text-slate-500">International Version</p>
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Optimized for global market</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>International experience highlight</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Technical skills showcase</span>
              </div>
            </div>
            
            <div className="mt-6 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium inline-block">
              For International Companies
            </div>
          </Link>
          
        </div>

        {/* Key Highlights */}
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">核心優勢 | Key Strengths</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">7+</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Years Experience</h4>
                <p className="text-slate-600 text-sm">前端開發經驗</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Tech Giants</h4>
                <p className="text-slate-600 text-sm">TikTok & LINE Taiwan</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Languages</h4>
                <p className="text-slate-600 text-sm">中文 | English | 日本語</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Built with Next.js 16 + TailwindCSS • © 2026 John Hsieh
          </p>
        </div>
        
      </main>
    </div>
  );
}
