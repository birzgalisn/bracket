import { createContext, useContext } from 'react';

import { Contender } from '@/types';
import ContenderInfo from '@/components/bracket-round-matchup-contender-info';
import ContenderNo from '@/components/bracket-round-matchup-contender-no';
import ContenderName from '@/components/bracket-round-matchup-contender-name';
import ContenderFlag from '@/components/bracket-round-matchup-contender-flag';
import ContenderScore from '@/components/bracket-round-matchup-contender-score';
import RoundMatchup from '@/components/bracket-round-matchup';

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
  isTop,
  contender,
  children = (
    <>
      <MatchupContender.Info>
        <MatchupContender.No />
        <MatchupContender.Flag />
        <MatchupContender.Name>
          {isTop ? <RoundMatchup.Club /> : <RoundMatchup.Place />}
        </MatchupContender.Name>
      </MatchupContender.Info>
      <MatchupContender.Score />
    </>
  ),
  className = '',
  ...props
}: {
  isTop: boolean;
  contender?: Contender;
} & React.HTMLProps<HTMLDivElement>) {
  const topBottomClassName = isTop
    ? '-mb-px rounded-t-lg'
    : '-mt-px rounded-b-lg';

  return (
    <MatchupContenderContext.Provider value={{ contender }}>
      <div
        className={`group flex h-full w-full gap-1 overflow-hidden border-2 border-[#eef2f6] hover:z-10 hover:border-[#e4ced2] hover:bg-[#f9f4f5] ${topBottomClassName} ${className}`}
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
