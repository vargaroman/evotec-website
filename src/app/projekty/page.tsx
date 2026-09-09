import { ArrowRight, Car, Check, Tractor, Truck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { PhotoGalleryOverlay } from "@/components/photo-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "TRACS™ — patentovaná trakčná technológia — a e:agzat — kompletná elektrifikácia dvojkolesového traktora. Vybraná práca Evotec.",
};

const eagzatGallery = [
  {
    src: "/images/projects/eagzat-hero.jpg",
    alt: "Elektrický dvojkolesový traktor e:agzat",
  },
  {
    src: "/images/projects/eagzat-control-panel.jpg",
    alt: "Ovládací panel a displej batérie počas práce v teréne",
  },
  {
    src: "/images/projects/eagzat-field-test.jpg",
    alt: "Ťahová skúška e:agzat v teréne",
  },
  {
    src: "/images/projects/eagzat-motor.jpg",
    alt: "Elektrický pohon a riadiaca jednotka e:agzat",
  },
  {
    src: "/images/projects/eagzat-printing.jpg",
    alt: "3D tlač prototypového dielu",
  },
  {
    src: "/images/projects/eagzat-coupling.jpg",
    alt: "3D tlačená pružná spojka pohonu",
  },
  {
    src: "/images/projects/eagzat-body-panel.jpg",
    alt: "Karoséria pohonnej jednotky",
  },
  {
    src: "/images/projects/eagzat-exhibition.jpg",
    alt: "e:agzat vystavený s LiFePO4 batériovým modulom",
  },
];

const tracsBenefits = [
  "Plynulé, progresívne dotláčanie namiesto tvrdého zopnutia klasickej uzávierky",
  "Funguje pri akcelerácii aj pri brzdení motorom",
  "Zachováva zatáčavosť aj počas aktívneho prerozdeľovania momentu",
  "Prenáša moment aj keď jedno hnané koleso nemá žiadnu trakciu",
  "Za bežnej jazdy sa správa ako otvorený diferenciál — bez straty účinnosti",
  "Takmer bezúdržbová konštrukcia s dlhými servisnými intervalmi",
];

const tracsVehicleTypes = [
  { icon: Car, label: "Osobné automobily" },
  { icon: Tractor, label: "Traktory" },
  { icon: Truck, label: "Nákladná doprava" },
];

const tracsUseCases = [
  "Osobné, terénne a úžitkové vozidlá",
  "Poľnohospodárske a komunálne stroje",
  "Expedičné a overlandové platformy",
  "Špeciálne vozidlá a prívesy",
  "Ľahké úžitkové vozidlá a 4×4 platformy",
  "Akékoľvek kolesové vozidlo s otvoreným diferenciálom",
];

const eagzatDeliverables = [
  "Definícia požiadaviek a systémová architektúra",
  "Mechanická integrácia, packaging a konštrukcia uchytenia",
  "Výber elektrického pohonu, výkonovej elektroniky a batériového systému",
  "Riadiaca logika, bezpečnostné funkcie a používateľské rozhranie",
  "Prototypovanie, testovanie, validácia a ladenie priamo v teréne",
  "Dokumentácia a podpora pre výrobnú pripravenosť",
];

