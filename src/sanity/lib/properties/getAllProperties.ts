import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProperties = async () => {
  const ALL_PROPERTIES_QUERY = defineQuery(`
            *[_type == "property"] | order(name asc) {
              ...,
              "imageGallery": null
            }
        `);

  try {
    //use Sanity Fetch to send the query
    const properties = await sanityFetch({
      query: ALL_PROPERTIES_QUERY,
    });

    //Return the list of properties or an empty array if none found
    return properties.data || [];
  } catch (error) {
    console.log("Error fetching all properties:", error);
    return [];
  }
};
