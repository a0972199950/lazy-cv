import { Metadata } from 'next'
import Resume from './Resume'

export const metadata: Metadata = {
  title: 'John Hsieh - Senior Software Engineer | Manus Frontend Engineer Resume',
  description: '7 years of frontend development experience, expert in React/TypeScript/Next.js, worked at TikTok and LINE Taiwan, with AI product development experience and international team collaboration skills',
  keywords: 'React, TypeScript, Next.js, Frontend Engineer, AI Products, TikTok, LINE Taiwan, Singapore',
}

export default function ResumePageEn() {
  return <Resume locale="en" />
}