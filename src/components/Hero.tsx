import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-reforma-blue.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-section">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transformamos{" "}
                <span className="text-primary">Seus Sonhos</span>{" "}
                em Realidade
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialistas em reformas residenciais e comerciais com mais de 15 anos de experiência. 
                Qualidade garantida e atendimento personalizado.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Orçamento gratuito e sem compromisso",
                "Equipe qualificada e experiente", 
                "Materiais de primeira qualidade",
                "Prazo e qualidade garantidos"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Solicitar Orçamento Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Nossos Trabalhos
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-primary">
              <img 
                src={heroImage} 
                alt="Reforma residencial de qualidade - Reformalar"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-card p-6 border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Reformas Realizadas</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent rounded-xl shadow-card p-6 text-accent-foreground">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;