import { Home, Plus, Building, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential House Framing",
    description: "Complete framing solutions for single-family homes, from foundation to roof structure."
  },
  {
    icon: Plus,
    title: "Additions & Renovations", 
    description: "Expert framing for home additions, extensions, and major renovation projects."
  },
  {
    icon: Building,
    title: "Multi-Family Framing",
    description: "Specialized framing services for duplexes, townhomes, and apartment complexes."
  },
  {
    icon: Wrench,
    title: "Structural Repairs",
    description: "Professional structural repair and reinforcement services for existing frames."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-dark mb-6">
            Our Framing Services
          </h2>
          <p className="text-xl text-construction-gray max-w-2xl mx-auto">
            Comprehensive framing solutions tailored to your construction needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-construction transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-construction-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-construction-green group-hover:text-white transition-all duration-300">
                <service.icon className="w-8 h-8 text-construction-green group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-construction-dark mb-4">
                {service.title}
              </h3>
              
              <p className="text-construction-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;