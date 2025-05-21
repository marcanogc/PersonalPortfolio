import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export type ProjectCategory = "fullstack" | "bi" | "data" | "all";

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
    { id: "fullstack", label: { es: "Fullstack", en: "Fullstack", pt: "Fullstack" } },
    { id: "bi", label: { es: "BI", en: "BI", pt: "BI" } },
    { id: "data", label: { es: "Datos", en: "Data", pt: "Dados" } }
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
