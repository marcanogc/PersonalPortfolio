import { db } from "./index";
import { projects } from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Starting to seed database...");


    // Eliminar todos los proyectos existentes
    await db.delete(projects);
    console.log('🗑️ Todos los proyectos anteriores eliminados.');

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
        category: "Business Intelligence",
        imageUrl: "/Market.png",
        technologies: ["Python", "Machine Learning", "SQL", "Power BI", "Pandas", "Scikit-learn", "Data Analysis"],
        githubUrl: "https://github.com/marcanogc/Recuperacao-de-Clientes-com-Market-Basket-Analysis",
        reportUrl: "https://www.notion.so/An-lise-de-Dados-com-a-Metodologia-de-Market-Basket-Analysis-188bf5073b6980009a8dfe21ec119f9a",
        createdAt: now
      },
      {
        name: "Projetos de Análise de Dados e BI",
        description: "Dashboards executivos com alertas em tempo real em diversas areas Logistica, Control de Stock, Control Financiero, Comercial, Persupuestal, Gestión de Ventas y Flujo de Caja. Insight Chave: 70% de melhoria em eficiência operacional. Impacto: 25% redução de custos operacionais",
        name_es: "Proyectos de Análisis de Datos y BI",
        name_en: "Data Analysis and BI Projects",
        name_pt: "Projetos de Análise de Dados e BI",
        description_es: "Paneles ejecutivos con alertas en tiempo real en diversas areas Logistica, Control de Stock, Control Financiero, Comercial, Persupuestal, Gestión de Ventas y Flujo de Caja. Insight clave: 70% de mejora en eficiencia operativa. Impacto: 25% reducción de costos operativos",
        description_en: "Executive dashboards with real-time alerts across various areas: Logistics, Stock Control, Financial Control, Commercial, Budgeting, Sales Management, and Cash Flow. Key insight: 70% improvement in operational efficiency. Impact: 25% reduction in operational costs",
        description_pt: "Dashboards executivos com alertas em tempo real em diversas areas Logistica, Control de Stock, Control Financiero, Comercial, Persupuestal, Gestión de Ventas y Flujo de Caja. Insight Chave: 70% de melhoria em eficiência operacional. Impacto: 25% redução de custos operacionais",
        category: "Business Intelligence",
        imageUrl: "/All-Dahboard.png",
        technologies: ["SQL", "Power BI", "Excel", "Tableau", "ETL", "Data Visualization", "DAX", "Dashboards"],
        githubUrl: "",
        demoUrl: "https://www.notion.so/16dbf5073b698001ac37df0757033f87",
        createdAt: now
      },
      {
        name: "Forecasting de Vendas com IA e Streamlit",
        description: "Pipeline completo de previsão temporal: desde dados brutos até uma aplicação em produção. Inclui engenharia de variáveis temporais, lags, análise de Black Friday e treinamento de HistGradientBoostingRegressor. Impacto: +80% precisão nas previsões de vendas mensais",
        name_es: "Forecasting de Ventas con IA y Streamlit",
        name_en: "Forecasting Sales with AI and Streamlit",
        name_pt: "Forecasting de Vendas com IA e Streamlit",
        description_es: "Pipeline completo de previsión temporal: desde datos en bruto hasta una aplicación en producción. Incluye ingeniería de variables temporales, lags, análisis de Black Friday y entrenamiento de HistGradientBoostingRegressor. Impacto: +80% precisión en las previsiones de ventas mensuales",
        description_en: "Complete time series forecasting pipeline: from raw data to a production application. Includes temporal feature engineering, lags, Black Friday analysis, and training of HistGradientBoostingRegressor. Impact: +80% accuracy in monthly sales forecasts",
        description_pt: "Pipeline completo de previsão temporal: desde dados brutos até uma aplicação em produção. Inclui engenharia de variáveis temporais, lags, análise de Black Friday e treinamento de HistGradientBoostingRegressor. Impacto: +80% precisão nas previsões de vendas mensais",
        category: "Data Science",
        imageUrl: "/Forecasting.jpg",
        technologies: ["Python", "Scikit-Learn", "Seaborn", "Streamlit", "Holidays", "Pandas", "NumPy", "Matplotlib", "Forecasting", "Time Series", "HistGradientBoostingRegressor", "ETL"],
        githubUrl: "https://github.com/marcanogc/Forecasting",
        demoUrl: "https://simula-venda.streamlit.app/",
        createdAt: now
      },
      {
        name: "Previsão de Readmissão Hospitalar (ML aplicado à saúde)",
        description: "Modelo para prever readmissão hospitalar em até 30 dias, incluindo criação da variável alvo, tratamento de desbalanceamento, comparação de algoritmos (LogReg, RF, GBoost, XGBoost) e avaliação completa. Impacto: Redução de 15% nas readmissões",
        name_es: "Predicción de Reingreso Hospitalario (ML aplicado a la salud)",
        name_en: "Hospital Readmission Prediction (ML applied to healthcare)",
        name_pt: "Previsão de Readmissão Hospitalar (ML aplicado à saúde)",
        description_es: "Modelo para predecir el reingreso hospitalario en hasta 30 días, incluyendo creación de la variable objetivo, tratamiento del desequilibrio, comparación de algoritmos (LogReg, RF, GBoost, XGBoost) y evaluación completa. Impacto: Reducción del 15% en reingresos",
        description_en: "Model to predict hospital readmission within 30 days, including target variable creation, imbalance treatment, algorithm comparison (LogReg, RF, GBoost, XGBoost), and comprehensive evaluation. Impact: 15% reduction in readmissions",
        description_pt: "Modelo para prever readmissão hospitalar em até 30 dias, incluindo criação da variável alvo, tratamento de desbalanceamento, comparação de algoritmos (LogReg, RF, GBoost, XGBoost) e avaliação completa. Impacto: Redução de 15% nas readmissões",
        category: "Machine Learning",
        imageUrl: "/ML-Saude.png",
        technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Imbalanced-Learn", "Flask"],
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
        category: "Data Science",
        imageUrl: "/Recomendacao.png",
        technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "Matplotlib", "Seaborn"],
        githubUrl: "https://github.com/marcanogc/Projeto_DS_Sistema_de_Recomendacao_Python",
        demoUrl: "",
        createdAt: now
      },
      {
        name: "Rede Neuronal Deep Learning",
        description: "Projeto de Deep Learning com PyTorch usando o MNIST, focado em redes neurais, treinamento de modelos, visualização de resultados e boas práticas, com inspiração na arquitetura InceptionV3.",
        name_es: "Red Neuronal Deep Learning",
        name_en: "Deep Learning Neural Network",
        name_pt: "Rede Neuronal Deep Learning",
        description_es: "Proyecto de Deep Learning con PyTorch usando MNIST, enfocado en redes neuronales, entrenamiento de modelos, visualización de resultados y buenas prácticas, con inspiración en la arquitectura InceptionV3.",
        description_en: "Deep Learning project with PyTorch using MNIST, focused on neural networks, model training, result visualization, and best practices, inspired by the InceptionV3 architecture.",
        description_pt: "Projeto de Deep Learning com PyTorch usando o MNIST, focado em redes neurais, treinamento de modelos, visualização de resultados e boas práticas, com inspiração na arquitetura InceptionV3.",
        category: "Deep Learning",
        imageUrl: "/Mnist-Pytorch.jpg",
        technologies: ["Python", "PyTorch", "Deep Learning", "Neural Networks", "MNIST"],
        githubUrl: "https://github.com/marcanogc/rede-neuronal-dl",
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