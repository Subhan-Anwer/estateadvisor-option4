"use client";

import { useState, useMemo } from "react";
// import Hero from "@/components/about-page/Hero";
import Hero from "../../../../components/about-page/Hero";
import SearchFilter from "../../../../components/about-page/SearchFilter";
import PropertyGrid from "../../../../components/about-page/PropertyGrid";
import Pagination from "../../../../components/about-page/Pagination";

export interface Property {
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

const properties: Property[] = [
  {
    id: 1,
    title: "3-Bedroom Luxury House in DHA Karachi",
    price: 45000000,
    location: "DHA Karachi",
    type: "House",
    size: 300,
    bedrooms: 3,
    image: "/prop6.jpg",
    features: ["Swimming Pool", "Garden", "Parking", "Security"],
  },
  {
    id: 2,
    title: "Executive Bungalow in Bahria Town Lahore",
    price: 65000000,
    location: "Bahria Town Lahore",
    type: "Bungalow",
    size: 500,
    bedrooms: 5,
    image: "/prop5.jpg",
    features: ["Modern Kitchen", "Master Suite", "Garden", "Double Garage"],
  },
  {
    id: 3,
    title: "Commercial Plot in Blue Area Islamabad",
    price: 120000000,
    location: "Blue Area Islamabad",
    type: "Commercial Plot",
    size: 800,
    image: "/prop3.jpg",
    features: ["Prime Location", "Main Road Access", "Utilities Available"],
  },
  {
    id: 4,
    title: "4-Bedroom Modern House in F-11 Islamabad",
    price: 55000000,
    location: "F-11 Islamabad",
    type: "House",
    size: 400,
    bedrooms: 4,
    image: "/prop2.jpg",
    features: ["Modern Design", "Spacious Rooms", "Garden", "Parking"],
  },
  {
    id: 5,
    title: "Luxury Bungalow in Gulberg Lahore",
    price: 75000000,
    location: "Gulberg Lahore",
    type: "Bungalow",
    size: 600,
    bedrooms: 6,
    image: "/prop1.jpg",
    features: [
      "Heritage Style",
      "Large Garden",
      "Multiple Lounges",
      "Servant Quarters",
    ],
  },
  {
    id: 6,
    title: "Premium Commercial Plot in Clifton Karachi",
    price: 200000000,
    location: "Clifton Karachi",
    type: "Commercial Plot",
    size: 1000,
    image: "/prop1.jpg",
    features: [
      "Sea View",
      "Corner Plot",
      "High ROI Potential",
      "Developed Area",
    ],
  },
  {
    id: 7,
    title: "2-Bedroom Apartment in Emaar Heights Karachi",
    price: 25000000,
    location: "Emaar Heights Karachi",
    type: "House",
    size: 150,
    bedrooms: 2,
    image: "/prop1.jpg",
    features: ["High Rise", "Gym", "Swimming Pool", "Security"],
  },
  {
    id: 8,
    title: "Family Bungalow in Model Town Lahore",
    price: 48000000,
    location: "Model Town Lahore",
    type: "Bungalow",
    size: 350,
    bedrooms: 4,
    image: "/prop1.jpg",
    features: [
      "Traditional Design",
      "Courtyard",
      "Multiple Parking",
      "Guest Room",
    ],
  },
];

export interface FilterState {
  location: string;
  type: string;
  minSize: number;
  maxSize: number;
  minPrice: number;
  maxPrice: number;
}

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    type: "",
    minSize: 0,
    maxSize: 2000,
    minPrice: 0,
    maxPrice: 300000000,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation =
        !filters.location || property.location.includes(filters.location);
      const matchesType = !filters.type || property.type === filters.type;
      const matchesSize =
        property.size >= filters.minSize && property.size <= filters.maxSize;
      const matchesPrice =
        property.price >= filters.minPrice &&
        property.price <= filters.maxPrice;

      return matchesLocation && matchesType && matchesSize && matchesPrice;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * propertiesPerPage,
    currentPage * propertiesPerPage
  );

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <SearchFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          properties={properties}
        />
        <PropertyGrid properties={currentProperties} />
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}
