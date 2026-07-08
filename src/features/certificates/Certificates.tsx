import Section from "../../components/layout/Section";
import CertificateCard from "./CertificateCard";

import { certificates } from "../../data/certificates";

export default function Certificates() {
  return (
    <Section
      id="certificates"
      title="Certifications"
      subtitle="Professional certifications and continuous learning achievements."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </Section>
  );
}
