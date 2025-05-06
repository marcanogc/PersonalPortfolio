import { Project } from "@/hooks/useProjects";
import { GithubIcon, ExternalLink, FileText, BookOpen } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
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
            {category === "web" && "Web"}
            {category === "bi" && "BI"}
            {category === "backend" && "Backend"}
            {category === "dados" && "Dados"}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="badge badge--tag">{tech}</span>
          ))}
        </div>
        <div className="flex space-x-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4 mr-1" /> Código
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          )}
          {reportUrl && (
            <a 
              href={reportUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-4 h-4 mr-1" /> Reporte
            </a>
          )}
          {docsUrl && (
            <a 
              href={docsUrl} 
              className="text-primary dark:text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="w-4 h-4 mr-1" /> Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
