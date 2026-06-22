export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-20">
      <p
        className="
        text-xs
        uppercase
        tracking-[0.35em]
        text-neutral-500
      "
      >
        {children}
      </p>
    </div>
  );
}