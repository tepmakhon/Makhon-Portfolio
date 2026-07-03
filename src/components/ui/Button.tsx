import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  };

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]",

    secondary:
      "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]",

    outline:
      `
      border
      border-[var(--color-primary)]
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)]
      hover:text-white
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
        `,
        variants[variant],
        className
      )}
      {...props}
    />
  );
}