import { defineField, defineType } from "sanity"

export default defineType({
  name: "colour",
  title: "Colour",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Colour Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hash",
      type: "string",
      title: "Hash Colour Code",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "hash",
    },
  },
})
