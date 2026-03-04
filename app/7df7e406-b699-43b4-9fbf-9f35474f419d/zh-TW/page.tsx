import { Metadata } from 'next'
import Resume from './Resume'

export const metadata: Metadata = {
  title: 'John Hsieh - 資深前端工程師 | Manus前端工程師履歷',
  description: '7年前端開發經驗，專精React/TypeScript/Next.js，曾任職TikTok與LINE Taiwan，具備AI產品開發經驗與國際團隊協作能力',
  keywords: 'React, TypeScript, Next.js, 前端工程師, AI產品, TikTok, LINE Taiwan, 新加坡',
}

export default function ResumePageZhTW() {
  return <Resume locale="zh-TW" />
}