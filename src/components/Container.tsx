export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`sm:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">{children}</div>
    </div>
  );
}
