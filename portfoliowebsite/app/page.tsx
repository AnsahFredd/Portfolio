import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/herosection";
import { AboutSection } from "./components/about";
import { ServicesSection } from "./components/service";
import { PortfolioSection } from "./components/portfolio";
import { ContactSection } from "./components/contact";
import { Footer } from "./components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
