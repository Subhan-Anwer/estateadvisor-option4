"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, Ruler, DollarSign } from "lucide-react";
import { Property, FilterState } from "@/app/(website)/property/page";

interface SearchFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  properties: Property[];
}

export default function SearchFilter({
  filters,
  onFilterChange,
  properties,
}: SearchFilterProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const locations = Array.from(
    new Set(properties.map((p) => p.location.split(" ").slice(-1)[0]))
  );
  const propertyTypes = ["House", "Bungalow", "Commercial Plot"];

  const handleSearch = () => {
    onFilterChange(localFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      location: "",
      type: "",
      minSize: 0,
      maxSize: 2000,
      minPrice: 0,
      maxPrice: 300000000,
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(1)} Crore`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} Lakh`;
    }
    return price.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#0c2625] mb-6 flex items-center gap-3">
        <Search className="w-6 h-6 text-[#d4af37]" />
        Find Your Perfect Property
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Location */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            Location
          </label>
          <select
            value={localFilters.location}
            onChange={(e) =>
              setLocalFilters((prev) => ({ ...prev, location: e.target.value }))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Home className="w-4 h-4 text-[#d4af37]" />
            Property Type
          </label>
          <select
            value={localFilters.type}
            onChange={(e) =>
              setLocalFilters((prev) => ({ ...prev, type: e.target.value }))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Size Range */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Ruler className="w-4 h-4 text-[#d4af37]" />
            Size (Sq Yards)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={localFilters.minSize || ""}
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  minSize: Number(e.target.value) || 0,
                }))
              }
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
            />
            <input
              type="number"
              placeholder="Max"
              value={localFilters.maxSize === 2000 ? "" : localFilters.maxSize}
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  maxSize: Number(e.target.value) || 2000,
                }))
              }
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <DollarSign className="w-4 h-4 text-[#d4af37]" />
            Price Range (PKR)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={localFilters.minPrice || ""}
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  minPrice: Number(e.target.value) || 0,
                }))
              }
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={
                localFilters.maxPrice === 300000000 ? "" : localFilters.maxPrice
              }
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  maxPrice: Number(e.target.value) || 300000000,
                }))
              }
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex flex-col gap-2">
          <div className="h-6"></div> {/* Spacer to align with other inputs */}
          <button
            onClick={handleSearch}
            className="bg-[#0c2625] hover:bg-[#1a4b47] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="text-gray-600 hover:text-[#d4af37] text-sm font-medium transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </motion.div>
  );
}
