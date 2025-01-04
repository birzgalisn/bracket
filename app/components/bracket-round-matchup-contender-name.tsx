import { useMatchupContenderContext } from '@/app/components/bracket-round-matchup-contender';

export default function ContenderName({
  children,
  className = '',
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const { contender } = useMatchupContenderContext();

  return (
    <div className={`flex flex-col gap-1 ${className}`} {...props}>
      <span
        suppressHydrationWarning
        className="font-semibold leading-none text-[#425466]"
      >
        {contender.name}
      </span>

      {children}
    </div>
  );
}
