import { useMatchupContenderContext } from '@/app/components/bracket-round-matchup-contender';

export default function ContenderScore({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLDivElement>, 'children'>) {
  const { contender } = useMatchupContenderContext();
  const points = [2, 16];

  return (
    <div className={`flex h-full ${className}`} {...props}>
      {points.map((point, pointIndex) => (
        <span
          key={`contender-${contender.name}-point-${pointIndex}`}
          className="flex w-8 items-center justify-center border-l-2 border-[#eef2f6] bg-gradient-to-t from-[#ff5d3b]/15 via-white px-2 text-[#ff5d3b]"
        >
          {point}
        </span>
      ))}
    </div>
  );
}
