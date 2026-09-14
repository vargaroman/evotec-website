import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Nastavenia webu",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Názov firmy",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Slogan",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Popis (SEO)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "footerTagline",
      title: "Slogan v pätičke",
      type: "text",
      rows: 2,
      description:
        "Ak nevyplnené, v pätičke sa použije hlavný slogan (Slogan).",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "email",
      title: "Kontaktný e-mail",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefón",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresa",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Sociálne siete",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platforma",
              type: "string",
              options: {
                list: [
                  "LinkedIn",
                  "Facebook",
                  "Instagram",
                  "X",
                  "YouTube",
                ],
              },
            }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
  ],
});
