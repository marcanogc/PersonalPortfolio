import { mysqlTable, varchar, int, json, datetime, serial } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Project table
export const projects = mysqlTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  name_es: varchar("name_es", { length: 255 }),
  name_en: varchar("name_en", { length: 255 }),
  name_pt: varchar("name_pt", { length: 255 }),
  description: varchar("description", { length: 1024 }).notNull(),
  description_es: varchar("description_es", { length: 1024 }),
  description_en: varchar("description_en", { length: 1024 }),
  description_pt: varchar("description_pt", { length: 1024 }),
  category: varchar("category", { length: 50 }).notNull(), // "web", "bi", "backend", "dados"
  imageUrl: varchar("image_url", { length: 1024 }).notNull(),
  technologies: json("technologies").$type<string[]>().notNull(),
  githubUrl: varchar("github_url", { length: 1024 }),
  demoUrl: varchar("demo_url", { length: 1024 }),
  reportUrl: varchar("report_url", { length: 1024 }),
  docsUrl: varchar("docs_url", { length: 1024 }),
  createdAt: datetime("created_at", { fsp: 6 }).default(new Date()).notNull()
});

// Contact table for storing contact form submissions
export const contacts = mysqlTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }),
  message: varchar("message", { length: 1024 }).notNull(),
  createdAt: datetime("created_at", { fsp: 6 }).default(new Date()).notNull()
});

// Insert schemas with validation
export const projectInsertSchema = createInsertSchema(projects, {
  name: (schema) => schema.min(2, "Project name must be at least 2 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  category: (schema) => schema.refine(
    val => ["web", "bi", "backend", "dados"].includes(val), 
    "Category must be one of: web, bi, backend, dados"
  ),
  technologies: (schema) => z.array(z.string()).min(1, "At least one technology is required")
});

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

// Auth-related schemas from original file, kept but not used for this portfolio project
export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
