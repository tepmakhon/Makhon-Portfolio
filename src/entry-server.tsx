import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import PortfolioRoutes from "./routes";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import { projects } from "./data/projects";
import { SITE_URL } from "./data/site";
export const origin = SITE_URL;
export const paths = [
  "/",
  ...projects.map((project) => `/projects/${project.slug}`),
];
export function render(path: string) {
  const markup = renderToString(
    <HelmetProvider>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <StaticRouter location={path}>
            <PortfolioRoutes pages={{ Home, ProjectDetail, NotFound }} />
          </StaticRouter>
        </MotionConfig>
      </ThemeProvider>
    </HelmetProvider>,
  );
  // Helmet 3 uses React 19's native metadata hoisting; there is no context.helmet.
  // Inline JSON-LD stays in the body so client hydration sees the same tree.
  const headTags = /<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g;
  const head = (markup.match(headTags) ?? []).join("");
  return { html: markup.replace(headTags, ""), head };
}
