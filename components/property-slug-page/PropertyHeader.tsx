import { Bed, Bath } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdResize } from "react-icons/io";
import { Property } from "../../sanity.types";

export const PropertyHeader = ({property}: {property: Property}) => {
  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-card-elegant">
      {/* Status and favorite */}
      <div className="flex mb-4">
        <p className="bg-[#d4af37] text-white rounded-full font-semibold px-3">
          For Sale
        </p>
      </div>

      {/* Property title */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
        {property.name}
      </h1>

      {/* Location */}
      <div className="flex items-center gap-2 text-white/90">
        <FaMapMarkerAlt className="h-5 w-5" />
        <p className="text-lg">{property.location}</p>
      </div>

      {/* Price */}
      <div className="mb-6 mt-8 flex items-end gap-2">
        <p className="text-xl md:text-2xl text-white/70">PKR</p>
        <p className="text-4xl md:text-5xl font-bold ">{property.price}</p>
      </div>

      {/* Key metrics */}
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-4 space-y-0">
        <div className="flex items-center md:gap-2 gap-1">
          <div className="mr-3 rounded-lg">
            <Bed className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">4</p>
            <p className="text-sm">Bedrooms</p>
          </div>
        </div>

        <div className="flex items-center md:gap-2 gap-1">
          <div className="mr-3 rounded-lg">
            <Bath className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">3.5</p>
            <p className="text-sm">Bathrooms</p>
          </div>
        </div>

        <div className="flex items-center md:gap-2 gap-1">
          <div className="mr-3 rounded-lg">
            <IoMdResize className="h-6.5 w-6.5 p-1 border-1 border-white rounded-[4px]" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">{property.size?.value}</p>
            <p className="text-sm">Square Yards</p>
          </div>
        </div>
      </div>
    </div>
  );
};
