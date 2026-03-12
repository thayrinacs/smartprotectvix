import logo from "@/assets/logo_smart_protect.jpeg";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-primary/20 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Smart Protect" className="h-10 rounded-lg" />
            <div>
              <span className="font-heading font-bold text-surface-dark-foreground">
                SMART <span className="text-accent">PROTECT</span>
              </span>
              <p className="text-xs text-surface-dark-foreground/50">SMARTPROTECT ASSOCIAÇÃO DE PROTEÇÃO VEICULAR</p>
            </div>
          </div>

          <div className="text-center md:text-right text-sm text-surface-dark-foreground/50">
            <p>CNPJ: 55.295.049/0001-00</p>
            <p>Av. Nossa Senhora da Penha, 280 — Vitória, ES</p>
            <p className="mt-1">© {new Date().getFullYear()} Smart Protect. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
