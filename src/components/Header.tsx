import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/lovable-uploads/cba28e53-ed21-4548-9ac5-2586abdb4138.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Nota 1000 AI" className="h-12 w-auto" />
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;