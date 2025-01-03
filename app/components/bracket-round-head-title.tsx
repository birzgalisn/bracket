export default function HeadTitle({
  children,
  className = '',
  ...props
}: React.PropsWithChildren & React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      className={`pb-[0.125rem] text-xl font-semibold leading-none text-[#0a2540] ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
