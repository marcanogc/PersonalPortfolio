import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export type ProjectCategory = "web" | "bi" | "backend" | "dados" | "all";

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
  
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['/api/projects'],
  });
  
  const filteredProjects = projects.filter((project: Project) => 
    currentCategory === "all" || project.category === currentCategory
  );

  const categories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "bi", label: "BI" },
    { id: "backend", label: "Backend" },
    { id: "dados", label: "Dados" }
  ];

  return {
    projects: filteredProjects,
    allProjects: projects,
    isLoading,
    error,
    currentCategory,
    setCurrentCategory,
    categories
  };
}
