import { Check, Star, Crown, Shield } from "lucide-react";

interface PlanProps {
  name: string;
  icon: React.ReactNode;
  tier: "prata" | "ouro" | "diamante";
  benefits: string[];
  highlight?: boolean;
}

const PlanCard = ({ name, icon, tier, benefits, highlight }: PlanProps) => {
  const tierStyles = {
    prata: "border-muted-foreground/30 from-muted/50 to-muted",
    ouro: "border-amber-400/50 from-amber-50 to-amber-100/50",
    diamante: "border-accent/50 from-primary/5 to-accent/5",
  };

  const tierBadge = {
    prata: "bg-muted-foreground/20 text-muted-foreground",
    ouro: "bg-amber-100 text-amber-700",
    diamante: "bg-accent/10 text-accent",
  };

  return (
    <div
      className={`relative rounded-2xl border-2 bg-gradient-to-b p-6 md:p-8 transition-all hover:-translate-y-2 hover:shadow-2xl ${tierStyles[tier]} ${
        highlight ? "scale-105 shadow-2xl ring-2 ring-accent/30" : ""
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Mais Popular
        </div>
      )}

      <div className="text-center mb-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tierBadge[tier]}`}>
          {icon}
          {tier.toUpperCase()}
        </div>
        <h3 className="font-heading font-bold text-2xl text-foreground">{name}</h3>
      </div>

      <ul className="space-y-3 mb-8">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">{benefit}</span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/5527999063796?text=Olá! Tenho interesse no plano ${name}.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3.5 rounded-xl font-heading font-bold transition-all ${
          highlight
            ? "bg-accent text-accent-foreground hover:bg-accent/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        Solicitar Cotação
      </a>
    </div>
  );
};

const PlansSection = () => {
  const plans: PlanProps[] = [
    {
      name: "Smart Prata",
      icon: <Shield className="w-4 h-4" />,
      tier: "prata",
      benefits: [
        "Rastreador veicular",
        "Proteção contra furto e roubo",
        "Colisão e perda total",
        "Incêndio por colisão",
        "Fenômenos da natureza",
        "Assistência 24h — 250km",
        "Socorro elétrico e mecânico",
        "Pane seca e hospedagem",
        "Reboque para borracharia",
        "Troca de pneus",
        "Terceiros até R$ 15 mil",
      ],
    },
    {
      name: "Smart Ouro",
      icon: <Star className="w-4 h-4" />,
      tier: "ouro",
      highlight: true,
      benefits: [
        "Rastreador veicular",
        "Proteção contra furto e roubo",
        "Colisão e perda total",
        "Incêndio por colisão",
        "Fenômenos da natureza",
        "Assistência 24h — 600km",
        "Socorro elétrico e mecânico",
        "Chaveiro e proteção de para-brisa",
        "Taxi ou aplicativo emergencial",
        "Retorno a domicílio",
        "Carro reserva 15 dias",
        "Terceiros até R$ 30 mil",
        "Promoção hospitalar com 40% de participação",
      ],
    },
    {
      name: "Smart Diamante",
      icon: <Crown className="w-4 h-4" />,
      tier: "diamante",
      benefits: [
        "Rastreador veicular",
        "Proteção contra furto e roubo",
        "Colisão e perda total",
        "Incêndio por colisão",
        "Fenômenos da natureza",
        "Assistência 24h — 1000km (ilimitado)",
        "Socorro elétrico e mecânico",
        "Proteção total de vidros",
        "Terceiros até R$ 50 mil",
        "APP acidentes pessoais (R$ 5 mil/passageiro)",
        "DMH até R$ 2.000",
        "Carro reserva 25 dias",
        "Chaveiro, hospedagem e pequenos reparos",
        "Remoção hospitalar com 40% de participação",
      ],
    },
  ];

  return (
    <section id="planos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            Nossos Planos
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mt-3">
            Escolha a Proteção Ideal
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Planos completos para todos os tipos de veículo: carros, motos, caminhões e bikes elétricas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
