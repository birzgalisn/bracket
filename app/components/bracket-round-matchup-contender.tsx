import { createContext, useContext } from 'react';

import { Contender } from '@/app/types';

import ContenderInfo from '@/app/components/bracket-round-matchup-contender-info';
import ContenderNo from '@/app/components/bracket-round-matchup-contender-no';
import ContenderName from '@/app/components/bracket-round-matchup-contender-name';
import ContenderFlag from '@/app/components/bracket-round-matchup-contender-flag';
import ContenderScore from '@/app/components/bracket-round-matchup-contender-score';

export const MatchupContenderContext = createContext<{
  profile: Contender;
} | null>(null);

export function useMatchupContenderContext() {
  const contenderContext = useContext(MatchupContenderContext);

  if (!contenderContext) {
    throw new Error(
      '`Bracket.Round.Matchup.Contender.*` component must be rendered as child of `Contender` component',
    );
  }

  return contenderContext;
}

export default function MatchupContender({
  profile,
  children,
  className = '',
  ...props
}: {
  profile: Contender;
} & React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement>) {
  return (
    <MatchupContenderContext.Provider value={{ profile }}>
      <div className={`flex h-full w-full ${className}`} {...props}>
        {children}
      </div>
    </MatchupContenderContext.Provider>
  );
}

MatchupContender.Info = ContenderInfo;
MatchupContender.No = ContenderNo;
MatchupContender.Name = ContenderName;
MatchupContender.Flag = ContenderFlag;
MatchupContender.Score = ContenderScore;
