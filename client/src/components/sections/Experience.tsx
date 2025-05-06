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
        title: "Analista de Datos",
        company: "Tech Solutions SA",
        period: "2021 - Presente",
        description: "Análisis de datos de clientes y creación de dashboards para toma de decisiones. Desarrollo de modelos predictivos para anticipar tendencias de mercado.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: "Desarrollador Frontend Jr.",
        company: "Digital Innovations",
        period: "2019 - 2021",
        description: "Desarrollo de interfaces de usuario para aplicaciones web. Implementación de diseños responsivos y optimización de rendimiento en front-end.",
        skills: ["JavaScript", "React", "CSS/SASS", "Git"],
        type: "work"
      },
      {
        title: "Licenciatura en Ciencias de la Computación",
        company: "Universidad Nacional de Brasil",
        period: "2015 - 2019",
        description: "Especialización en análisis de datos y desarrollo de software. Proyecto final sobre implementación de algoritmos de machine learning para predicción de comportamiento de usuarios.",
        type: "education"
      }
    ];

    // Datos en inglés
    const englishData: ExperienceItemProps[] = [
      {
        title: "Data Analyst",
        company: "Tech Solutions SA",
        period: "2021 - Present",
        description: "Customer data analysis and dashboard creation for decision making. Development of predictive models to anticipate market trends.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: "Junior Frontend Developer",
        company: "Digital Innovations",
        period: "2019 - 2021",
        description: "User interface development for web applications. Implementation of responsive designs and front-end performance optimization.",
        skills: ["JavaScript", "React", "CSS/SASS", "Git"],
        type: "work"
      },
      {
        title: "Bachelor's Degree in Computer Science",
        company: "National University of Brazil",
        period: "2015 - 2019",
        description: "Specialization in data analysis and software development. Final project on implementation of machine learning algorithms for user behavior prediction.",
        type: "education"
      }
    ];

    // Datos en portugués
    const portugueseData: ExperienceItemProps[] = [
      {
        title: "Analista de Dados",
        company: "Tech Solutions SA",
        period: "2021 - Presente",
        description: "Análise de dados de clientes e criação de dashboards para tomada de decisão. Desenvolvimento de modelos preditivos para antecipar tendências de mercado.",
        skills: ["Python", "SQL", "Power BI", "Excel"],
        type: "work"
      },
      {
        title: "Desenvolvedor Frontend Jr.",
        company: "Digital Innovations",
        period: "2019 - 2021",
        description: "Desenvolvimento de interfaces de usuário para aplicações web. Implementação de designs responsivos e otimização de desempenho no front-end.",
        skills: ["JavaScript", "React", "CSS/SASS", "Git"],
        type: "work"
      },
      {
        title: "Licenciatura em Ciência da Computação",
        company: "Universidade Nacional do Brasil",
        period: "2015 - 2019",
        description: "Especialização em análise de dados e desenvolvimento de software. Projeto final sobre implementação de algoritmos de machine learning para predição de comportamento de usuários.",
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
