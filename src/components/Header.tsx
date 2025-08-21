import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-construction-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl lg:text-3xl font-bold">
            <span className="text-construction-dark">Whyte</span>
            <span className="text-construction-green">Horse</span>
            <div className="text-xs lg:text-sm font-medium text-construction-gray uppercase tracking-wider -mt-1">
              Contracting
            </div>
          </div>
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