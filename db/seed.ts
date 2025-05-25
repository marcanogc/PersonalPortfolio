import { db } from "./index";
import { projects } from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Starting to seed database...");

    // Check existing projects
    const existingProjects = await db.query.projects.findMany();
    if (existingProjects.length > 0) {
      console.log(`⏩ Found ${existingProjects.length} existing projects. Skipping seeding.`);
      return;
    }

    // Proyectos actualizados
    const now = new Date().toISOString();
    const projectsData = [
      {
        name: "Análise de Market Basket Analysis",
        description: "Segmentação comportamental para estratégias de upsell. Impacto: +22% retenção de clientes | +10% vendas recorrentes",
        name_es: "Análisis de Market Basket",
        name_en: "Market Basket Analysis",
        name_pt: "Análise de Market Basket Analysis",
        description_es: "Segmentación conductual para estrategias de upsell. Impacto: +22% retención de clientes | +10% ventas recurrentes",
        description_en: "Behavioral segmentation for upsell strategies. Impact: +22% customer retention | +10% recurring sales",
        description_pt: "Segmentação comportamental para estratégias de upsell. Impacto: +22% retenção de clientes | +10% vendas recorrentes",
        category: "data",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        technologies: ["Python", "Machine Learning", "SQL", "Power BI"],
        githubUrl: "https://github.com/marcanogc/Recuperacao-de-Clientes-com-Market-Basket-Analysis",
        reportUrl: "https://www.notion.so/An-lise-de-Dados-com-a-Metodologia-de-Market-Basket-Analysis-188bf5073b6980009a8dfe21ec119f9a",
        createdAt: now
      },
      {
        name: "Otimização Logística Data-Driven",
        description: "Dashboard executivo com alertas em tempo real. Insight Chave: 65% dos atrasos ocorrem em janelas de alta pressão psicológica. Impacto: 40% aumento na satisfação de entregadores",
        name_es: "Optimización Logística Data-Driven",
        name_en: "Data-Driven Logistics Optimization",
        name_pt: "Otimização Logística Data-Driven",
        description_es: "Panel ejecutivo con alertas en tiempo real. Insight clave: 65% de los retrasos ocurren en ventanas de alta presión psicológica. Impacto: 40% aumento en satisfacción de repartidores",
        description_en: "Executive dashboard with real-time alerts. Key insight: 65% of delays occur in high psychological pressure windows. Impact: 40% increase in delivery personnel satisfaction",
        description_pt: "Dashboard executivo com alertas em tempo real. Insight Chave: 65% dos atrasos ocorrem em janelas de alta pressão psicológica. Impacto: 40% aumento na satisfação de entregadores",
        category: "bi",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        technologies: ["Airflow", "MySQL", "Python", "Tableau"],
        githubUrl: "",
        demoUrl: "https://www.notion.so/16dbf5073b698001ac37df0757033f87",
        createdAt: now
      },
      {
        name: "Pipeline ETL para Dados Bitcoin em Python",
        description: "Automação da coleta e armazenamento de preços do Bitcoin em tempo real. Insight Chave: 89% dos picos de compra seguem manchetes positivas. Impacto: Alertas preventivos para traders impulsivos",
        name_es: "Pipeline ETL para Datos Bitcoin en Python",
        name_en: "Bitcoin Data ETL Pipeline in Python",
        name_pt: "Pipeline ETL para Dados Bitcoin em Python",
        description_es: "Automatización de recolección y almacenamiento de precios de Bitcoin en tiempo real. Insight clave: 89% de los picos de compra siguen titulares positivos. Impacto: Alertas preventivos para traders impulsivos",
        description_en: "Automation of real-time Bitcoin price collection and storage. Key insight: 89% of buying spikes follow positive headlines. Impact: Preventive alerts for impulsive traders",
        description_pt: "Automação da coleta e armazenamento de preços do Bitcoin em tempo real. Insight Chave: 89% dos picos de compra seguem manchetes positivas. Impacto: Alertas preventivos para traders impulsivos",
        category: "data",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
        technologies: ["Python", "Pandas", "SQLAlchemy", "Coinbase API", "Streamlit"],
        githubUrl: "https://github.com/marcanogc/ETLProjectAPIExtract",
        demoUrl: "",
        createdAt: now
      },
      {
        name: "Plataforma de Gestão Educacional FullStack",
        description: "Sistema completo para gestão de instituições educacionais com autenticação JWT, dashboard administrativo e relatórios personalizados",
        name_es: "Plataforma de Gestión Educativa FullStack",
        name_en: "Educational Management FullStack Platform",
        name_pt: "Plataforma de Gestão Educacional FullStack",
        description_es: "Sistema completo para gestión de instituciones educativas con autenticación JWT, panel administrativo e informes personalizados",
        description_en: "Complete system for educational institutions management with JWT authentication, admin dashboard and custom reports",
        description_pt: "Sistema completo para gestão de instituições educacionais com autenticação JWT, dashboard administrativo e relatórios personalizados",
        category: "fullstack",
        imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350",
        technologies: ["Node.js", "Express", "React", "MySQL", "JWT", "Material-UI"],
        githubUrl: "",
        demoUrl: "",
        createdAt: now
      },
      {
        name: "Sistema de Recomendação em Data Science",
        description: "Sistema de recomendação utilizando métricas de similaridade para recomendar co-proprietários de propriedades com base nas características dos usuários",
        name_es: "Sistema de Recomendación en Data Science",
        name_en: "Data Science Recommendation System",
        name_pt: "Sistema de Recomendação em Data Science",
        description_es: "Sistema de recomendación utilizando métricas de similitud para recomendar copropietarios de propiedades basado en características de usuarios",
        description_en: "Recommendation system using similarity metrics to recommend property co-owners based on user characteristics",
        description_pt: "Sistema de recomendação utilizando métricas de similaridade para recomendar co-proprietários de propriedades com base nas características dos usuários",
        category: "data",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "Matplotlib"],
        githubUrl: "https://github.com/marcanogc/Projeto_DS_Sistema_de_Recomendacao_Python",
        demoUrl: "",
        createdAt: now
      },
      {
        name: "Sistema de Cadastro FullStack com Autenticação",
        description: "Aplicação completa com frontend React, backend Node.js/Express e banco de dados PostgreSQL para cadastro de usuários com autenticação JWT e validação de documentos",
        name_es: "Sistema de Registro FullStack con Autenticación",
        name_en: "FullStack Registration System with Authentication",
        name_pt: "Sistema de Cadastro FullStack com Autenticação",
        description_es: "Aplicación completa con frontend React, backend Node.js/Express y base de datos PostgreSQL para registro de usuarios con autenticación JWT y validación de documentos",
        description_en: "Complete application with React frontend, Node.js/Express backend and PostgreSQL database for user registration with JWT authentication and document validation",
        description_pt: "Aplicação completa com frontend React, backend Node.js/Express e banco de dados PostgreSQL para cadastro de usuários com autenticação JWT e validação de documentos",
        category: "fullstack",
        imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        technologies: ["React", "Node.js", "Express", "SQLite", "JWT", "ViaCEP API", "CPF Hub.io"],
        githubUrl: "https://github.com/marcanogc/cadastro",
        demoUrl: "",
        createdAt: now
      }
    ];

    // Insert projects
    await db.insert(projects).values(projectsData);
    console.log(`✅ Successfully seeded ${projectsData.length} projects.`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

seed();