import db from '@/lib/db'
import { resumes } from '@/lib/db/schemas'
import { desc } from 'drizzle-orm'

const run = async () => {
  const result = await db.select().from(resumes).orderBy(desc(resumes.createdAt))

  if (result.length === 0) {
    console.log('目前資料庫中沒有任何已產生履歷（已投遞）的職缺紀錄。')
    return
  }

  console.log(`已投遞 / 已產生履歷的職缺共 ${result.length} 筆：\n`)

  for (const r of result) {
    console.log(`- 公司：${r.company ?? 'N/A'} | JD網址：${r.jdUrl ?? 'N/A'}`)
  }
}

run()
