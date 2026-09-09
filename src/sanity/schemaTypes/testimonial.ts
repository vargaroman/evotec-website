import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Referencia",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Citát",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authorName",
      title: "Meno autora",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authorRole",
      title: "Pozícia autora",
      type: "string",
    }),
    defineField({
      name: "authorCompany",
      title: "Firma autora",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Fotka autora",
      type: "image",
    }),
  ],
});
