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
      "Patentované mechanické riešenie, ktoré automaticky prerozdeľuje krútiaci moment pri strate trakcie. Bez elektronického riadenia, senzorov alebo zásahu vodiča.",
    image: {
      src: "/images/projects/tracs-field-test.jpg",
      alt: "Testovanie trakcie TRACS v teréne na dvoch traktoroch",
    },
  },
  {
    id: "eagzat",
    title: "e:agzat",
    tag: "End-to-end elektrifikácia",
    tagline: "Od konceptu až po sériovú výrobu",
    icon: "zap",
    shortDescription:
      "Kompletný 48 V pohonný systém pre dvojkolesový traktor. Od identifikácie produktovej príležitosti a návrhu architektúry cez funkčný prototyp a prezentáciu na výstavách až po výrobné podklady predsériovej verzie.",
    image: {
      src: "/images/projects/eagzat-hero.jpg",
      alt: "Elektrický dvojkolesový traktor e:agzat",
    },
  },
];
