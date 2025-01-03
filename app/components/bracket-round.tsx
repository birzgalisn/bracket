import RoundHead from '@/app/components/bracket-round-head';
import RoundMatchup from '@/app/components/bracket-round-matchup';

export default function Round({
  head,
  children,
  className = '',
  ...props
}: {
  head: React.ReactNode;
} & React.PropsWithChildren &
  React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`round relative flex h-full flex-grow flex-col gap-6 ${className}`}
      {...props}
    >
      <div className="sticky top-0 z-10 flex flex-col">{head}</div>
      <ol className="relative flex h-full flex-col justify-around gap-6">
        {children}
      </ol>
    </div>
  );
}

Round.Head = RoundHead;
Round.Matchup = RoundMatchup;
