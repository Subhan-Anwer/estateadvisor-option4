"use client";
import React from "react";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in DHA Phase 6",
      location: "DHA Phase 6, Karachi",
      price: "8.5 Crore",
      beds: 5,
      baths: 6,
      area: "500 sq yd",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      rating: 4.9,
      featured: true,
    },
    {
      id: 2,
      title: "Modern Apartment in Clifton",
      location: "Clifton Block 2, Karachi",
      price: "2.8 Crore",
      beds: 3,
      baths: 3,
      area: "2100 sq ft",
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
      rating: 4.7,
      featured: false,
    },
    {
      id: 3,
      title: "Commercial Plaza in Gulshan",
      location: "Gulshan-e-Iqbal, Karachi",
      price: "12 Crore",
      beds: 0,
      baths: 8,
      area: "8000 sq ft",
      image:
        "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
      rating: 4.8,
      featured: false,
    },
    {
      id: 4,
      title: "Penthouse in Emaar Crescent Bay",
      location: "Emaar Crescent Bay, Karachi",
      price: "15 Crore",
      beds: 4,
      baths: 5,
      area: "4500 sq ft",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      rating: 5.0,
      featured: true,
    },
    {
      id: 5,
      title: "Family Home in North Nazimabad",
      location: "North Nazimabad, Karachi",
      price: "1.8 Crore",
      beds: 4,
      baths: 3,
      area: "240 sq yd",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      rating: 4.5,
      featured: false,
    },
    {
      id: 6,
      title: "Sea View Apartment in Clifton",
      location: "Marine Drive, Clifton",
      price: "4.2 Crore",
      beds: 3,
      baths: 4,
      area: "2800 sq ft",
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      rating: 4.9,
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden ${
                    isLarge ? "h-80 lg:h-96" : "h-64"
                  }`}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                    <div className="flex items-center space-x-1">
                      <Bath size={16} />
                      <span>{property.baths} Baths</span>
                    </div>
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
          <button className="bg-[#d1a925] text-black font-semibold px-8 py-4 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
