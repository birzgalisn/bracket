export default function AdditionalInfo({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLSpanElement>, 'children'>) {
  return (
    <span
      className={`w-full truncate whitespace-nowrap text-xs leading-none text-inherit ${className}`}
      {...props}
    >
      Round 1 - 22 oct 2024, 11:00 - Court 4
    </span>
  );
}
