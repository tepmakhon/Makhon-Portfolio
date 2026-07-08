import type { ReactNode } from "react";

import Container from "./Container";
import SectionTitle from "../ui/SectionTitle";
import { cn } from "../../utils/cn";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-28", className)}>
      <Container className={containerClassName}>
        {(title || subtitle) && (
          <SectionTitle title={title ?? ""} subtitle={subtitle} />
        )}

        {children}
      </Container>
    </section>
  );
}
