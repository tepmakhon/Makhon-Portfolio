export default function PageLoader() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
      "
    >
      <div
        className="
          h-12
          w-12
          animate-spin
          rounded-full
          border-4
          border-[var(--color-primary)]
          border-t-transparent
        "
      />
    </div>
  );
}