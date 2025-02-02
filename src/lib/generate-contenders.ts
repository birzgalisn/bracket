import { Contender } from '@/types';
import { initialSize } from '@/hooks/use-size-slider';
import flags from '@/constants/flags';
import generateNumber from '@/lib/generate-number';
import contenderDefaults from '@/constants/contender-defaults';

export default function generateContenders(bracketSize = initialSize) {
  const contenders: Contender[] = [];

  for (let id = 0; id < bracketSize * 2; id++) {
    const no = `${id + 1}`;
    const flag = flags[generateNumber(flags.length - 1)];
    const name = `Contender ${no}`;
    const scores = contenderDefaults.scores;

    contenders.push({ id: `contender-${id}`, no, flag, name, scores });
  }

  return contenders;
}
