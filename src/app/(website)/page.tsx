import Hero from "../../../components/home-page/Hero";
import StatsSection from "../../../components/home-page/StatsSection";
import FeaturedProperties from "../../../components/home-page/FeaturedPropert";
import TestimonialsSection from "../../../components/home-page/Testimonials";
import ContactSection from "../../../components/home-page/ContactSection";
import Areas from "../../../components/home-page/Areas";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <StatsSection />
      <FeaturedProperties />
      <Areas />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
