import { Flag } from '@/app/constants/flags';

export type Contender = {
  id: string;
  no: number;
  flag: Flag;
  name: string;
  scores: number[];
};

export type MatchupNode = {
  id?: string;
  contenderA?: Contender;
  contenderB?: Contender;
  left?: MatchupNode;
  right?: MatchupNode;
};

export type Round = { name: string; matchups: MatchupNode[] };
