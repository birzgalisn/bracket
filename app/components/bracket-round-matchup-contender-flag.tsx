import Image from 'next/image';

import getRandomFlagUrl from '@/app/helpers/get-random-flag-url';

export default function ContenderFlag({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLDivElement>, 'children'>) {
  const flagSrc = getRandomFlagUrl();

  return (
    <div
      className={`relative mx-1 mt-[0.125rem] aspect-[16/9] h-3 ${className}`}
      {...props}
    >
      <Image fill suppressHydrationWarning src={flagSrc} alt="Flag" />
    </div>
  );
}
