import EditableText from '@/app/components/editable-text';
import { useMatchupContenderContext } from '@/app/components/bracket-round-matchup-contender';
import { useRoundMatchupContext } from '@/app/components/bracket-round-matchup';
import { useBracketDispatch } from '@/app/components/bracket';
import { updateScores } from '@/app/hooks/use-bracket';
import getMetadata from '@/app/helpers/get-metadata';
import updateArrayAt from '@/app/helpers/update-array-at';

export default function ContenderScore({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLDivElement>, 'children'>) {
  const dispatch = useBracketDispatch();
  const { matchup } = useRoundMatchupContext();
  const { contender } = useMatchupContenderContext();
  const { matchupPosition, opponentPosition } = getMetadata(matchup, contender);

  const contenderScores = contender?.scores ?? [];
  const opponentScores = matchup[opponentPosition]?.scores ?? [];

  const handleScoreUpdate =
    (scoreIndex: number) => (event: React.FocusEvent<HTMLInputElement>) => {
      const matchupId = matchup.id;
      const contenderId = contender?.id;

      if (!matchupId || !contenderId) {
        return;
      }

      const updatedScore = +event.target.value || 0;
      const newScores = updateArrayAt(
        contenderScores,
        scoreIndex,
        updatedScore,
      );

      dispatch(updateScores({ matchupId, contenderId, newScores }));
    };

  return (
    <div
      className={`flex h-full border-inherit bg-inherit ${className}`}
      {...props}
    >
      {contenderScores.map((score, scoreIndex) => {
        const isWinningScore = score > opponentScores[scoreIndex];

        return (
          <ScoreItem
            isWinningScore={isWinningScore}
            key={`${matchup.id}-${matchupPosition}-score-${scoreIndex}`}
          >
            <EditableText
              readOnly={!matchup[opponentPosition]}
              defaultValue={score}
              onBlur={handleScoreUpdate(scoreIndex)}
              className={`flex h-full w-8 items-center justify-center text-center ${isWinningScore ? 'text-[#ff6646]' : ''}`}
            />
          </ScoreItem>
        );
      })}
    </div>
  );
}

function ScoreItem({
  isWinningScore = false,
  children,
  className = '',
  ...props
}: { isWinningScore: boolean } & React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={`flex border-l-2 border-inherit font-semibold ${
        isWinningScore
          ? 'bg-gradient-to-t from-[#ff5d3b]/15 via-white group-hover:bg-inherit group-hover:bg-none'
          : 'text-[#425466]'
      } ${className} `}
      {...props}
    >
      {children}
    </span>
  );
}
