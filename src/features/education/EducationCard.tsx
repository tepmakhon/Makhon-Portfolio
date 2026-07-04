import { FiMapPin, FiCalendar } from "react-icons/fi";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

import type { Education } from "../../data/education";
import MotionCard from "../../components/common/MotionCard";
type Props = {
  education: Education;
};

export default function EducationCard({
  education,
}: Props) {
  return (
    <MotionCard>
      <Card>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold">
          {education.degree}
        </h3>

        <h4 className="text-lg font-semibold text-primary">
          {education.school}
        </h4>

        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <FiCalendar />
            {education.period}
          </div>

          <div className="flex items-center gap-2">
            <FiMapPin />
            {education.location}
          </div>
        </div>

        <p className="leading-7 text-slate-600">
          {education.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {education.courses.map((course) => (
            <Badge key={course}>{course}</Badge>
          ))}
        </div>
      </div>
  </Card>
</MotionCard>
  );
}