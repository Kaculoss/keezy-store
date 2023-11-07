import { defineField, defineType } from "sanity"

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "order_number",
      title: "Order Number",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Customner Name",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Customner Address",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Customner Number",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required() ,
    }),
    defineField({
      name: "order_items",
      type: "array",
      title: "Order Items",
      of: [
        {
          type: "object",
          name: "order_item",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "price",
              type: "number",
              title: "price",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "quantity",
              type: "number",
              title: "Quantity",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              type: "string",
              title: "Image",
              validation: (Rule) => Rule.required(),
            },
            { name: "category", type: "string", title: "Category" },
            { name: "brand", type: "string", title: "Brand" },
            { name: "colour", type: "string", title: "Colour" },
            { name: "description", type: "string", title: "Description" },
          ],
        },
      ],
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "payment",
      title: "Payment",
      type: "string",
      options: {
        layout: "radio",
        direction: "vertical",
        list: [
          { title: "Paid", value: "paid" },
          { title: "Not Paid", value: "not_paid" },
        ],
      },
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "order_status",
      title: "Order Status",
      type: "string",
      options: {
        layout: "radio",
        direction: "vertical",
        list: [
          { title: "Awaiting Payment", value: "awaiting" },
          { title: "Processing", value: "processing" },
          { title: "In Transit", value: "in_transit" },
          { title: "Delivered", value: "delivered" },
          { title: "Canceled", value: "canceled" },
        ],
      },
      readOnly: ({document}) =>  document?.order_status === "awaiting",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Paid",
      name: "isPaid",
      type: "boolean",
      readOnly: true,
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "order_number",
      subtitle: "name",
    },
  },
})
