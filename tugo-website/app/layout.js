import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SITE_URL = "https://wildmongoliawithtugi.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wild Mongolia with Tugi — Adventure Tours",
    template: "%s · Wild Mongolia with Tugi",
  },
  description:
    "Small-group adventure tours across Mongolia's wild landscapes. Ride with nomads, camp under endless skies, explore one of the last truly wild places on Earth.",
  openGraph: {
    title: "Wild Mongolia with Tugi",
    description:
      "Small-group adventure tours across Mongolia — Altai peaks, Gobi dunes, Khövsgöl lake, Naadam, Playtime festival.",
    url: "/",
    siteName: "Wild Mongolia with Tugi",
    images: ["/images/tours/north-central/DSC02464-hero.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Mongolia with Tugi",
    description:
      "Small-group adventure tours across Mongolia — Altai peaks, Gobi dunes, Khövsgöl lake.",
    images: ["/images/tours/north-central/DSC02464-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-night-950 text-sand-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Wild Mongolia with Tugi",
              alternateName: "WMWT",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              image: `${SITE_URL}/images/tours/north-central/DSC02464-hero.jpg`,
              description:
                "Small-group adventure tours across Mongolia, hosted personally by Tugi. Routes through Altai, Khuvsgul, the Gobi, the Orkhon Valley, and Naadam village festivals.",
              founder: { "@type": "Person", name: "Tugi" },
              areaServed: { "@type": "Country", name: "Mongolia" },
              priceRange: "$270 – $1,080",
              sameAs: ["https://www.instagram.com/tugi.mongolia/"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+66818910766",
                email: "tuklobin@gmail.com",
                contactType: "Customer Service",
                availableLanguage: ["English", "Mongolian"],
              },
            }),
          }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
