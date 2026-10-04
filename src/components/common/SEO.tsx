import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../../data/site";
import { profile } from "../../data/profile";

type Props = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  noindex?: boolean;
  person?: boolean;
};
export default function SEO({
  title,
  description,
  image = "/og-image.png",
  url = "/",
  noindex = false,
  person = false,
}: Props) {
  const canonical = new URL(url, SITE_URL).href;
  const preview = new URL(image, SITE_URL).href;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Tep Makhon Portfolio",
      },
      ...(person
        ? [
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: profile.fullName,
              url: `${SITE_URL}/`,
              sameAs: [profile.github, profile.linkedin],
              description: profile.bio,
              affiliation: {
                "@type": "CollegeOrUniversity",
                name: profile.university,
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phnom Penh",
                addressCountry: "KH",
              },
            },
          ]
        : []),
    ],
  };
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.fullName} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow"}
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={preview} />
      <meta property="og:image:alt" content="Tep Makhon developer portfolio" />
      <meta property="og:site_name" content="Tep Makhon Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={preview} />
      {!noindex && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData).replace(/</g, "\\u003c")}
        </script>
      )}
    </Helmet>
  );
}
