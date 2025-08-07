import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Clara",
    age: 17,
    school: "Escola Estadual",
    location: "São Paulo",
    text: "Consegui melhorar minha nota de 600 para 900 em apenas 2 meses! O feedback é super detalhado e me ajudou a entender exatamente onde estava errando.",
    rating: 5,
    improvement: "+300 pontos"
  },
  {
    name: "João Pedro",
    age: 18,
    school: "Colégio Particular",
    location: "Rio de Janeiro",
    text: "Muito prático usar pelo WhatsApp. Mandava a redação na hora do almoço e já tinha a correção quando saía da aula. Recomendo demais!",
    rating: 5,
    improvement: "+250 pontos"
  },
  {
    name: "Maria Eduarda",
    age: 16,
    school: "Instituto Federal",
    location: "Belo Horizonte",
    text: "A IA realmente entende as competências do ENEM. As sugestões de melhoria são muito específicas e fáceis de aplicar. Valeu muito a pena!",
    rating: 5,
    improvement: "+180 pontos"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de quem já melhorou a nota da redação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}, {testimonial.age} anos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.school} • {testimonial.location}
                    </p>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.improvement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <strong>4.9/5</strong> estrelas • Mais de <strong>2.500</strong> avaliações positivas
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;