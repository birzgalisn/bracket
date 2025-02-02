import { Contender, MatchupNode } from '@/types';
import { hasWinningScore } from '@/lib/promote-contender';

export default function getMetadata(
  matchup: MatchupNode,
  contender?: Contender,
) {
  const isContenderA = contender?.id === matchup.contenderA?.id;

  const matchupPosition = isContenderA ? 'contenderA' : 'contenderB';
  const opponentPosition = isContenderA ? 'contenderB' : 'contenderA';

  const isWinner = hasWinningScore(
    matchup[matchupPosition]?.scores,
    matchup[opponentPosition]?.scores,
  );

  return {
    isContenderA,
    isContenderB: !isContenderA,
    matchupPosition,
    opponentPosition,
    isWinner,
  } as const;
}
