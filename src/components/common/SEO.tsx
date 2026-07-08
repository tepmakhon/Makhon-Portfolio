import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

const SITE_URL = "https://tepmakhon.dev";

export default function SEO({
  title,
  description,
  image = `${SITE_URL}/og-image.png`,
  url = SITE_URL,
}: Props) {
  return (
    <Helmet>
      {/* Basic */}

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="author" content="Tep Makhon" />

      <meta
        name="keywords"
        content="
          React,
          TypeScript,
          Full Stack Developer,
          Portfolio,
          Express,
          PostgreSQL,
          Prisma,
          Cambodia,
          Web Developer
        "
      />

      {/* Canonical */}

      <link rel="canonical" href={url} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      <meta property="og:site_name" content="Tep Makhon Portfolio" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
