import Image from 'next/image';

import { useMatchupContenderContext } from '@/app/components/bracket-round-matchup-contender';
import contenderDefaults from '@/app/constants/contender-defaults';

export default function ContenderFlag({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLDivElement>, 'children'>) {
  const { contender } = useMatchupContenderContext();
  const flag = contender?.flag ?? contenderDefaults.flag;
  const src = `/flags/${flag}.svg`;

  return (
    <div
      className={`relative mt-[0.125rem] aspect-[16/9] h-3 ${className}`}
      {...props}
    >
      <Image suppressHydrationWarning fill src={src} alt="Flag" />
    </div>
  );
}
