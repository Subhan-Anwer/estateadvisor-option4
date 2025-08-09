import Header from "../../components/Header";
import Hero from "../../components/Hero";
import StatsSection from "../../components/StatsSection";
import FeaturedProperties from "../../components/FeaturedPropert";
import TestimonialsSection from "../../components/Testimonials";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsappButton";
import Areas from "../../components/Areas";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <StatsSection />
      <FeaturedProperties />
      <Areas />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
