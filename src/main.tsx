import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./styles/globals.css";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "sonner";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />

        <Toaster
          richColors
          position="top-right"
        />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);