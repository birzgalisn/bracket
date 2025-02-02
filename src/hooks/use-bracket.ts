import { useEffect, useReducer } from 'react';

import { MatchupNode } from '@/types';
import { initialSize } from '@/hooks/use-size-slider';
import generateRounds from '@/lib/generate-rounds';
import promoteContender from '@/lib/promote-contender';
import initializeRoot from '@/lib/initialize-root';

export type Action =
  | {
      type: 'recreate';
      payload: { size: number };
    }
  | {
      type: 'promote';
      payload: { matchupId: string; contenderId: string; newScores: number[] };
    };

type ActionPayload<T extends Action['type']> = Extract<
  Action,
  { type: T }
>['payload'];

export function recreateBracket(payload: ActionPayload<'recreate'>): Action {
  return { type: 'recreate', payload } as const;
}

export function updateScores(payload: ActionPayload<'promote'>): Action {
  return { type: 'promote', payload } as const;
}

function bracketReducer(root: MatchupNode, action: Action): MatchupNode {
  switch (action.type) {
    case 'recreate': {
      return { ...initializeRoot(action.payload.size) };
    }
    case 'promote': {
      const { matchupId, contenderId, newScores } = action.payload;
      return { ...promoteContender(root, matchupId, contenderId, newScores) };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

export default function useBracket(size = initialSize) {
  const [root, dispatch] = useReducer(bracketReducer, initializeRoot(size));

  useEffect(() => {
    dispatch(recreateBracket({ size }));
  }, [size]);

  const rounds = generateRounds(root, size).reverse();

  return [rounds, dispatch] as const;
}
