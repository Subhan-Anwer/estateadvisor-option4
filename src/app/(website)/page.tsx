import Hero from "../../../components/home-page/Hero";
import StatsSection from "../../../components/home-page/StatsSection";
import FeaturedProperties from "../../../components/home-page/FeaturedProperty";
import TestimonialsSection from "../../../components/home-page/Testimonials";
import ContactSection from "../../../components/home-page/ContactSection";
import Areas from "../../../components/home-page/Areas";
import { getFeaturedProperties } from "@/sanity/lib/properties/getFeaturedProperties";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Home() {
  const featured_properties = await getFeaturedProperties();
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <StatsSection />
      <FeaturedProperties featured_properties={featured_properties} />
      <Areas />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
