import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { useState } from "react";

import ImageLightbox from "../../components/common/ImageLightbox";
type Props = {
  images: string[];
};

export default function ProjectGallery({
  images,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section className="pb-20">
      <Container>
        <SectionTitle
          title="Gallery"
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <img
              onClick={() => setSelected(index)}
              key={index}
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="
                cursor-pointer
                h-64
                w-full
                rounded-2xl
                object-cover
                border
                border-[var(--color-border)]
                shadow-[var(--shadow-card)]
                transition-transform
                duration-300
                hover:scale-[1.02]
              "
            />
          ))}
        </div>
      </Container>
      {selected !== null && (
      <ImageLightbox
          images={images}
          current={selected}
          onClose={() => setSelected(null)}
          onNext={() =>
            setSelected(
              (selected + 1) % images.length
            )
          }
          onPrevious={() =>
            setSelected(
              (selected - 1 + images.length) %
                images.length
            )
          }
        />
      )}
    </section>
  );
}