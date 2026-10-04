# Search discovery for Tep Makhon

Updated 5 October 2026. These changes improve crawlability and help search engines understand this portfolio; they do not guarantee indexing, first-page placement, a knowledge panel, or rich results.

## Implemented search signals

- The homepage title identifies Tep Makhon as a Full-Stack & React Developer. Its description includes the existing GitHub handle, Computer Science education, and demonstrated stack.
- Visible heading and About text identify the person behind the work. Name, handle, skills, university, location, and real GitHub/LinkedIn links agree with the structured data.
- One connected JSON-LD graph defines Person, WebSite, and a homepage ProfilePage. Real project pages add WebPage, CreativeWork, and BreadcrumbList nodes. Project attribution uses `contributor`, including the group project; no fabricated authorship, awards, ratings, or usage metrics are added.
- Each project displays the same breadcrumb represented in its structured data. The existing prerenderer makes its content and metadata available without executing JavaScript.
- The real portrait is available at `/images/tep-makhon.webp`, with an absolute Person image URL, descriptive filename, alt text, and dimensions.
- Existing English content is suitable for an international audience. The site has no regional crawling restriction; Cambodia describes the person's location. No alternate-language links are emitted because translated pages do not exist.
- Large image previews are permitted using `max-image-preview:large`. This is permission for supporting crawlers, not a ranking guarantee.
- The owner-provided Google ownership token is included in the built homepage. An environment variable can override it; Bing verification remains optional.

Useful queries to monitor after indexing: `Tep Makhon`, `tepmakhon`, `Tep Makhon portfolio`, `Tep Makhon React developer`, and the real project names. Generic terms such as `full-stack developer` are much more competitive; name searches are the initial priority.

## Deploy the changes

Run:

```sh
npm run lint
npm run build
npm run check:site
```

Deploy the reviewed build to the existing Vercel project using output directory `dist`. Keep `https://tepmakhon-portfolio.vercel.app` as the canonical origin unless moving to a domain you own. A new domain should use the same content with appropriate redirects and updated canonical URLs; do not leave two competing canonical sites.

Confirm the production homepage and each project return HTTP 200 and their own metadata in View Source, and an unknown URL returns HTTP 404. Check that deployment protection does not require a login on the public production site. Verify these URLs:

- `https://tepmakhon-portfolio.vercel.app/`
- `https://tepmakhon-portfolio.vercel.app/projects/developer-portfolio`
- `https://tepmakhon-portfolio.vercel.app/projects/rupp-student-conference-platform`
- `https://tepmakhon-portfolio.vercel.app/projects/smart-classroom-ai-iot`
- `https://tepmakhon-portfolio.vercel.app/robots.txt`
- `https://tepmakhon-portfolio.vercel.app/sitemap.xml`
- `https://tepmakhon-portfolio.vercel.app/images/tep-makhon.webp`

## Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) with your own Google account.
2. Add a **URL-prefix** property: `https://tepmakhon-portfolio.vercel.app/`. A Domain property requires DNS control; you normally do not control `vercel.app` DNS.
3. The owner-provided Google verification token is configured in `src/data/site.ts`; no Vercel environment variable is required for that token. If Google provides a different token, update that public configuration or set Vercel's **Production** environment variable `VITE_GOOGLE_SITE_VERIFICATION` to override it.
4. Rebuild and redeploy. Check that the built homepage source contains the exact token, then click Verify in Search Console. Keep the token configured after verification. An HTML verification file placed in `public/` is an alternative if Google offers that method.
5. In Sitemaps, submit `sitemap.xml` once the production deployment serves the updated file.
6. Inspect the homepage and the three project URLs. Run Test Live URL, confirm indexing is allowed and the content is rendered, and use Request Indexing when available.
7. Monitor Page Indexing for blocked URLs, soft 404s, or a different Google-selected canonical. Use Performance to monitor queries and impressions by country. Compare name searches first; do not repeatedly submit unchanged pages.

Tokens are public proof of site ownership, not private API keys. Never paste service credentials into these variables.

## Bing

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/) with your account.
2. Add the same production site. Use an available ownership-verification method; for the `msvalidate.01` HTML tag, set its `content` value as `VITE_BING_SITE_VERIFICATION`, rebuild, deploy, then verify.
3. Submit the absolute sitemap URL `https://tepmakhon-portfolio.vercel.app/sitemap.xml` and inspect your real page URLs using the tools available in your account.

Do not add an invented IndexNow key or call submission APIs without the provider's required configuration.

## Strengthen your public identity

Set this exact portfolio URL as the website on your existing GitHub and LinkedIn profiles. Use **Tep Makhon** consistently as your public name and keep **tepmakhon** as the existing handle. Link to the relevant case study from each real project's README when you own or have permission to edit that repository. These updates must be made in the corresponding accounts; the portfolio changes cannot update those accounts.

Publish useful, original project explanations and actual contributions over time. Add Khmer content only after providing an accurate translation and real translated routes; then language annotations can be implemented. Avoid purchased backlinks, repeated keyword lists, fake reviews, or near-duplicate pages aimed at countries where you have no separate content.

## Verification limits

The build, local generated HTML, structured-data relationships, breadcrumb consistency, crawlable portrait, and verification-tag output can be checked here. Ownership verification, production availability, crawler access, index status, ranking, and search-result appearance require deployment and the owner's search-console accounts. Browser visuals and external provider validation remain separate checks.

References: [Google profile-page guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [site-name guidance](https://developers.google.com/search/docs/appearance/site-names), [breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [ownership verification](https://support.google.com/webmasters/answer/9008080), [requesting recrawls](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), and [indexing FAQ](https://developers.google.com/search/help/crawling-index-faq).
