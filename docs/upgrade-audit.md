# Portfolio upgrade audit — 4 October 2026

## Initial repository findings and priorities

The workspace was clean before changes. npm dependencies were already installed. The baseline TypeScript/Vite build passed; Oxlint reported four Fast Refresh warnings. Existing routes were `/` and three project slugs. The app had a theme provider, CV PDF, certificate images, EmailJS integration, gallery, and reusable section/card controls.

1. **Crawlability and routes:** the initial HTML was an empty app shell with a generic title and missing favicon. SEO used three conflicting origins. Sitemap/robots used incorrect domains. Project metadata images were relative. No Vercel route configuration was present.
2. **Interactions and accessibility:** project links contained buttons, the mobile overlay retained focusable controls while closed, screenshots used click-only images, lightbox buttons lacked labels/focus trapping, fields lacked visible labels, and footer hash links failed from project pages. Hash scrolling relied on an arbitrary timeout. Hidden back-to-top remained in the tab order.
3. **Accuracy and information hierarchy:** profile said Year 3 instead of the brief's fourth year. Counts did not match three projects and ten certificates. The portfolio was featured ahead of the RUPP platform. Skill ratings were subjective. SmartRoadmap had no supporting data. Project pages repeated the same overview/features without architecture or responsibility context.
4. **Design and performance:** several sections hardcoded slate text incompatible with dark backgrounds; primary green text also failed contrast on the dark surface. Excessive floating decorations, card motion, large section spacing, and cropped screenshots distracted from content. The portrait and project assets were already small WebP files; recompression was unnecessary. The visualizer opened on every build.
5. **Documentation:** README duplicated screenshots, retained placeholders, used stale versions, and claimed unsupported Lighthouse scores and an MIT license without a license file.

## Implemented

- Shared restrained warm-neutral/green design tokens and readable light/dark text; clear hero, real portrait, actions, truthful derived counts, RUPP-first projects, and smaller section spacing.
- Semantic navigation/external links, mobile native dialog, focus-trapping image dialogs, labeled forms, in-flight submission guard, inline status, email fallback, route-aware footer, reliable hash scrolling, skip link, and reduced-motion handling.
- Static HTML and metadata for all real routes, hydration entry, one production origin, absolute previews, Person/WebSite JSON-LD, generated sitemap/robots, favicon, noindex missing pages, Vercel clean URL/404 configuration, and immutable hashed-asset caching.
- Case-study context drawn from existing descriptions and project experience. Group ownership distinguished from individual ownership. Unsupported personal lessons or outcomes omitted.
- Lazy client routes preserved. Existing optimized assets retained, image dimensions supplied, below-fold images lazy, hero image prioritized, animation-hidden static content eliminated, visualizer made optional. Initial entry JavaScript gzip changed from 110.64 kB to approximately 86.83 kB; this is a bundle measurement, not a Core Web Vitals result.
- README/environment example replaced with current setup, deployment, verification, and Search Console instructions. No new dependencies or deployment performed.

## Verification record

- `npm run build`: passes TypeScript, client build, server build, and generation of four indexable HTML pages plus a noindex 404 page.
- `npm run lint`: passes with no warnings after changes.
- `npm run check:site`: validates all generated pages, metadata, JSON-LD syntax, local assets, image attributes, internal links, interactive-element nesting, sitemap URLs, robots, PDF header, and unknown-project metadata.
- Python standard-library XML parser: sitemap XML parses with the correct sitemap namespace.
- Existing EmailJS environment variable names: all three expected identifiers are present; values were not printed or committed. Delivery was not tested.
- Local preview HTTP checks: homepage and all three direct project routes return 200 with the correct distinct title; unknown project and other unknown paths return 404 with noindex content; robots, sitemap, CV, and favicon return 200 with the expected content types. The preview required sandbox-approved localhost access.
- Git review: `.env` is ignored and untracked; project dependencies/lockfile preserved.

## Unverified or needing owner input

Browser automation is unavailable in this session. Responsive visuals, keyboard behavior in a running browser, hydration/console warnings, both contact success/failure states, assistive-technology behavior, and measured Core Web Vitals remain unverified. Local and production HTTP checks are recorded separately when available. Outbound DNS access to the live deployment failed, and the web tool could not fetch it, so production origin is the user-provided deployment URL rather than independently confirmed live hosting state. External GitHub/LinkedIn/Credly/Badgr availability is unverified.

The CV exists and has a PDF header; its contents and download interaction were not audited. The existing portrait is only 213×320 pixels and is displayed at its native width. Existing portfolio screenshots show the prior design and should be recaptured after visual review. SmartRoadmap needs authentic project data/assets. Smart Classroom needs the owner's exact personal contribution and lessons if a deeper personal case study is desired. Existing training dates and certificate descriptions are retained rather than externally verified.
