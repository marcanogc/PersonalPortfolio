import { Project } from "@/hooks/useProjects";
import { GithubIcon, ExternalLink, FileText, BookOpen } from "lucide-react";
import { useTranslation } from "@/hooks/useLanguage";
import { projectsTranslations } from "@/translations";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation(projectsTranslations);
  
  const {
    name,
    description,
    category,
    imageUrl,
    technologies,
    githubUrl,
    demoUrl,
    reportUrl,
    docsUrl
  } = project;

  // Obtener la etiqueta de categoría
  const getCategoryLabel = (cat: string): string => {
    switch (cat) {
      case "web": return t('web');
      case "bi": return t('bi');
      case "backend": return t('backend');
      case "dados": return t('dados');
      default: return cat;
    }
  };

  return (
    <div className="project-card rounded-xl overflow-hidden bg-card shadow-md">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className={`badge--category badge--${category}`}>
            {getCategoryLabel(category)}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="badge badge--tag">{tech}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4 mr-1" /> {t('viewGithub')}
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> {t('viewDemo')}
            </a>
          )}
          {reportUrl && (
            <a 
              href={reportUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-4 h-4 mr-1" /> {t('viewReport')}
            </a>
          )}
          {docsUrl && (
            <a 
              href={docsUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="w-4 h-4 mr-1" /> {t('viewDocs')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
