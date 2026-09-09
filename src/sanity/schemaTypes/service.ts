import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Služba",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Názov",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Ikona (názov lucide ikony)",
      type: "string",
      description: "Napr. 'code', 'shield', 'cloud' — názov z lucide.dev",
    }),
    defineField({
      name: "shortDescription",
      title: "Krátky popis",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Detailný popis",
      type: "array",
      of: [{ type: "block" }],
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
