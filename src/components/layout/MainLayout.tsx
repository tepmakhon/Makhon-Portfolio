import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen">

      <Navbar />

      <main>{children}</main>

      <Footer />

    </div>
  );
}