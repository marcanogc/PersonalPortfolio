import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { useTranslation } from "@/hooks/useLanguage";
import { navTranslations } from "@/translations";

interface NavItem {
  label: string;
  href: string;
  key: string;
}

export const Header = () => {
  const { t, language } = useTranslation(navTranslations);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Crear los elementos de navegación directamente usando las traducciones
  const navItems: NavItem[] = [
    { label: t('about'), href: "#about", key: 'about' },
    { label: t('projects'), href: "#projects", key: 'projects' },
    { label: t('experience'), href: "#experience", key: 'experience' },
    { label: t('contact'), href: "#contact", key: 'contact' },
  ];
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-primary dark:text-primary">
          <span>João Silva</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.key} 
              href={item.href} 
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle, Language Selector & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          <ThemeToggle />
          
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        navItems={navItems} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};
