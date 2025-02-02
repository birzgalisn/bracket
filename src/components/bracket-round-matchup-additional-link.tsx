export default function AdditionalLink({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLAnchorElement>, 'children'>) {
  return (
    <a
      href="#"
      className={`ml-1 cursor-pointer text-xs leading-none whitespace-nowrap text-inherit hover:text-blue-500 hover:underline ${className}`}
      {...props}
    >
      View more
    </a>
  );
}
