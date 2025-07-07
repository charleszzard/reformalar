import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Paintbrush, 
  Wrench, 
  Zap, 
  Droplets, 
  Hammer,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Reformas Completas",
    description: "Transformação total de residências e estabelecimentos comerciais",
    features: ["Projeto completo", "Gestão da obra", "Materiais inclusos"]
  },
  {
    icon: Paintbrush,
    title: "Pintura Residencial",
    description: "Serviços de pintura interna e externa com acabamento profissional",
    features: ["Cores personalizadas", "Texturas especiais", "Durabilidade garantida"]
  },
  {
    icon: Wrench,
    title: "Manutenção Predial",
    description: "Manutenção preventiva e corretiva para seu imóvel",
    features: ["Atendimento rápido", "Equipe especializada", "Peças originais"]
  },
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Projetos e instalações elétricas seguras e modernas",
    features: ["Normas técnicas", "Certificação", "Garantia total"]
  },
  {
    icon: Droplets,
    title: "Hidráulica",
    description: "Serviços hidráulicos residenciais e comerciais",
    features: ["Vazamentos", "Instalações novas", "Manutenção preventiva"]
  },
  {
    icon: Hammer,
    title: "Construção Civil",
    description: "Ampliações, muros, lajes e estruturas em geral",
    features: ["Projetos aprovados", "Materiais de qualidade", "Prazo garantido"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para transformar seu espaço com qualidade e confiança
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border-border">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group/btn">
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-hero text-primary-foreground border-none shadow-primary max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato conosco e vamos encontrar a solução ideal para seu projeto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90">
                  Falar com Especialista
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Ver Todos os Serviços
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;