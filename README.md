# Evotec — firemný web

Prezentačný web postavený na Next.js (App Router), TypeScript, Tailwind CSS,
shadcn/ui, Framer Motion a Sanity CMS.

## Tech stack

| Potreba     | Technológia                  |
| ----------- | ----------------------------- |
| Framework   | Next.js 16 (App Router)       |
| Jazyk       | TypeScript                    |
| CSS         | Tailwind CSS v4                |
| UI          | shadcn/ui (base-ui)           |
| Animácie    | Framer Motion                 |
| CMS         | Sanity (embednuté Studio)     |
| Formuláre   | React Hook Form + Zod         |
| E-mail      | Resend                        |
| Hosting     | Vercel                        |
| DNS/CDN     | Cloudflare                    |
| Analytics   | Plausible                     |

## Lokálny vývoj

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Web pobeží na [http://localhost:3000](http://localhost:3000). Pokiaľ nemáte
ešte nastavené premenné pre Sanity, stránky použijú vstavaný fallback obsah,
takže web je funkčný aj bez CMS.

## Premenné prostredia

Skopírujte `.env.local.example` do `.env.local` a doplňte:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` — nájdete v
  [sanity.io/manage](https://sanity.io/manage) po vytvorení projektu (pozri
  nižšie).
- `NEXT_PUBLIC_SITE_URL` — finálna URL webu (pre SEO, sitemap, OG tagy).
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — doména zaregistrovaná v
  [plausible.io](https://plausible.io).
- `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM` — pre odosielanie
  správ z kontaktného formulára cez [resend.com](https://resend.com). Bez
  nich sa správy len zalogujú na server (užitočné pre lokálny vývoj).

## Sanity CMS

Studio je embednuté priamo vo webe na `/studio`.

1. Vytvorte nový projekt na [sanity.io](https://www.sanity.io/manage) (zdarma).
2. Doplňte `NEXT_PUBLIC_SANITY_PROJECT_ID` a `NEXT_PUBLIC_SANITY_DATASET` do
   `.env.local`.
3. Spustite `npm run dev` a otvorte `/studio` — prihláste sa a začnite
   pridávať obsah (nastavenia webu, riešenia, projekty, tím, referencie).

Schémy sú definované v [`src/sanity/schemaTypes`](src/sanity/schemaTypes).

## Obsahové typy

- **Nastavenia webu** (singleton) — názov, slogan, kontakt, sociálne siete.
- **Služba** — kartičky procesu na homepage a stránke Riešenia.
- **Člen tímu** — stránka O nás.
- **Referencia** — testimonial sekcia na homepage (zobrazí sa len ak existuje aspoň jedna).

Stránka `/projekty` (TRACS™ a e:agzat) je zámerne pevne zakódovaná v
[`src/app/projekty/page.tsx`](src/app/projekty/page.tsx) — obsahuje bohatý,
ručne napísaný obsah s fotkami namiesto generických CMS polí. Fotky sú v
[`public/images/projects`](public/images/projects). Navigácia obsahuje priame
odkazy `/projekty#tracs` a `/projekty#eagzat`, ktoré na stránke len
odscrollujú na danú sekciu.

Pokiaľ Sanity nie je nakonfigurované, každý typ obsahu má fallback dáta v
[`src/lib/content.ts`](src/lib/content.ts) — nahraďte ich vlastným textom
alebo použite Studio.

## Deploy

1. **Vercel** — importujte repozitár na [vercel.com/new](https://vercel.com/new),
   doplňte rovnaké premenné prostredia ako v `.env.local` a nasaďte.
2. **Cloudflare** — nastavte doménu ako DNS-only alebo cez Cloudflare proxy
   smerujúcu na Vercel (CNAME na `cname.vercel-dns.com`), certifikát rieši
   Vercel automaticky.
3. Po nasadení pridajte produkčnú URL do `NEXT_PUBLIC_SITE_URL` a doménu do
   Plausible.

## Štruktúra projektu

```
src/
  app/            # stránky (App Router) — /, /sluzby, /projekty, /o-nas, /kontakt
  app/studio/     # embednuté Sanity Studio
  app/api/contact # API route pre kontaktný formulár
  components/     # UI komponenty, layout, animácie
  lib/             # fetch helpery, validácia, fallback obsah
  sanity/          # Sanity klient, schémy, GROQ queries
```
