import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import QuoteModal from "@/components/QuoteModal";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Header background and shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sectionIds = NAV.map(n => n.href.replace("#", ""));
    const nodes = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    nodes.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu and handle navigation
  const handleNavClick = () => setOpen(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (open) {
      const focusableElements = document.querySelectorAll(
        '#mobile-menu a, #mobile-menu button'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();
      
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [open]);

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        )}
        role="banner"
        style={{ 
          paddingRight: 'var(--scrollbar-compensation, 0px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Brand */}
            <a 
              href="#" 
              className="flex items-center group z-50 relative" 
              aria-label="WhyteHorse Contracting - Home"
            >
              <div className={cn(
                "flex flex-col leading-none transition-all duration-500 ease-out",
                mounted ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              )}>
                <span className="text-2xl lg:text-3xl font-bold tracking-tight">
                  <span className="text-gray-800">Whyte</span>
                  <span className="text-construction-green">horse</span>
                </span>
                <span className="mt-0.5 text-[11px] lg:text-xs font-medium tracking-[0.14em] uppercase text-gray-600 group-hover:text-construction-green transition-colors duration-200">
                  Contracting
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center gap-8 xl:gap-10" 
              aria-label="Main Navigation"
            >
              {NAV.map((item, index) => {
                const isActive = active === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "relative py-2 font-medium text-base transition-all duration-200 ease-out group",
                      "text-gray-700 hover:text-construction-green",
                      "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2 focus:ring-offset-white rounded-lg px-2",
                      mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    )}
                    style={{ 
                      transitionDelay: mounted ? `${100 + index * 50}ms` : "0ms"
                    }}
                  >
                    {item.label}
                    
                    {/* Hover underline */}
                    <span 
                      className="absolute left-0 bottom-0 h-0.5 w-0 bg-construction-green transition-all duration-200 ease-out group-hover:w-full"
                      aria-hidden="true"
                    />
                    
                    {/* Active indicator */}
                    {isActive && (
                      <span 
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-construction-green rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Actions */}
            <div className={cn(
              "flex items-center gap-4 transition-all duration-500 ease-out",
              mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            )} style={{ transitionDelay: mounted ? "200ms" : "0ms" }}>
              
              {/* Phone Number */}
              <a
                href="tel:+14035550123"
                className="hidden md:inline-flex items-center gap-2 text-gray-700 font-medium hover:text-construction-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2 focus:ring-offset-white rounded-lg px-2 py-1"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">(403) 555-0123</span>
              </a>

              {/* CTA Button */}
              <Button
                onClick={() => setQuoteModalOpen(true)}
                data-quote-trigger
                className={cn(
                  "hidden md:inline-flex font-semibold px-6 py-2.5 rounded-xl",
                  "bg-construction-green hover:bg-construction-green/90",
                  "text-white shadow-lg hover:shadow-xl",
                  "transform hover:scale-105 active:scale-95",
                  "transition-all duration-200 ease-out",
                  "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2 focus:ring-offset-white"
                )}
              >
                Get Quote
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className={cn(
                  "lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg",
                  "text-gray-700 hover:text-construction-green hover:bg-gray-100",
                  "transition-all duration-200 ease-out",
                  "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2 focus:ring-offset-white",
                  open && "bg-gray-100"
                )}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <div className="relative w-5 h-5">
                  <Menu className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-200",
                    open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  )} />
                  <X className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-200",
                    open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  )} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide Panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden",
          "transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gray-800">Whyte</span>
              <span className="text-construction-green">horse</span>
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-[0.14em] uppercase text-gray-600">
              Contracting
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-gray-700 hover:text-construction-green hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col py-6" aria-label="Mobile Navigation">
          {NAV.map((item, index) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={cn(
                  "px-6 py-4 text-lg font-medium transition-all duration-200 ease-out",
                  isActive 
                    ? "text-construction-green bg-construction-green/5 border-r-2 border-construction-green" 
                    : "text-gray-700 hover:text-construction-green hover:bg-gray-50",
                  "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2 focus:ring-offset-white focus:ring-inset",
                  open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                )}
                style={{ 
                  transitionDelay: open ? `${100 + index * 75}ms` : "0ms"
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Actions */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50",
          "transition-all duration-300 ease-out",
          open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )} style={{ transitionDelay: open ? "400ms" : "0ms" }}>
          
          {/* Phone */}
          <a
            href="tel:+14035550123"
            className="flex items-center gap-3 text-gray-700 hover:text-construction-green transition-colors duration-200 mb-4 p-2 -m-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">(403) 555-0123</span>
          </a>

          {/* CTA */}
          <Button
            onClick={() => {
              setQuoteModalOpen(true);
              setOpen(false);
            }}
            data-quote-trigger
            className="w-full font-semibold px-6 py-3 rounded-xl bg-construction-green hover:bg-construction-green/90 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Get Your Quote
          </Button>
        </div>
      </div>

      <QuoteModal 
        open={quoteModalOpen} 
        onOpenChange={setQuoteModalOpen} 
      />
    </>
  );
};

export default Header;