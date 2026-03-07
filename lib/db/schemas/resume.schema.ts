import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const resumes = pgTable('resumes', {
  id: uuid('id').primaryKey().defaultRandom(),

  jdUrl: text('jd_url'),

  company: text('company'),

  createdAt: timestamp('created_at').defaultNow(),

  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()),
})

export type Resume = typeof resumes.$inferSelect
