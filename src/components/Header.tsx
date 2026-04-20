import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo_smart_protect.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#planos", label: "Planos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Smart Protect" className="h-10 md:h-14 rounded-lg" />
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-lg text-primary-foreground tracking-wide">
              SMART <span className="text-accent">PROTECT</span>
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://smartprotect.sapv.deltabit.com.br/crm/quotation?id=cj00NiZjPTU="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent/90 transition-colors animate-pulse-glow"
          >
            <Phone className="w-4 h-4" />
            Cotação Grátis
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-dark border-t border-primary/20 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-accent font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://smartprotect.sapv.deltabit.com.br/crm/quotation?id=cj00NiZjPTU="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-heading font-semibold"
          >
            <Phone className="w-4 h-4" />
            Cotação Grátis
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
