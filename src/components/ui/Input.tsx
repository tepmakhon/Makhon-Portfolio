import { cn } from "../../utils/cn";

type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all focus:border-[#0B3D2E]",
        className
      )}
      {...props}
    />
  );
}