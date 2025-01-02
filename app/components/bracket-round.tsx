export default function BracketRound({
  title,
  subtitle,
  children,
  className = '',
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLDivElement>['className'];
}) {
  return (
    <div
      className={`round relative flex h-full flex-grow flex-col gap-6 ${className}`}
    >
      <div className="sticky top-0 z-10 flex flex-col justify-start">
        <div className="rounded-lg bg-gray-100 px-6 py-2 text-center">
          <h3 suppressHydrationWarning className="text-xl font-semibold">
            {title}
          </h3>
          <span suppressHydrationWarning className="text-sm text-gray-600">
            {subtitle}
          </span>
        </div>
      </div>
      <ol className="relative flex h-full flex-col justify-around gap-6">
        {children}
      </ol>
    </div>
  );
}
