import {
  ArrowLeft,
  Award,
  Compass,
  Cpu,
  PlugZap,
  Printer,
  RotateCcw,
  Settings2,
  TestTube,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Vývoj e:agzat",
  description:
    "Ako prebiehal vývoj elektrického pohonu e:agzat — od konceptu cez 3D tlačené prototypy a elektroniku až po vystavovateľný prototyp overený v teréne.",
};

type Phase = {
  icon: typeof Compass;
  title: string;
  text: string;
  image: { src: string; alt: string } | null;
};

const phases: Phase[] = [
  {
    icon: Compass,
    title: "Koncept a systémová architektúra",
    text: "Na začiatku sme s výrobcom definovali požiadavky na výkon, dojazd a ovládanie a navrhli celkovú architektúru pohonu — rozloženie batérie, motora, riadiacej elektroniky aj mechanického uchytenia do existujúceho podvozku dvojkolesového traktora.",
    image: null,
  },
  {
    icon: Printer,
    title: "Mechanický návrh a 3D tlač prototypov",
    text: "Kritické mechanické diely — vrátane pružnej spojky pohonu — sme si najprv overili ako 3D tlačené prototypy. Rýchle iterácie nám umožnili doladiť tolerancie a montážne rozhrania ešte pred výrobou finálnych kovových dielov.",
    image: {
      src: "/images/projects/eagzat-printing.jpg",
      alt: "3D tlač prototypového dielu na tlačiarni",
    },
  },
  {
    icon: RotateCcw,
    title: "Keď treba prehodnotiť rozhodnutie",
    text: "Nie každé rozhodnutie prežije stret s realitou. Pre jeden z kľúčových dielov sme si najprv pripravili šablónu na odliatok z hliníka. Počas vývoja sme sa k tomuto riešeniu vrátili, prehodnotili ho a napokon zvolili inú cestu — niekedy je práve ochota vrátiť sa a prehodnotiť vlastné rozhodnutie tým, čo posunie projekt správnym smerom.",
    image: {
      src: "/images/projects/eagzat-in-progress.jpg",
      alt: "Prototyp e:agzat v procese vývoja",
    },
  },
  {
    icon: Cpu,
    title: "Elektrický pohon a riadenie",
    text: "Nasledoval výber a integrácia elektrického motora, výkonovej elektroniky a batériového systému. Vlastná riadiaca jednotka zabezpečuje bezpečnostné funkcie, tempomat s asistentom pri zjazde a prepínanie medzi pracovným a transportným režimom.",
    image: {
      src: "/images/projects/eagzat-motor.jpg",
      alt: "Elektrický pohon a riadiaca jednotka e:agzat počas montáže",
    },
  },
  {
    icon: Settings2,
    title: "Ovládanie prispôsobené používateľovi",
    text: "Rozloženie tlačidiel, úchyt na telefón aj displej kapacity batérie priamo na riadidlách sme navrhli a vyrobili sami. Podobné detaily riešime buď z vlastnej iniciatívy, alebo na žiadosť zákazníka — cieľom je vždy to, aby bolo ovládanie intuitívne a produkt čo najviac prispôsobený koncovému používateľovi.",
    image: {
      src: "/images/projects/eagzat-controls.jpg",
      alt: "Vlastný ovládací panel na riadidlách e:agzat s držiakom telefónu a displejom batérie",
    },
  },
  {
    icon: TestTube,
    title: "Testovanie v teréne",
    text: "Funkčný prototyp sme testovali priamo v poľných podmienkach — od ťahových skúšok cez overenie výdrže batérie až po ladenie ovládacieho panela s displejom kapacity, ktorý obsluha sleduje priamo na riadidlách.",
    image: {
      src: "/images/projects/eagzat-field-test.jpg",
      alt: "Ťahová skúška e:agzat v teréne",
    },
  },
  {
    icon: Award,
    title: "Vystavovateľný prototyp",
    text: "Celý projekt sme dokončili za 6 mesiacov, bez subdodávateľov — od prvého konceptu až po prototyp pripravený na verejnú prezentáciu a testovanie zákazníkmi na výstave.",
    image: {
      src: "/images/projects/eagzat-exhibition.jpg",
      alt: "e:agzat vystavený s LiFePO4 batériovým modulom",
    },
  },
  {
    icon: PlugZap,
    title: "Pripravený na budúce rozšírenia",
    text: "Batériu e:agzat je možné využiť aj ako zdroj energie pre iné elektrické zariadenia (V2L — Vehicle-to-Load). Konštrukcia zároveň počíta s montážou ďalších modulov, napríklad prídavných reflektorov alebo iného príslušenstva, takže stroj je pripravený postupne rásť podľa potrieb zákazníka.",
    image: null,
  },
];

const videos = [
  {
    id: "cMvDAlkDZ4Y",
    title: "Skúška na rampe",
    text: null as string | null,
  },
  {
    id: "JatbQdyiTE0",
    title: "e:agzat v praxi",
    text: "Nasadenie e:agzat v reálnej prevádzke, v rôznych podmienkach.",
  },
  {
    id: "GJYNFOSR_yU",
    title: "Priamo od zákazníka — Hriňovské strojárne",
    text: "Video od Hriňovských strojární, ktorým sme riešenie e:agzat dodali — vyorávanie zemiakov a nastavenie vyorávacieho pluhu.",
  },
  {
    id: "sil4W1KRGbY",
    title: "Hlboká orba",
    text: "Ďalšie video priamo od Hriňovských strojární — jesenné zaorávanie kompostu a zeleného hnojiva.",
  },
];

export default function EagzatDevelopmentPage() {
  return (
    <article>
      <div className="mx-auto max-w-3xl px-6 pt-20">
        <FadeIn>
          <Link
            href="/projekty#eagzat"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Späť na projekty
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>End-to-end elektrifikácia</Badge>
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Vývoj e:agzat
          </h1>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            Ako sme za 6 mesiacov dostali elektrický pohon z konceptu na
            výstavu
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            e:agzat nebol len dodávkou komponentu — bola to plnohodnotná
            inžinierska služba od prvého nápadu po vystavovateľný prototyp,
            ktorú sme zvládli kompletne in-house. Toto je bližší pohľad na
            jednotlivé fázy vývoja.
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-16">
          {phases.map((phase, index) => (
            <FadeIn key={phase.title} delay={index * 0.05}>
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                  <phase.icon className="size-5" />
                </div>
                <span className="font-mono text-xs tracking-widest text-brand uppercase">
                  Fáza {index + 1}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                {phase.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{phase.text}</p>
              {phase.image && (
                <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src={phase.image.src}
                    alt={phase.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </FadeIn>
          ))}
        </div>

        <div className="mt-16">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest text-brand uppercase">
              Predvádzacie videá
            </span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              e:agzat v pohybe
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-10">
            {videos.map((video, index) => (
              <FadeIn key={video.id} delay={index * 0.08}>
                <p className="font-medium">{video.title}</p>
                {video.text && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {video.text}
                  </p>
                )}
                <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 size-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-lg font-medium">
              Riešite podobnú elektrifikáciu alebo vývoj stroja?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Napíšte nám, o čo ide — radi si vypočujeme detaily.
            </p>
            <Button
              className="mt-6"
              nativeButton={false}
              render={<Link href="/kontakt" />}
            >
              Kontaktovať nás
            </Button>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
