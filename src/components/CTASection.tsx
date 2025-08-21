import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-dark mb-6">
            Start Your Next Build
            <br />
            <span className="text-construction-green">with Confidence</span>
          </h2>
          
          <p className="text-xl text-construction-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact WhyteHorse Contracting today and discover why Alberta's top builders trust us for framing that's fast, reliable, and built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              Request a Quote
            </Button>
            <Button variant="cta" size="lg" className="text-lg px-12 py-6 h-auto">
              Contact Us
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-construction-gray">
              <Phone className="w-5 h-5 text-construction-green" />
              <span className="text-lg">(403) 555-0123</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-construction-gray">
              <Mail className="w-5 h-5 text-construction-green" />
              <span className="text-lg">info@whytehorsecontracting.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;