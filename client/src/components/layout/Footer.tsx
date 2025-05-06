import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold text-white">João Silva</div>
            <p className="text-gray-400 mt-2">Desenvolvedor e analista de dados</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <nav className="flex space-x-6 mb-6 md:mb-0">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre mí</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Proyectos</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experiencia</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
            </nav>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} João Silva. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Inspirado en <a href="https://olaolu.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">olaolu.dev</a></p>
        </div>
      </div>
    </footer>
  );
};
