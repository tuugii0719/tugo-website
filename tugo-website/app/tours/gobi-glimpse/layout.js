const SITE_URL = "https://wildmongoliawithtugi.com";

const trip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Gobi Glimpse + Central",
  description:
    "Eight days through Umnugobi and central Mongolia — Yoliin Am ice canyon, camels at Khongoriin Els, Flaming Cliffs, a full horse-trek day in Tsetserleg, Tsenkher hot springs.",
  url: `${SITE_URL}/tours/gobi-glimpse`,
  image: `${SITE_URL}/images/gallery/DSC08000.jpg`,
  touristType: "Adventure traveler",
  duration: "P8D",
  provider: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "700",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book`,
  },
};

export const metadata = {
  title: "Gobi Glimpse + Central · Jun 13–20 2026",
  description:
    "Eight days through Umnugobi and central Mongolia — Yoliin Am ice canyon, camels at Khongoriin Els, Flaming Cliffs, a full horse-trek day in Tsetserleg, hot springs. The June glimpse of the Gobi loop. From $700.",
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
