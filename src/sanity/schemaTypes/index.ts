import type { SchemaTypeDefinition } from "sanity";

import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";
import { testimonial } from "./testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, service, teamMember, testimonial],
};
