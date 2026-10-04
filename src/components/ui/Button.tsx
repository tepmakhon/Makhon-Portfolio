import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-secondary)]",

    secondary:
      "bg-[var(--color-secondary)] text-[var(--color-background)] hover:bg-[var(--color-primary)]",

    outline: `
      border
      bg-[var(--color-primary-soft)]
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)]
      hover:text-[var(--color-background)]
      `,
  };

  return (
    <button
      className={cn(
        `
        rounded-xl
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300
        active:scale-95
        `,
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
