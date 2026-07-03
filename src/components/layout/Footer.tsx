import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        py-10
      "
    >
      <Container>
        <div className="text-center">
          <h2 className="font-semibold text-[var(--color-text)]">
            Tep Makhon
          </h2>

          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Full Stack Developer
          </p>

          <p className="mt-6 text-sm text-[var(--color-muted)]">
            © 2026 Tep Makhon. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}