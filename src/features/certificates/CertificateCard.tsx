import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Card from "../../components/ui/Card";
import ImageLightbox from "../../components/common/ImageLightbox";
import type { Certificate } from "../../types/certificate";
export default function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className="h-full overflow-hidden p-0">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full bg-[var(--color-primary-soft)] p-3"
          aria-label={`Enlarge ${certificate.title} certificate`}
        >
          <img
            loading="lazy"
            decoding="async"
            src={certificate.image}
            alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
            width="1000"
            height="700"
            className="aspect-[10/7] w-full object-contain"
          />
        </button>
        <div className="p-6">
          <p className="text-xs text-[var(--color-muted)]">
            {certificate.issuer} · {certificate.issueDate}
          </p>
          <h3 className="mt-3 text-lg font-semibold">{certificate.title}</h3>
          <button
            onClick={() => setOpen(true)}
            className="link-text mt-3 text-sm"
          >
            View certificate
          </button>
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-text ml-4 text-sm"
            >
              Verify <FiExternalLink aria-hidden="true" />
              <span className="sr-only">{certificate.title}</span>
            </a>
          )}
        </div>
      </Card>
      {open && (
        <ImageLightbox
          images={[certificate.image]}
          current={0}
          alt={`${certificate.title} certificate`}
          onClose={() => setOpen(false)}
          onNext={() => {}}
          onPrevious={() => {}}
        />
      )}
    </>
  );
}
