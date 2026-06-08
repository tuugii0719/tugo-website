const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Altai Tavan Bogd",
  description:
    "Nine days overland to Mongolia's far west — drive across the Khangai, the great lakes, Khovd and Tolbo Lake to the Altai. Khoton Lake, Kazakh eagle hunters, horseback to Baga Turgen waterfall, Potanin Glacier, 4,000-year-old petroglyphs.",
  url: `${SITE_URL}/tours/altai-tavan-bogd`,
  image: `${SITE_URL}/images/destinations/altai-peaks.jpg`,
  touristType: "Adventure traveler",
  duration: "P9D",
  provider: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "810",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book`,
  },
};

export const metadata = {
  title: "Altai Tavan Bogd · Aug 5–13 2026",
  description:
    "Nine days overland to Mongolia's far west — across the Khangai, the great lakes, Khovd and Tolbo Lake to the Altai. Khoton Lake, Kazakh eagle hunters, Baga Turgen waterfall on horseback, Potanin Glacier, petroglyphs. From $810.",
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
