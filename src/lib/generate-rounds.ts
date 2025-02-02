import { MatchupNode, Round } from '@/types';
import { initialSize } from '@/hooks/use-size-slider';
import roundConventionsReversed from '@/constants/round-conventions-reversed';

export default function generateRounds(root?: MatchupNode, size = initialSize) {
  if (!root) {
    return [];
  }

  const rounds: Round[] = [];
  const queue: MatchupNode[] = [root];

  while (queue.length > 0) {
    const matchups: MatchupNode[] = [];
    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();

      if (node) {
        matchups.push(node);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    if (matchups.length > 0) {
      rounds.push({
        name: roundConventionsReversed[size][rounds.length],
        matchups,
      });
    }
  }

  return rounds;
}
