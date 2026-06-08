const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Terelj Escape",
  description:
    "Three-day weekend in Gorkhi-Terelj National Park — Turtle Rock, Aryabal Monastery, horseback in alpine meadows, khorkhog dinner, family ger camp.",
  url: `${SITE_URL}/tours/terelj-escape`,
  image: `${SITE_URL}/images/destinations/terelj-park.jpg`,
  touristType: "Adventure traveler",
  duration: "P3D",
  provider: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "270",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book`,
  },
};

export const metadata = {
  title: "Terelj Escape · 3-day weekend",
  description:
    "A three-day Gorkhi-Terelj weekend (Jul 16–18, 2026). Turtle Rock, Aryabal Monastery, horseback in alpine meadows, khorkhog, family ger camp. From $270.",
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }}
      />
      {children}
    </>
  );
}
