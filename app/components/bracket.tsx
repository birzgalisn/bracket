import BracketRound from '@/app/components/bracket-round';
import BracketMatchup from '@/app/components/bracket-matchup';

export default function Bracket({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLDivElement>['className'];
}) {
  return (
    <div className={`flex-1 overflow-auto ${className}`}>
      <div className="flex">
        <div className="flex items-stretch gap-10">{children}</div>
      </div>
    </div>
  );
}

Bracket.Round = BracketRound;
Bracket.Matchup = BracketMatchup;
