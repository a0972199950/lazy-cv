'use server'

import { eq, desc } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import db from '@/lib/db'
import { resumes } from '@/lib/db/schemas'

// 獲取所有履歷資料
export async function getResumes() {
  try {
    const result = await db.select().from(resumes).orderBy(desc(resumes.createdAt))
    return { success: true, data: result }
  } catch (error) {
    console.error('Error fetching resumes:', error)
    return { success: false, error: 'Failed to fetch resumes' }
  }
}

// 更新履歷
export async function updateResume(id: string, data: { jdUrl: string; company: string }) {
  try {
    const result = await db
      .update(resumes)
      .set({
        jdUrl: data.jdUrl,
        company: data.company,
        updatedAt: new Date(),
      })
      .where(eq(resumes.id, id))
      .returning()
    
    revalidatePath('/')
    return { success: true, data: result[0] }
  } catch (error) {
    console.error('Error updating resume:', error)
    return { success: false, error: 'Failed to update resume' }
  }
}

// 刪除履歷
export async function deleteResume(id: string) {
  try {
    await db.delete(resumes).where(eq(resumes.id, id))
    
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error deleting resume:', error)
    return { success: false, error: 'Failed to delete resume' }
  }
}