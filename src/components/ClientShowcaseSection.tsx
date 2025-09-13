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
    <section className="py-12 lg:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-construction-dark mb-4">
            Trusted by Alberta's Top Builders
          </h2>
          <p className="text-lg lg:text-xl text-construction-gray max-w-2xl mx-auto">
            Leading construction companies across Alberta trust WhyteHorse for their framing needs
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {clients.slice(0, 8).map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={`Client: ${client.name}`}
                className="max-h-10 lg:max-h-14 w-auto max-w-full opacity-60 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;