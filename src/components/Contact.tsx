import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Calculator 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu espaço? Solicite seu orçamento gratuito hoje mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                Solicitar Orçamento Gratuito
              </CardTitle>
              <CardDescription>
                Preencha o formulário e entraremos em contato em até 2 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Endereço do Projeto</Label>
                <Input id="address" placeholder="Rua, número, bairro, cidade" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Tipo de Serviço</Label>
                <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <option>Reforma Completa</option>
                  <option>Pintura</option>
                  <option>Cozinha</option>
                  <option>Banheiro</option>
                  <option>Instalações Elétricas</option>
                  <option>Hidráulica</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição do Projeto</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descreva detalhadamente o que você precisa..."
                  rows={4}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Enviar Solicitação
                </Button>
                <Button variant="accent" className="flex-1">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contato Direto</CardTitle>
                <CardDescription>
                  Fale conosco pelos canais oficiais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">(27) 99789-4915</p>
                    <p className="text-sm text-muted-foreground">Ligação ou WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">charles-gesso@hotmail.com</p>
                    <p className="text-sm text-muted-foreground">Resposta em até 2h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Vitória, ES</p>
                    <p className="text-sm text-muted-foreground">Atendemos toda Grande Vitória</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span className="text-foreground">Segunda à Sexta</span>
                  <span className="font-semibold text-primary">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span className="text-foreground">Sábado</span>
                  <span className="font-semibold text-primary">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span className="text-foreground">Domingo</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
                <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    💡 <strong>Atendimento de emergência 24h</strong> para vazamentos e problemas elétricos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;