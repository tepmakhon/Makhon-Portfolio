import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, GOOGLE_SITE_VERIFICATION } from "../../data/site";
import { buildSearchSchema } from "../../data/search";
import type { Project } from "../../types/project";
import { profile } from "../../data/profile";

type Props = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  noindex?: boolean;
  person?: boolean;
  project?: Project;
};
export default function SEO({
  title,
  description,
  image = "/og-image.png",
  url = "/",
  noindex = false,
  person = false,
  project,
}: Props) {
  const canonical = new URL(url, SITE_URL).href;
  const preview = new URL(image, SITE_URL).href;
  const structuredData = buildSearchSchema({
    title,
    description,
    canonical,
    image: preview,
    isProfile: person,
    project,
  });
  const googleVerification = GOOGLE_SITE_VERIFICATION;
  const bingVerification = import.meta.env.VITE_BING_SITE_VERIFICATION;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.fullName} />
      {person && googleVerification && (
        <meta name="google-site-verification" content={googleVerification} />
      )}
      {person && bingVerification && (
        <meta name="msvalidate.01" content={bingVerification} />
      )}
      <meta
        name="robots"
        content={
          noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
        }
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={preview} />
      <meta
        property="og:image:alt"
        content={
          project
            ? `${project.title} application screenshot`
            : "Tep Makhon developer portfolio"
        }
      />
      <meta property="og:site_name" content={SITE_NAME} />
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
