const Footer = () => {
  return (
    <footer className="bg-construction-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/0e70d349-e446-43b6-b64d-5fab0610534c.png" 
              alt="WhyteHorse Contracting" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Professional house framing contractors delivering structural integrity you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Residential House Framing</li>
              <li>Additions & Renovations</li>
              <li>Multi-Family Framing</li>
              <li>Structural Repairs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              <li>Phone: (403) 555-0123</li>
              <li>Email: info@whytehorsecontracting.com</li>
              <li>Serving Alberta</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 WhyteHorse Contracting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;