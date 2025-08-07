import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="Nota 1000 AI" className="h-12 w-auto brightness-0 invert" />
            <p className="text-background/80 text-sm">
              A plataforma de IA que está revolucionando a preparação para o ENEM. 
              Correções precisas, feedback detalhado e resultados em segundos.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-2">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp: (11) 99999-9999
              </a>
              <a 
                href="mailto:contato@nota1000ai.com"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail size={16} />
                contato@nota1000ai.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Redes sociais</h3>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/nota1000_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm text-background/60">
              Siga @nota1000_ai para dicas diárias de redação
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Nota 1000 AI. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1 text-background/60 text-sm">
              Feito com <Heart className="fill-red-500 text-red-500" size={14} /> para estudantes brasileiros
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg w-14 h-14 p-0"
          asChild
        >
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;