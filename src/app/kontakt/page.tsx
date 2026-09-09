import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte nás — radi si vypočujeme váš projekt.",
};

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <FadeIn>
          <span className="font-mono text-xs tracking-widest text-brand uppercase">
            Kontakt
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Napíšte nám
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            Popíšte nám svoj projekt a my vás budeme kontaktovať.
          </p>

          <dl className="mt-10 space-y-3 text-sm">
            {siteSettings.email && (
              <div className="flex gap-2">
                <dt className="font-medium">E-mail:</dt>
                <dd>
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {siteSettings.email}
                  </a>
                </dd>
              </div>
            )}
            {siteSettings.phone && (
              <div className="flex gap-2">
                <dt className="font-medium">Telefón:</dt>
                <dd>
                  <a
                    href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {siteSettings.phone}
                  </a>
                </dd>
              </div>
            )}
            {siteSettings.address && (
              <div className="flex gap-2">
                <dt className="font-medium">Adresa:</dt>
                <dd className="text-muted-foreground">
                  {siteSettings.address}
                </dd>
              </div>
            )}
          </dl>

          {siteSettings.address && (
            <div className="mt-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(siteSettings.address)}&output=embed&hl=sk`}
                  title="Mapa — sídlo Evotec"
                  className="absolute inset-0 size-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteSettings.address)}&hl=sk`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-brand hover:underline"
              >
                Otvoriť v Google Maps
              </a>
            </div>
          )}
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
