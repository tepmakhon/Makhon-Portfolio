import { cn } from "../../utils/cn";

type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-40 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-[#0B3D2E]",
        className
      )}
      {...props}
    />
  );
}