import type { ReactNode } from "react";

type QuickFactProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

export default function QuickFact({
  icon,
  label,
  value,
}: QuickFactProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-5
        transition
        hover:shadow-md
      "
    >
      <div className="text-xl text-[var(--color-primary)]">
        {icon}
      </div>

      <div>
        <p className="text-sm text-[var(--color-muted)]">
          {label}
        </p>

        <p className="font-semibold text-[var(--color-text)]">
          {value}
        </p>
      </div>
    </div>
  );
}