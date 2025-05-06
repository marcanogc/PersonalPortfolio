import React from "react";
import { useLanguage, Language } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

interface FlagProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  ariaLabel: string;
}

// SVG de la bandera de España
const SpainFlag = ({ selected, onClick, title, ariaLabel }: FlagProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flag-button w-10 h-10 rounded-full overflow-hidden transition-all transform border-2",
      selected ? "border-primary scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
    )}
    title={title}
    aria-label={ariaLabel}
  >
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <path fill="#FFC400" d="M0 256c0 31.3 5.6 61.3 16 89l240 22.3L496 345c10.4-27.7 16-57.7 16-89s-5.6-61.3-16-89l-240-22.3L16 167a255.5 255.5 0 0 0-16 89z"/>
      <path fill="#C60A1D" d="M496 167C454.7 68.5 362.6 0 256 0S57.3 68.5 16 167h480zM16 345C57.3 443.5 149.4 512 256 512s198.7-68.5 240-167H16z"/>
    </svg>
  </button>
);

// SVG de la bandera de Estados Unidos
const USAFlag = ({ selected, onClick, title, ariaLabel }: FlagProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flag-button w-10 h-10 rounded-full overflow-hidden transition-all transform border-2",
      selected ? "border-primary scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
    )}
    title={title}
    aria-label={ariaLabel}
  >
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <path fill="#F0F0F0" d="M0 85.3h512v341.3H0z"/>
      <g fill="#D80027">
        <path d="M0 85.3h512v42.7H0zM0 170.7h512v42.7H0zM0 256h512v42.7H0zM0 341.3h512V384H0z"/>
      </g>
      <path fill="#2E52B2" d="M0 85.3h256v170.7H0z"/>
      <g fill="#F0F0F0">
        <path d="M28.3 108.9l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM73.9 108.9l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM119.4 108.9l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM165 108.9l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM210.6 108.9l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7z"/>
        <path d="M50.6 131.1l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM96.1 131.1l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM141.7 131.1l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM187.2 131.1l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM28.3 153.3l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM73.9 153.3l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM119.4 153.3l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM165 153.3l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM210.6 153.3l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7z"/>
        <path d="M50.6 175.6l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM96.1 175.6l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM141.7 175.6l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM187.2 175.6l2.2 6.6h7l-5.7 4.1 2.2 6.6-5.7-4.1-5.7 4.1 2.2-6.6-5.7-4.1h7zM28.3 197.8l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM73.9 197.8l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM119.4 197.8l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM165 197.8l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM210.6 197.8l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7z"/>
        <path d="M50.6 220l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM96.1 220l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM141.7 220l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7zM187.2 220l2.2 6.6h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7z"/>
      </g>
    </svg>
  </button>
);

// SVG de la bandera de Brasil
const BrazilFlag = ({ selected, onClick, title, ariaLabel }: FlagProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flag-button w-10 h-10 rounded-full overflow-hidden transition-all transform border-2",
      selected ? "border-primary scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
    )}
    title={title}
    aria-label={ariaLabel}
  >
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <path fill="#6DA544" d="M0 85.337h512v341.326H0z"/>
      <path fill="#FFDA44" d="M256 161.678l189.212 179.989L256 350.322 66.788 341.667z"/>
      <path fill="#F0F0F0" d="M256 161.678c-52.567 0-95.156 42.593-95.156 95.156s42.589 95.156 95.156 95.156c52.567 0 95.156-42.593 95.156-95.156S308.567 161.678 256 161.678z"/>
      <path fill="#0052B4" d="M256 191.400c-36.116 0-65.434 29.318-65.434 65.434s29.318 65.434 65.434 65.434c36.116 0 65.435-29.318 65.435-65.434S292.116 191.4 256 191.4z"/>
      <path fill="#F0F0F0" d="M236.026 201.932c-8.622 5.303-16.229 12.911-21.53 21.53-11.422.821-22.344 4.348-31.756 9.988 9.411 5.641 20.334 9.169 31.756 9.988 5.301 8.622 12.911 16.229 21.53 21.53 5.639-9.412 9.167-20.334 9.988-31.756 8.622-5.301 16.226-12.909 21.53-21.53-9.412-5.639-20.334-9.167-31.756-9.988-5.301-8.619-12.908-16.226-21.53-21.53-5.642 9.412-9.169 20.334-9.988 31.756-8.622 5.301-16.229 12.908-21.53 21.53"/>
    </svg>
  </button>
);

interface LanguageSelectorProps {
  className?: string;
}

// Función para cambiar directamente el idioma sin usar hooks React
const changeLanguage = (lang: Language) => {
  const currentLang = localStorage.getItem('language') as Language || 'pt';
  
  if (currentLang !== lang) {
    localStorage.setItem('language', lang);
    console.log(`Idioma cambiado a: ${lang}`);
    // Recargar la página para aplicar el nuevo idioma
    window.location.reload();
  }
};

export const LanguageSelector = ({ className }: LanguageSelectorProps) => {
  // Determinar qué idioma está actualmente seleccionado
  const currentLang = localStorage.getItem('language') as Language || 'pt';

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BrazilFlag 
        selected={currentLang === "pt"} 
        onClick={() => changeLanguage("pt")} 
        title="Português"
        ariaLabel="Mudar para Português"
      />
      <SpainFlag 
        selected={currentLang === "es"} 
        onClick={() => changeLanguage("es")} 
        title="Español"
        ariaLabel="Cambiar a Español"
      />
      <USAFlag 
        selected={currentLang === "en"} 
        onClick={() => changeLanguage("en")} 
        title="English"
        ariaLabel="Switch to English"
      />
    </div>
  );
};