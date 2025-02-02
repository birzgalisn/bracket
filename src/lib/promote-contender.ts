import { MatchupNode } from '@/types';

export default function promoteContender(
  root: MatchupNode,
  matchupId: string,
  contenderId: string,
  newScores: number[],
): MatchupNode {
  const newRoot = structuredClone(root);
  const matchup = findMatchup(newRoot, matchupId);

  if (!matchup) {
    throw new Error('Matchup not found');
  }

  const isContenderA = matchup.contenderA?.id === contenderId;
  const isContenderB = matchup.contenderB?.id === contenderId;

  if (!isContenderA && !isContenderB) {
    throw new Error('Contender not found in matchup');
  }

  if (isContenderA && matchup.contenderA) {
    matchup.contenderA.scores = newScores;
  } else if (isContenderB && matchup.contenderB) {
    matchup.contenderB.scores = newScores;
  }

  if (
    matchup.contenderA?.scores.length === matchup.contenderB?.scores.length &&
    matchup.contenderA?.scores.length === newScores.length
  ) {
    const contenderAWins = hasWinningScore(
      matchup.contenderA?.scores,
      matchup.contenderB?.scores,
    );

    const contenderBWins = hasWinningScore(
      matchup.contenderB?.scores,
      matchup.contenderA?.scores,
    );

    const winner = contenderAWins
      ? matchup.contenderA
      : contenderBWins
        ? matchup.contenderB
        : undefined;

    if (winner) {
      function findParent(
        node: MatchupNode,
        childId: string,
      ): MatchupNode | undefined {
        if (node.left?.id === childId || node.right?.id === childId) {
          return node;
        } else if (!node.left && !node.right) {
          return;
        }

        const left = node.left ? findParent(node.left, childId) : undefined;
        const right = node.right ? findParent(node.right, childId) : undefined;

        return left || right;
      }

      const parent = findParent(newRoot, matchupId);

      if (parent) {
        const defaultScores = Array.from<number>({
          length: winner.scores.length,
        }).fill(0);

        if (parent.left?.id === matchupId) {
          parent.contenderA = { ...winner, scores: defaultScores };
        } else if (parent.right?.id === matchupId) {
          parent.contenderB = { ...winner, scores: defaultScores };
        }
      }
    }
  }

  return newRoot;
}

export function findMatchup(
  node: MatchupNode,
  matchupId: string,
): MatchupNode | undefined {
  if (node.id === matchupId) {
    return node;
  } else if (!node.left && !node.right) {
    return;
  }

  const left = node.left ? findMatchup(node.left, matchupId) : undefined;
  const right = node.right ? findMatchup(node.right, matchupId) : undefined;

  return left || right;
}

export function hasWinningScore(
  scoresA: number[] = [],
  scoresB: number[] = [],
): boolean {
  const requiredWins = Math.ceil(scoresA.length / 2);
  let wins = 0;

  for (let i = 0; i < scoresA.length; i++) {
    if (scoresA[i] > scoresB[i]) {
      wins++;
    }

    if (wins >= requiredWins) {
      return true;
    }
  }

  return false;
}
