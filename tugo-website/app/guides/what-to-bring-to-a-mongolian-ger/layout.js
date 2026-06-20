const SITE_URL = "https://wildmongoliawithtugi.com";
const SLUG = "what-to-bring-to-a-mongolian-ger";

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Before you stay with a nomad family: the ger guide",
  description:
    "A practical guide to staying overnight with a nomadic family in their own ger: what a family ger is, what to bring and gift, the threshold rule, the milk-tea rule, and the mistakes foreigners make.",
  url: `${SITE_URL}/guides/${SLUG}`,
  image: `${SITE_URL}/images/gallery/DSC01558.jpg`,
  datePublished: "2026-06-04",
  author: { "@type": "Person", name: "Tugi" },
  publisher: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guides/${SLUG}` },
};

export const metadata = {
  title: "Before you stay with a nomad family — the ger guide",
  description:
    "Staying overnight with a nomad family in their own ger: what a family ger is, what to bring and gift, ger etiquette, and the mistakes foreigners make. Not a tourist camp — the real thing.",
  alternates: { canonical: `/guides/${SLUG}` },
  openGraph: {
    title: "Before you stay with a nomad family: the ger guide",
    description:
      "Staying with a nomad family in their own ger is the best night of any Mongolia trip. What to expect, what to bring, and how not to make it weird.",
    url: `/guides/${SLUG}`,
    type: "article",
    images: ["/images/gallery/DSC01558.jpg"],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      {children}
    </>
  );
}
