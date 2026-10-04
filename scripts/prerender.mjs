import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { paths, render, origin } from "../dist-ssr/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
for (const path of [...paths, "/404"]) {
  const { html, head } = render(path);
  const output = template
    .replace(/<title>.*?<\/title>/s, "")
    .replace("<!--page-head-->", head)
    .replace("<!--page-content-->", html);
  const file =
    path === "/"
      ? "dist/index.html"
      : path === "/404"
        ? "dist/404.html"
        : `dist${path}.html`;
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, output);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile("dist/sitemap.xml", sitemap);
const robots = `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`;
await writeFile("dist/robots.txt", robots);
console.log(
  `Prerendered ${paths.length} indexable pages and a noindex 404 page.`,
);
