import { NumberBadge } from '@/components/numberBadge/NumberBadge';
import { StatusBadge, StatusBadgeProps } from '@/components/statusBadge/StatusBadge';
import { PlanetIcon } from '@/components/icon/Icon';

type TestCardProps = StatusBadgeProps & {
  url: string;
  title: string;
  numberOfCommands: number;
};

export const TestCard: React.FC<TestCardProps> = ({ results, title, url, numberOfCommands }) => {
  return (
    <div className="flex gap-4 border-b border-zinc-800 hover:border-zinc-700 py-4 transition-all">
      <div className="flex-1">{title}</div>
      <div className="flex-1">
        <StatusBadge results={results} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span>Commands</span>
          <NumberBadge value={numberOfCommands} />
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-2">
        <PlanetIcon />
        <span>{url.replace('https://', '')}</span>
      </div>
    </div>
  );
};
