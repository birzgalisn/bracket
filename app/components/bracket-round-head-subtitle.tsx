export default function HeadSubtitle({
  children,
  className = '',
  ...props
}: React.PropsWithChildren & React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className={`text-sm font-thin leading-none text-[#86909f] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
