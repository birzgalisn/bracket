import { Contender } from '@/app/types';
import { initialSize } from '@/app/hooks/use-size-slider';
import flags from '@/app/constants/flags';
import generateNumber from '@/app/helpers/generate-number';
import contenderDefaults from '@/app/constants/contender-defaults';

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
