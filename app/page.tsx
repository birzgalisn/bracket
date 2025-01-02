'use client';

import useSizeSlider from '@/app/hooks/use-size-slider';
import generateRounds from '@/app/helpers/generate-rounds';

import SizeSlider from '@/app/components/size-slider';
import Bracket from '@/app/components/bracket';

export default function Home() {
  const { size, handleSizeChange } = useSizeSlider();
  const rounds = generateRounds(size);

  return (
    <main className="flex h-dvh w-full flex-col gap-6 overflow-hidden p-6">
      <h1 className="text-4xl font-semibold text-gray-900">Bracket</h1>

      <SizeSlider
        size={size}
        onSizeChange={handleSizeChange}
        className="w-48 text-gray-700"
      >
        Size: {size}
      </SizeSlider>

      <div className="border-b" />

      <Bracket>
        {rounds.map((round, roundIndex) => (
          <Bracket.Round
            key={`round-${roundIndex}`}
            title={round.name}
            subtitle={`${round.matches} matches`}
          >
            {round.matchups.map((matchup, matchupIndex) => (
              <Bracket.Matchup
                key={`round-${roundIndex}-matchup-${matchupIndex}`}
                matchup={matchup}
              />
            ))}
          </Bracket.Round>
        ))}
      </Bracket>
    </main>
  );
}
