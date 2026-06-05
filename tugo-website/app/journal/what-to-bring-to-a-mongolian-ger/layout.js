const SITE_URL = "https://wildmongoliawithtugi.com";
const SLUG = "what-to-bring-to-a-mongolian-ger";

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What to bring to a Mongolian ger — and a few things not to do",
  description:
    "A practical guide to staying overnight with a nomadic family in Mongolia: what to pack, what to gift, the threshold rule, the milk-tea rule, and the mistakes foreigners make.",
  url: `${SITE_URL}/journal/${SLUG}`,
  image: `${SITE_URL}/images/gallery/DSC01558.jpg`,
  datePublished: "2026-06-04",
  author: { "@type": "Person", name: "Tugi" },
  publisher: {
    "@type": "TravelAgency",
    name: "Wild Mongolia with Tugi",
    url: SITE_URL,
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/journal/${SLUG}` },
};

export const metadata = {
  title: "What to bring to a Mongolian ger — and a few things not to do",
  description:
    "Practical guide to staying overnight with a nomadic family in Mongolia: what to pack, what to gift, the threshold rule, the milk-tea rule, and the mistakes foreigners make.",
  alternates: { canonical: `/journal/${SLUG}` },
  openGraph: {
    title: "What to bring to a Mongolian ger",
    description:
      "Staying with a nomadic family is the best night of any Mongolia trip. Here's how not to make it weird.",
    url: `/journal/${SLUG}`,
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
