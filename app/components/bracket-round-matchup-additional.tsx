import AdditionalInfo from '@/app/components/bracket-round-matchup-additional-info';
import AdditionalLink from '@/app/components/bracket-round-matchup-additional-link';

export default function MatchupAdditional({
  children,
  className = '',
  ...props
}: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`absolute top-full z-0 mt-[0.125rem] flex w-full text-[#86909f] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

MatchupAdditional.Info = AdditionalInfo;
MatchupAdditional.Link = AdditionalLink;
