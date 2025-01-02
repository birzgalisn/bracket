import Image from 'next/image';

import { Team } from '@/app/types';
import getRandomFlagUrl from '@/app/helpers/get-random-flag-url';
import generateNumber from '@/app/helpers/generate-number';

export default function MatchupTeam({
  team,
  className = '',
}: {
  team: Team;
  className?: React.HTMLProps<HTMLDivElement>['className'];
}) {
  const teamId = generateNumber(100);
  const flagSrc = getRandomFlagUrl();

  return (
    <div className={`flex h-full gap-1 px-2 py-[0.125rem] ${className}`}>
      <span
        suppressHydrationWarning
        className="flex-[1] text-right font-bold text-slate-900"
      >
        {teamId}
      </span>

      <div className="relative mt-[0.375rem] aspect-video h-3 flex-[1]">
        <Image
          suppressHydrationWarning
          fill
          src={flagSrc}
          alt="Flag"
          sizes="100%"
        />
      </div>

      <div className="flex-[10] flex-col">
        <div className="flex w-full items-center">
          <span
            suppressHydrationWarning
            className="font-semibold text-slate-700"
          >
            {team.name}
          </span>
        </div>

        <div className="flex">
          <span className="text-xs text-slate-500">Placeholder</span>
        </div>
      </div>
    </div>
  );
}
