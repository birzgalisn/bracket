import EditableText, { EditableTextProps } from '@/components/editable-text';
import { useMatchupContenderContext } from '@/components/bracket-round-matchup-contender';
import contenderDefaults from '@/constants/contender-defaults';

export default function ContenderNo({
  className = '',
  ...props
}: EditableTextProps) {
  const { contender } = useMatchupContenderContext();

  return (
    <EditableText
      readOnly
      defaultValue={contender?.no ?? contenderDefaults.no}
      className={`ml-1 w-full max-w-8 text-right font-bold ${className}`}
      {...props}
    />
  );
}
