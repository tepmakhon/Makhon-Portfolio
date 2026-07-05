import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "projects/:slug",
        element: <ProjectDetail />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);