import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]
`);

export const servicesQuery = defineQuery(`
  *[_type == "service"] | order(order asc)
`);

export const teamMembersQuery = defineQuery(`
  *[_type == "teamMember"] | order(order asc)
`);

export const testimonialsQuery = defineQuery(`
  *[_type == "testimonial"]
`);
