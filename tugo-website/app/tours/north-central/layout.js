const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "North & Central Loop",
  description:
    "Twelve days across northern Mongolia — Huuchin Bulgan ger camp, Khövsgöl Lake camping and hiking, the taiga, a full horse-trek day in Zavkhan, Khorgo volcano, Tsenkher hot springs, Orkhon Valley.",
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
    "Twelve days across northern Mongolia — Huuchin Bulgan ger camp, Khövsgöl Lake, the taiga, a full horse-trek day in Zavkhan, hot springs, lakes, then central Mongolia home. From $1,080.",
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
