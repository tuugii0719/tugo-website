const SITE_URL = "https://wildmongoliawithtugi.com";
const SLUG = "naadam-village-vs-ulaanbaatar";

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Naadam in a village vs. Naadam in Ulaanbaatar: which one is actually Mongolia?",
  description:
    "Mongolia's national festival is on July 11–13 every year. Most tours sell the Ulaanbaatar stadium version. Here's what the village version looks like — and why it's the one most Mongolians actually do.",
  url: `${SITE_URL}/guides/${SLUG}`,
  image: `${SITE_URL}/images/destinations/naadam-horse-racer.jpg`,
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
  title: "Naadam in a village vs. Ulaanbaatar — what most tours don't show you",
  description:
    "Mongolia's national festival is on July 11–13 every year. Most tours sell the Ulaanbaatar stadium version. Here's the village version — wrestling on a grass field, kid jockeys, archery on the steppe — and how to actually go.",
  alternates: { canonical: `/guides/${SLUG}` },
  openGraph: {
    title: "Naadam in a village vs. Ulaanbaatar",
    description:
      "The Ulaanbaatar Naadam is a stadium show. The village version is the actual festival. A guide to telling them apart and choosing the right one.",
    url: `/guides/${SLUG}`,
    type: "article",
    images: ["/images/destinations/naadam-horse-racer.jpg"],
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
