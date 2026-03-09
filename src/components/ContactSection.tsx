import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      text: "Av. Nossa Senhora da Penha, 280 - Praia do Canto, Vitória - ES",
      href: "https://maps.google.com/?q=Av.+Nossa+Senhora+da+Penha+280+Vitória+ES",
    },
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      text: "+55 (27) 99906-3796",
      href: "https://wa.me/5527999063796",
    },
    {
      icon: Mail,
      title: "E-mail",
      text: "suportesmartprotect@gmail.com",
      href: "mailto:suportesmartprotect@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário",
      text: "Segunda a Sexta, 8h às 18h",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-surface-dark text-surface-dark-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
            Fale Conosco
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl mt-3">
            Entre em Contato
          </h2>
          <p className="text-surface-dark-foreground/60 mt-4 max-w-xl mx-auto">
            Tire suas dúvidas e faça uma cotação sem compromisso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={item.title}
                {...wrapperProps}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary/20 border border-primary/30 hover:border-accent/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-surface-dark-foreground/70">{item.text}</p>
              </Wrapper>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5527999063796?text=Olá! Gostaria de mais informações sobre a proteção veicular."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-accent/90 transition-all animate-pulse-glow"
          >
            <Phone className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
