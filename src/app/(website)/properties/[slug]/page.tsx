import React from "react";
import { notFound } from "next/navigation";
import { getPropertyBySlug } from "@/sanity/lib/properties/getPropertyBySlug";
import { PropertyImageCarousel } from "../../../../../components/property-slug-page/PropertyImageCarousel";
import { PropertyHeader } from "../../../../../components/property-slug-page/PropertyHeader";
import { PropertyContact } from "../../../../../components/property-slug-page/PropertyContact";
import { PropertyDescription } from "../../../../../components/property-slug-page/PropertyDescription";

export const dynamic = "force-static";
export const revalidate = 60;

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);


  if (!property) {
    return notFound();
  }

  // const isSoldOut = false;
  
  return (
    //  {isSoldOut && (
    //    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //      <span className="text-white font-bold text-lg">Out of Stock</span>
    //    </div>
    //  )}

    <div className="min-h-screen bg-white/2 mt-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6">
        <PropertyImageCarousel property={property} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-12 bg-black">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <PropertyHeader property={property} />
            <PropertyDescription />
            {/* <PropertyAmenities /> */}
            {/* <PropertyMap /> */}
          </div>

          {/* Right Column - Contact */}
          <div className="lg:col-span-1 sm:pr-4 pr-0">
            <div className="sticky top-6">
              <PropertyContact slug={slug} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
