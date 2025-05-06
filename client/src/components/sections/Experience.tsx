import { ExperienceItem, ExperienceItemProps } from "@/components/ui/ExperienceItem";
import { useEffect, useRef } from "react";

// Define experience data
const experienceData: ExperienceItemProps[] = [
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

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
        <h2 className="text-3xl font-bold mb-12">Experiencia</h2>
        
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
