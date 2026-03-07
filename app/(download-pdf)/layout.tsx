'use client'

import { ReactNode } from 'react'

interface DownloadPDFLayoutProps {
  children: ReactNode
}

export default function DownloadPDFLayout({ children }: DownloadPDFLayoutProps) {
  const handleDownloadPDF = () => {
    // 使用瀏覽器的列印功能來生成PDF
    window.print()
  }

  return (
    <div className="relative min-h-screen">
      {children}
      
      {/* PDF 下載按鈕 - 固定在右下角 */}
      <button
        onClick={handleDownloadPDF}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-50 group"
        title="下載為 PDF"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span className="sr-only">下載 PDF</span>
        
        {/* 工具提示 */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          下載為 PDF
        </div>
      </button>
    </div>
  )
}