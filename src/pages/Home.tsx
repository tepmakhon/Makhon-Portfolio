import MainLayout from "../components/layout/MainLayout";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionTitle from "../components/ui/SectionTitle";

export default function Home() {
  return (
    <MainLayout>
      <section className="py-20">
        <SectionTitle
          title="Design System"
          subtitle="Reusable UI components for the portfolio."
        />

        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <Card>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}