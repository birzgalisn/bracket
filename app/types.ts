export type Contender = { name: string; score: number };

export type Matchup = { contenderA: Contender; contenderB: Contender };

export type Round = { name: string; matches: number; matchups: Matchup[] };
