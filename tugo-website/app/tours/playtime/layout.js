const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Playtime Music Festival",
  description:
    "Mongolia's biggest music festival — Molchat Doma, Kings of Convenience, DIIV, Stereolab, Hyukoh. Festival ticket, camping, and breakfast included. Pre-party Wednesday, three days at Playtime Field.",
  url: `${SITE_URL}/tours/playtime`,
  image: `${SITE_URL}/images/playtime/poster.jpg`,
  touristType: "Music festival traveler",
  duration: "P4D",
  provider: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "405",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book`,
  },
};

export const metadata = {
  title: "Playtime Music Festival · Jul 1–4 2026",
  description:
    "Mongolia's biggest music festival — Molchat Doma, Kings of Convenience, DIIV, Stereolab, Hyukoh. Festival ticket, camping, filling breakfast included. From $405.",
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
