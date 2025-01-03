import Building from '@/app/icons/building';

export default function MatchupClub({
  className = '',
  ...props
}: Omit<React.HTMLProps<HTMLSpanElement>, 'children'>) {
  return (
    <span
      className={`flex gap-1 text-xs leading-none text-[#abb5be] ${className}`}
      {...props}
    >
      <Building className="size-3" />
      Name of the club
    </span>
  );
}
