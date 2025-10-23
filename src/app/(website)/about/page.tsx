import React from "react";
import { HeroSection } from "../../../../components/about-page/HeroSection";
import { CompanyStorySection } from "../../../../components/about-page/CompanyStorySection";
import { MissionVisionSection } from "../../../../components/about-page/MissionVisionSection";
import { CoreValuesSection } from "../../../../components/about-page/CoreValuation";
import { TeamSection } from "../../../../components/about-page/TeamSection";
import { WhyChooseUsSection } from "../../../../components/about-page/WhyChooseUsSection";
import { CTASection } from "../../../../components/about-page/CTASection";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CompanyStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      {/* <TeamSection /> */}
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default page;
