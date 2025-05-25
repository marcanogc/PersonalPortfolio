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
              <span className="text-primary dark:text-primary">{t('greeting')}</span> Gabriel
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
              src="https://media.licdn.com/dms/image/v2/D4D03AQGLKOBRQpyr9g/profile-displayphoto-shrink_800_800/B4DZWuXWLTH4Ac-/0/1742387111149?e=1752105600&v=beta&t=dIAB7O3Dtqj9RxUewXMLQL6xpzoiVuPJWPXV7mZl-z0" 
              alt="Gabriel profile photo" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary dark:border-primary shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
