import { createContext, useContext } from 'react';

import { Round } from '@/types';
import RoundHead from '@/components/bracket-round-head';
import RoundMatchup from '@/components/bracket-round-matchup';

export const BracketRoundContext = createContext<{
  round: Round;
} | null>(null);

export function useBracketRoundContext() {
  const roundContext = useContext(BracketRoundContext);

  if (!roundContext) {
    throw new Error(
      '`useBracketRoundContext` must be used within a `Bracket.Round.*`',
    );
  }

  return roundContext;
}

export default function BracketRound({
  round,
  head = (
    <>
      <BracketRound.Head>
        <BracketRound.Head.Title />
        <BracketRound.Head.Subtitle />
      </BracketRound.Head>
    </>
  ),
  children,
  className = '',
  ...props
}: {
  round: Round;
  head?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <BracketRoundContext.Provider value={{ round }}>
      <div
        className={`round relative flex h-full flex-grow flex-col ${className}`}
        {...props}
      >
        {head}

        <ol className="relative flex h-full flex-col justify-between gap-6">
          {children}
        </ol>
      </div>
    </BracketRoundContext.Provider>
  );
}

BracketRound.Head = RoundHead;
BracketRound.Matchup = RoundMatchup;
