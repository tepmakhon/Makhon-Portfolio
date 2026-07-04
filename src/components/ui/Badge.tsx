type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
        rounded-full
        bg-[var(--color-primary-soft)]
        px-3
        py-1
        text-xs
        font-medium
        text-[var(--color-badge-text)]
      "
    >
      {children}
    </span>
  );
}