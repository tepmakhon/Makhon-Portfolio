import { useState } from "react";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ImageLightbox from "../../components/common/ImageLightbox";
export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section>
      <Container>
        <SectionTitle title="Project Screenshots" align="left" />
        <div className="grid gap-6 md:grid-cols-2">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelected(index)}
              aria-label={`Enlarge ${title} screenshot ${index + 1}`}
              className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3"
            >
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                width="1600"
                height="1039"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-contain"
              />
            </button>
          ))}
        </div>
      </Container>
      {selected !== null && (
        <ImageLightbox
          images={images}
          current={selected}
          alt={`${title} screenshot`}
          onClose={() => setSelected(null)}
          onNext={() => setSelected((selected + 1) % images.length)}
          onPrevious={() =>
            setSelected((selected - 1 + images.length) % images.length)
          }
        />
      )}
    </section>
  );
}
