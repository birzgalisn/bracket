export default function ContenderNo({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLSpanElement>, 'children'>) {
  return (
    <span
      className={`w-10 text-right font-bold leading-none text-[#425466] ${className}`}
      {...props}
    >
      123
    </span>
  );
}
