import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-student.png";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com sua API
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Star className="fill-current" size={20} />
                <span className="text-sm font-medium">Mais de 10.000 redações corrigidas</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Sua redação corrigida em{" "}
                <span className="text-primary">segundos</span> com IA no WhatsApp
              </h1>
              <p className="text-xl text-muted-foreground">
                Mande sua redação e receba nota, feedback das 5 competências do ENEM 
                e sugestões de melhoria direto no seu WhatsApp
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Receba sua primeira correção gratuita
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                  size="lg"
                >
                  <MessageCircle size={20} />
                  Receber correção no WhatsApp
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-3">
                100% gratuito • Sem compromisso • Resultado em segundos
              </p>
            </div>
          </div>

          <div className="flex justify-center animate-scale-in">
            <img 
              src={heroImage} 
              alt="Estudante feliz com redação nota 1000" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;