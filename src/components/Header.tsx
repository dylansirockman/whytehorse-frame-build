import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0e70d349-e446-43b6-b64d-5fab0610534c.png" 
            alt="WhyteHorse Contracting" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#process" className="text-foreground hover:text-primary transition-colors">Process</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <Button variant="hero" size="sm">
          Get a Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;