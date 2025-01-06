import { createContext, useContext } from 'react';

import { Contender } from '@/app/types';
import ContenderInfo from '@/app/components/bracket-round-matchup-contender-info';
import ContenderNo from '@/app/components/bracket-round-matchup-contender-no';
import ContenderName from '@/app/components/bracket-round-matchup-contender-name';
import ContenderFlag from '@/app/components/bracket-round-matchup-contender-flag';
import ContenderScore from '@/app/components/bracket-round-matchup-contender-score';

export const MatchupContenderContext = createContext<{
  contender?: Contender;
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
  contender,
  children,
  className = '',
  ...props
}: {
  contender?: Contender;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <MatchupContenderContext.Provider value={{ contender }}>
      <div
        className={`group flex h-full w-full gap-1 hover:z-10 hover:border-[#e4ced2] hover:bg-[#f9f4f5] ${className}`}
        {...props}
      >
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
