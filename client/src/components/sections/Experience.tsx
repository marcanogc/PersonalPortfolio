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
        title: " Analista Mayor de Planificación",
        company: "Pdvsa S.A.",
        period: "2012 - 2021",
        description: "Elaboré informes ejecutivos y gráficos de indicadores clave, permitiendo una clara visualización del rendimiento semanal. Presenté la rendición de cuenta de gestión mensual, basando mis análisis en datos que respaldaban las decisiones estratégicas de la organización.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: "Analista de Sistemas Jr.",
        company: "Puertos de Sucre S.A.",
        period: "2010 - 2011",
        description: "Desarrollé las interfaces de usuario y bases de datos para aplicaciones web. Implantación de sistemas front-end y back-end para el control de inventarios de la empresa Puertos de Sucre S.A.",
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
        title: " Senior Planning Analyst",
        company: "Pdvsa S.A.",
        period: "2012 - 2021",
        description: "I prepared executive reports and graphs of key indicators, allowing a clear visualization of weekly performance. I presented the monthly management account, basing my analysis on data that supported strategic decisions in the organization.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: " Systems Analyst Jr.",
        company: "Ports of Sucre S.A.",
        period: "2019 - 2021",
        description: "Development of user interfaces and DataBase for web applications. Implementation of Front-End and Back-End Systems for Inventory Control of the company Ports of Sucre S.A.",
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
        title: "Analista de Planejamento Sênior",
        company: "Pdvsa S.A.",
        period: "2012 - 2021",
        description: "Elaborei relatórios executivos e gráficos dos indicadores-chave, permitindo uma visualização clara do desempenho semanal. Apresentei a conta gerencial mensal,   fundamentando minhas análises em dados que apoiaram decisões estratégicas na organização.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: "Analista de Sistemas Jr.",
        company: "Portos de Sucre S.A.",
        period: "2010 - 2011",
        description: "Desenvolvimento de interfaces de usuário e banco de dados para aplicações web. Implementação de Sistemas Front-End e Back-End para o Controle de Inventarios da Empresa Portos de Sucre S.A.",
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
