"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Bed, Ruler, Eye } from "lucide-react";
import { Property } from "@/app/(website)/property/page";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₨ ${(price / 10000000).toFixed(1)} Crore`;
    } else if (price >= 100000) {
      return `₨ ${(price / 100000).toFixed(1)} Lakh`;
    }
    return `₨ ${price.toLocaleString()}`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Eye className="w-5 h-5 text-[#0c2625]" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0c2625] mb-3 line-clamp-2 group-hover:text-[#d4af37] transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-[#d4af37]" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-[#0c2625]">
              {formatPrice(property.price)}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Ruler className="w-4 h-4 text-[#d4af37]" />
              <span>{property.size} sq yards</span>
            </div>
            {property.bedrooms && (
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4 text-[#d4af37]" />
                <span>{property.bedrooms} beds</span>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature : any, index: any) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-xs font-medium">
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#0c2625] hover:bg-[#1a4b47] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-[#0c2625]"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
