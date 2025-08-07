import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como envio minha redação?",
    answer: "É muito simples! Após se cadastrar, você receberá o número do nosso WhatsApp. Basta digitar ou fotografar sua redação e enviar. Nossa IA processará em segundos e você receberá a correção completa."
  },
  {
    question: "Posso mandar por foto?",
    answer: "Sim! Você pode enviar sua redação fotografada ou digitada. Nossa IA consegue ler textos manuscritos com alta precisão. Apenas certifique-se de que a foto esteja nítida e bem iluminada."
  },
  {
    question: "A correção é feita por humanos?",
    answer: "Nossa correção é feita por Inteligência Artificial treinada com milhares de redações nota 1000 e supervisionada por professores especialistas em ENEM. Isso garante precisão e consistência nas avaliações."
  },
  {
    question: "Tem versão gratuita?",
    answer: "Sim! Oferecemos uma correção gratuita para você testar nosso serviço. Após isso, temos planos acessíveis com diferentes quantidades de correções mensais."
  },
  {
    question: "Como funciona a avaliação das 5 competências?",
    answer: "Seguimos exatamente os critérios oficiais do ENEM: Competência 1 (domínio da norma), Competência 2 (compreensão do tema), Competência 3 (argumentação), Competência 4 (coesão) e Competência 5 (proposta de intervenção)."
  },
  {
    question: "Quanto tempo demora para receber a correção?",
    answer: "Nossa IA processa e envia a correção em até 30 segundos após o envio da redação. Você receberá a nota, feedback detalhado e sugestões de melhoria instantaneamente."
  },
  {
    question: "Posso enviar quantas redações quiser?",
    answer: "Depende do seu plano. Temos planos que vão desde correções avulsas até pacotes mensais ilimitados. Todos com preços super acessíveis para estudantes."
  },
  {
    question: "A nota da IA é confiável?",
    answer: "Sim! Nossa IA tem 95% de precisão comparada com correções humanas especializadas. É treinada constantemente com novas redações nota 1000 para manter a qualidade."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o Nota 1000 AI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;