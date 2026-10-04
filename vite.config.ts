import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    {
      name: "preview-static-routes",
      configurePreviewServer(server) {
        server.middlewares.use((request, response, next) => {
          const pathname = new URL(request.url ?? "/", "http://localhost")
            .pathname;
          if (pathname === "/" || !/^\/[a-zA-Z0-9/-]+$/.test(pathname))
            return next();
          const file = resolve("dist", `.${pathname}.html`);
          if (existsSync(file)) {
            request.url = `${pathname}.html`;
            return next();
          }
          response.statusCode = 404;
          response.setHeader("Content-Type", "text/html; charset=utf-8");
          response.end(readFileSync(resolve("dist/404.html")));
        });
      },
    },
    react(),
    tailwindcss(),
    ...(process.env.ANALYZE
      ? [
          visualizer({
            filename: "dist/stats.html",
            open: false,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
});
