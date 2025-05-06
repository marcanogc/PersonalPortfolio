import React, { createContext, ReactNode, useState } from "react";

// Definir los idiomas disponibles
export type Language = "es" | "en" | "pt"; 

// Interface para el contexto de idioma
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Valor predeterminado
const defaultLanguage = (): Language => {
  const savedLanguage = localStorage.getItem("language") as Language | null;
  return savedLanguage || "pt"; // Usar portugués como valor predeterminado
};

// Crear el contexto con valores por defecto
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Proveedor de contexto de idioma
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Estado para almacenar el idioma actual
  const [language, setLanguageState] = useState<Language>(defaultLanguage());

  // Función para cambiar el idioma
  const setLanguage = (newLanguage: Language) => {
    if (language !== newLanguage) {
      localStorage.setItem("language", newLanguage);
      setLanguageState(newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};