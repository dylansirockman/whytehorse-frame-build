import { Home, Plus, Building, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential House Framing",
    description: "Complete framing solutions for single-family homes, from foundation to roof structure.",
    features: ["Foundation prep", "Floor systems", "Wall framing", "Roof trusses"]
  },
  {
    icon: Plus,
    title: "Additions & Renovations", 
    description: "Expert framing for home additions, extensions, and major renovation projects.",
    features: ["Home extensions", "Room additions", "Structural modifications", "Code compliance"]
  },
  {
    icon: Building,
    title: "Multi-Family Framing",
    description: "Specialized framing services for duplexes, townhomes, and apartment complexes.",
    features: ["Multi-unit buildings", "Townhouse complexes", "Duplex construction", "Commercial framing"]
  },
  {
    icon: Wrench,
    title: "Structural Repairs",
    description: "Professional structural repair and reinforcement services for existing frames.",
    features: ["Beam reinforcement", "Foundation repairs", "Load bearing walls", "Code upgrades"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-construction-light to-construction-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-construction-green/10 px-4 py-2 rounded-full mb-6">
            <span className="text-construction-green font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-6">
            Comprehensive Framing Solutions
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            From residential homes to complex multi-family projects, we deliver precision framing services tailored to your construction needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-construction-white rounded-3xl p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-premium)] transition-all duration-500 border border-construction-light hover:border-construction-green/20 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-construction-green/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-construction-green group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-construction-green group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-construction-dark mb-4 group-hover:text-construction-green transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-construction-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-construction-gray">
                        <div className="w-1.5 h-1.5 bg-construction-green rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;