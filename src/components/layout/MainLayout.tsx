import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "../../features/footer/Footer";
import BackToTop from "../common/BackToTop";
import ScrollToHash from "../common/ScrollToHash";
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 min-w-0">
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}
