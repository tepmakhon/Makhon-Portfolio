import Container from "../../components/layout/Container";

import { profile } from "../../data/profile";

import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer
      className="
        mt-28
        border-t
        border-[var(--color-border)]
        bg-[var(--color-surface)]
      "
    >
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-3">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-[var(--color-text)]">
              {profile.fullName}
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              {profile.bio}
            </p>
          </div>

          {/* Navigation */}

          <FooterLinks />

          {/* Social */}

          <FooterSocial />
        </div>

        <div
          className="
            border-t
            border-[var(--color-border)]
            py-6
            text-center
            text-sm
            text-[var(--color-muted)]
          "
        >
          © {new Date().getFullYear()} {profile.fullName}. Built with React,
          TypeScript and Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}
