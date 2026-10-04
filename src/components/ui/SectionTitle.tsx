import { cn } from "../../utils/cn";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  badge?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  badge,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {badge && (
        <span
          className="
            inline-block
            rounded-full
            bg-[var(--color-primary-soft)]
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-[var(--color-primary)]
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-4
          text-3xl
          font-bold
          text-[var(--color-text)]
          lg:text-4xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            `
            mt-5
            text-lg
            leading-8
            text-[var(--color-muted)]
            `,
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
