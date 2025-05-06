import { FileText, MapPin, Mail, GraduationCap, Languages, Github, Linkedin, Twitter } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-accent transition-colors animate-on-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Soy un desarrollador y analista de datos apasionado por crear soluciones digitales que marcan la diferencia. Con formación en ciencia de datos y 3 años de experiencia en desarrollo web, me especializo en traducir datos complejos en insights accionables y crear experiencias web atractivas.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Mi camino profesional comenzó en análisis de datos, donde aprendí a extraer valor de conjuntos de datos complejos. Ahora, estoy combinando estas habilidades con el desarrollo frontend para crear aplicaciones que no solo son técnicamente sólidas sino también centradas en el usuario.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">Express</span>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">SQL</span>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">Power BI</span>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary rounded-full">Data Analysis</span>
              </div>
            </div>
            <a 
              href="/cv.pdf" 
              className="inline-flex items-center px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" /> Descargar CV
            </a>
          </div>
          <div className="md:col-span-1">
            <div className="bg-card rounded-xl shadow-md p-6 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Datos personales</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">São Paulo, Brasil</span>
                </li>
                <li className="flex items-start">
                  <Mail className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">joao.silva@email.com</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Licenciado en Ciencias de la Computación</span>
                </li>
                <li className="flex items-start">
                  <Languages className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Português, Español, English</span>
                </li>
              </ul>
              <div className="mt-6 flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-xl">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-xl">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-xl">
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
