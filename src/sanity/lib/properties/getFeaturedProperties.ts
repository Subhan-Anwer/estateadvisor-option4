import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getFeaturedProperties = async () => {
  const FEATURED_PROPERTIES_QUERY = defineQuery(`
            *[
                _type == "property" && featured == true
            ] | order(name asc)
        `);
  try {
    const property = await sanityFetch({
      query: FEATURED_PROPERTIES_QUERY,
    });
    return property.data || [];
  } catch (error) {
    console.error("Error fetching featured properties:", error);
    return [];
  }
};
