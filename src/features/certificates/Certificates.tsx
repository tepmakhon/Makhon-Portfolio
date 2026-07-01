import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import CertificateCard from "./CertificateCard";

import { certificates } from "../../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-28">
      <Container>
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and continuous learning achievements."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}