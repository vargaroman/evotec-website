import type { Metadata } from "next";

import { Icon } from "@/components/icon";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Riešenia",
  description:
    "Kompletný inžiniersky proces od konceptu po funkčný prototyp — stratégia, mechanický vývoj, elektrifikácia a validácia.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <span className="font-mono text-xs tracking-widest text-brand uppercase">
          Náš proces
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Riešenia
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Produktovú stratégiu, mechanický vývoj, elektrifikáciu aj
          prototypovanie riešime in-house ako jeden súvislý proces — od
          prvého nápadu po stroj, ktorý reálne funguje v teréne.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service._id ?? service.title} delay={index * 0.05}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-brand">
                  <Icon name={service.icon} className="size-5" />
                </div>
                <CardTitle className="mt-3 text-lg">
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
  );
}
