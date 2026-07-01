import {
  FiMail,
  FiMapPin,
  FiBookOpen,
  FiBriefcase,
} from "react-icons/fi";

import Card from "../../components/ui/Card";

import { profile } from "../../data/profile";

export default function ContactInfo() {
  return (
    <Card className="space-y-8">
      <h3 className="text-3xl font-bold">
        Let's Work Together
      </h3>

      <p className="leading-8 text-slate-600">
        I'm currently looking for internship opportunities,
        freelance projects, and collaborations.
      </p>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <FiMail size={22} />
          <span>{profile.email}</span>
        </div>

        <div className="flex items-center gap-4">
          <FiMapPin size={22} />
          <span>{profile.location}</span>
        </div>

        <div className="flex items-center gap-4">
          <FiBookOpen size={22} />
          <span>{profile.university}</span>
        </div>

        <div className="flex items-center gap-4">
          <FiBriefcase size={22} />
          <span>{profile.major}</span>
        </div>

      </div>
    </Card>
  );
}