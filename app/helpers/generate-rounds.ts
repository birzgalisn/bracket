import { Matchup, Round } from '@/app/types';

import { initialSize } from '@/app/hooks/use-size-slider';
import generateNumber from '@/app/helpers/generate-number';
import roundNameConventions from '@/app/constants/round-name-conventions';

export default function generateRounds(bracketSize = initialSize) {
  const rounds: Round[] = [];

  for (
    let matches = bracketSize;
    matches >= 1;
    matches = Math.floor(matches / 2)
  ) {
    const matchups: Matchup[] = [];

    for (let i = 0; i < matches; i++) {
      const teamIndex = i * 2 + 1;

      matchups.push({
        contenderA: {
          name: `Team ${teamIndex}`,
          score: generateNumber(),
        },
        contenderB: {
          name: `Team ${teamIndex + 1}`,
          score: generateNumber(),
        },
      });
    }

    rounds.push({
      name: roundNameConventions[bracketSize][rounds.length],
      matches: matchups.length,
      matchups,
    });
  }

  return rounds;
}
