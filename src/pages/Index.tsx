import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientShowcaseSection from "@/components/ClientShowcaseSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientShowcaseSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
