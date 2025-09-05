import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import BlueprintPillHeader from './BlueprintPillHeader';

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-construction-light to-construction-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <BlueprintPillHeader 
                index="4"
                title="Project Inquiry"
                metaRight="Contact Form Rev. A"
                as="div"
              />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-6 leading-tight">
              Start Your Next Build
              <br />
              <span className="text-construction-green">with Confidence</span>
            </h2>
            
            <p className="text-xl text-construction-gray mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact WhyteHorse Contracting today and discover why Alberta's top builders trust us for framing that's fast, reliable, and built to last.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-construction-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] border border-construction-light">
              <div className="bg-construction-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-construction-green" />
              </div>
              <h3 className="font-bold text-construction-dark mb-2">Call Us</h3>
              <p className="text-construction-gray">(403) 555-0123</p>
            </div>
            
            <div className="bg-construction-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] border border-construction-light">
              <div className="bg-construction-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-construction-green" />
              </div>
              <h3 className="font-bold text-construction-dark mb-2">Email Us</h3>
              <p className="text-construction-gray">info@whytehorsecontracting.com</p>
            </div>
            
            <div className="bg-construction-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] border border-construction-light">
              <div className="bg-construction-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-construction-green" />
              </div>
              <h3 className="font-bold text-construction-dark mb-2">Service Area</h3>
              <p className="text-construction-gray">Alberta & Surrounding Areas</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto font-semibold">
              Request Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 h-auto font-semibold border-construction-green text-construction-green hover:bg-construction-green hover:text-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;