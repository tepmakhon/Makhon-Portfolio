type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full bg-[#0B3D2E]/10 px-3 py-1 text-xs font-medium text-[#0B3D2E]">
      {children}
    </span>
  );
}