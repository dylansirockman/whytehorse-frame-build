import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Layout & Planning",
    description: "Precise measurements and layout according to architectural plans",
    image: "/lovable-uploads/a1ba7767-1cbb-44b9-8f4c-28d79e8d894b.png"
  },
  {
    number: "02", 
    title: "Floor Systems",
    description: "Foundation and floor joist installation with structural integrity",
    image: "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png"
  },
  {
    number: "03",
    title: "Walls & Openings", 
    description: "Wall framing with precise door and window openings",
    image: "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png"
  },
  {
    number: "04",
    title: "Roof Systems",
    description: "Complete roof framing and truss installation",
    image: "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-construction-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-dark mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-construction-gray max-w-2xl mx-auto">
            A systematic approach that ensures quality, speed, and precision at every stage
          </p>
        </div>
        
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="bg-construction-green text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-construction-dark">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-construction-gray leading-relaxed mb-6">
                  {step.description}
                </p>
                
                <div className="flex items-center text-construction-green">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Quality assured at every step</span>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full rounded-lg shadow-construction"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;