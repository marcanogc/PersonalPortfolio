import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export type ProjectCategory =
  | "all"
  | "Business Intelligence"
  | "Data Science"
  | "Machine Learning"
  | "Deep Learning";

export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  docsUrl?: string;
}

export function useProjects() {
  const [currentCategory, setCurrentCategory] = useState<ProjectCategory>("all");
  
  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });
  
  const filteredProjects = projects.filter((project: Project) =>
    currentCategory === "all" || project.category === currentCategory
  );

  const categories = [
    { id: "all", label: { es: "Todos", en: "All", pt: "Todos" } },
    { id: "Business Intelligence", label: { es: "Inteligencia de Negocios", en: "Business Intelligence", pt: "Business Intelligence" } },
    { id: "Data Science", label: { es: "Ciencia de Datos", en: "Data Science", pt: "Data Science" } },
    { id: "Machine Learning", label: { es: "Aprendizaje Automático", en: "Machine Learning", pt: "Machine Learning" } },
    { id: "Deep Learning", label: { es: "Deep Learning", en: "Deep Learning", pt: "Deep Learning" } }
  ];

  return {
    projects: filteredProjects,
    allProjects: projects,
    isLoading,
    error,
    currentCategory,
    setCurrentCategory,
    categories,
  };
}
