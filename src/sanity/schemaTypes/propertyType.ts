import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const propertyType = defineType({
  name: "property",
  title: "Property",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Property Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Bungalow", value: "Bungalow" },
          { title: "House", value: "House" },
          { title: "Apartment", value: "Apartment" },
          { title: "Commercial", value: "Commercial" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Property Gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "videos",
      title: "Property Videos",
      type: "array",
      of: [
        {
          type: "file",
          options: {
            accept: "video/*",
          },
        },
      ],
      options: {
        layout: "grid",
      },
    }),

    defineField({
      name: "beds",
      title: "Bedrooms",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "bath",
      title: "Bathrooms / Showers",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "size",
      title: "Property Size",
      type: "object",
      fields: [
        defineField({
          name: "value",
          title: "Value",
          type: "number",
          validation: (rule) => rule.required().min(0),
        }),
        defineField({
          name: "unit",
          title: "Unit",
          type: "string",
          options: {
            list: [
              { title: "Square Yards", value: "Square Yards" },
              { title: "Marla", value: "Marla" },
            ],
            layout: "dropdown",
          },
        }),
      ],
      options: { columns: 2 }, // side-by-side value + unit
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "mainImage",
      subtitle: "price",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `PKR ${select.subtitle}`,
        media: select.media,
      };
    },
  },
});
