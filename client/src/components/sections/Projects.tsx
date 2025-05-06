import { useProjects, ProjectCategory, Project } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useEffect, useRef } from "react";
import { useTranslation } from "@/hooks/useLanguage";
import { projectsTranslations } from "@/translations";

export const Projects = () => {
  const { t } = useTranslation(projectsTranslations);
  const { 
    projects, 
    isLoading, 
    error, 
    currentCategory, 
    setCurrentCategory,
    categories
  } = useProjects();

  const sectionRef = useRef<HTMLElement>(null);

  // Mapeamos los IDs de categoría a las claves de traducción
  const categoryToTranslationKey: Record<string, string> = {
    'all': 'allCategories',
    'web': 'web',
    'bi': 'bi',
    'backend': 'backend',
    'dados': 'dados'
  };

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
    <section id="projects" className="py-16 transition-colors animate-on-scroll" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('description') || "Una selección de mis trabajos más recientes y significativos en diferentes áreas de la tecnología."}
          </p>
        </div>

        {/* Project Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setCurrentCategory(category.id as ProjectCategory)}
              variant={currentCategory === category.id ? "default" : "outline"}
              className={
                currentCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-accent"
              }
            >
              {categoryToTranslationKey[category.id] 
                ? t(categoryToTranslationKey[category.id]) 
                : category.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p>{t('loading') || "Cargando proyectos..."}</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            <p>{t('error') || "Error al cargar proyectos. Por favor, intenta nuevamente más tarde."}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
