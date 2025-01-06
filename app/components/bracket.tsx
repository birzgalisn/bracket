import { createContext, useContext } from 'react';

import { Action } from '@/app/hooks/use-bracket';
import BracketRound from '@/app/components/bracket-round';

export const BracketDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

export function useBracketDispatch() {
  const bracketDispatchContext = useContext(BracketDispatchContext);

  if (!bracketDispatchContext) {
    throw new Error(
      '`useBracketDispatch` must be used within a `BracketDispatchContext`',
    );
  }

  return bracketDispatchContext;
}

export default function Bracket({
  dispatch,
  children,
  className = '',
  ...props
}: { dispatch: React.Dispatch<Action> } & React.HTMLProps<HTMLDivElement>) {
  return (
    <BracketDispatchContext value={dispatch}>
      <div className={`flex-1 overflow-auto ${className}`} {...props}>
        <div className="flex">
          <div className="flex items-stretch gap-10">{children}</div>
        </div>
      </div>
    </BracketDispatchContext>
  );
}

Bracket.Round = BracketRound;
