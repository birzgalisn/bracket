import { useMatchupContenderContext } from '@/components/bracket-round-matchup-contender';
import { useRoundMatchupContext } from '@/components/bracket-round-matchup';
import EditableText from '@/components/editable-text';
import contenderDefaults from '@/constants/contender-defaults';
import getMetadata from '@/lib/get-metadata';

export default function ContenderName({
  children,
  className = '',
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const { matchup } = useRoundMatchupContext();
  const { contender } = useMatchupContenderContext();
  const { isWinner } = getMetadata(matchup, contender);

  return (
    <div className={`flex w-full flex-col gap-1 ${className}`} {...props}>
      <EditableText
        readOnly
        defaultValue={contender?.name ?? contenderDefaults.name}
        className={isWinner ? 'text-[#ff6646]' : ''}
      />

      {children}
    </div>
  );
}
