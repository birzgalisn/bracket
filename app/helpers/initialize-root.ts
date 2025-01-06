import { initialSize } from '@/app/hooks/use-size-slider';
import generateContenders from '@/app/helpers/generate-contenders';
import generateRoot from '@/app/helpers/generate-root';

export default function initializeRoot(size = initialSize) {
  const contenders = generateContenders(size);
  const root = generateRoot(contenders);

  return root;
}
