import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { getSiteSettings, getTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "O nás",
  description: "Kto stojí za Evotec a ako pristupujeme k vývoju strojov.",
};

export default async function AboutPage() {
  const [siteSettings, teamMembers] = await Promise.all([
    getSiteSettings(),
    getTeamMembers(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <span className="font-mono text-xs tracking-widest text-brand uppercase">
          O firme
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          O nás
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {siteSettings.description}
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-16 grid gap-10 border-t border-border pt-16 md:grid-cols-[2fr_3fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ako pracujeme
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Produktovú stratégiu, mechanický dizajn, integráciu komponentov
              aj praktický vývoj prototypov spájame do jedného súvislého
              procesu — bez subdodávateľov a bez zbytočných medzikrokov.
            </p>
            <p>
              Cieľ je jasný: vyššia produktivita, intuitívne ovládanie,
              odolná konštrukcia a nízke náklady počas celej životnosti
              stroja. Výsledkom sú riešenia ako patentovaná trakčná
              technológia TRACS™ alebo kompletná elektrifikácia
              dvojkolesového traktora e:agzat.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h2 className="mt-16 text-2xl font-semibold tracking-tight">
          Kto je za tým
        </h2>
      </FadeIn>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <FadeIn key={member._id ?? member.name} delay={index * 0.05}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex size-16 items-center justify-center rounded-full bg-accent text-lg font-medium text-brand">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="mt-4 font-medium">{member.name}</p>
                {member.role && (
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                )}
                {member.bio && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
