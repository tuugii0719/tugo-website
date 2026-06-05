const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Naadam Festival",
  description:
    "A local soum Naadam in Arkhangai, hosted by the guide's own relatives — wrestling, archery, valley horse races, plus the Orkhon Valley, Terkhiin Tsagaan Nuur, Khorgo volcano, and Tsenkher hot springs.",
  url: `${SITE_URL}/tours/naadam`,
  image: `${SITE_URL}/images/destinations/naadam-horse-racer.jpg`,
  touristType: "Cultural festival traveler",
  duration: "P7D",
  provider: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "630",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book`,
  },
};

export const metadata = {
  title: "Naadam Festival · Jul 8–14 2026",
  description:
    "A local soum Naadam in Arkhangai — wrestling, archery, valley horse races, hosted by the guide's own relatives. Plus the Orkhon Valley, Terkhiin Tsagaan Nuur, Khorgo volcano, and Tsenkher hot springs. From $630.",
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
