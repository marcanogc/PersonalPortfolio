import { db } from "./index";
import { projects } from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Starting to seed database...");

    // Check if projects already exist to avoid duplicates
    const existingProjects = await db.select().from(projects);
    
    if (existingProjects.length > 0) {
      console.log(`Found ${existingProjects.length} existing projects. Skipping seeding.`);
      return;
    }

    // Seed project data with SQLite-compatible data structure
    // In SQLite we need to store the technologies as a JSON string
    const projectsData = [
      {
        name: "Dashboard Analítico",
        description: "Dashboard interactivo para visualización de métricas de ventas y rendimiento comercial.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: JSON.stringify(["React", "Chart.js", "Tailwind", "HTML5", "CSS3", "JavaScript"]),
        githubUrl: "https://github.com/example/dashboard",
        demoUrl: "https://example.com/dashboard-demo",
        createdAt: Date.now()
      },
      {
        name: "Reporte de Ventas",
        description: "Informe interactivo para análisis de ventas y tendencias de mercado.",
        category: "bi",
        imageUrl: "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: JSON.stringify(["JavaScript", "Chart.js", "HTML5", "CSS3", "SQLite"]),
        reportUrl: "https://example.com/report.pdf",
        demoUrl: "https://example.com/bi-demo",
        createdAt: Date.now()
      },
      {
        name: "API de E-commerce",
        description: "API REST completa para gestión de productos, usuarios y pedidos en e-commerce.",
        category: "backend",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: JSON.stringify(["Node.js", "Express", "SQLite", "JavaScript", "REST API"]),
        githubUrl: "https://github.com/example/ecommerce-api",
        docsUrl: "https://example.com/api-docs",
        createdAt: Date.now()
      },
      {
        name: "Análisis Predictivo",
        description: "Modelo para predecir comportamiento de clientes basado en históricos de compra.",
        category: "dados",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: JSON.stringify(["JavaScript", "Node.js", "SQLite", "Chart.js", "HTML5", "CSS3"]),
        githubUrl: "https://github.com/example/predictive-model",
        reportUrl: "https://example.com/analysis-report.pdf",
        createdAt: Date.now()
      },
      {
        name: "Reserva App",
        description: "Aplicación para gestionar reservas en restaurantes con sistema de notificaciones.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: JSON.stringify(["React", "Node.js", "CSS3", "HTML5", "JavaScript", "SQLite"]),
        githubUrl: "https://github.com/example/reserva-app",
        demoUrl: "https://example.com/reserva-demo",
        createdAt: Date.now()
      },
      {
        name: "Marketing Analytics",
        description: "Dashboard para análisis de campañas publicitarias y retorno de inversión.",
        category: "bi",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: JSON.stringify(["JavaScript", "HTML5", "CSS3", "SQLite", "Chart.js", "Node.js"]),
        reportUrl: "https://example.com/marketing-report.pdf",
        demoUrl: "https://example.com/marketing-demo",
        createdAt: Date.now()
      }
    ];

    // Insert projects into the database directly
    for (const projectData of projectsData) {
      try {
        await db.insert(projects).values({
          name: projectData.name,
          description: projectData.description,
          category: projectData.category,
          imageUrl: projectData.imageUrl,
          technologies: projectData.technologies,
          githubUrl: projectData.githubUrl || null,
          demoUrl: projectData.demoUrl || null,
          reportUrl: projectData.reportUrl || null,
          docsUrl: projectData.docsUrl || null,
          // Timestamp is handled by default
        });
      } catch (err) {
        console.error(`Error inserting project ${projectData.name}:`, err);
      }
    }
    
    console.log(`✅ Successfully seeded ${projectsData.length} projects.`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    console.error(error);
  }
  // We don't need to close the connection as it's managed by the app
}

seed();
