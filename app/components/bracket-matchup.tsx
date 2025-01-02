import { Matchup } from '@/app/types';
import MatchupTeam from '@/app/components/bracket-matchup-team';

export default function BracketMatchup({
  matchup,
  className = '',
}: {
  matchup: Matchup;
  className?: React.HTMLProps<HTMLDivElement>['className'];
}) {
  return (
    <li
      className={`with-connector relative flex h-24 w-80 flex-col gap-[1px] rounded-lg border bg-white ${className}`}
    >
      <MatchupTeam team={matchup.teamA} className="border-b" />
      <MatchupTeam team={matchup.teamB} />
    </li>
  );
}
