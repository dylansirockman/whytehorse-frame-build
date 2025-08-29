const ClientShowcaseSection = () => {
  const clients = [
    { name: "Builder One", logo: "/client-logo1.svg" },
    { name: "Construction Co", logo: "/client-logo2.svg" },
    { name: "Homes Ltd", logo: "/client-logo3.svg" },
    { name: "Prairie Build", logo: "/client-logo4.svg" },
    { name: "Alberta Framing", logo: "/client-logo5.svg" },
    { name: "Summit Builders", logo: "/client-logo6.svg" },
    { name: "Rockwood Homes", logo: "/client-logo7.svg" },
    { name: "Northern Contractors", logo: "/client-logo8.svg" },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section 
      className="relative z-0 overflow-visible pt-10 py-16 bg-gray-50"
      style={{ scrollMarginTop: '96px' }}
    >
      <div className="container mx-auto px-4 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark">
            Trusted by Alberta's Top Builders
          </h2>
        </div>

        <div className="relative">
          {/* Continuous scrolling container */}
          <div 
            className="flex gap-x-8 animate-scroll"
            style={{
              width: 'calc(200% + 4rem)', // Account for gap
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{ minWidth: '200px' }}
              >
                <img
                  src={client.logo}
                  alt={`Client: ${client.name}`}
                  className="max-h-12 md:max-h-18 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;