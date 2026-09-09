import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { PlausibleAnalytics } from "@/components/analytics/plausible";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageIntro } from "@/components/motion/page-intro";
import { getSiteSettings } from "@/lib/content";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteSettings.siteTitle,
      template: `%s | ${siteSettings.siteTitle}`,
    },
    description: siteSettings.description,
    openGraph: {
      title: siteSettings.siteTitle,
      description: siteSettings.description,
      url: siteUrl,
      siteName: siteSettings.siteTitle,
      locale: "sk_SK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteSettings.siteTitle,
      description: siteSettings.description,
    },
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const siteSettings = await getSiteSettings();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSettings.siteTitle,
    description: siteSettings.description,
    url: siteUrl,
    email: siteSettings.email,
    telephone: siteSettings.phone,
    address: siteSettings.address,
    sameAs: siteSettings.socialLinks?.map((link) => link.url) ?? [],
  };

  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <PageIntro>
          <Header siteTitle={siteSettings.siteTitle} />
          <main className="flex-1">{children}</main>
          <Footer siteSettings={siteSettings} />
          <PlausibleAnalytics />
        </PageIntro>
      </body>
    </html>
  );
}
