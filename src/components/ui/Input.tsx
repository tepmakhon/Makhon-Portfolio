import { cn } from "../../utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        `
        w-full
        rounded-xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-4
        py-3
        text-[var(--color-text)]
        outline-none
        transition-all
        focus:border-[var(--color-primary)]
        focus:ring-2
        focus:ring-[var(--color-primary)]/20
        placeholder:text-[var(--color-muted)]
        `,
        className,
      )}
      {...props}
    />
  );
}
