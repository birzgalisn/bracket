import Round from '@/app/components/bracket-round';

export default function Bracket({
  children,
  className = '',
  ...props
}: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`flex-1 overflow-auto ${className}`} {...props}>
      <div className="flex">
        <div className="flex items-stretch gap-10">{children}</div>
      </div>
    </div>
  );
}

Bracket.Round = Round;
