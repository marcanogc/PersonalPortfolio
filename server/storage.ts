import { db } from "@db";
import { projects, contacts, Project, Contact, ContactInsert } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

// Contact form data type that matches our schema validation
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Helper function to parse the technologies string to an array
const parseTechnologies = (techs: string): string[] => {
  try {
    return JSON.parse(techs);
  } catch (error) {
    console.error("Error parsing technologies:", error);
    return [];
  }
};

// Helper to transform project data from SQLite (JSON strings) to the expected format
const transformProject = (project: any): Project => {
  if (!project) return project;
  
  return {
    ...project,
    technologies: parseTechnologies(project.technologies)
  };
};

// Project related functions
export const storage = {
  // Get all projects
  async getAllProjects(): Promise<Project[]> {
    try {
      const rawProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));
      // Transform technologies from JSON string to array
      return rawProjects.map(transformProject);
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw new Error("Failed to fetch projects");
    }
  },

  // Get projects by category
  async getProjectsByCategory(category: string): Promise<Project[]> {
    try {
      if (category === "all") {
        return await this.getAllProjects();
      }
      
      const rawProjects = await db.select()
        .from(projects)
        .where(eq(projects.category, category))
        .orderBy(desc(projects.createdAt));
      
      return rawProjects.map(transformProject);
    } catch (error) {
      console.error(`Error fetching projects by category ${category}:`, error);
      throw new Error("Failed to fetch projects by category");
    }
  },

  // Get a project by ID
  async getProjectById(id: number): Promise<Project | null> {
    try {
      const rawProject = await db.select()
        .from(projects)
        .where(eq(projects.id, id))
        .limit(1);
      
      // Return null if project is not found
      if (!rawProject.length) return null;
      
      // Transform technologies from JSON string to array
      return transformProject(rawProject[0]);
    } catch (error) {
      console.error(`Error fetching project with ID ${id}:`, error);
      throw new Error("Failed to fetch project");
    }
  },

  // Contact form related functions
  async saveContactSubmission(data: ContactFormData): Promise<Contact> {
    try {
      // Create a valid contact object matching our ContactInsert type
      const contactData: ContactInsert = {
        name: data.name,
        email: data.email,
        message: data.message,
        // Only include subject if it exists
        ...(data.subject ? { subject: data.subject } : {})
      };
      
      // For SQLite we need to handle createdAt differently
      const result = await db.insert(contacts).values(contactData);
      
      // Get the last inserted row ID
      const lastId = (result as any).lastInsertRowid;
      
      // Fetch the inserted contact
      const contact = await db.select()
        .from(contacts)
        .where(eq(contacts.id, lastId))
        .then(rows => rows[0]);
      
      return contact as Contact;
    } catch (error) {
      console.error("Error saving contact submission:", error);
      throw new Error("Failed to save contact submission");
    }
  }
};
