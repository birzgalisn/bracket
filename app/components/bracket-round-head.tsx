import HeadTitle from '@/app/components/bracket-round-head-title';
import HeadSubtitle from '@/app/components/bracket-round-head-subtitle';

export default function RoundHead({
  children,
  className = '',
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`sticky top-0 flex flex-col items-center rounded-lg bg-[#f2f3f4] py-2 text-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

RoundHead.Title = HeadTitle;
RoundHead.Subtitle = HeadSubtitle;
