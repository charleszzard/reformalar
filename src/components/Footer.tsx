import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Youtube 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">Reformalar</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Há mais de 15 anos transformando sonhos em realidade através de reformas de qualidade 
              e atendimento diferenciado.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Serviços</h3>
            <ul className="space-y-3">
              {[
                "Reformas Completas",
                "Pintura Residencial", 
                "Instalações Elétricas",
                "Serviços Hidráulicos",
                "Manutenção Predial",
                "Construção Civil"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                "Sobre Nós",
                "Nossos Projetos",
                "Depoimentos", 
                "Blog",
                "Carreiras",
                "Política de Privacidade"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">(27) 99789-4915</p>
                  <p className="text-sm text-background/80">WhatsApp e Ligações</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">charles-gesso@hotmail.com</p>
                  <p className="text-sm text-background/80">Resposta em 2h</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Vitória, ES</p>
                  <p className="text-sm text-background/80">Grande Vitória</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              Solicitar Orçamento
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/80 text-sm">
              © 2024 Reformalar. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;