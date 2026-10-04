import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Container from "../components/layout/Container";
import SEO from "../components/common/SEO";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <section className="flex min-h-[70vh] items-center">
      <SEO
        title="Page Not Found | Tep Makhon"
        description="This portfolio page could not be found. Explore Tep Makhon’s projects from the homepage."
        url={pathname}
        noindex
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-8xl font-black text-[var(--color-primary)]">
            404
          </h1>

          <h2 className="mt-6 text-4xl font-bold">Page Not Found</h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <Link to="/" className="action-link mt-10">
            <FiArrowLeft />
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
