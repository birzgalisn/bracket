export type Team = { name: string; score: number };

export type Matchup = { teamA: Team; teamB: Team };

export type Round = { name: string; matches: number; matchups: Matchup[] };
