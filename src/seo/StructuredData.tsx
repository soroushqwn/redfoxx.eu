import { Head } from "vite-react-ssg";
import { translations } from "@/i18n/translations";
import { META, SITE_URL, pageUrl, type Lang, type PageKey } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const LANG_TAG: Record<Lang, string> = { nl: "nl-BE", en: "en", fr: "fr-BE" };

/** One ProfessionalService node, referenced by @id from every page. No street address: country only. */
const organization = (lang: Lang) => {
  const h = translations[lang].home;
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "REDFOXX",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    image: `${SITE_URL}/android-chrome-512x512.png`,
    email: "info@redfoxx.be",
    telephone: "+32456369848",
    description: META.home[lang]?.description ?? META.home.nl!.description,
    areaServed: ["BE", "NL"],
    address: { "@type": "PostalAddress", addressCountry: "BE" },
    knowsLanguage: ["nl", "en", "fr"],
    founder: { "@type": "Person", name: "Soroush Qanawizian" },
    sameAs: ["https://www.linkedin.com/company/redfoxx/"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "REDFOXX",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: h.outboundTitle, description: h.outboundDesc, url: pageUrl("outbound", lang) } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: h.inboundTitle, description: h.inboundDesc, url: pageUrl("inbound", lang) } },
      ],
    },
  };
};

const website = (lang: Lang) => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  name: "REDFOXX",
  url: `${SITE_URL}/`,
  inLanguage: LANG_TAG[lang],
  publisher: { "@id": ORG_ID },
});

const breadcrumb = (page: PageKey, lang: Lang, name: string) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "REDFOXX", item: pageUrl("home", lang) },
    { "@type": "ListItem", position: 2, name, item: pageUrl(page, lang) },
  ],
});

const graphFor = (page: PageKey, lang: Lang): object[] => {
  const t = translations[lang];
  const nodes: object[] = [organization(lang), website(lang)];

  if (page === "outbound" || page === "inbound") {
    const name = page === "outbound" ? t.home.outboundTitle : t.home.inboundTitle;
    const description = page === "outbound" ? t.home.outboundDesc : t.home.inboundDesc;
    nodes.push({
      "@type": "Service",
      "@id": `${pageUrl(page, lang)}#service`,
      name,
      description,
      url: pageUrl(page, lang),
      provider: { "@id": ORG_ID },
      areaServed: ["BE", "NL"],
      inLanguage: LANG_TAG[lang],
    });
    nodes.push(breadcrumb(page, lang, name));
  }

  if (page === "inbound") {
    nodes.push({
      "@type": "FAQPage",
      mainEntity: t.inbound.faq.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    });
  }

  return nodes;
};

/** Page-specific JSON-LD (rendered into the pre-rendered HTML head). */
export const StructuredData = ({ page, lang }: { page: PageKey; lang: Lang }) => (
  <Head>
    <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@graph": graphFor(page, lang) })}
    </script>
  </Head>
);
