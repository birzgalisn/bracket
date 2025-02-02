import Pin from '@/icons/pin';

export default function MatchupPlace({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLSpanElement>, 'children'>) {
  return (
    <span
      className={`flex gap-1 text-xs leading-none text-[#abb5be] ${className}`}
      {...props}
    >
      <Pin className="size-3" />
      City
    </span>
  );
}
