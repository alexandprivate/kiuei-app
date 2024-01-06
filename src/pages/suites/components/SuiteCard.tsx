import { NumberBadge } from '@/components/numberBadge/NumberBadge';
import { StatusBadge, StatusBadgeProps } from '@/components/statusBadge/StatusBadge';

type SuiteCardProps = StatusBadgeProps & {
  url: string;
  title: string;
};

export const SuiteCard: React.FC<SuiteCardProps> = ({ results, title }) => {
  return (
    <div className="flex gap-4 border-b border-zinc-800 py-4 hover:border-zinc-700">
      <div className="flex-1">{title}</div>
      <div className="flex flex-1">
        <StatusBadge results={results} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 justify-end">
          <span>Tests</span>
          <NumberBadge value={2} />
        </div>
      </div>
    </div>
  );
};
