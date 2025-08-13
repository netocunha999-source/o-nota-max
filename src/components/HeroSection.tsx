import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Star className="fill-current" size={20} />
                <span className="text-sm font-medium">Mais de 10.000 redações corrigidas</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Sua redação corrigida em{" "}
                <span className="text-primary">minutos</span> com IA no WhatsApp
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Mande sua redação e receba nota, feedback das 5 competências do ENEM 
                e sugestões de melhoria direto no seu WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;