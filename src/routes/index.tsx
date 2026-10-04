import { Suspense, type ComponentType } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import PageLoader from "../components/common/PageLoader";
type Pages = {
  Home: ComponentType;
  ProjectDetail: ComponentType;
  NotFound: ComponentType;
};
export default function PortfolioRoutes({ pages }: { pages: Pages }) {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <pages.Home />
            </Suspense>
          }
        />
        <Route
          path="projects/:slug"
          element={
            <Suspense fallback={<PageLoader />}>
              <pages.ProjectDetail />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <pages.NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
