import { useBracketRoundContext } from '@/components/bracket-round';

export default function HeadSubtitle({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLParagraphElement>, 'children'>) {
  const { round } = useBracketRoundContext();

  return (
    <p
      className={`text-sm leading-none font-thin text-[#86909f] ${className}`}
      {...props}
    >
      {round.matchups.length} matches
    </p>
  );
}
