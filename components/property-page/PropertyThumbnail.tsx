import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Property } from "../../sanity.types";
import { Bath, Bed, MapPin, Square } from "lucide-react";
import { imageUrl } from "@/lib/imageUrl";

const PropertyThumbnail = ({
  property,
  index,
  isLarge,
}: {
  property: Property;
  index: number;
  isLarge: boolean;
}) => {
  const isSoldOut = false;

  return (
    <motion.div
      className={`w-full group relative bg-white/3 backdrop-blur-sm border border-gray-400/50 rounded-t-[18px] rounded-b-[8px] overflow-hidden hover:border-[#d4af37]/30 transition-all duration-200 hover:scale-[103%] hover:shadow-2xl hover:shadow-[#d4af37]/10 `}
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        opacity: { duration: 0.35, ease: "easeOut" },
        y: { duration: 0.25, ease: "easeOut" }, // same timing → simultaneous
        delay: index * 1.5,
      }}
    >
      <Link href={`/properties/${property.slug?.current}`}>
        {/* Image Container */}
        <div
          className={`relative overflow-hidden ${isLarge ? "h-72 " : "h-64"}`}
        >
          {property.image && (
            <Image
              src={imageUrl(property.image).url()}
              alt={"property.title"}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Property Type Badge */}
          {property.type && (
            <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0c2625] px-3 py-1 rounded-full text-sm font-semibold">
              {property.type}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 pr-3">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] line-clamp-3 transition-colors">
            {property.name}
          </h3>
          <div className="flex items-center text-white/60 mb-4">
            <MapPin size={16} className="mr-1.5" />
            <span className="text-sm">{property.location} Location</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-[#d4af37]">
              ₨ {property.price}
            </div>
          </div>
          {/* Property Details */}
          <div className="flex items-center space-x-3 text-white/60 text-sm">
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
            <div className="flex items-center space-x-1">
              <Square size={16} />
              <span>
                {property.size?.value} {property.size?.unit}
              </span>
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> */}
      </Link>
    </motion.div>
    // <div>
    //   Hello {property.name}
    // </div>
  );
};

export default PropertyThumbnail;

// Hellow

// {/* Image Content */}
// <div className="relative aspect-square w-full h-full overflow-hidden bg-blue-400/80">
//   {/* {property.image && ( */}
//   <Image
//     className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
//     // src={imageUrl(property.image).url()}
//     // src={"/prop1.jpg"}
//     src={property.image}
//     alt={property.name || "property image"}
//     fill
//     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//   />
//   {/* )} */}

//   {isOutOfStock && (
//     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
//       <span className="text-white font-bold text-lg">Out of Stock</span>
//     </div>
//   )}
// </div>

// {/* Text Content */}
// <div className="p-4">
//   {/* Property Title/Name */}
//   <h2 className="text-lg font-semibold text-gray-200 truncate">
//     {property.name}
//   </h2>

//   {/* Property Location */}
//   <p className="mt-1 text-sm text-gray-600 truncate">
//     {property.location}
//   </p>

//   {/* Product Price */}
//   <p className="mt-2 text-lg font-bold text-gray-900">
//     {/* ${product.price?.toFixed(2)} */}
//     PKR 8.5 Crore
//   </p>

//   {/* Property Description */}
//   <p className="mt-2 text-sm text-gray-600 line-clamp-2">
//     {/* {property.description
//       ?.map((block) =>
//         block._type === "block"
//           ? block.children?.map((child) => child.text).join("")
//           : ""
//       )
//       .join(" ") || "No description available"} */}
//     Dream Bungalow of everyone!!!
//   </p>
// </div>
