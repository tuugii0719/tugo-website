const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "North & Central Loop",
  description:
    "Twelve days across northern Mongolia — Huuchin ger camp, Khövsgöl Lake, a two-day horse trek with co-host Chuka in the Zavkhan mountains, Khorgo volcano, Terkhiin Tsagaan Nuur, Tsenkher hot springs, the Orkhon Valley, and the Elsen Tasarkhai dunes.",
  url: `${SITE_URL}/tours/north-central`,
  image: `${SITE_URL}/images/tours/north-central/DSC02464.jpg`,
  touristType: "Adventure traveler",
  duration: "P12D",
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
  title: "North & Central Loop · Jul 21 – Aug 1 2026",
  description:
    "Twelve days across northern Mongolia — Huuchin ger camp, Khövsgöl Lake, a two-day horse trek with co-host Chuka in the Zavkhan mountains, Khorgo volcano, Tsenkher hot springs, the Orkhon Valley, and the Elsen Tasarkhai dunes. From $1,080.",
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
