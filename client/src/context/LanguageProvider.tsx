import React, { createContext, ReactNode, useEffect, useState } from "react";

// Definir los idiomas disponibles
export type Language = "es" | "en" | "pt"; 

// Interface para el contexto de idioma
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Crear el contexto con valores por defecto
export const LanguageContext = createContext<LanguageContextType>({
  language: "pt", // Portugués como idioma predeterminado
  setLanguage: () => {},
});

// Proveedor de contexto de idioma
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Estado para almacenar el idioma actual
  const [language, setLanguage] = useState<Language>(() => {
    // Intentar obtener la preferencia de idioma del localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null;
    return savedLanguage || "pt"; // Usar portugués como valor predeterminado
  });

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Objeto de contexto
  const contextValue: LanguageContextType = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};