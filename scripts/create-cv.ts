import db from '@/lib/db'
import { eq } from 'drizzle-orm'
import { v7 as uuid } from 'uuid'
import { resumes } from '@/lib/db/schemas'
import fs from 'fs'
import path from 'path'

const run = async () => {
  // 獲取命令列參數
  let company = process.argv[2]
  
  if (!company) {
    company = new Date().toISOString()
    console.log(`⚠️  沒有提供公司名稱，將使用當前時間作為名稱：${company}`)
  }

  const id = uuid()

  try {
    await db.insert(resumes).values({
      id,
      company: company,
    })

    fs.mkdirSync(path.join(process.cwd(), `./app/(download-pdf)${id}/en`), { recursive: true })
    fs.mkdirSync(path.join(process.cwd(), `./app/(download-pdf)${id}/zh-TW`), { recursive: true })

    fs.writeFileSync(
      path.join(process.cwd(), `./app/(download-pdf)${id}/jd.md`),
      '',
      'utf-8'
    )

    fs.writeFileSync(
      path.join(process.cwd(), `./app/(download-pdf)${id}/en/page.tsx`),
      '',
      'utf-8'
    )

    fs.writeFileSync(
      path.join(process.cwd(), `./app/(download-pdf)${id}/zh-TW/page.tsx`),
      '',
      'utf-8'
    )

    console.log(`✅ 成功創建履歷記錄：${company}`)
    console.log(`📄 履歷 ID：${id}`)
  } catch (err) {
    console.error('❌ 創建文件時發生錯誤:', err)
    await db.delete(resumes).where(eq(resumes.id, id))
    console.log('🗑️  已清理資料庫記錄')
  }
}

run()


