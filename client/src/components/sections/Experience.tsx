import { ExperienceItem, ExperienceItemProps } from "@/components/ui/ExperienceItem";
import { useEffect, useRef, useMemo } from "react";
import { useTranslation } from "@/hooks/useLanguage";
import { experienceTranslations } from "@/translations";
import { useLanguage } from "@/hooks/useLanguage";

export const Experience = () => {
  const { t } = useTranslation(experienceTranslations);
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Definir datos de experiencia con traducciones
  const experienceData = useMemo(() => {
    // Datos en español (default)
    const spanishData: ExperienceItemProps[] = [
      {
        title: "Jefe de almacén (control de materiales)",
        company: "Marcopolo S.A.",
        period: "2024 - 2025",
        description: "Utilicé SAP y Excel avanzado para controlar el inventario, optimizando la ubicación y el registro de los materiales, lo que aumentó la eficacia con la que se ponían a disposición los artículos. Realicé controles constantes de las condiciones de almacenamiento, analizando las normas de conservación y la disposición de las piezas en las líneas de producción, las celdas de las fábricas, los almacenes y las zonas exteriores.",
        skills: ["SAP", "Excel"],
        type: "work"
      },
      {
        title: " Analista Mayor de Planificación",
        company: "Pdvsa S.A.",
        period: "2012 - 2021",
        description: "Preparación de informes ejecutivos utilizando Power BI para visualizar KPI y gráficos de indicadores clave, permitiendo una visión clara del rendimiento semanal. Informes automatizados utilizando Excel/VBA, reduciendo el tiempo de generación en un 20%.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: "Analista de Sistemas Jr.",
        company: "Puertos de Sucre S.A.",
        period: "2010 - 2011",
        description: "Desarrollé un sistema de información en entorno web centrado en el control de inventarios, equipos y maquinaria, adoptando un enfoque analítico para la protección y gestión de activos, optimizando la gestión de los mismos en un 25%. Apliqué metodologías y herramientas como OMT, UML, HTML, PHP y MySQL, integrando el diseño gráfico y la gestión de bases de datos para ofrecer una solución robusta y orientada al análisis de datos.",
        skills: ["PHP", "MySQL", "UML/OMT", "HTML/CSS"],
        type: "work"
      },
      {
        title: "Ingeniero de Sistemas",
        company: "Universidad Nacional de las Fuerzas Armadas de Venezuela",
        period: "2005 - 2010",
        description: "Especialización en ingeniería y desarrollo de software. Proyecto final de carrera sobre la implantación de un Sistema Full Stack para el Control de Inventarios.",
        type: "education"
      }
    ];

    // Datos en inglés
    const englishData: ExperienceItemProps[] = [
      {
        title: "Warehouse Manager (Materials Control)",
        company: "Marcopolo S.A.",
        period: "2024 - 2025",
        description: "I used SAP and advanced Excel to control the inventory, optimizing the location and registration of materials, which increased the efficiency with which items were made available. I carried out constant checks on storage conditions, analyzing conservation standards and the arrangement of parts on production lines, factory cells, warehouses and outside areas.",
        skills: ["SAP", "Excel"],
        type: "work"
      },
      {
        title: " Senior Planning Analyst",
        company: "Pdvsa S.A.",
        period: "2012 - 2021",
        description: "Prepared executive reports using Power BI to visualize KPIs and key indicator graphs, allowing a clear view of weekly performance. Automated reports using Excel/VBA, reducing generation time by 20%.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: " Systems Analyst Jr.",
        company: "Ports of Sucre S.A.",
        period: "2019 - 2021",
        description: "I developed an information system in a web environment focused on inventory, equipment and machinery control, adopting an analytical approach to asset protection and management, optimizing asset management by 25%. I applied methodologies and tools such as OMT, UML, HTML, PHP and MySQL, integrating graphic design and database management to offer a robust, data analysis-oriented solution.",
        skills: ["PHP", "MySQL", "UML/OMT", "HTML/CSS"],
        type: "work"
      },
      {
        title: "Bachelor's Degree in Systems Engineering",
        company: "National University of the Armed Forces of Venezuela",
        period: "2015 - 2019",
        description: "Specialization in software engineering and development. Final project on the implementation of a Full Stack System for Inventory Control.",
        type: "education"
      }
    ];

    // Datos en portugués
    const portugueseData: ExperienceItemProps[] = [
      {
        title: "Almoxarife (Controle de Materiais)",
        company: "Marcopolo S.A.",
        period: "2024 - 2025",
        description: "Utilizei SAP e Excel avançado para controlar o inventário, otimizando a localização e o registro de materiais, o que aumentou a eficiência na disponibilização dos itens. Realizei verificações constantes nas condições de armazenamento, analisando padrões de conservação e disposição de peças nas linhas de produção, células fabris, almoxarifados e áreas externas.",
        skills: ["SAP", "Excel"],
        type: "work"
      },
      {
        title: "Analista de Planejamento Sênior",
        company: "Pdvsa S.A.",
        period: "2012 - 2021",
        description: "Elaborei relatórios executivos com Power BI para visualização de KPIs e gráficos dos indicadores-chave, permitindo uma visualização clara do desempenho semanal. Automatização de relatórios usando Excel/VBA reduzindo o tempo de geração em 20%.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: "Analista de Sistemas Jr.",
        company: "Portos de Sucre S.A.",
        period: "2010 - 2011",
        description: "Desenvolvi um sistema de informação em ambiente web focado no controle de estoques, equipamentos e máquinas, adotando uma abordagem analítica para a proteção e gerenciamento de ativos, otimizando a gestão de ativos em 25%. Apliquei metodologias e ferramentas como OMT, UML, HTML, PHP e MySQL, integrando design gráfico e gerenciamento de banco de dados para oferecer uma solução robusta e orientada à análise de dados.",
        skills: ["PHP", "MySQL", "UML/OMT", "HTML/CSS"],
        type: "work"
      },
      {
        title: "Bacharelado em Engenharia de Sistemas",
        company: "Universidade Nacional das Forzas Armadas de Venezuela",
        period: "2005 - 2010",
        description: "Especialização em engenharia e desenvolvimento de software. Projeto final sobre implementação de Sistema Full Stack para o Controle de Inventarios.",
        type: "education"
      }
    ];

    // Devolver los datos según el idioma seleccionado
    switch (language) {
      case 'en':
        return englishData;
      case 'pt':
        return portugueseData;
      case 'es':
      default:
        return spanishData;
    }
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-accent transition-colors animate-on-scroll" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('title')}</h2>
        
        <div className="relative border-l-2 border-primary dark:border-primary pl-8 ml-4 space-y-12">
          {experienceData.map((item, index) => (
            <ExperienceItem 
              key={index} 
              title={item.title}
              company={item.company}
              period={item.period}
              description={item.description}
              skills={item.skills}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
