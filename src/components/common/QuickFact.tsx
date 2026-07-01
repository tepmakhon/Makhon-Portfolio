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
        border-slate-200
        bg-white
        p-5
        transition
        hover:shadow-md
      "
    >
      <div className="text-xl text-[#0B3D2E]">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>
    </div>
  );
}