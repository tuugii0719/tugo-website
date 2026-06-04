const SITE_URL = "https://wildmongoliatugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Naadam Festival",
  description:
    "Local-village Naadam in Zavkhan — horse racing, wrestling, archery, holiday foods and costumes, Terkhiin Tsagaan Nuur, Khorgo volcano, Tsenkher hot springs, nomadic family stays.",
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
    "Local-village Naadam in Zavkhan — horse racing, wrestling, holiday foods and costumes, Terkhiin Tsagaan Nuur, Khorgo volcano, Tsenkher hot springs, nomadic family stays. From $630.",
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
