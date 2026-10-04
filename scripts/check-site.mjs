import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { paths, origin, render } from "../dist-ssr/entry-server.js";
const decode = (value) => value.replace(/&amp;/g, "&");
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
      match[1],
      decode(match[2]),
    ]),
  );
const titles = new Set();
for (const path of [...paths, "/404"]) {
  const file =
    path === "/"
      ? "dist/index.html"
      : path === "/404"
        ? "dist/404.html"
        : `dist${path}.html`;
  const html = await readFile(file, "utf8");
  const head = html.slice(0, html.indexOf("</head>"));
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: one h1`);
  const titleMatches = [...head.matchAll(/<title>([^<]+)<\/title>/g)];
  assert.equal(titleMatches.length, 1, `${path}: one title`);
  assert(!titles.has(titleMatches[0][1]), `${path}: unique title`);
  titles.add(titleMatches[0][1]);
  const meta = [...head.matchAll(/<meta\b[^>]*>/g)].map((match) =>
    attrs(match[0]),
  );
  const canonical = [...head.matchAll(/<link\b[^>]*>/g)]
    .map((match) => attrs(match[0]))
    .filter((tag) => tag.rel === "canonical");
  assert.equal(canonical.length, 1);
  assert.equal(canonical[0].href, `${origin}${path}`);
  assert(
    meta.some((tag) => tag.name === "description" && tag.content.length > 30),
  );
  assert(
    meta.some(
      (tag) =>
        tag.name === "robots" &&
        tag.content ===
          (path === "/404"
            ? "noindex, follow"
            : "index, follow, max-image-preview:large"),
    ),
  );
  assert(
    meta.some(
      (tag) => tag.property === "og:url" && tag.content === canonical[0].href,
    ),
  );
  assert(
    meta.some(
      (tag) =>
        tag.name === "twitter:card" && tag.content === "summary_large_image",
    ),
  );
  for (const tag of meta.filter(
    (tag) => tag.property === "og:image" || tag.name === "twitter:image",
  )) {
    const url = new URL(tag.content);
    assert.equal(url.origin, origin);
    await access(`dist${url.pathname}`);
  }
  const structuredScripts = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];
  assert.equal(
    structuredScripts.length,
    path === "/404" ? 0 : 1,
    `${path}: structured data present`,
  );
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    const data = JSON.parse(match[1]);
    assert.equal(data["@context"], "https://schema.org");
    assert(data["@graph"].some((item) => item["@type"] === "WebSite"));
    const person = data["@graph"].find((item) => item["@type"] === "Person");
    const website = data["@graph"].find((item) => item["@type"] === "WebSite");
    assert.equal(person.name, "Tep Makhon");
    assert.equal(person.alternateName, "tepmakhon");
    assert.equal(new URL(person.image).origin, origin);
    await access(`dist${new URL(person.image).pathname}`);
    assert(person.sameAs.includes("https://github.com/tepmakhon"));
    assert.equal(website.publisher["@id"], person["@id"]);
    assert.equal(website.inLanguage, "en");
    assert.equal(website.name, "Tep Makhon");
    if (path === "/") {
      const page = data["@graph"].find(
        (item) => item["@type"] === "ProfilePage",
      );
      assert.equal(page.mainEntity["@id"], person["@id"]);
      assert(html.match(/<h1[^>]*>[\s\S]*?<\/h1>/)[0].includes("Tep Makhon"));
      assert(
        meta.some(
          (tag) =>
            tag.name === "google-site-verification" &&
            tag.content === render("/").googleVerification,
        ),
        "Homepage contains the configured Google ownership token in its head",
      );
      for (const [variable, name] of [
        ["VITE_GOOGLE_SITE_VERIFICATION", "google-site-verification"],
        ["VITE_BING_SITE_VERIFICATION", "msvalidate.01"],
      ]) {
        if (process.env[variable])
          assert(
            meta.some(
              (tag) =>
                tag.name === name && tag.content === process.env[variable],
            ),
          );
      }
    } else {
      const breadcrumbs = data["@graph"].find(
        (item) => item["@type"] === "BreadcrumbList",
      );
      const work = data["@graph"].find(
        (item) => item["@type"] === "CreativeWork",
      );
      const page = data["@graph"].find((item) => item["@type"] === "WebPage");
      assert(html.includes('aria-label="Breadcrumb"'));
      assert.deepEqual(
        breadcrumbs.itemListElement.map((item) => item.position),
        [1, 2],
      );
      assert.equal(breadcrumbs.itemListElement[1].item, canonical[0].href);
      assert.equal(page.mainEntity["@id"], work["@id"]);
      assert.equal(work.contributor["@id"], person["@id"]);
      assert(work.sameAs[0].startsWith("https://github.com/"));
    }
  }
  assert(
    !/tepmakhon\.dev|https:\/\/makhon-portfolio\.vercel\.app|<!--page-content-->/.test(
      html,
    ),
  );
  for (const match of html.matchAll(/<(?:img|script|link)\b[^>]*>/g)) {
    const tag = attrs(match[0]);
    const asset = tag.src || (tag.rel === "stylesheet" ? tag.href : null);
    if (asset?.startsWith("/")) await access(`dist${asset}`);
    if (match[0].startsWith("<img"))
      assert(
        tag.alt && tag.width && tag.height,
        `${path}: descriptive image and dimensions`,
      );
  }
  const stack = [];
  for (const match of html.matchAll(/<\/?(?:a|button)\b[^>]*>/g)) {
    const token = match[0];
    const name = token.match(/^<\/?(a|button)/)[1];
    if (token.startsWith("</")) {
      assert.equal(stack.pop(), name);
      continue;
    }
    assert.equal(
      stack.length,
      0,
      `${path}: interactive controls are not nested`,
    );
    stack.push(name);
  }
  for (const match of html.matchAll(/<a\b[^>]*>/g)) {
    const tag = attrs(match[0]);
    if (tag.target === "_blank") assert(tag.rel?.includes("noopener"));
    if (tag.href?.startsWith("/#") || tag.href?.startsWith("#")) {
      const home = await readFile("dist/index.html", "utf8");
      assert(home.includes(`id="${tag.href.split("#")[1]}"`));
    } else if (tag.href?.startsWith("/projects/"))
      assert(paths.includes(tag.href));
  }
  assert(
    !/style="[^"]*opacity:0/.test(html),
    `${path}: prerendered content is visible`,
  );
  console.log(
    `PASS ${path}: HTML, metadata, JSON-LD, local assets, links, semantics`,
  );
}
assert(render("/projects/unknown-project").head.includes("noindex, follow"));
const sitemap = await readFile("dist/sitemap.xml", "utf8");
assert.deepEqual(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
  paths.map((path) => `${origin}${path}`),
);
assert(
  (await readFile("dist/robots.txt", "utf8")).includes(
    `Sitemap: ${origin}/sitemap.xml`,
  ),
);
assert(
  (await readFile("dist/resume.pdf")).subarray(0, 5).toString() === "%PDF-",
);
assert(
  !(await readFile("dist/404.html", "utf8")).includes(
    'type="application/ld+json"',
  ),
);
console.log("PASS sitemap URLs, robots, CV file, unknown project metadata");
