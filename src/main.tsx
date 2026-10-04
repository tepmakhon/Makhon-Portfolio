import React, { lazy } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import "./styles/globals.css";
import PortfolioRoutes from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
const pages = {
  Home: lazy(() => import("./pages/Home")),
  ProjectDetail: lazy(() => import("./pages/ProjectDetail")),
  NotFound: lazy(() => import("./pages/NotFound")),
};
const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <PortfolioRoutes pages={pages} />
          </BrowserRouter>
        </MotionConfig>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
if (root.querySelector("section") !== null) hydrateRoot(root, app);
else createRoot(root).render(app);
