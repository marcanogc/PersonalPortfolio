import { useContext } from "react";
import { LanguageContext, Language } from "../context/LanguageProvider";

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  
  return context;
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