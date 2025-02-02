'use client';

import useSizeSlider from '@/hooks/use-size-slider';
import useBracket from '@/hooks/use-bracket';

import SizeSlider from '@/components/size-slider';
import Bracket from '@/components/bracket';

export default function Home() {
  const { size, handleSizeChange } = useSizeSlider();
  const [rounds, dispatch] = useBracket(size);

  return (
    <main className="flex h-dvh flex-col bg-white p-6">
      <h1 className="mb-6 flex items-center gap-6 text-3xl font-semibold text-[#0a2540]">
        Bracket
        <SizeSlider size={size} onSizeChange={handleSizeChange} />
      </h1>

      <Bracket dispatch={dispatch}>
        {rounds.map((round) => (
          <Bracket.Round
            key={`bracket-${size}-round-${round.name}`}
            round={round}
          >
            {round.matchups.map((matchup) => (
              <Bracket.Round.Matchup key={matchup.id} matchup={matchup}>
                <Bracket.Round.Matchup.Contender
                  isTop={true}
                  contender={matchup.contenderA}
                />
                <Bracket.Round.Matchup.Contender
                  isTop={false}
                  contender={matchup.contenderB}
                />
              </Bracket.Round.Matchup>
            ))}
          </Bracket.Round>
        ))}
      </Bracket>
    </main>
  );
}
