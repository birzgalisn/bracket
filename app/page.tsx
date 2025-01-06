'use client';

import useSizeSlider from '@/app/hooks/use-size-slider';
import useBracket from '@/app/hooks/use-bracket';

import SizeSlider from '@/app/components/size-slider';
import Bracket from '@/app/components/bracket';

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
        {rounds.map((round, roundIndex) => (
          <Bracket.Round
            key={`round-${roundIndex}`}
            round={round}
            head={
              <Bracket.Round.Head>
                <Bracket.Round.Head.Title />
                <Bracket.Round.Head.Subtitle />
              </Bracket.Round.Head>
            }
          >
            {round.matchups.map((matchup, matchupIndex) => (
              <Bracket.Round.Matchup
                key={`round-${roundIndex}-matchup-${matchupIndex}`}
                matchup={matchup}
                additional={
                  <Bracket.Round.Matchup.Additional>
                    <Bracket.Round.Matchup.Additional.Info />
                    <Bracket.Round.Matchup.Additional.Link />
                  </Bracket.Round.Matchup.Additional>
                }
              >
                <Bracket.Round.Matchup.Contender
                  contender={matchup.contenderA}
                  className="-mb-px overflow-hidden rounded-t-lg border-2 border-[#eef2f6]"
                >
                  <Bracket.Round.Matchup.Contender.Info>
                    <Bracket.Round.Matchup.Contender.No />

                    <Bracket.Round.Matchup.Contender.Flag />

                    <Bracket.Round.Matchup.Contender.Name>
                      <Bracket.Round.Matchup.Club />
                    </Bracket.Round.Matchup.Contender.Name>
                  </Bracket.Round.Matchup.Contender.Info>

                  <Bracket.Round.Matchup.Contender.Score />
                </Bracket.Round.Matchup.Contender>

                <Bracket.Round.Matchup.Contender
                  contender={matchup.contenderB}
                  className="-mt-px overflow-hidden rounded-b-lg border-2 border-[#eef2f6]"
                >
                  <Bracket.Round.Matchup.Contender.Info>
                    <Bracket.Round.Matchup.Contender.No />

                    <Bracket.Round.Matchup.Contender.Flag />

                    <Bracket.Round.Matchup.Contender.Name>
                      <Bracket.Round.Matchup.Place />
                    </Bracket.Round.Matchup.Contender.Name>
                  </Bracket.Round.Matchup.Contender.Info>

                  <Bracket.Round.Matchup.Contender.Score />
                </Bracket.Round.Matchup.Contender>
              </Bracket.Round.Matchup>
            ))}
          </Bracket.Round>
        ))}
      </Bracket>
    </main>
  );
}
