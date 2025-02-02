import { createContext, useContext } from 'react';

import { MatchupNode } from '@/types';
import MatchupContender from '@/components/bracket-round-matchup-contender';
import MatchupAdditional from '@/components/bracket-round-matchup-additional';
import MatchupClub from '@/components/bracket-round-matchup-club';
import MatchupPlace from '@/components/bracket-round-matchup-place';

export const RoundMatchupContext = createContext<{
  matchup: MatchupNode;
} | null>(null);

export function useRoundMatchupContext() {
  const matchupContext = useContext(RoundMatchupContext);

  if (!matchupContext) {
    throw new Error(
      '`useRoundMatchupContext` must be used within a `Bracket.Round.Matchup.*`',
    );
  }

  return matchupContext;
}

export default function RoundMatchup({
  matchup,
  additional = (
    <>
      <RoundMatchup.Additional>
        <RoundMatchup.Additional.Info />
        <RoundMatchup.Additional.Link />
      </RoundMatchup.Additional>
    </>
  ),
  children,
  className = '',
  ...props
}: {
  matchup: MatchupNode;
  additional?: React.ReactNode;
} & React.HTMLProps<HTMLLIElement>) {
  return (
    <RoundMatchupContext.Provider value={{ matchup }}>
      <li
        className={`with-connector relative h-24 w-96 ${className}`}
        {...props}
      >
        <div className="flex h-full w-full flex-col">{children}</div>
        {additional}
      </li>
    </RoundMatchupContext.Provider>
  );
}

RoundMatchup.Contender = MatchupContender;
RoundMatchup.Additional = MatchupAdditional;
RoundMatchup.Club = MatchupClub;
RoundMatchup.Place = MatchupPlace;
