export default function ContenderInfo({
  children,
  className = '',
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`my-auto flex w-full gap-1 align-top ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
