// Definición de idiomas disponibles
export type Language = "es" | "en" | "pt";

// Función simple para obtener el idioma actual del localStorage
export function useLanguage() {
  // Obtener el idioma del localStorage o usar "pt" como valor predeterminado
  const getLanguage = (): Language => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    return savedLanguage || "pt";
  };

  // Función para cambiar el idioma
  const setLanguage = (newLanguage: Language) => {
    const currentLanguage = getLanguage();
    if (currentLanguage !== newLanguage) {
      localStorage.setItem("language", newLanguage);
      // Recarga la página para aplicar el nuevo idioma
      window.location.reload();
    }
  };

  return {
    language: getLanguage(),
    setLanguage
  };
}

// Tipo para las traducciones de un componente
export type TranslationObject = {
  [key: string]: {
    es: string;
    en: string;
    pt: string;
  };
};

// Función para obtener traducciones según el idioma actual
export function useTranslation(translations: TranslationObject) {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`La clave de traducción "${key}" no existe`);
      return key;
    }
    
    return translations[key][language];
  };
  
  return { t, language };
}