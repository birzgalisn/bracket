export default function AdditionalInfo({
  children,
  className = '',
  ...props
}: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={`truncate whitespace-nowrap text-xs leading-none text-inherit ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
