import { useBracketRoundContext } from '@/components/bracket-round';

export default function HeadTitle({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLHeadingElement>, 'children'>) {
  const { round } = useBracketRoundContext();

  return (
    <h3
      className={`pb-[0.125rem] text-xl leading-none font-semibold text-[#0a2540] ${className}`}
      {...props}
    >
      {round.name}
    </h3>
  );
}
