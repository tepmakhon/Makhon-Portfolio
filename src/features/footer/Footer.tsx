import Container from "../../components/layout/Container";

import { profile } from "../../data/profile";

import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="mt-28 border-t bg-slate-50">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              {profile.fullName}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {profile.bio}
            </p>
          </div>

          {/* Navigation */}

          <FooterLinks />

          {/* Social */}

          <FooterSocial />

        </div>

        <div className="border-t py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.fullName}. Built with React, TypeScript and Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}