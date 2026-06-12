const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Altai Tavan Bogd",
  description:
    "Eleven days overland to Mongolia's far west — drive via Bayankhongor, Khovd and Tolbo Lake to Ölgii, four days deep in the Altai, then a loop home through the great lakes, Zavkhan and Tsenkher hot springs. Khoton Lake, Kazakh eagle hunters, Turgen waterfalls, Potanin Glacier, 4,000-year-old petroglyphs.",
  url: `${SITE_URL}/tours/altai-tavan-bogd`,
  image: `${SITE_URL}/images/destinations/altai-peaks.jpg`,
  touristType: "Adventure traveler",
  duration: "P11D",
  provider: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "1080",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book`,
  },
};

export const metadata = {
  title: "Altai Tavan Bogd · Aug 4–14 2026",
  description:
    "Eleven days overland to Mongolia's far west — via Bayankhongor, Khovd and Tolbo Lake to Ölgii, four days deep in the Altai, then home through the great lakes, Zavkhan and Tsenkher hot springs. Khoton Lake, Kazakh eagle hunters, Turgen waterfalls, Potanin Glacier, petroglyphs. From $1,080.",
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
