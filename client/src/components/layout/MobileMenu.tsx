interface NavItem {
  label: string;
  href: string;
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
            key={item.href} 
            href={item.href} 
            className="py-2 hover:text-primary dark:hover:text-primary"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
