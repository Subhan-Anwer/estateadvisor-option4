import React from "react";
import Hero from "../../../../components/property-page/Hero";
import { getAllProperties } from "@/sanity/lib/properties/getAllProperties";
import PropertyGrid from "../../../../components/property-page/PropertyGrid";

export const dynamic = "force-static";
export const revalidate = 60;

const page = async () => {
  const properties = await getAllProperties();
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center justify-top min-h-screen bg-[#0f0f0f] p-4 mb-10">
        <div className="max-w-7xl mx-auto md:px-6 px-2">
          <PropertyGrid properties={properties} />
        </div>
      </div>
    </>
  );
};

export default page;
