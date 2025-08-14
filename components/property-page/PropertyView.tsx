import { Property } from "../../sanity.types";
import PropertyGrid from "./PropertyGrid";

interface PropertyViewProps {
  properties: Property[];
}

const PropertyView = ({ properties }: PropertyViewProps) => {
  return (
    <div>
      <PropertyGrid properties={properties} />
      <PropertyGrid properties={properties} />
    </div>
  );
};

export default PropertyView;
