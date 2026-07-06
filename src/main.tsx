import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import "./styles/globals.css";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />

      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={4000}
        theme="system"
      />
    </ThemeProvider>
  </React.StrictMode>
);