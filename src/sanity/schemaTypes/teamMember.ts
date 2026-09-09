import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Člen tímu",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Meno",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Pozícia",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Fotka",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Poradie",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Poradie",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
