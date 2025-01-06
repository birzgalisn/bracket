import { Contender, MatchupNode } from '@/app/types';
import { hasWinningScore } from '@/app/helpers/promote-contender';

export default function getMetadata(
  matchup: MatchupNode,
  contender?: Contender,
) {
  const isContenderA = contender?.id === matchup.contenderA?.id;

  const bracketPosition = isContenderA ? 'contenderA' : 'contenderB';
  const opponentPosition = isContenderA ? 'contenderB' : 'contenderA';

  const isWinner = hasWinningScore(
    matchup[bracketPosition]?.scores,
    matchup[opponentPosition]?.scores,
  );

  return {
    isContenderA,
    isContenderB: !isContenderA,
    bracketPosition,
    opponentPosition,
    isWinner,
  } as const;
}
