import { sqliteTable, text, integer, blob } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Project table
export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "web", "bi", "backend", "dados"
  imageUrl: text("image_url").notNull(),
  technologies: text("technologies").notNull(), // SQLite doesn't have a native JSON type, so we'll stringify/parse
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  reportUrl: text("report_url"),
  docsUrl: text("docs_url"),
  createdAt: integer("created_at").notNull().default(sql`(strftime('%s', 'now'))`)
});

// Contact table for storing contact form submissions
export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: integer("created_at").notNull().default(sql`(strftime('%s', 'now'))`)
});

// Insert schemas with validation
export const projectInsertSchema = createInsertSchema(projects, {
  name: (schema) => schema.min(2, "Project name must be at least 2 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  category: (schema) => schema.refine(
    val => ["web", "bi", "backend", "dados"].includes(val), 
    "Category must be one of: web, bi, backend, dados"
  ),
  // Handling technologies as a stringified array
  technologies: (schema) => z.string().transform((val) => {
    try {
      const parsed = JSON.parse(val);
      return Array.isArray(parsed) ? parsed : [val];
    } catch {
      return [val];
    }
  })
}).omit({ technologies: true }).merge(z.object({
  technologies: z.array(z.string()).min(1, "At least one technology is required")
}));

export const contactInsertSchema = createInsertSchema(contacts, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Please provide a valid email address"),
  message: (schema) => schema.min(10, "Message must be at least 10 characters")
});

// TypeScript types
export type Project = typeof projects.$inferSelect;
export type ProjectInsert = z.infer<typeof projectInsertSchema>;

export type Contact = typeof contacts.$inferSelect;
export type ContactInsert = z.infer<typeof contactInsertSchema>;

// Auth-related schemas from original file, adapted for SQLite
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
