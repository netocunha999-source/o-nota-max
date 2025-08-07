import { Clock, Target, Lightbulb, MessageCircle, Brain, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Correção em segundos",
    description: "Resultado instantâneo, sem esperar dias pela correção"
  },
  {
    icon: Target,
    title: "Nota baseada nas 5 competências",
    description: "Avaliação completa seguindo exatamente os critérios do ENEM"
  },
  {
    icon: Lightbulb,
    title: "Sugestões personalizadas",
    description: "Dicas específicas para melhorar cada aspecto da sua redação"
  },
  {
    icon: MessageCircle,
    title: "Sem app, direto no WhatsApp",
    description: "Use o app que você já tem no celular, simples e prático"
  },
  {
    icon: Brain,
    title: "IA treinada com redações nota 1000",
    description: "Tecnologia alimentada com milhares de redações que tiraram nota máxima"
  },
  {
    icon: CheckCircle,
    title: "Feedback detalhado",
    description: "Análise completa de gramática, coesão, argumentação e proposta"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que escolher o Nota 1000 AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A forma mais rápida e inteligente de melhorar sua redação do ENEM
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <CheckCircle className="text-primary" size={16} />
            <span className="text-sm font-medium text-primary">
              Mais de 10.000 estudantes já melhoraram suas notas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;