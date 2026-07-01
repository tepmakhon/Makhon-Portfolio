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
      "bg-[#0B3D2E] text-white hover:bg-[#146C43]",

    secondary:
      "bg-[#146C43] text-white hover:bg-[#0B3D2E]",

    outline:
      "border border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white",
  };

  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}