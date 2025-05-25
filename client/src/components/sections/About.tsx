import { FileText, MapPin, Mail, GraduationCap, Languages, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/useLanguage";
import { aboutTranslations } from "@/translations";
import { useLanguage } from "@/hooks/useLanguage";

export const About = () => {
  const { t } = useTranslation(aboutTranslations);
  const { language } = useLanguage();

  // Personalizar contenido según el idioma
  const getSkills = () => [
     language === 'en' ? "Data Analysis" : (language === 'es' ? "Análisis de Datos" : "Análise de Dados"),
    "Python", "SQL", "Power BI", "Excel", "Fullstack", "JavaScript", "React", "Node.js"
  ];
  
  const getDegree = () => {
    switch (language) {
      case 'en':
        return "System Engineer";
      case 'pt':
        return "Engenheiro de Sistemas";
      case 'es':
      default:
        return "Ingeniero de Sistemas";
    }
  };

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-accent transition-colors animate-on-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              {t('description')}
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              {t('journey')}
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('skills')}</h3>
              <div className="flex flex-wrap gap-2">
                {getSkills().map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <a 
               target="_blank" href="/CV-Gabriel.pdf"
              className="inline-flex items-center px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" /> {t('downloadCV')}
            </a>
            {/* Botón para historia personal */}
            <a
              href="https://tree-whale-a25.notion.site/Gabriel-Marcano-16dbf5073b6980e184b3c38716fbaa5e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors ml-4 mt-4"
            >
              {/* Puedes usar un ícono diferente si lo deseas */}
              <FileText className="mr-2 h-4 w-4" />
              {/* Traducción del botón */}
              {language === 'es' ? 'Conoce mi historia' : language === 'en' ? 'Read my story' : 'Conheça minha história'}
            </a>
          </div>
          <div className="md:col-span-1">
            <div className="bg-card rounded-xl shadow-md p-6 transition-colors">
              <h3 className="text-xl font-semibold mb-4">{t('personalInfo')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Rio Grande do Sul, Brasil</span>
                </li>
                <li className="flex items-start">
                  <Mail className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">marcanogc@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{getDegree()}</span>
                </li>
                <li className="flex items-start">
                  <Languages className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Português, Español, English</span>
                </li>
              </ul>
              <div className="mt-6 flex space-x-4">
                <a href="https://linkedin.com/in/gabriel-marcano" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-xl">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/marcanogc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-xl">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://x.com/gabriel_marcano" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-xl">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
