import { Shield, Car, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proteção Completa",
    desc: "Cobertura contra roubo, furto, colisão, incêndio e fenômenos da natureza.",
  },
  {
    icon: Car,
    title: "Todos os Veículos",
    desc: "Carros, motos, caminhões e bikes elétricas com planos sob medida.",
  },
  {
    icon: Clock,
    title: "Assistência 24h",
    desc: "Socorro mecânico, elétrico, reboque e muito mais a qualquer hora.",
  },
  {
    icon: Headphones,
    title: "Atendimento Humanizado",
    desc: "Suporte dedicado para você em Vitória e região metropolitana.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mt-3">
            Proteção de Verdade
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Porque cuidar do que realmente importa nunca foi tão fácil. A Smart Protect oferece proteção veicular acessível e completa em Vitória - ES.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
