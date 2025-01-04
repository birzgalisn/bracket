import { createContext, useContext } from 'react';

import { Round } from '@/app/types';
import RoundHead from '@/app/components/bracket-round-head';
import RoundMatchup from '@/app/components/bracket-round-matchup';

export const BracketRoundContext = createContext<{
  round: Round;
} | null>(null);

export function useBracketRoundContext() {
  const roundContext = useContext(BracketRoundContext);

  if (!roundContext) {
    throw new Error(
      '`Bracket.Round.*` component must be rendered as child of `Round` component',
    );
  }

  return roundContext;
}

export default function BracketRound({
  round,
  head,
  children,
  className = '',
  ...props
}: {
  round: Round;
  head: React.ReactNode;
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
