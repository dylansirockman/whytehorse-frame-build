import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const QuoteForm = () => {
  return (
    <div className="bg-gradient-to-br from-construction-white to-construction-light rounded-3xl p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] border-2 border-construction-green/20 backdrop-blur-sm relative overflow-hidden">
      {/* Accent elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-construction-green/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-construction-green/10 rounded-full blur-xl"></div>
      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-construction-dark mb-2">Get Your Free Quote</h3>
          <p className="text-construction-gray">Tell us about your framing project</p>
        </div>
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input 
                placeholder="First Name" 
                className="h-12 border-construction-light focus:border-construction-green"
              />
            </div>
            <div>
              <Input 
                placeholder="Last Name" 
                className="h-12 border-construction-light focus:border-construction-green"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-12 border-construction-light focus:border-construction-green"
              />
            </div>
            <div>
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="h-12 border-construction-light focus:border-construction-green"
              />
            </div>
          </div>
          
          <div>
            <Input 
              placeholder="Project Location" 
              className="h-12 border-construction-light focus:border-construction-green"
            />
          </div>
          
          <div>
            <Textarea 
              placeholder="Tell us about your project (square footage, timeline, special requirements)" 
              rows={4}
              className="border-construction-light focus:border-construction-green resize-none"
            />
          </div>
          
          <Button variant="hero" size="lg" className="w-full h-12 text-base font-semibold">
            Get My Free Quote
          </Button>
          
          <p className="text-sm text-construction-gray text-center">
            We'll respond within 24 hours with your detailed estimate
          </p>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;