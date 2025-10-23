"use client";

import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  type: "House" | "Bungalow" | "Commercial Plot";
  size: number; // in square yards
  bedrooms?: number;
  image: string;
  features: string[];
}

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="text-6xl mb-4">🏠</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          No properties found
        </h3>
        <p className="text-gray-600">
          Try adjusting your search filters to find more properties.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: index * 0.1 },
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <PropertyCard property={property} />
        </motion.div>
      ))}
    </div>
  );
}
