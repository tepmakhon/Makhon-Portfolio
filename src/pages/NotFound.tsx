import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-8xl font-black text-[var(--color-primary)]">
            404
          </h1>

          <h2 className="mt-6 text-4xl font-bold">Page Not Found</h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <Link to="/">
            <Button className="mt-10 inline-flex items-center gap-2">
              <FiArrowLeft />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
