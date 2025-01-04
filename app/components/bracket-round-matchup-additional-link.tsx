export default function AdditionalLink({
  children,
  className = '',
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className={`ml-1 cursor-pointer whitespace-nowrap text-xs leading-none text-inherit hover:text-blue-500 hover:underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
