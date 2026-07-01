import {
  FiBookOpen,
  FiMapPin,
  FiMail,
  FiBriefcase,
} from "react-icons/fi";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import QuickFact from "../../components/common/QuickFact";

import { profile } from "../../data/profile";

export default function About() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Learn more about my journey, passion, and career goals."
        />

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              My Journey
            </h3>

            <p className="leading-8 text-slate-600">
              {profile.bio}
            </p>

            <h3 className="mt-10 mb-4 text-xl font-semibold">
              Passion
            </h3>

            <p className="leading-8 text-slate-600">
              {profile.passion}
            </p>

            <h3 className="mt-10 mb-4 text-xl font-semibold">
              Career Goal
            </h3>

            <p className="leading-8 text-slate-600">
              {profile.careerGoal}
            </p>

          </div>

          {/* Right */}

          <div className="grid gap-5">

            <QuickFact
              icon={<FiBookOpen />}
              label="Education"
              value={`${profile.major} • ${profile.university}`}
            />

            <QuickFact
              icon={<FiMapPin />}
              label="Location"
              value={profile.location}
            />

            <QuickFact
              icon={<FiBriefcase />}
              label="Availability"
              value={profile.availableText}
            />

            <QuickFact
              icon={<FiMail />}
              label="Email"
              value={profile.email}
            />

          </div>

        </div>

      </Container>
    </section>
  );
}