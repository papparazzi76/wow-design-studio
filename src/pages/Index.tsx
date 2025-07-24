import HeroSection from "@/components/HeroSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Gallery */}
      <ProjectsGallery />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Call to Action */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;