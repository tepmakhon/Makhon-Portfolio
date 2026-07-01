import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">

      <Container>

        <div className="text-center">

          <h2 className="font-semibold">
            Tep Makhon
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Full Stack Developer
          </p>

          <p className="mt-6 text-sm text-slate-400">
            © 2026 Tep Makhon. All rights reserved.
          </p>

        </div>

      </Container>

    </footer>
  );
}