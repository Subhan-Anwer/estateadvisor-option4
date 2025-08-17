import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getPropertyBySlug = async (slug: string) => {
  const PROPERTY_BY_ID_QUERY = defineQuery(`
            *[
                _type == "property" && slug.current ==$slug
            ] | order(name asc) [0]
        `);
  try {
    const property = await sanityFetch({
      query: PROPERTY_BY_ID_QUERY,
      params: {
        slug,
      },
    });

    // return the property data or null
    return property.data || null;
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    return null;
  }
};
