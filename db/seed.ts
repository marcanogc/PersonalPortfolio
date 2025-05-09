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
        description: "Dashboard interativo para visualização de métricas de vendas e desempenho comercial.",
        name_es: "Dashboard Analítico",
        name_en: "Analytical Dashboard",
        name_pt: "Dashboard Analítico",
        description_es: "Dashboard interactivo para visualización de métricas de ventas y rendimiento comercial.",
        description_en: "Interactive dashboard for visualizing sales metrics and business performance.",
        description_pt: "Dashboard interativo para visualização de métricas de vendas e desempenho comercial.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["React", "Chart.js", "Tailwind"],
        githubUrl: "https://github.com/example/dashboard",
        demoUrl: "https://example.com/dashboard-demo"
      },
      {
        name: "Relatório de Vendas",
        description: "Relatório interativo em Power BI para análise de vendas e tendências de mercado.",
        name_es: "Reporte de Ventas",
        name_en: "Sales Report",
        name_pt: "Relatório de Vendas",
        description_es: "Informe interactivo en Power BI para análisis de ventas y tendencias de mercado.",
        description_en: "Interactive Power BI report for sales analysis and market trends.",
        description_pt: "Relatório interativo em Power BI para análise de vendas e tendências de mercado.",
        category: "bi",
        imageUrl: "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Power BI", "DAX", "SQL"],
        reportUrl: "https://example.com/report.pdf",
        demoUrl: "https://example.com/bi-demo"
      },
      {
        name: "API de E-commerce",
        description: "API REST completa para gestão de produtos, usuários e pedidos em e-commerce.",
        name_es: "API de E-commerce",
        name_en: "E-commerce API",
        name_pt: "API de E-commerce",
        description_es: "API REST completa para gestión de productos, usuarios y pedidos en e-commerce.",
        description_en: "Full REST API for managing products, users, and orders in e-commerce.",
        description_pt: "API REST completa para gestão de produtos, usuários e pedidos em e-commerce.",
        category: "backend",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Node.js", "Express", "MongoDB"],
        githubUrl: "https://github.com/example/ecommerce-api",
        docsUrl: "https://example.com/api-docs"
      },
      {
        name: "Análise Preditiva",
        description: "Modelo de ML para prever o comportamento do cliente com base no histórico de compras.",
        name_es: "Análisis Predictivo",
        name_en: "Predictive Analysis",
        name_pt: "Análise Preditiva",
        description_es: "Modelo de ML para predecir comportamiento de clientes basado en históricos de compra.",
        description_en: "ML model to predict customer behavior based on purchase history.",
        description_pt: "Modelo de ML para prever o comportamento do cliente com base no histórico de compras.",
        category: "dados",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Python", "Pandas", "Scikit-learn"],
        githubUrl: "https://github.com/example/predictive-model",
        reportUrl: "https://example.com/analysis-report.pdf"
      },
      {
        name: "Reserva App",
        description: "Aplicativo para gerenciar reservas em restaurantes com sistema de notificações.",
        name_es: "Reserva App",
        name_en: "Reservation App",
        name_pt: "Reserva App",
        description_es: "Aplicación para gestionar reservas en restaurantes con sistema de notificaciones.",
        description_en: "App to manage restaurant reservations with notification system.",
        description_pt: "Aplicativo para gerenciar reservas em restaurantes com sistema de notificações.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["React", "Firebase", "CSS BEM"],
        githubUrl: "https://github.com/example/reserva-app",
        demoUrl: "https://example.com/reserva-demo"
      },
      {
        name: "Marketing Analytics",
        description: "Dashboard para análise de campanhas publicitárias e retorno sobre investimento.",
        name_es: "Marketing Analytics",
        name_en: "Marketing Analytics",
        name_pt: "Marketing Analytics",
        description_es: "Dashboard para análisis de campañas publicitarias y retorno de inversión.",
        description_en: "Dashboard for analyzing advertising campaigns and ROI.",
        description_pt: "Dashboard para análise de campanhas publicitárias e retorno sobre investimento.",
        category: "bi",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        technologies: ["Power BI", "Google Analytics", "Excel"],
        reportUrl: "https://example.com/marketing-report.pdf",
        demoUrl: "https://example.com/marketing-demo"
      }
    ];

    // Insert projects into the database
    await db.insert(projects).values(projectsData);
    
    console.log(`✅ Successfully seeded ${projectsData.length} projects.`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
  // We don't need to close the connection as it's managed by the app
}

seed();
