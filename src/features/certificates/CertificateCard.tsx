import { FiAward, FiExternalLink } from "react-icons/fi";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import type { Certificate } from "../../types/certificate";

type Props = {
  certificate: Certificate;
};

export default function CertificateCard({
  certificate,
}: Props) {
  return (
    <Card className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={certificate.image}
        alt={certificate.title}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2 text-primary">
          <FiAward />
          <span className="text-sm font-semibold">
            {certificate.issuer}
          </span>
        </div>

        <h3 className="text-xl font-bold">
          {certificate.title}
        </h3>

        <p className="text-sm text-slate-500">
          Issued: {certificate.issueDate}
        </p>

        {certificate.credentialUrl && (
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() =>
              window.open(
                certificate.credentialUrl,
                "_blank"
              )
            }
          >
            <FiExternalLink />

            View Certificate
          </Button>
        )}
      </div>
    </Card>
  );
}