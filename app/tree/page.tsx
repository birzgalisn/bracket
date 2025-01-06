interface MatchNode {
  team1: string | null;
  team2: string | null;
  winner: string | null;
  left?: MatchNode;
  right?: MatchNode;
}

function generateBracketTree(teams: string[]): MatchNode | null {
  if (teams.length === 0) {
    return null;
  }

  const nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(teams.length)));
  const paddedTeams = [
    ...teams,
    ...Array(nextPowerOfTwo - teams.length).fill(null),
  ];

  const buildTree = (teamList: (string | null)[]): MatchNode => {
    if (teamList.length === 2) {
      const [team1, team2] = teamList;

      return { team1, team2, winner: null };
    }

    const mid = teamList.length / 2;

    return {
      team1: null,
      team2: null,
      winner: null,
      left: buildTree(teamList.slice(0, mid)),
      right: buildTree(teamList.slice(mid)),
    };
  };

  return buildTree(paddedTeams);
}

const Bracket: React.FC<{ root: MatchNode }> = ({ root }) => {
  const levels = extractLevels(root).reverse();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {levels.map((level, index) => (
        <div
          key={index}
          style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
        >
          {level.map((match, idx) => (
            <div
              key={idx}
              style={{
                margin: '0 10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                textAlign: 'center',
              }}
            >
              <p>
                {match.team1 || 'TBD'} vs {match.team2 || 'TBD'}
              </p>
              <p>Winner: {match.winner || 'TBD'}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

function extractLevels(root: MatchNode | null) {
  if (!root) return [];

  const levels: MatchNode[][] = [];
  const queue: (MatchNode | null)[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level: MatchNode[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node);
        queue.push(node.left || null);
        queue.push(node.right || null);
      }
    }

    if (level.length > 0) {
      levels.push(level);
    }
  }

  return levels;
}

const teams = [
  'Team A',
  'Team B',
  'Team C',
  'Team D',
  'Team E',
  'Team F',
  'Team G',
  'Team H',
  'Team I',
  'Team J',
  'Team K',
  'Team L',
  'Team M',
  'Team N',
  'Team O',
  'Team P',
];

const App: React.FC = () => {
  const bracket = generateBracketTree(teams);

  return (
    <div>
      <h1>Tournament Bracket</h1>
      {bracket && <Bracket root={bracket} />}
    </div>
  );
};

export default App;
