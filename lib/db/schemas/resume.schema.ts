import { pgTable, uuid, text, timestamp, boolean } from 'drizzle-orm/pg-core'

export const resumes = pgTable('resumes', {
  id: uuid('id').primaryKey().defaultRandom(),

  jdUrl: text('jd_url'),

  company: text('company'),

  // 是否有拿到面試
  hasInterview: boolean('has_interview').notNull().default(false),

  // 是否有拿到 offer
  hasOffer: boolean('has_offer').notNull().default(false),

  createdAt: timestamp('created_at').defaultNow(),

  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()),
})

export type Resume = typeof resumes.$inferSelect
