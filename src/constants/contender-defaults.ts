import { Contender } from '@/types';

const CONTENDER_DEFAULTS = Object.freeze({
  id: 'contender-0',
  no: '-',
  flag: 'xx',
  name: 'TBD',
  scores: [0, 0, 0],
} satisfies Contender);

export default CONTENDER_DEFAULTS;
