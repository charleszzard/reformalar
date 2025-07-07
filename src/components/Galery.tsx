import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

// Placeholder images - em produção você substituiria por imagens reais
const projects = [
  {
    title: "Reforma Completa - Apartamento",
    category: "Reforma Residencial",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    description: "Transformação completa de apartamento de 120m²",
    duration: "45 dias"
  },
  {
    title: "Cozinha Moderna",
    category: "Reforma de Cozinha",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Cozinha planejada com ilha central e acabamentos premium",
    duration: "20 dias"
  },
  {
    title: "Banheiro de Luxo",
    category: "Reforma de Banheiro",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    description: "Banheiro spa com hidromassagem e acabamentos de mármore",
    duration: "15 dias"
  },
  {
    title: "Escritório Corporativo",
    category: "Reforma Comercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    description: "Reforma completa de escritório com 200m²",
    duration: "30 dias"
  },
  {
    title: "Área Externa",
    category: "Paisagismo",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Projeto paisagístico com deck e jardim",
    duration: "25 dias"
  },
  {
    title: "Loft Industrial",
    category: "Reforma Residencial",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    description: "Transformação de galpão em loft moderno",
    duration: "60 dias"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Veja alguns dos nossos trabalhos realizados com excelência e dedicação
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default">Todos</Button>
            <Button variant="outline">Residencial</Button>
            <Button variant="outline">Comercial</Button>
            <Button variant="outline">Cozinhas</Button>
            <Button variant="outline">Banheiros</Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-none">
                        {project.duration}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <Badge variant="outline" className="mb-3 text-primary border-primary">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            Ver Mais Projetos
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;