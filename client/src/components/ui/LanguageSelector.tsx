import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const flags = {
  es: "🇪🇸",
  en: "🇺🇸",
  pt: "🇧🇷"
};

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector = ({ className }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Object.entries(flags).map(([lang, flag]) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as "es" | "en" | "pt")}
          className={cn(
            "flex items-center justify-center w-8 h-8 text-lg rounded-full transition-all",
            language === lang 
              ? "ring-2 ring-primary ring-offset-1 scale-110" 
              : "opacity-60 hover:opacity-100"
          )}
          title={`${lang === "es" ? "Español" : lang === "en" ? "English" : "Português"}`}
          aria-label={`${lang === "es" ? "Cambiar a Español" : lang === "en" ? "Switch to English" : "Mudar para Português"}`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
};