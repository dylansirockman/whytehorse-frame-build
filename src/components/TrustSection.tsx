import { Star } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-24 bg-construction-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Builders Across Alberta
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            For framing that's fast, reliable, and built to last
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              "WhyteHorse consistently delivers high-quality framing work on time and on budget. Their attention to detail is exceptional."
            </p>
            <div className="border-t border-white/20 pt-4">
              <div className="font-semibold">Mike Johnson</div>
              <div className="text-white/70 text-sm">Prairie Home Builders</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              "Professional crew, excellent communication, and structural work that meets all our specifications. Highly recommended."
            </p>
            <div className="border-t border-white/20 pt-4">
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-white/70 text-sm">Mountain View Construction</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              "When we need framing done right the first time, we call WhyteHorse. They're our go-to team for all residential projects."
            </p>
            <div className="border-t border-white/20 pt-4">
              <div className="font-semibold">Tom Rodriguez</div>
              <div className="text-white/70 text-sm">Alberta Custom Homes</div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-construction-green mb-2">500+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-construction-green mb-2">50+</div>
            <div className="text-white/80">Builder Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-construction-green mb-2">100%</div>
            <div className="text-white/80">On Schedule</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-construction-green mb-2">15+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;