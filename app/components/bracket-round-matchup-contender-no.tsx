import EditableText, {
  EditableTextProps,
} from '@/app/components/editable-text';
import { useMatchupContenderContext } from '@/app/components/bracket-round-matchup-contender';
import contenderDefaults from '@/app/constants/contender-defaults';

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
