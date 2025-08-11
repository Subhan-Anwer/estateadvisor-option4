"use client";
import React from "react";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "300 Square Yards Brand New Bungalow",
      location: "DHA Phase VIII, Karachi",
      price: "8.5 Crore",
      beds: 5,
      baths: 0,
      area: "300 sq yards",
      image: "/prop1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Brand new Ultra Luxury House",
      location: "DHA Phase VIII, Karachi",
      price: "2.8 Crore",
      beds: 6,
      baths: 3,
      area: "666 sq yards",
      image: "/prop2.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Brand new Luxu House",
      location: "DHA Phase VIII, Karachi",
      price: "8 Crore",
      beds: 6,
      baths: 4,
      area: "666 sq ft",
      image: "/prop3.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "4 Luxurious 5-Bedroom Modern Bungalow",
      location: "DHA Phase VIII, Zone B, Karachi",
      price: "14 Crore",
      beds: 5,
      baths: 3,
      area: "500 sq yards",
      image: "/prop4.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "Ultra Luxury 5 Bedroom Bungalow",
      location: "DHA Phase VIII, Karachi",
      price: "3.8 Crore",
      beds: 5,
      baths: 4,
      area: "500 sq yards",
      image: "/prop5.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Brand New Luxurious Bungalow",
      location: "DHA Phase VIII, Karachi",
      price: "5.5 Crore",
      beds: 6,
      baths: 4,
      area: "1000 sq yards",
      image: "/prop6.jpg",
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-[#d4af37]">Properties</span>
          </h2>
          <p className="text-[16px] sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Discover handpicked premium properties that represent the best of
            Karachi's real estate market. Each property is carefully selected
            for quality, location, and value.
          </p>
        </div>

        {/* Magazine Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-2">
          {properties.map((property, index) => {
            const isLarge = property.featured;
            const gridClass = isLarge
              ? "md:col-span-2 md:row-span-2"
              : "md:col-span-1";

            return (
              <motion.div
                key={property.id}
                className={`group relative bg-white/3 backdrop-blur-sm border border-gray-500/50 rounded-2xl overflow-hidden hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10 ${gridClass}`}
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  opacity: { duration: 0.35, ease: "easeOut" },
                  y: { duration: 0.25, ease: "easeOut" }, // same timing → simultaneous
                  delay: index * 0.05,
                }}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden ${
                    isLarge ? "h-80 lg:h-96" : "h-64"
                  }`}
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    priority={index < 2}
                    sizes={
                      isLarge
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0c2625] px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pr-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-white/60 mb-4">
                    <MapPin size={16} className="mr-1.5" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-[#d4af37]">
                      ₨ {property.price}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center space-x-3 text-white/60 text-sm">
                    {property.beds > 0 && (
                      <div className="flex items-center space-x-1">
                        <Bed size={16} />
                        <span>{property.beds} Beds</span>
                      </div>
                    )}
                    {property.baths > 0 && (
                      <div className="flex items-center space-x-1">
                        <Bath size={16} />
                        <span>{property.baths} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <Square size={16} />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href={"#"}>
            <motion.button
              className="bg-[#d1a925] text-black font-semibold px-8 py-4 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] cursor-pointer hover:shadow-lg hover:shadow-[#d4af37]/25"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => console.log("hover started!")}
            >
              View All Properties
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
