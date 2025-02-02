import { initialSize } from '@/hooks/use-size-slider';
import generateContenders from '@/lib/generate-contenders';
import generateRoot from '@/lib/generate-root';

export default function initializeRoot(size = initialSize) {
  const contenders = generateContenders(size);
  const root = generateRoot(contenders);

  return root;
}
