import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/13a8f5ea-dde2-47eb-ad6a-4996ee41d3ba.png" 
              alt="ENEMULTCRED" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="yellow" 
              size="sm"
              onClick={() => window.open('https://wa.me/5571993068074', '_blank')}
            >
              Simular Crédito
            </Button>
            <Button 
              variant="bb" 
              size="sm"
              onClick={() => scrollToSection('contato')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="yellow" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/5571993068074', '_blank')}
                >
                  Simular Crédito
                </Button>
                <Button 
                  variant="bb" 
                  size="sm"
                  onClick={() => scrollToSection('contato')}
                >
                  Fale Conosco
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;