import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Disable automatic scroll restoration by the browser
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Immediate scroll to top
    window.scrollTo(0, 0);

    // Backup scroll with a small timeout to ensure it hits after content renders
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
