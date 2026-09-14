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
  footerTagline?: string;
  logo?: Image;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: { platform: string; url: string }[];
};

const fallbackSiteSettings: SiteSettings = {
  siteTitle: "Evotec",
  tagline: "Vyvíjame stroje a technické riešenia, ktoré ľuďom uľahčujú prácu.",
  description:
    "Evotec je vývojová kancelária zameraná na pracovné stroje, pohonové systémy a vlastné technológie. Od identifikácie reálneho problému a návrhu konceptu až po funkčný prototyp, prezentáciu a prípravu produktu pre výrobu.",
  footerTagline:
    "Vývoj pracovných strojov, vlastných technológií a funkčných prototypov od prvého konceptu až po prípravu pre výrobu.",
  email: "pastor.evotec@gmail.com",
  phone: "+421 917 495 338",
  address: "Hlavná 18/37, 076 12 Kuzmice",
  socialLinks: [],
};

const fallbackServices: Service[] = [
  {
    title: "Pochopenie problému a koncept",
    icon: "compass",
    shortDescription:
      "Identifikujeme podstatu problému, požiadavky používateľa a priestor pre lepšie riešenie. Na tomto základe vzniká produktový koncept a architektúra stroja.",
  },
  {
    title: "Konštrukčný vývoj a integrácia",
    icon: "cog",
    shortDescription:
      "Navrhujeme mechaniku, vyberáme vhodné komponenty a integrujeme jednotlivé systémy do funkčného, vyrobiteľného a servisovateľného celku.",
  },
  {
    title: "Prototyp a iterácia",
    icon: "zap",
    shortDescription:
      "Myšlienku čo najskôr prenášame do funkčného prototypu. Testovanie v reálnych podmienkach používame priamo ako vstup pre ďalší vývoj.",
  },
  {
    title: "Príprava pre výrobu",
    icon: "flask-conical",
    shortDescription:
      "Výsledné riešenie rozpracujeme do technických podkladov potrebných pre výrobu, montáž a zavedenie produktu do praxe.",
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
