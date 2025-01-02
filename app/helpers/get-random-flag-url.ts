import flags from '@/app/constants/flags';
import generateNumber from '@/app/helpers/generate-number';

export default function getRandomFlagUrl() {
  const randomFlag = flags[generateNumber(flags.length - 1)];
  return `/flags/${randomFlag}.svg`;
}
