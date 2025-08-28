import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ClientShowcaseSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const clients = [
    { name: "Builder One", logo: "/logo1.svg" },
    { name: "Construction Co", logo: "/logo2.svg" },
    { name: "Homes Ltd", logo: "/logo3.svg" },
    { name: "Prairie Build", logo: "/logo4.svg" },
    { name: "Alberta Framing", logo: "/logo5.svg" },
    { name: "Summit Builders", logo: "/logo6.svg" },
    { name: "Rockwood Homes", logo: "/logo7.svg" },
    { name: "Northern Contractors", logo: "/logo8.svg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            Trusted by Alberta's Top Builders
          </h2>
          <p className="text-lg text-construction-gray max-w-2xl mx-auto">
            Our craftsmanship is trusted by residential and commercial leaders across the province.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.concat(clients).map((client, index) => (
                <CarouselItem 
                  key={`${client.name}-${index}`} 
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex items-center justify-center h-20 md:h-24 px-4">
                    <img
                      src={client.logo}
                      alt={`Client: ${client.name}`}
                      className="max-h-8 md:max-h-12 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;