const roundConventionsReversed: {
  [bracketSize: number]: {
    [roundIndex: number]: string;
  };
} = Object.freeze({
  32: {
    5: 'First round',
    4: 'Second round',
    3: 'Third round',
    2: 'Quarterfinals',
    1: 'Semifinals',
    0: 'Final',
  },
  16: {
    4: 'First round',
    3: 'Second round',
    2: 'Quarterfinals',
    1: 'Semifinals',
    0: 'Final',
  },
  8: {
    3: 'First round',
    2: 'Quarterfinals',
    1: 'Semifinals',
    0: 'Final',
  },
  4: {
    2: 'Quarterfinals',
    1: 'Semifinals',
    0: 'Final',
  },
  2: {
    1: 'Semifinals',
    0: 'Final',
  },
});

export default roundConventionsReversed;
