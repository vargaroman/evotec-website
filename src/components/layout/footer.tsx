import Link from "next/link";

import { navLinks } from "@/components/layout/nav-links";
import type { SiteSettings } from "@/lib/content";

export function Footer({ siteSettings }: { siteSettings: SiteSettings }) {
  const year = new Date().getFullYear();
  const footerTagline = siteSettings.footerTagline ?? siteSettings.tagline;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            {siteSettings.siteTitle}
          </p>
          {footerTagline && (
            <p className="mt-2 text-sm text-muted-foreground">
              {footerTagline}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm font-medium">Navigácia</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {siteSettings.email && (
              <li>
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteSettings.email}
                </a>
              </li>
            )}
            {siteSettings.phone && (
              <li>
                <a
                  href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteSettings.phone}
                </a>
              </li>
            )}
            {siteSettings.address && <li>{siteSettings.address}</li>}
          </ul>
        </div>

        {siteSettings.socialLinks && siteSettings.socialLinks.length > 0 && (
          <div>
            <p className="text-sm font-medium">Sledujte nás</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {siteSettings.socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {year} {siteSettings.siteTitle}. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}
