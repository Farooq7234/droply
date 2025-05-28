import { integer, pgTable, text, uuid, boolean, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const files = pgTable('files', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    path: text("path").notNull(), // documents/projects/resume.pdf
    size: integer('size').notNull(),
    type: text('type').notNull(), // "folder"

    //storage information
    fileUrl: text('file_url'), // url to access the file
    thumbnailUrl: text('thumbnail_url'),

    // Owner information
    userId: text('user_id').notNull(),
    parentId: uuid('parent_id'), // parent folder id, null if it's a root folder

    // file/folder flags
    isFolder: boolean('is_folder').notNull().default(false),
    isStarred: boolean('is_starred').notNull().default(false),
    isTrash: boolean('is_trash').notNull().default(false),

    // Timestamps
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const filesRelations = relations(files, ({ one, many }) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id],
    }),
    // relationship to children files/folders
    children: many(files),
}));

export type File = typeof files.$inferSelect;
export type NewFile = typeof files.$inferInsert;