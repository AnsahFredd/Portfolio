import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/herosection";
import { AboutSection } from "./components/about";
import { ServicesSection } from "./components/service";
import { PortfolioSection } from "./components/portfolio";
import { TestimonialsSection } from "./components/testimonials";
import { ContactSection } from "./components/contact";
import { Footer } from "./components/footer";
import { ExperienceLogos } from "./components/ExperienceLogos";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceLogos />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
