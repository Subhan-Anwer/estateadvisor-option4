import { client } from "@/sanity/lib/client"; // adjust this path if your sanity client lives elsewhere

export default async function sitemap() {
  const baseUrl = "https://www.estateadvisor.com.pk";

  // Fetch property slugs from Sanity
  const query = `*[_type == "property" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;
  const properties: { slug: string; _updatedAt: string }[] =
    await client.fetch(query);

  // Static pages
  const staticRoutes = ["", "about", "contact", "properties"].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic property pages
  const dynamicRoutes = properties.map((p) => ({
    url: `${baseUrl}/properties/${p.slug}`,
    lastModified: p._updatedAt || new Date().toISOString(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