const eagzatBenefits = [
  "Tichá prevádzka — vyšší komfort obsluhy, menej rušenia okolia",
  "Žiadne radenie — jednoduché a intuitívne ovládanie",
  "Zmena smeru jedným tlačidlom — rýchle prepínanie dopredu/dozadu",
  "Nízka údržba — menej opotrebiteľných dielov, menej servisu",
  "Tempomat s asistentom pri zjazde a rekuperáciou batérie",
  "Prepínanie rýchlostného režimu (\"korytnačka/zajac\") pre prácu aj presun",
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <FadeIn>
          <span className="font-mono text-xs tracking-widest text-brand uppercase">
            Vybraná práca
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Projekty
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Od nápadu po funkčný prototyp — technológie, na ktorých sme
            postavili meno Evotec.
          </p>
        </FadeIn>
      </div>

      {/* TRACS */}
      <section id="tracs" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Patentovaná technológia</Badge>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              TRACS™
            </h2>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              Torque Redistribution Automatic Coupling System
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Pasívny mechanický systém, ktorý vodičovi šetrí rozmýšľanie nad
              trakčnými režimami. Stačí pridať plyn — TRACS mechanicky pomôže
              hnanej náprave čo najlepšie využiť dostupnú priľnavosť na oboch
              kolesách. Výsledkom je plynulejší pocit z jazdy, rýchlejšie
              prerozdelenie momentu, menšia závislosť od zásahov bŕzd či
              obmedzenia výkonu a lepšie využitie zotrvačnosti vozidla v
              situáciách so slabou trakciou.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src="/images/projects/tracs-diagram.jpg"
                  alt="Rez konštrukciou TRACS — jednoduchší integračný variant spojený s nosičom diferenciálu"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src="/images/projects/tracs-diagram-2.jpg"
                  alt="Rez konštrukciou TRACS — citlivejší variant spájajúci ľavý a pravý hnací hriadeľ"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <FadeIn>
              <h3 className="text-lg font-semibold tracking-tight">
                Problém klasických riešení
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Otvorený diferenciál dokáže poslať väčšinu momentu na koleso s
                najmenšou trakciou, čo vedie k prešmykovaniu a slabej
                priechodnosti. Klasické uzamykateľné diferenciály to čiastočne
                riešia, no zvyčajne vyžadujú manuálnu aktiváciu, spôsobujú
                problémy v ostrých zákrutách (nedotáčavosť, namáhanie
                hnacieho ústrojenstva, obrusovanie pneumatík) a ponúkajú len
                režim „otvorené alebo zamknuté“ bez plynulej regulácie.
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h3 className="text-lg font-semibold tracking-tight">
                Ako TRACS funguje
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                TRACS priebežne reaguje na rozdiel otáčok vnútri
                diferenciálu. Keď jedno koleso začne prešmykovať (alebo sa pri
                brzdení motorom výrazne spomalí), TRACS zvýši dotláčací
                moment a presmeruje výkon na koleso, ktoré ho dokáže využiť —
                plynulo, bez tlačidiel a bez rozhodovania vodiča.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <h3 className="mt-14 text-lg font-semibold tracking-tight">
              Čo tým získate
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {tracsBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className="mt-14 text-lg font-semibold tracking-tight">
              Kde by sa TRACS mohol využiť
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {tracsVehicleTypes.map((vehicle) => (
                <div
                  key={vehicle.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                    <vehicle.icon className="size-5" />
                  </div>
                  <span className="font-medium">{vehicle.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {tracsUseCases.map((useCase) => (
                <Badge key={useCase} variant="outline">
                  {useCase}
                </Badge>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
              Jednoduchší integračný variant spája hnací hriadeľ s nosičom
              diferenciálu, citlivejší variant prepája ľavý a pravý hnací
              hriadeľ priamo.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="mt-14 text-lg font-semibold tracking-tight">
              TRACS™ v akcii
            </h3>
            <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ybkKZkgOmm0"
                title="TATRA with TRACS™ - Torque Redistribution Automatic Coupling System"
                className="absolute inset-0 size-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* e:agzat */}
      <section id="eagzat" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>End-to-end elektrifikácia</Badge>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              e:agzat
            </h2>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              Elektrický pohon pre dvojkolesový traktor
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              V roku 2025 sme dodali kompletné riešenie elektrického
              pohonu pre slovenského výrobcu kompaktných dvojkolesových
              traktorov. Nešlo o dodávku komponentu ani o „výmenu motora“ —
              bola to plnohodnotná inžinierska služba od konceptu až po
              vystavovateľný prototyp, overená v reálnej prevádzke.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card sm:col-span-2 sm:row-span-2 sm:aspect-auto">
                <Image
                  src="/images/projects/eagzat-hero.jpg"
                  alt="Elektrický dvojkolesový traktor e:agzat"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src="/images/projects/eagzat-control-panel.jpg"
                  alt="Ovládací panel a displej batérie počas práce v teréne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src="/images/projects/eagzat-field-test.jpg"
                  alt="Ťahová skúška e:agzat v teréne"
                  fill
                  className="object-cover"
                />
                <PhotoGalleryOverlay
                  images={eagzatGallery}
                  label={`Zobraziť všetkých ${eagzatGallery.length} fotiek`}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="mt-14 text-lg font-semibold tracking-tight">
              Čo sme dodali
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Celý životný cyklus projektu sme zvládli in-house, bez
              subdodávateľov:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {eagzatDeliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className="mt-14 text-lg font-semibold tracking-tight">
              Prečo elektrický pohon dáva zmysel
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {eagzatBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="mt-14 text-lg font-semibold tracking-tight">
              Rýchle dodanie, chytrý timing
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Celý projekt sme dokončili za 6 mesiacov, bez subdodávateľov.
              Starostlivé plánovanie zabezpečilo rýchly postup od konceptu po
              verejné testovanie a časovanie sme zladili s obdobím, kedy sa
              ceny batérií stávajú dostupnejšími a priama konkurencia je
              zatiaľ obmedzená. Návrh aj výber komponentov sme optimalizovali
              tak, aby priniesli čo najvyššiu pridanú hodnotu pri čo
              najnižších nákladoch — maximálny úžitok bez zbytočnej
              zložitosti.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <Link
              href="/projekty/eagzat"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              Viac o vývoji e:agzat
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <FadeIn>
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Hľadáte partnera, ktorý dodá kompletné riešenie?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Ak potrebujete podporu pri elektrifikácii alebo vývoji stroja —
              vrátane návrhu, integrácie, prototypovania, testovania aj
              výrobnej dokumentácie — vieme prevziať plnú zodpovednosť za
              dodávku.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/kontakt" />}
            >
              Kontaktovať nás
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
