import { Contender, MatchupNode } from '@/types';

function buildTree(
  contenders: Contender[],
  idCounter = { current: 0 },
): MatchupNode {
  const id = `matchup-${idCounter.current++}`;

  if (contenders.length === 2) {
    const [contenderA, contenderB] = contenders;

    return { id, contenderA, contenderB } satisfies MatchupNode;
  }

  const mid = Math.floor(contenders.length / 2);

  return {
    id,
    left: buildTree(contenders.slice(0, mid), idCounter),
    right: buildTree(contenders.slice(mid), idCounter),
  } satisfies MatchupNode;
}

export default function generateRoot(contenders: Contender[]): MatchupNode {
  const contendersCount = contenders.length;

  if (!contendersCount) {
    return {};
  }

  const nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(contendersCount)));
  const paddedContenders = [
    ...contenders,
    ...Array(nextPowerOfTwo - contendersCount).fill(null),
  ];

  return buildTree(paddedContenders);
}
