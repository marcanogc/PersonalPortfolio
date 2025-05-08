import { pgTable, text, serial, integer, json, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Project table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "web", "bi", "backend", "dados"
  imageUrl: text("image_url").notNull(),
  technologies: json("technologies").$type<string[]>().notNull(),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  reportUrl: text("report_url"),
  docsUrl: text("docs_url"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

// Contact table for storing contact form submissions
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
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
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
