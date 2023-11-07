import { defineField, defineType } from "sanity"

import { formatter } from "@/lib/utils"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "At most, 70 Characters",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "old_price",
      title: "Old Price",
      type: "number",
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      title: "Featured",
      name: "featured",
      type: "boolean",
    }),
    defineField({
      title: "New Product",
      name: "new_product",
      type: "boolean",
    }),
    defineField({
      title: "Trending",
      name: "trending",
      type: "boolean",
    }),
    defineField({
      title: "SKU",
      name: "sku",
      type: "string",
    }),
    defineField({
      name: "colours",
      type: "array",
      title: "Colours",
      of: [{ type: "reference", to: [{ type: "colour" }] }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images",
      subtitle: "price",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title,
        media: media[0],
        subtitle: `${formatter.format(subtitle)}`, // YYYY-MM-DD --> YYYY
      }
    },
  },
})
