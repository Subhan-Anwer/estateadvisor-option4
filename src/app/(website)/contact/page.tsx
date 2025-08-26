import React from "react";
import Hero from "../../../../components/contact-page/Hero";
import ContactSection from "../../../../components/contact-page/ContactSection";
import QuickLinks from "../../../../components/contact-page/QuickLinks";
import OfficeMap from "../../../../components/contact-page/OfficeMap";

const page = () => (
  <div className="min-h-screen ">
    <Hero />
    <ContactSection />
    <QuickLinks />
    <OfficeMap />
  </div>
);

export default page;
