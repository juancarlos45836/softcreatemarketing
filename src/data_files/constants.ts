import ogImageSrc from "src/assets/images/iconsoftcrete.png";

export const SITE = {
  title: "SoftCreateMarketing",
  tagline: "Top-quality Hardware Tools",
  description:
    "Empresa dedicada al marketing digital y al desarrollor de software, empeñados en brindar el mejor servicio para nuestros cliente.",
  description_short:
    "Empresa dedicada al marketing digital y al desarrollor de software.",
  url: "https://softcreatemarketing.vercel.app/?vercelToolbarCode=xyeOcnTVabh3s51",
  author: "Juan Carlos",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Te apoyamos incrementando la visibilidad de tu marca",
  image: ogImageSrc,
};
