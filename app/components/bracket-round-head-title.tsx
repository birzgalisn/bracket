import { useBracketRoundContext } from '@/app/components/bracket-round';

export default function HeadTitle({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLHeadingElement>, 'children'>) {
  const { round } = useBracketRoundContext();

  return (
    <h3
      className={`pb-[0.125rem] text-xl font-semibold leading-none text-[#0a2540] ${className}`}
      {...props}
    >
      {round.name}
    </h3>
  );
}
