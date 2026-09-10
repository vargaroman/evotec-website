import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icon";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices, getSiteSettings } from "@/lib/content";
import { projectSummaries } from "@/lib/projects";

const stats = [
  { value: "2016", label: "Založená" },
  { value: "100%", label: "Vývoj in-house" },
  { value: "2", label: "Vlastné technológie" },
];

const uktHighlights = [
  "Mechanická powershift prevodovka radená pod zaťažením",
  "Riadenie oboch náprav s režimom „Krab“ pre malý polomer zatáčania",
  "Integrovaný systém TRACS pre automatickú reguláciu trakcie",
  "Mokré brzdy na všetkých štyroch kolesách",
  "Odpojiteľný pohon prednej nápravy",
  "Navrhnutý pre les, využiteľný aj v agro a komunálnej sfére",
];

const uktArticles = [
  {
    src: "/images/ukt/ukt-sketch.jpg",
    alt: "Technický koncept trakcie UKT Evo — riadenie náprav, TRACS, powershift prevodovka",
    title: "Koncept trakcie UKT Evo",
    text: "Riadenie oboch náprav, systém TRACS a mechanická powershift prevodovka radená pod zaťažením.",
  },
  {
    src: "/images/ukt/ukt-comparison.jpg",
    alt: "Porovnanie výkonu, krútiaceho momentu a hmotnosti podobných lesných traktorov",
    title: "Porovnanie s podobnými traktormi",
    text: "Zetor 7745 UKT sa už nevyrába a práve do tejto výkonovej kategórie mierime. Modely LKT 81T a LKT 60 sú výrazne silnejšie, no taký výkon nie je pri bežnej prevádzke vždy potrebný.",
  },
];

const philosophyParagraphs = [
  "Veríme, že dobrá technológia nemusí byť komplikovaná. Mala by byť prirodzenou súčasťou stroja, robiť svoju prácu spoľahlivo a prinášať skutočný úžitok.",
  "Zaujímajú nás veci, ktoré sa dajú robiť inak. Premýšľame nad tým, čo je dnes považované za samozrejmé, a hľadáme možnosti, ako to posunúť ďalej.",
  "Spájame praktické skúsenosti s odvahou skúšať nové princípy. Nie preto, aby sme vytvorili niečo nové za každú cenu, ale preto, aby výsledok dával zmysel.",
];

export default async function Home() {
  const [siteSettings, services] = await Promise.all([
    getSiteSettings(),
    getServices(),
  ]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-grid hero-glow">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 md:py-36">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest text-brand uppercase">
              Vývoj strojov a pohonových technológií
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {siteSettings.tagline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-xl text-lg text-muted-foreground">
              {siteSettings.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/kontakt" />}
              >
                Konzultácia projektu
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href="/projekty" />}
              >
                Naše projekty
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="w-full">
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest text-brand uppercase">
              Vybraná práca
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Technológie, ktoré sme vyvinuli
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectSummaries.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.08}>
                <Link href={`/projekty#${project.id}`}>
                  <div className="group h-full overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-colors hover:bg-secondary/60">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-brand">
                          <Icon name={project.icon} className="size-5" />
                        </div>
                        {project.tag && (
                          <Badge variant="outline">{project.tag}</Badge>
                        )}
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <p className="mt-1 font-mono text-xs text-muted-foreground">
                          {project.tagline}
                        </p>
                      )}
                      <p className="mt-4 text-sm text-muted-foreground">
                        {project.shortDescription}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                        Zistiť viac
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-20">
              <div>
                <FadeIn>
                  <span className="font-mono text-xs tracking-widest text-brand uppercase">
                    Na čom momentálne pracujeme
                  </span>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      UKT — Univerzálny kolesový traktor
                    </h2>
                    <Badge variant="outline">Vo vývoji</Badge>
                  </div>
                  <p className="mt-4 max-w-2xl text-muted-foreground">
                    Vyvíjame univerzálny kolesový traktor predovšetkým pre
                    lesné hospodárstvo, s presahom do poľnohospodárstva a
                    komunálnych služieb. Koncept kombinuje mechanickú
                    powershift prevodovku radenú pod zaťažením, riadenie
                    oboch náprav a našu vlastnú trakčnú technológiu TRACS.
                  </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {uktHighlights.map((item) => (
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
              </div>

              <div className="border-t border-border pt-16">
                <FadeIn>
                  <span className="font-mono text-xs tracking-widest text-brand uppercase">
                    Náš proces
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Od konceptu po funkčný prototyp
                  </h2>
                </FadeIn>

                <FadeIn delay={0.05}>
                  <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/projects/process-banner.jpg"
                      alt="Terénne testovanie Evotec vo Vysokých Tatrách"
                      fill
                      className="object-cover"
                    />
                  </div>
                </FadeIn>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {services.map((service, index) => (
                    <FadeIn
                      key={service._id ?? service.title}
                      delay={index * 0.05}
                    >
                      <Card className="h-full">
                        <CardHeader>
                          <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-brand">
                            <Icon name={service.icon} className="size-5" />
                          </div>
                          <CardTitle className="mt-3 text-base">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {service.shortDescription}
                          </p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-16">
                <FadeIn>
                  <span className="font-mono text-xs tracking-widest text-brand uppercase">
                    Naša filozofia
                  </span>
                  <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                    Hľadáme jednoduchšie riešenia zložitých problémov.
                  </h2>
                </FadeIn>

                <div className="mt-8 max-w-xl space-y-4">
                  {philosophyParagraphs.map((paragraph, index) => (
                    <FadeIn key={paragraph} delay={0.05 + index * 0.05}>
                      <p className="text-muted-foreground">{paragraph}</p>
                    </FadeIn>
                  ))}
                </div>

                <FadeIn delay={0.2}>
                  <p className="mt-8 max-w-xl text-lg font-medium tracking-tight">
                    Menej zbytočnej zložitosti. Viac funkčnosti. Viac
                    priestoru pre nové nápady.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {uktArticles.map((article, index) => (
                <FadeIn key={article.title} delay={0.15 + index * 0.08}>
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <div className="relative aspect-[3/2] w-full">
                      <Image
                        src={article.src}
                        alt={article.alt}
                        fill
                        className="object-contain bg-white p-2"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-medium">{article.title}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {article.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <FadeIn>
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Máte projekt, o ktorom chcete hovoriť?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/kontakt" />}
            >
              Kontaktujte nás
              <ArrowRight className="size-4" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
