const roundNameConventions: {
  [bracketSize: number]: {
    [roundIndex: number]: string;
  };
} = Object.freeze({
  32: {
    0: 'First round',
    1: 'Second round',
    2: 'Third round',
    3: 'Quarterfinals',
    4: 'Semifinals',
    5: 'Final',
  },
  16: {
    0: 'First round',
    1: 'Second round',
    2: 'Quarterfinals',
    3: 'Semifinals',
    4: 'Final',
  },
  8: {
    0: 'First round',
    1: 'Quarterfinals',
    2: 'Semifinals',
    3: 'Final',
  },
  4: {
    0: 'Quarterfinals',
    1: 'Semifinals',
    2: 'Final',
  },
  2: {
    0: 'Semifinals',
    1: 'Final',
  },
});

export default roundNameConventions;
