import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        text-[var(--color-text)]
        p-6
        shadow-[var(--shadow-card)]
        hover:shadow-[var(--shadow-hover)]
        transition-all
        duration-300
        `,
        className
      )}
    >
      {children}
    </div>
  );
}