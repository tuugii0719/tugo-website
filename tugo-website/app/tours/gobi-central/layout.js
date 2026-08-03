const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Gobi + Central",
  description:
    "Ten days through the southern Gobi and central Mongolia — Dalanzadgad gateway, Yoliin Am ice canyon, a night with a camel family in the open Gobi, Khongoriin Els dunes, the Flaming Cliffs, hot springs, family camps. The full Gobi loop at a comfortable mid-August pace.",
  url: `${SITE_URL}/tours/gobi-central`,
  image: `${SITE_URL}/images/destinations/khongoryn-1.jpg`,
  touristType: "Adventure traveler",
  duration: "P10D",
  provider: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "980",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    url: `${SITE_URL}/book`,
  },
};

export const metadata = {
  title: "Gobi + Central · Aug 7–16 2026",
  description:
    "Ten days through the southern Gobi and central Mongolia — Dalanzadgad gateway, Yoliin Am, a night with a camel family in the open Gobi, Khongoriin Els dunes, Flaming Cliffs, hot springs. The full Gobi loop, comfortably paced. From $980.",
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
