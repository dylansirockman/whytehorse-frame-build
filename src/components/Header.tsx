import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-construction-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 h-36 sm:h-40 lg:h-44 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0e70d349-e446-43b6-b64d-5fab0610534c.png" 
            alt="WhyteHorse Contracting" 
            className="h-32 sm:h-36 lg:h-40 w-auto"
          />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-12">
          <a href="#about" className="text-construction-dark hover:text-construction-green transition-colors font-medium">About</a>
          <a href="#services" className="text-construction-dark hover:text-construction-green transition-colors font-medium">Services</a>
          <a href="#process" className="text-construction-dark hover:text-construction-green transition-colors font-medium">Process</a>
          <a href="#contact" className="text-construction-dark hover:text-construction-green transition-colors font-medium">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <span className="hidden md:block text-construction-dark font-medium">(403) 555-0123</span>
          <Button variant="hero" size="sm" className="hidden md:block">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;