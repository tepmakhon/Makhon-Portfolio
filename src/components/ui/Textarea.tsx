import { cn } from "../../utils/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        `
        min-h-40
        w-full
        rounded-xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-4
        text-[var(--color-text)]
        outline-none
        transition-all
        focus:border-[var(--color-primary)]
        `,
        className,
      )}
      {...props}
    />
  );
}
