export type ProjectSummary = {
  id: string;
  title: string;
  tag: string;
  tagline: string;
  icon: string;
  shortDescription: string;
  image: { src: string; alt: string };
};

export const projectSummaries: ProjectSummary[] = [
  {
    id: "tracs",
    title: "TRACS™",
    tag: "Patentovaná technológia",
    tagline: "Torque Redistribution Automatic Coupling System",
    icon: "shield",
    shortDescription:
      "Koleso stratí trakciu — a TRACS zareaguje skôr, než to stihnete postrehnúť. Čisto mechanicky, bez senzorov a bez zásahu vodiča.",
    image: {
      src: "/images/projects/tracs-field-test.jpg",
      alt: "Testovanie trakcie TRACS v teréne na dvoch traktoroch",
    },
  },
  {
    id: "eagzat",
    title: "e:agzat",
    tag: "End-to-end elektrifikácia",
    tagline: "Elektrický pohon pre dvojkolesový traktor",
    icon: "zap",
    shortDescription:
      "Kompletné elektrifikačné riešenie pre slovenského výrobcu dvojkolesových traktorov — od architektúry po vystavovateľný prototyp, overené v reálnej prevádzke.",
    image: {
      src: "/images/projects/eagzat-hero.jpg",
      alt: "Elektrický dvojkolesový traktor e:agzat",
    },
  },
];
