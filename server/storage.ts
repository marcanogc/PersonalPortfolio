import { db } from "@db";
import { projects, contacts, Project, Contact, ContactInsert } from "@shared/schema";

// Contact form data type that matches our schema validation
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Project related functions
export const storage = {
  // Get all projects
  async getAllProjects(): Promise<Project[]> {
    try {
      return await db.query.projects.findMany({
        orderBy: (projects, { desc }) => [desc(projects.createdAt)]
      });
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
      
      return await db.query.projects.findMany({
        where: (projects, { eq }) => eq(projects.category, category),
        orderBy: (projects, { desc }) => [desc(projects.createdAt)]
      });
    } catch (error) {
      console.error(`Error fetching projects by category ${category}:`, error);
      throw new Error("Failed to fetch projects by category");
    }
  },

  // Get a project by ID
  async getProjectById(id: number): Promise<Project | null> {
    try {
      const project = await db.query.projects.findFirst({
        where: (projects, { eq }) => eq(projects.id, id)
      });
      
      // Return null if project is undefined
      return project || null;
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
      
      const [contact] = await db.insert(contacts).values(contactData).returning();
      
      return contact;
    } catch (error) {
      console.error("Error saving contact submission:", error);
      throw new Error("Failed to save contact submission");
    }
  }
};
