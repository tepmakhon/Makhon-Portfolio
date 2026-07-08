import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageLoader from "../components/common/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetail"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "projects/:slug",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetail />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);