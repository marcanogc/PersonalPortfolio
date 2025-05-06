import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Linkedin, Github, Twitter, FileCode } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 transition-colors animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? Completa el formulario y me pondré en contacto contigo lo antes posible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form 
              className="bg-card rounded-xl shadow-md p-6 transition-colors"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label htmlFor="name" className="form__label">Nombre</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form__input"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="form__label">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form__input"
                  placeholder="tu.email@ejemplo.com"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="form__label">Asunto</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form__input"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="form__label">Mensaje</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form__input"
                  placeholder="Tu mensaje..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-card rounded-xl shadow-md p-6 mb-6 transition-colors">
              <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
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
                  <Phone className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">+55 (11) 98765-4321</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl shadow-md p-6 transition-colors">
              <h3 className="text-xl font-bold mb-4">Sígueme en redes</h3>
              <div className="flex space-x-6">
                <a href="https://linkedin.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://dev.to" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <FileCode className="w-6 h-6" />
                </a>
              </div>
              
              <img 
                src="https://pixabay.com/get/gb63651436fd6b579b52fcef3964240ef779533a8bcd0d77431c0165b9ab5d93a1816536c8bf656ed3a52dd0704157d86387b02392c8fbe9b1507d285ffaac249_1280.jpg" 
                alt="Developer workspace illustration" 
                className="w-full h-auto rounded-lg mt-6" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
