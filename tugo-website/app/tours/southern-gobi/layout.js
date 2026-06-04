const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Southern Gobi + Central",
  description:
    "Eleven days through the southern Gobi and central Mongolia — Dalanzadgad gateway, Yoliin Am ice canyon, a night with a camel family in the open Gobi, Khongoriin Els dunes, the Flaming Cliffs, hot springs, family camps. The properly-paced version of the Gobi loop.",
  url: `${SITE_URL}/tours/southern-gobi`,
  image: `${SITE_URL}/images/destinations/khongoryn-1.jpg`,
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
  title: "Southern Gobi + Central · Aug 18–28 2026",
  description:
    "Eleven days through the southern Gobi and central Mongolia — Dalanzadgad gateway, Yoliin Am, a night with a camel family in the open Gobi, Khongoriin Els dunes, Flaming Cliffs, hot springs. The properly-paced version. From $1,080.",
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
