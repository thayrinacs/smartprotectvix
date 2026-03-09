import { Shield, Car, Zap, ChevronDown } from "lucide-react";


const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Shield className="w-6 h-6 text-accent" />
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
              Proteção Veicular em Vitória - ES
            </span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-surface-dark-foreground leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Seu Veículo{" "}
            <span className="text-accent">Protegido</span>
            <br />
            24 Horas por Dia
          </h1>

          <p className="text-lg md:text-xl text-surface-dark-foreground/70 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Proteção completa para todos os tipos de veículos e bikes elétricas. Planos a partir de condições especiais com assistência 24h.
          
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <a
              href="https://wa.me/5527999063796?text=Olá! Gostaria de fazer uma cotação de proteção veicular."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-accent/90 transition-all animate-pulse-glow">
              
              Faça Sua Cotação Grátis
            </a>
            <a
              href="#planos"
              className="w-full sm:w-auto border-2 border-surface-dark-foreground/30 text-surface-dark-foreground px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:border-accent hover:text-accent transition-all">
              
              Conheça os Planos
            </a>
          </div>

          {/* Vehicle types */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            {[
            { icon: Car, label: "Carros & Motos" },
            { icon: Zap, label: "Bikes Elétricas" },
            { icon: Shield, label: "Caminhões" }].
            map((item) =>
            <div key={item.label} className="flex flex-col items-center gap-2 text-surface-dark-foreground/60">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-surface-dark-foreground/40" />
        </div>
      </div>
    </section>);

};

export default HeroSection;