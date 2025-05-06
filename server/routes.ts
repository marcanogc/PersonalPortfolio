import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage, type ContactFormData } from "./storage";
import { contactInsertSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";

  // GET all projects
  app.get(`${apiPrefix}/projects`, async (req, res) => {
    try {
      const { category } = req.query;
      
      let projects;
      if (category && typeof category === 'string') {
        projects = await storage.getProjectsByCategory(category);
      } else {
        projects = await storage.getAllProjects();
      }
      
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Error fetching projects" });
    }
  });

  // GET a specific project by id
  app.get(`${apiPrefix}/projects/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      
      const project = await storage.getProjectById(id);
      
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      console.error(`Error fetching project with ID ${req.params.id}:`, error);
      res.status(500).json({ message: "Error fetching project" });
    }
  });

  // POST contact form submission
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      // Validate the request body using the contact schema
      const validatedData = contactInsertSchema.parse(req.body);
      
      // Create a contactFormData object compatible with our ContactFormData interface
      const contactFormData: ContactFormData = {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        // Only include subject if it's defined and not null
        ...(validatedData.subject ? { subject: validatedData.subject } : {})
      };
      
      // Save the contact submission
      const savedContact = await storage.saveContactSubmission(contactFormData);
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        contact: savedContact 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Error processing contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
