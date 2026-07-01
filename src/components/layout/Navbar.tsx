import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <h1 className="text-lg font-bold">
            Makhon Portfolio
          </h1>

          <ul className="hidden gap-8 md:flex">
            <li>Home</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

        </nav>
      </Container>
    </header>
  );
}