import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "../../features/footer/Footer";
import BackToTop from "../common/BackToTop";
import ScrollToHash from "../common/ScrollToHash";
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}