import { profile } from "./profile";
import { SITE_URL, SITE_NAME } from "./site";
import type { Project } from "../types/project";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

export function buildSearchSchema({
  title,
  description,
  canonical,
  image,
  isProfile,
  project,
}: {
  title: string;
  description: string;
  canonical: string;
  image: string;
  isProfile: boolean;
  project?: Project;
}) {
  const pageId = `${canonical}#webpage`;
  const projectId = `${canonical}#project`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.fullName,
        alternateName: profile.username,
        url: `${SITE_URL}/`,
        description: profile.bio,
        image: new URL(profile.photo, SITE_URL).href,
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: profile.technologies,
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
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_NAME,
        alternateName: ["Tep Makhon Portfolio", profile.username],
        url: `${SITE_URL}/`,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": isProfile ? "ProfilePage" : "WebPage",
        "@id": pageId,
        name: title,
        description,
        url: canonical,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        primaryImageOfPage: { "@type": "ImageObject", url: image },
        ...(isProfile ? { mainEntity: { "@id": personId } } : {}),
        ...(project
          ? {
              mainEntity: { "@id": projectId },
              breadcrumb: { "@id": `${canonical}#breadcrumb` },
            }
          : {}),
      },
      ...(project
        ? [
            {
              "@type": "CreativeWork",
              "@id": projectId,
              name: project.title,
              description: project.overview,
              url: canonical,
              image,
              sameAs: [project.github],
              keywords: project.technologies.join(", "),
              contributor: { "@id": personId },
              mainEntityOfPage: { "@id": pageId },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${canonical}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: SITE_NAME,
                  item: `${SITE_URL}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: project.title,
                  item: canonical,
                },
              ],
            },
          ]
        : []),
    ],
  };
}
