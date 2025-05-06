import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useLanguage";
import { heroTranslations } from "@/translations";

export const Hero = () => {
  const { t } = useTranslation(heroTranslations);

  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 animate-slide-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-primary dark:text-primary">{t('greeting')}</span> João Silva
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              {t('role')}
            </p>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="button button--primary">
                {t('contact')}
              </a>
              <a href="#projects" className="button button--outline">
                {t('cta')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="João Silva profile photo" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary dark:border-primary shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
