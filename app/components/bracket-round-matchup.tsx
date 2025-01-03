import { createContext, useContext } from 'react';

import { Matchup } from '@/app/types';

import MatchupContender from '@/app/components/bracket-round-matchup-contender';
import MatchupAdditional from '@/app/components/bracket-round-matchup-additional';
import MatchupClub from '@/app/components/bracket-round-matchup-club';
import MatchupPlace from '@/app/components/bracket-round-matchup-place';

export const RoundMatchupContext = createContext<{ matchup: Matchup } | null>(
  null,
);

export function useRoundMatchupContext() {
  const matchupContext = useContext(RoundMatchupContext);

  if (!matchupContext) {
    throw new Error(
      '`Bracket.Round.Matchup.*` component must be rendered as child of `Matchup` component',
    );
  }

  return matchupContext;
}

export default function RoundMatchup({
  matchup,
  additional,
  children,
  className = '',
  ...props
}: {
  matchup: Matchup;
  additional: React.ReactNode;
} & React.PropsWithChildren &
  React.HTMLProps<HTMLLIElement>) {
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
