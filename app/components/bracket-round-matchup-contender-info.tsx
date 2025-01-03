export default function ContenderInfo({
  children,
  className = '',
  ...props
}: React.PropsWithChildren &
  Omit<React.HTMLProps<HTMLDivElement>, 'children'>) {
  return (
    <div className={`my-auto flex w-full align-top ${className}`} {...props}>
      {children}
    </div>
  );
}
