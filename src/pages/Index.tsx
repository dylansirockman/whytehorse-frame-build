// src/pages/Index.tsx
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
    <>
      <Header />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth [scroll-padding-top:6rem]">
        <HeroSection />
        <AboutSection />
        <ClientShowcaseSection />
        <ServicesSection />
        <ProcessSection />
        <TrustSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
