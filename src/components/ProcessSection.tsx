import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Layout & Planning",
    description: "Precise measurements and layout according to architectural plans with detailed material calculations",
    image: "/lovable-uploads/a1ba7767-1cbb-44b9-8f4c-28d79e8d894b.png"
  },
  {
    number: "02", 
    title: "Floor Systems",
    description: "Foundation and floor joist installation with structural integrity and proper load distribution",
    image: "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png"
  },
  {
    number: "03",
    title: "Walls & Openings", 
    description: "Wall framing with precise door and window openings, ensuring proper structural support",
    image: "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png"
  },
  {
    number: "04",
    title: "Roof Systems",
    description: "Complete roof framing and truss installation with engineered precision and weather protection",
    image: "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png"
  }
];

import BlueprintPillHeader from './BlueprintPillHeader';

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 bg-construction-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <BlueprintPillHeader 
              index="3"
              title="Construction Method"
              metaRight="Scale 1/4&quot; = 1'-0&quot;"
              as="div"
            />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-6">
            Systematic Excellence
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures quality, speed, and precision at every stage of your framing project
          </p>
        </div>
        
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-8">
                  <div className="bg-construction-green text-white w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shadow-[var(--shadow-card)]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-construction-dark">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-construction-gray leading-relaxed mb-8">
                  {step.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-construction-green">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span className="font-medium">Quality assured at every step</span>
                  </div>
                  <div className="flex items-center text-construction-green">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span className="font-medium">Code compliant construction</span>
                  </div>
                  <div className="flex items-center text-construction-green">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span className="font-medium">Professional crew supervision</span>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-construction-green/5 rounded-2xl"></div>
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;