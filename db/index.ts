import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from "@shared/schema";
import * as path from 'path';

// Create or connect to SQLite database
const sqlite = new Database(path.resolve(process.cwd(), 'portfolio.db'));

// Create tables if they don't exist (SQLite specific)
// Projects table
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT NOT NULL,
    technologies TEXT NOT NULL,
    github_url TEXT,
    demo_url TEXT,
    report_url TEXT,
    docs_url TEXT,
    created_at INTEGER NOT NULL DEFAULT (unixepoch())
  )
`);

// Contacts table
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at INTEGER NOT NULL DEFAULT (unixepoch())
  )
`);

// Users table
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

// Init Drizzle ORM instance
export const db = drizzle(sqlite, { schema });