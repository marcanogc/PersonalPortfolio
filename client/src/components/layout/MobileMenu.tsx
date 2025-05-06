import { LanguageSelector } from "@/components/ui/LanguageSelector";

interface NavItem {
  label: string;
  href: string;
  key: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, navItems, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-card border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navItems.map((item) => (
          <a 
            key={item.key} 
            href={item.href} 
            className="py-2 hover:text-primary dark:hover:text-primary"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
        
        {/* Selector de idioma en el menú móvil */}
        <div className="py-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm mb-2 text-muted-foreground">Idioma / Language / Língua</p>
          <LanguageSelector className="justify-start" />
        </div>
      </div>
    </div>
  );
};
