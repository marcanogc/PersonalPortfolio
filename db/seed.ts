import { db } from "./index";
import { Pool } from '@neondatabase/serverless';
import { projects } from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Starting to seed database...");

    // Check if projects already exist to avoid duplicates
    const existingProjects = await db.query.projects.findMany();
    
    if (existingProjects.length > 0) {
      console.log(`Found ${existingProjects.length} existing projects. Skipping seeding.`);
      return;
    }

    // Seed project data
    const projectsData = [
      {
        name: "Dashboard Analítico",
        description: "Dashboard interactivo para visualización de métricas de ventas y rendimiento comercial.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["React", "Chart.js", "Tailwind"],
        githubUrl: "https://github.com/example/dashboard",
        demoUrl: "https://example.com/dashboard-demo"
      },
      {
        name: "Reporte de Ventas",
        description: "Informe interactivo en Power BI para análisis de ventas y tendencias de mercado.",
        category: "bi",
        imageUrl: "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Power BI", "DAX", "SQL"],
        reportUrl: "https://example.com/report.pdf",
        demoUrl: "https://example.com/bi-demo"
      },
      {
        name: "API de E-commerce",
        description: "API REST completa para gestión de productos, usuarios y pedidos en e-commerce.",
        category: "backend",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Node.js", "Express", "MongoDB"],
        githubUrl: "https://github.com/example/ecommerce-api",
        docsUrl: "https://example.com/api-docs"
      },
      {
        name: "Análisis Predictivo",
        description: "Modelo de ML para predecir comportamiento de clientes basado en históricos de compra.",
        category: "dados",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Python", "Pandas", "Scikit-learn"],
        githubUrl: "https://github.com/example/predictive-model",
        reportUrl: "https://example.com/analysis-report.pdf"
      },
      {
        name: "Reserva App",
        description: "Aplicación para gestionar reservas en restaurantes con sistema de notificaciones.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["React", "Firebase", "CSS BEM"],
        githubUrl: "https://github.com/example/reserva-app",
        demoUrl: "https://example.com/reserva-demo"
      },
      {
        name: "Marketing Analytics",
        description: "Dashboard para análisis de campañas publicitarias y retorno de inversión.",
        category: "bi",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Power BI", "Google Analytics", "Excel"],
        reportUrl: "https://example.com/marketing-report.pdf",
        demoUrl: "https://example.com/marketing-demo"
      }
    ];

    // Insert projects into the database
    const insertedProjects = await db.insert(projects).values(projectsData).returning();
    
    console.log(`✅ Successfully seeded ${insertedProjects.length} projects.`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
  // We don't need to close the connection as it's managed by the app
}

seed();
