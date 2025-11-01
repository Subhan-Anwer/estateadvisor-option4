"use client";
import React from "react";
import { Property } from "../../sanity.types";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bath, Bed, MapPin, Square } from "lucide-react";
import { imageUrl } from "@/lib/imageUrl";

const isSoldOut = false;

const PropertyGrid = ({ properties }: { properties: Property[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
      {properties?.map((property, index) => {
        const isLarge = index % 3 === 0;
        const gridClass = isLarge
          ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
          : "sm:col-span-1 lg:col-span-1";

        return (
          <motion.div
            className={`w-full h-full group relative bg-white/3 backdrop-blur-sm border border-gray-400/50 rounded-t-[18px] rounded-b-[8px] overflow-hidden hover:border-[#d4af37]/30 transition-all duration-200 hover:scale-[103%] hover:shadow-2xl hover:shadow-[#d4af37]/10 ${gridClass}`}
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              opacity: { duration: 0.35, ease: "easeOut" },
              y: { duration: 0.25, ease: "easeOut" }, // same timing → simultaneous
              delay: index * 0.15,
            }}
            key={index}
          >
            <Link href={`/properties/${property.slug?.current}`}>
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${
                  isLarge ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                {property.mainImage && (
                  <Image
                    src={imageUrl(property.mainImage).url()}
                    alt={property.name || "Property Image"}
                    fill
                    sizes={
                      isLarge
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover object-center"
                  />
                )}

                {isSoldOut && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span className="text-white font-bold text-lg bg-red-700 px-2 py-0.5 rounded-[6px] group-hover:scale-125 transition-transform duration-300">
                      Sold Out
                    </span>
                  </div>
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                {/* Property Type Badge */}
                {property.type && (
                  <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0c2625] px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="py-6 md:pl-5 pl-3 md:pr-3 pr-2">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] line-clamp-2 transition-colors">
                  {property.name}
                </h3>
                <div className="flex items-center text-white/60">
                  <MapPin size={16} className="mr-1.5" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between my-3">
                  <div className="text-2xl font-bold text-[#d4af37]">
                    ₨ {property.price}
                  </div>
                </div>
                {/* Property Details */}
                <div className="flex flex-wrap items-center space-y-1 space-x-3 text-white/60 text-sm">
                  {(property.beds ?? 0) > 0 && (
                    <div className="flex items-center space-x-1">
                      <Bed size={16} />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {(property.bath ?? 0) > 0 && (
                    <div className="flex items-center space-x-1">
                      <Bath size={16} />
                      <span>{property.bath} Baths</span>
                    </div>
                  )}
                  {property.size && (
                    <div className="flex items-center space-x-1">
                      <Square size={16} />
                      <span>
                        {property.size?.value} {property.size?.unit}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> */}
            </Link>
          </motion.div>
          // </div>
        );
      })}
    </div>
  );
};

export default PropertyGrid;
