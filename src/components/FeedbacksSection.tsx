import { Star } from "lucide-react";

interface Feedback {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

const feedbacks: Feedback[] = [
  {
    name: "Carlos Mendes",
    role: "Empresário",
    text: "Excelente atendimento! Fui roubado e a Smart Protect resolveu tudo em poucos dias. Recomendo muito, proteção de verdade.",
    rating: 5,
    image: "/semfoto.jpg",
  },
  {
    name: "Marina Silva",
    role: "Motorista Profissional",
    text: "Melhor custo-benefício que já tive. O seguro cobre tudo mesmo e o atendimento 24h me salvou várias vezes em emergências.",
    rating: 5,
    image: "/semfoto.jpg",
  },
  {
    name: "Felipe Costa",
    role: "Executivo",
    text: "Plano completo, preço justo e ainda tem atendimento humanizado. Sensacional! Cancelei outras seguradoras.",
    rating: 5,
    image: "/semfoto.jpg",
  },
  {
    name: "Juliana Oliveira",
    role: "Vendedora",
    text: "Meu carro está 100% protegido. Troquei para a Smart Protect e não me arrependo. Muito satisfeita com o serviço!",
    rating: 5,
    image: "/semfoto.jpg",
  },
  {
    name: "Rafael Santos",
    role: "Taxista",
    text: "Na minha profissão, a segurança é fundamental. Com a Smart Protect durmo tranquilo. Proteção de verdade mesmo!",
    rating: 5,
    image: "/semfoto.jpg",
  },
  {
    name: "Beatriz Martins",
    role: "Consultora",
    text: "Surpreendente! Não esperava tanta eficiência. O atendimento humanizado faz toda a diferença. Muito bom!",
    rating: 5,
    image: "/semfoto.jpg",
  },
];

const FeedbackCard = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-lg transition-all">
      <div className="mb-4">
        <h4 className="font-heading font-bold text-foreground">{feedback.name}</h4>
        <p className="text-sm text-muted-foreground">{feedback.role}</p>
      </div>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: feedback.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed italic">
        "{feedback.text}"
      </p>
    </div>
  );
};

const FeedbacksSection = () => {
  return (
    <section id="feedbacks" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            O que dizem nossos clientes
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mt-3">
            Histórias de Êxito
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pessoas reais compartilhando suas experiências com a proteção veicular da Smart Protect
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.name} feedback={feedback} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground mb-4">
            Estamos sempre gerando histórias de satisfação
          </p>
          <a
            href={`https://wa.me/5527999063796?text=Olá! Gostaria de conhecer mais sobre a Smart Protect.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3.5 rounded-xl font-heading font-bold transition-all"
          >
            Solicitar Cotação Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSection;
