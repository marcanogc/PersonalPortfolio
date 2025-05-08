import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Linkedin, Github, Twitter, FileCode } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useTranslation } from "@/hooks/useLanguage";
import { contactTranslations } from "@/translations";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const { t } = useTranslation(contactTranslations);
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
    if (!formData.name) {
      toast({
        title: t('nameRequired'),
        description: t('nameRequired'),
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.email) {
      toast({
        title: t('emailRequired'),
        description: t('emailRequired'),
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.message) {
      toast({
        title: t('messageRequired'),
        description: t('messageRequired'),
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: t('success'),
        description: t('success'),
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
        title: t('error'),
        description: t('error'),
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
          <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('description')}
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
                <label htmlFor="name" className="form__label">{t('name')}</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form__input"
                  placeholder={`${t('name')}...`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="form__label">{t('email')}</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form__input"
                  placeholder="example@email.com"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="form__label">{t('subject')}</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form__input"
                  placeholder={`${t('subject')}...`}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="form__label">{t('message')}</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form__input"
                  placeholder={`${t('message')}...`}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? `${t('sending')}...` : t('send')}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-card rounded-xl shadow-md p-6 mb-6 transition-colors">
              <h3 className="text-xl font-bold mb-4">{t('contactInfo')}</h3>
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
                  <Phone className="text-primary dark:text-primary mt-1 w-6 h-6" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">+55 (54) 99297-7691</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl shadow-md p-6 transition-colors">
              <h3 className="text-xl font-bold mb-4">{t('socialNetworks')}</h3>
              <div className="flex space-x-6">
                <a href="https://linkedin.com/in/gabriel-marcano" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/marcanogc" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://x.com/gabriel_marcano" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://tree-whale-a25.notion.site/Gabriel-Marcano-16dbf5073b6980e184b3c38716fbaa5e" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl" target="_blank" rel="noopener noreferrer">
                  <FileCode className="w-6 h-6" />
                </a>
              </div>
              
              <img 
                src="https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_1280.jpg" 
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
