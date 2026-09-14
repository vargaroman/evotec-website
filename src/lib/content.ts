import type { Image } from "sanity";

import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import {
  servicesQuery,
  siteSettingsQuery,
  teamMembersQuery,
  testimonialsQuery,
} from "@/sanity/lib/queries";

export type Service = {
  _id?: string;
  title: string;
  slug?: { current: string };
  icon?: string;
  shortDescription: string;
};

export type TeamMember = {
  _id?: string;
  name: string;
  role?: string;
  photo?: Image;
  bio?: string;
};

export type Testimonial = {
  _id?: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  authorCompany?: string;
  avatar?: Image;
};

export type SiteSettings = {
  siteTitle: string;
  tagline?: string;
  description?: string;
  logo?: Image;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: { platform: string; url: string }[];
};

const fallbackSiteSettings: SiteSettings = {
  siteTitle: "Evotec",
  tagline:
    "Vlastný vývoj, patentované technológie a prototypy pre elektrifikáciu a pohony pracovných strojov.",
  description:
    "Evotec navrhuje a vyvíja pracovné stroje, pohonové systémy a nové technológie — od konceptu až po funkčný prototyp. Produktová stratégia, mechanický vývoj, elektrifikácia aj testovanie pod jednou strechou.",
  email: "pastor.evotec@gmail.com",
  phone: "+421 917 495 338",
  address: "Hlavná 18/37, 076 12 Kuzmice",
  socialLinks: [],
};

const fallbackServices: Service[] = [
  {
    title: "Koncept a systémová architektúra",
    icon: "compass",
    shortDescription:
      "Definícia požiadaviek, produktová stratégia a návrh architektúry stroja alebo pohonu ešte pred prvým výkresom.",
  },
  {
    title: "Mechanický vývoj a integrácia",
    icon: "cog",
    shortDescription:
      "Mechanický dizajn, kompletácia komponentov a packaging do funkčného, vyrobiteľného celku.",
  },
  {
    title: "Elektrifikácia pohonov",
    icon: "zap",
    shortDescription:
      "Výber elektrického pohonu, výkonovej elektroniky a batériového systému vrátane riadiacej logiky a bezpečnostných funkcií.",
  },
  {
    title: "Prototypovanie a validácia",
    icon: "flask-conical",
    shortDescription:
      "Stavba prototypu, testovanie a ladenie priamo v teréne, príprava dokumentácie pre výrobnú pripravenosť.",
  },
];

const fallbackTeamMembers: TeamMember[] = [
  {
    name: "Lukáš Pastor",
    role: "Zakladateľ & Product Developer",
    bio: "Vedie Evotec od roku 2016 — od prvého konceptu až po funkčné prototypy pracovných strojov a pohonových systémov.",
  },
];

const fallbackTestimonials: Testimonial[] = [];

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) {
    return fallback;
  }
  try {
    const result = await client.fetch<T>(query);
    if (
      result === null ||
      result === undefined ||
      (Array.isArray(result) && result.length === 0)
    ) {
      return fallback;
    }
    return result;
  } catch {
    return fallback;
  }
}

export function getSiteSettings() {
  return safeFetch<SiteSettings>(siteSettingsQuery, fallbackSiteSettings);
}

export function getServices() {
  return safeFetch<Service[]>(servicesQuery, fallbackServices);
}

export function getTeamMembers() {
  return safeFetch<TeamMember[]>(teamMembersQuery, fallbackTeamMembers);
}

export function getTestimonials() {
  return safeFetch<Testimonial[]>(testimonialsQuery, fallbackTestimonials);
}
